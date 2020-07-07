<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-07 17:37:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\index.vue
--> 
<template>
  <div>
    <Navbar :items="items" :Lhome="home"></Navbar>
    <div class="headTitle">
      <div style="">
        <h1>{{title.title}}</h1>
        <span>{{title.subtitle}}</span>
      </div>
    </div>
    <v-container>
      <BlogList
        :blogs="blogs"
        :blog="blog"
        :isPagination="isPagination"
        :page="page"
        :rowsPerPage="rowsPerPage"
      ></BlogList>
    </v-container>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar-vf'
import Bottom from '~/components/Bottom'
import moment from 'moment'
import BlogList from '~/components/BlogList'

export default {
  components: {
    Navbar,
    Bottom,
    BlogList
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get('home')
    const data = await $axios.$get('blogs', {
      params: {
        query: { sort: '-_id' }
      }
    })
    let blog = []
    let isPagination = false
    let page = 1
    let rowsPerPage = 5
    if (Math.ceil(data.total / 5) > 1) {
      isPagination = true
      if (page == 1) {
        blog = []
        for (let i = 0; i < rowsPerPage; i++) {
          blog.push(data.data[i])
        }
      }
    } else {
      for (let i in data.data) {
        blog.push(data.data[i])
      }
    }
    const cates = await $axios.$get(`cates`)
    let items = [
      { icon: 'fas fa-home', title: '首页', to: '/' },
      {
        icon: 'fas fa-code',
        title: '编程技术',
        to: `/a/code?id=5e4db4f8ad98430d6087d096`
      },
      {
        icon: 'fas fa-terminal',
        title: '奇巧淫技',
        to: `/a/terminal?id=5e5334f0fece3a2c84d3aa4a`
      },
      {
        icon: 'fas fa-coffee',
        title: '随便写写',
        to: `/a/coffee?id=5e4db1523f05360c96dde820`
      },
      { icon: 'fas fa-comments', title: '友链', to: '/links' }
    ]
    return {
      items,
      blogs: data,
      home: res.data[0],
      title: {
        title: res.data[0].title,
        subtitle: res.data[0].subtitle
      },
      blog,
      isPagination,
      page,
      rowsPerPage,
      drawer: true,
    }
  },
  head() {
    return {
      title: ''
    }
  }
}
</script>

<style>
</style>
