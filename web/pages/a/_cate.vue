<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-07 17:40:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\a\_cate.vue
--> 
<template>
  <div>
    <Navbar :items="items" :Lhome="home"></Navbar>
    <div class="headTitle">
      <div>
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
import BlogList from '~/components/BlogList'

export default {
  components: {
    Navbar,
    BlogList,
    Bottom
  },
  async asyncData({ query, $axios }) {
    const home = await $axios.$get('home')
    const data = await $axios.$get(`cates/${query.id}`)
    const res = await $axios.$get('blogs', {
      params: {
        query: { where: { cate: query.id }, sort: '-_id' }
      }
    })
    let blog = []
    let isPagination = false
    let page = 1
    let rowsPerPage = 5
    if (Math.ceil(res.total / 5) > 1) {
      isPagination = true
      if (page == 1) {
        blog = []
        for (let i = 0; i < rowsPerPage; i++) {
          blog.push(res.data[i])
        }
      }
    } else {
      for (let i in res.data) {
        blog.push(res.data[i])
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
      blogs: res,
      cate: data,
      title: {
        title: data.title,
        subtitle: `该标签下有 ${res.total} 篇文章`
      },
      blog,
      isPagination,
      page,
      rowsPerPage,
      home: home.data[0]
    }
  },
  head() {
    return {
      title: `${this.cate.title} - `
    }
  }
}
</script>
<style>
</style>
