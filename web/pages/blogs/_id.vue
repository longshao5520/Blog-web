<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-22 21:20:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\blogs\_id.vue
-->
<template>
  <v-layout column align-center justify-center class="mb-15">
    <v-breadcrumbs :items="toItems">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-card v-html="connect" class="pa-5 md" width="800"> </v-card>
  </v-layout>
</template>

<script>
import marked from 'marked'

export default {
  async asyncData({ params, $axios }) {
    const blog = await $axios.$get(`blogs/${params.id}`)
    const cate = await $axios.$get(`cates/${blog.cate}`)
    let toItems = [
      {
        text: '首页',
        disabled: true,
        href: '/',
      },
      {
        text: cate.title,
        disabled: true,
        href: `/cates/${cate._id}`,
      },
      {
        text: blog.title,
        disabled: true,
      },
    ]
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
    })
    let connect = marked(blog.connect)
    return {
      blog,
      connect,
      cate,
      toItems,
    }
  },
  head() {
    return {
      title: `${this.blog.title} - `,
    }
  },
}
</script>

<style scoped>
pre {
  overflow: auto !important;
}
</style>
