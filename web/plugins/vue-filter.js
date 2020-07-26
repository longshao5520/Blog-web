/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-25 22:23:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\plugins\vue-markdown.js
 */ 
import Vue from 'vue'

import moment from 'moment'

Vue.filter('dataFormat', function (dataStr) {
  return moment(dataStr).format('YYYY-MM-DD')
})
Vue.filter('strSplit', function (str) {
  let strArr = str.slice(0, 1)
  console.log(strArr);
  return strArr
})