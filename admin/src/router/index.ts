import Vue from 'vue'
import VueRouter from 'vue-router'
import ResourceCrud from '../views/ResourceCrud.vue'
import CreateBlog from '../views/blogs/CreateBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/blogs/list',
  },
  {
    path: '/:resource/list', 
    name: 'courses-crud',
    component: ResourceCrud, 
    props: true
  },
  {
    name: 'blog - create', 
    path: '/blogs/create', 
    component: CreateBlog, 
    props: true
  },
  
]

const router = new VueRouter({
  routes
})

export default router
