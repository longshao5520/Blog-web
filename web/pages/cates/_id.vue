<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-22 19:54:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\a\_cate.vue
-->
<template>
  <v-container>
    <Title :title="title"></Title>
    <BlogList :blogs="blogs"></BlogList>
  </v-container>
</template>

<script>
import Title from '~/components/Title'
import BlogList from '~/components/BlogList'

export default {
  components: {
    Title,
    BlogList,
  },
  async asyncData({ params, $axios }) {
    const cate = await $axios.$get(`cates/${params.id}`)
    const blogs = await $axios.$get('blogs', {
      params: {
        query: { where: { cate: params.id }, sort: '-_id' },
      },
    })
    return {
      title: {
        title: cate.title,
        subtitle: `该标签下有 ${blogs.total} 篇文章`,
      },
      cate,
      blogs,
    }
  },
  head() {
    return {
      title: `${this.cate.title} - `,
    }
  },
}
</script>
<style></style>
