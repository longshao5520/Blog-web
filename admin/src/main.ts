/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-24 21:27:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\admin\src\main.ts
 */

import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import "./plugins/element";
import "./plugins/avue";
import router from "./router";

Vue.config.productionTip = false;

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});
http.interceptors.request.use(
  (config) => {
    if (localStorage.token) {
      config.headers.common["Authorization"] = "Bearer " + localStorage.token;
    }
    return config;
  },
  (err) => {
    router.push("/login");
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    switch (err.response.status) {
      case 401:
        router.push("/login");
        break;

      default:
        break;
    }
    return Promise.reject(err);
  }
);

Vue.prototype.$httpajax = http;
Vue.prototype.$http = http;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
