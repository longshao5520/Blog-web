<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-08-01 09:48:20
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
    <v-card v-html="connect" class="pa-5 mb-5 md" width="800"> </v-card>
    <v-card outlined color="rgba(255, 0, 0, 0)" class="mt-5 mb-2" width="800">
      <v-form @submit.prevent="addComment" class="textarea">
        <v-textarea
          outlined
          no-resize
          counter="30"
          height="150"
          label="输入评论内容"
          class="textarea"
          v-model="comment"
          color="#666"
        >
        </v-textarea>
        <v-btn type="submit" style="float: right;" class="mr-5">提交</v-btn>
      </v-form>
    </v-card>
    <v-card
      v-for="(item, index) in comments"
      :key="item._id"
      :index="index"
      class="mt-2 mb-2 pa-2"
      width="800"
    >
      <v-card-text
        v-html="item.connect"
        class="ml-3 h1"
        style="font-size: 20px;"
      ></v-card-text>
      <v-divider></v-divider>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-1">
          <span class="white--text">
            {{ item.author.username[0].toUpperCase() }}
          </span>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.author.username }}
          </v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end" class="pr-5">
          <v-icon dense class="ml-3">fas fa-clock</v-icon>
          <span class="ml-1">{{ item.createdAt | dataFormat }}</span>
        </v-row>
      </v-list-item>
    </v-card>
    <v-snackbar v-model="snackbar" :color="color" :timeout="3000" top>
      {{ text }}
    </v-snackbar>
  </v-layout>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'

export default {
  async asyncData({ params, $axios, store }) {
    const blog = await $axios.$get(`blogs/${params.id}`)
    const cate = await $axios.$get(`cates/${blog.cate}`)
    const comments = await $axios.$get(`comments?id=${params.id}&limit=5`)
    let isLogin = store.$auth.user ? true : false
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
      highlight: function (code) {
        return hljs.highlightAuto(code).value
      },
      gfm: true,
      tables: true,
      breaks: true,
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
      comments,
      toItems,
      isLogin,
    }
  },
  data: () => ({
    comment: '',
    comments: {},
    text: '',
    color: 'error',
    snackbar: false,
  }),
  methods: {
    async fetch() {
      this.comments = await this.$axios.$get(
        `comments?id=${this.blog._id}&limit=5`
      )
    },
    async addComment() {
      if (this.isLogin) {
        if (this.isNull(this.comment)) {
          this.text = '请输入留言内容！'
          this.snackbar = true
        } else if (!this.isRule(this.comment)) {
          this.text = '内容仅限中文和数字！'
          this.snackbar = true
        } else if (this.comment.length > 30) {
          this.text = '字数超出限制！'
          this.snackbar = true
        } else {
          this.comment = this.comment.replace(/\n/g, '<br/>')
          this.comment = this.comment.replace(/ /g, '&nbsp;')
          await this.$axios.$post('comments', {
            connect: this.comment,
            blogId: this.blog._id,
          })
          this.color = 'success'
          this.text = '评论成功'
          this.snackbar = true
          this.comment = ''
          this.fetch()
        }
      } else {
        this.text = '此操作需要登陆，请先登录！'
        this.snackbar = true
      }
    },
    isNull(str) {
      if (str == '' || str == null || str == '\n') return true
      var regu = '^[ ]+$'
      var re = new RegExp(regu)
      return re.test(str)
    },
    isRule(str) {
      let regu = /[\u4E00-\u9FA5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300ba-zA-Z0-9]/g
      return regu.test(str)
    },
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
