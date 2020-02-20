import Vue from 'vue'
import VueRouter from 'vue-router'

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
      { name: 'home', path: '/', redirect: '/blogs/list', },
      { name: 'crud', path: '/:resource/list', component: ResourceCrud, props: true },
      { name: 'blogs - crud', path: '/blogs/ls', component: BlogCrud, props: true },
      { name: 'blog - edit', path: '/blogs/edit/:id', component: BlogEdit, props: true },
      { name: 'blog - create', path: '/blogs/create', component: BlogEdit, props: true },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
