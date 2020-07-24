import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import ResourceCrud from '../views/ResourceCrud.vue'
import BlogEdit from '../views/BlogEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { name: 'home', path: '/', redirect: '/login', },
      { name: 'crud', path: '/:resource/list', component: ResourceCrud, props: true },
      { name: 'blogs - edit', path: '/blogs/edit', component: BlogEdit, props: true },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { title: '后台登录 - 微薄的青春ゝ' },
  },
]

const router = new VueRouter({
  routes
})

export default router
