<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-08 16:44:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\index.vue
--> 
<template>
  <div>
    <Title :title="title"></Title>
    <v-container>
      <BlogList
        :blogs="blogs"
        :blog="blog"
        :isPagination="isPagination"
        :page="page"
        :rowsPerPage="rowsPerPage"
      ></BlogList>
    </v-container>
  </div>
</template>

<script>
import Title from '~/components/Title'
import BlogList from '~/components/BlogList'
import moment from 'moment'

export default {
  components: {
    Title,
    BlogList,
  },
  async asyncData({ $axios }) {
    const home = await $axios.$get('home')
    const blogs = await $axios.$get('blogs', {
      params: {
        query: { sort: '-_id' }
      }
    })
    let blog = []
    let isPagination = false
    let page = 1
    let rowsPerPage = 5
    if (Math.ceil(blogs.total / 5) > 1) {
      isPagination = true
      if (page == 1) {
        blog = []
        for (let i = 0; i < rowsPerPage; i++) {
          blog.push(blogs.data[i])
        }
      }
    } else {
      for (let i in blogs.data) {
        blog.push(blogs.data[i])
      }
    }
    return {
      title: {
        title: home.data[0].title,
        subtitle: home.data[0].subtitle
      },
      blogs,
      blog,
      isPagination,
      page,
      rowsPerPage,
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
