<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-08 16:44:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\a\_cate.vue
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

export default {
  components: {
    Title,
    BlogList,
  },
  async asyncData({ query, $axios }) {
    const cate = await $axios.$get(`cates/${query.id}`)
    const blogs = await $axios.$get('blogs', {
      params: {
        query: { where: { cate: query.id }, sort: '-_id' }
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
        title: cate.title,
        subtitle: `该标签下有 ${blogs.total} 篇文章`
      },
      cate,
      blogs,
      blog,
      isPagination,
      page,
      rowsPerPage
    }
  },
  head() {
    return {
      title: `${this.cate.title} - `
    }
  }
}
</script>
<style></style>
