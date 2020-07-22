<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-22 19:53:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\index.vue
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
  async asyncData({ $axios }) {
    const home = await $axios.$get('home')
    const blogs = await $axios.$get('blogs', {
      params: {
        query: { sort: '-_id' },
      },
    })

    return {
      title: {
        title: home.data[0].title,
        subtitle: home.data[0].subtitle,
      },
      blogs,
    }
  },
  head() {
    return {
      title: '',
    }
  },
}
</script>

<style></style>
