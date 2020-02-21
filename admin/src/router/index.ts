import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import ResourceCrud from '../views/ResourceCrud.vue'
import BlogEdit from '../views/blogs/BlogEdit.vue'
import BlogCrud from '../views/blogs/BlogCrud.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { name: 'home', path: '/', redirect: '/blogs/ls', },
      { name: 'crud', path: '/:resource/list', component: ResourceCrud, props: true },
      { name: 'blogs - crud', path: '/blogs/ls', component: BlogCrud, props: true },
      { name: 'blog - edit', path: '/blogs/edit/:id', component: BlogEdit, props: true },
      { name: 'blog - create', path: '/blogs/create', component: BlogEdit, props: true },
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
