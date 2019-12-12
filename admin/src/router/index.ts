import Vue from 'vue'
import VueRouter from 'vue-router'
import ResourceCrud from '../views/ResourceCrud.vue'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import CreateBlog from '../views/blogs/CreateBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main, 
    children: [
      {name: 'home', path: '/', redirect: '/blogs/list',}, 
      {name: 'courses - crud', path: '/:resource/list', component: ResourceCrud, props: true},
      {name: 'blog - create', path: '/blogs/create', component: CreateBlog, props: true},
    ]
  },
  {
    name: 'login', 
    path: '/login', 
    component: Login, 
    props: true
  },
  
]

const router = new VueRouter({
  routes
})

export default router
