<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-21 11:27:41
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
            counter="100"
            height="200"
            name="message"
            label="输入留言内容"
            class="textarea"
            v-model="message"
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
        class="mt-2 mb-2"
        width="800"
      >
        <v-card-title class="ml-3">
          {{ item.author.username }}说：
        </v-card-title>
        <v-card-subtitle class="ml-6 pb-0">
          <v-list-item three-line>
            <v-list-item-subtitle v-html="item.connect"> </v-list-item-subtitle>
          </v-list-item>
        </v-card-subtitle>
        <v-divider class="ml-5 mr-5"></v-divider>
        <v-card-text class="ml-3 text--primary">
          <v-icon dense class="ml-3">fas fa-clock</v-icon>
          <span class="ml-1">{{ item.createdAt | dataFormat }}</span>
        </v-card-text>
      </v-card>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, store }) {
    const messages = await $axios.$get('/messages/list')
    var uid = ''
    var username = ''
    if (store.$auth.user) {
      var user = store.$auth.user
      var username = store.$auth.user.username
      var uid = store.$auth.user._id
    }
    return {
      uid,
      username,
      messages,
    }
  },
  data: () => ({
    message: '',
    color: 'error',
    mode: '',
    snackbar: false,
    text: "Hello, I'm a snackbar",
    timeout: 6000,
    x: 'right',
    y: 'top',
    messages: {},
  }),
  methods: {
    async fetch() {
      this.messages = await this.$axios.$get('/messages/list')
    },
    addMessage() {
      if (this.username) {
        if (this.isNull(this.message)) {
          this.text = '请输入留言内容！'
          this.snackbar = true
        } else if (!this.isRule(this.message)) {
          this.text = '内容仅限中文和数字！'
          this.snackbar = true
        } else if (this.message.length > 100) {
          this.text = '字数超出限制！'
          this.snackbar = true
        } else {
          this.$axios.$post('messages', {
            connect: this.message,
            author: this.uid,
          })
          this.color = 'success'
          this.text = '留言成功'
          this.snackbar = true
          this.message = ''
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
      this.message = this.message.replace(/\n/g, '<br/>')
      this.message = this.message.replace(/ /g, '&nbsp;')
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

<style>
.textarea {
  width: 100%;
}
</style>
