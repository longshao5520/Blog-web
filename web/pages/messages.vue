<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-26 22:16:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\index.vue
-->
<template>
  <v-container class="mt-1 mb-8">
    <v-layout column align-center>
      <v-card outlined color="rgba(255, 0, 0, 0)" class="mt-2 mb-2" width="800">
        <v-form @submit.prevent="addMessage" class="textarea">
          <v-textarea
            outlined
            no-resize
            counter="30"
            height="150"
            label="输入留言内容"
            class="textarea"
            v-model="connect"
            color="#666"
          >
          </v-textarea>
          <v-btn type="submit" style="float: right;" class="mr-5">提交</v-btn>
        </v-form>
      </v-card>
      <v-card
        v-for="(item, index) in messages"
        :key="item._id"
        :index="index"
        class="mt-2 mb-2 pa-2"
        width="800"
      >
        <v-card-text v-html="item.connect" class="ml-3"></v-card-text>
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
            <!-- <v-icon class="mr-1">mdi-heart</v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">mdi-share-variant</v-icon>
            <span class="subheading">45</span> -->
            <v-icon dense class="ml-3">fas fa-clock</v-icon>
            <span class="ml-1">{{ item.createdAt | dataFormat }}</span>
          </v-row>
        </v-list-item>
      </v-card>
    </v-layout>
    <v-snackbar v-model="snackbar" :color="color" :timeout="3000" top>
      {{ text }}
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, store }) {
    const messages = await $axios.$get('messages')
    let isLogin = store.$auth.user ? true : false
    return {
      isLogin,
      messages,
    }
  },
  data: () => ({
    color: 'error',
    snackbar: false,
    text: '',
    messages: {},
    connect: '',
  }),
  methods: {
    async fetch() {
      this.messages = await this.$axios.$get('messages')
    },
    async addMessage() {
      if (this.isLogin) {
        if (this.isNull(this.connect)) {
          this.text = '请输入留言内容！'
          this.snackbar = true
        } else if (!this.isRule(this.connect)) {
          this.text = '内容仅限中文和数字！'
          this.snackbar = true
        } else if (this.connect.length > 100) {
          this.text = '字数超出限制！'
          this.snackbar = true
        } else {
          this.connect = this.connect.replace(/\n/g, '<br/>')
          this.connect = this.connect.replace(/ /g, '&nbsp;')
          await this.$axios.$post('messages', {
            connect: this.connect,
          })
          this.color = 'success'
          this.text = '留言成功'
          this.snackbar = true
          this.connect = ''
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
      title: '留言板 - ',
    }
  },
}
</script>

<style></style>
