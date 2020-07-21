<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-21 11:26:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\components\BlogList.vue
-->
<template>
  <v-layout column justify-center align-center class="mt-1 mb-10">
    <v-card
      v-for="(item, index) in blog"
      :key="item._id"
      :index="index"
      :to="`/blogs/${item._id}`"
      class="mt-2 mb-2"
      width="800"
    >
      <v-icon class="mr-1">fas fa-bookmark</v-icon>
      <span style="font-size: 10px;">{{ item.label }}</span>
      <v-card-title class="ml-4">
        {{ item.title }}
      </v-card-title>
      <v-card-subtitle class="pb-0">
        <v-list-item three-line>
          <v-list-item-subtitle style="text-indent: 2rem;">
            {{ item.connect }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-card-subtitle>
      <v-divider class="ml-5 mr-5"></v-divider>
      <v-card-text class="ml-3 text--primary">
        <v-icon dense>fas fa-user</v-icon>
        <span class="ml-1">{{ item.author }}</span>
        <v-icon dense class="ml-3">fas fa-clock</v-icon>
        <span class="ml-1">{{ item.createdAt | dataFormat }}</span>
      </v-card-text>
    </v-card>
    <v-pagination
      v-if="isPagination"
      v-model="page"
      :length="Math.ceil(this.blogs.total / 5)"
      @input="loadData"
      total-visible="5"
      circle
      color="#666"
      class="mt-2"
    ></v-pagination>
  </v-layout>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    page: Number,
    rowsPerPage: Number,
    isPagination: false,
    blogs: {},
    blog: Array,
    data() {},
  },
  methods: {
    loadData() {
      if (this.page == 1) {
        this.blog = []
        for (let i = 0; i < this.rowsPerPage; i++) {
          this.blog.push(this.blogs.data[i])
        }
      } else if (this.page < Math.ceil(this.blogs.total / 5)) {
        this.blog = []
        for (
          let i = Math.ceil((this.page - 1) * this.rowsPerPage);
          i < Math.ceil(this.page * this.rowsPerPage);
          i++
        ) {
          this.blog.push(this.blogs.data[i])
        }
      } else if (this.page == Math.ceil(this.blogs.total / 5)) {
        this.blog = []
        for (
          let i = Math.ceil((this.page - 1) * this.rowsPerPage);
          i < this.blogs.total;
          i++
        ) {
          this.blog.push(this.blogs.data[i])
        }
      }
      let back = setInterval(() => {
        if (document.documentElement.scrollTop || document.body.scrollTop) {
          document.documentElement.scrollTop -= 50
          document.body.scrollTop -= 50
        } else {
          clearInterval(back)
        }
      }, 20)
    },
  },
}
</script>

<style></style>
