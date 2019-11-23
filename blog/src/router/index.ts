import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '../views/Blog.vue'
import Photo from '../views/Photo.vue'
import Message from '../views/Message.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Registered from '../views/Registered.vue'
import blogDetails from '../views/blogDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/blog',
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: {
      title: '首页 - 微薄的青春ゝ'
    }
  },
  {
    path: '/photo',
    name: 'photo',
    component: Photo,
    meta: {
      title: '相册 - 微薄的青春ゝ'
    }
  },
  {
    path: '/message',
    name: 'message',
    component: Message,
    meta: {
      title: '留言 - 微薄的青春ゝ'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '关于我 - 微薄的青春ゝ'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录 - 微薄的青春ゝ'
    }
  },
  {
    path: '/registered',
    name: 'registered',
    component: Registered,
    meta: {
      title: '注册 - 微薄的青春ゝ'
    }
  },
  {
    path: '/blog/details/:id',
    name: 'details',
    component: blogDetails,
    meta: {
      title: '文章详情 - 微薄的青春ゝ'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
