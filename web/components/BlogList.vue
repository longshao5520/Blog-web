<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-07 17:56:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\components\BlogList.vue
-->
<template>
  <v-layout column justify-center align-center class="bloglist">
    <v-card
      v-for="(item, index) in blog"
      :key="item._id"
      :index="index"
      :to="`/blogs/${item._id}`"
      class="mt-2 mb-2"
      width="800"
    >
      <v-card-title class="ml-3">{{ item.title }}</v-card-title>
      <v-card-subtitle class="pb-0">
        <v-list-item three-line class="ma-0 pa-0">
          <v-list-item-subtitle style="text-indent: 2rem;">{{
            item.connect
          }}</v-list-item-subtitle>
        </v-list-item>
      </v-card-subtitle>
      <v-divider class="ml-5 mr-5"></v-divider>
      <v-card-text class=" ml-3 text--primary">
        <v-icon dense>fas fa-user</v-icon>
        <span class="ml-1">{{ item.author }}</span>
        <v-icon dense class="ml-3">fas fa-clock</v-icon>
        <span class="ml-1">{{ dataFormat(item.createdAt, 'YYYY-MM-DD') }}</span>
        <!-- <v-chip color="#666" text-color="white">{{ item.label }}</v-chip> -->
        <!-- <v-chip-group class="mr-3 mb-2">
          <v-chip color="#666" text-color="white">
          </v-chip>
            {{ item.author }}
          <v-chip color="#666" text-color="white">
          </v-chip>
            {{ dataFormat(item.createdAt, 'YYYY-MM-DD') }}
        </v-chip-group> -->
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
    data() {}
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
    dataFormat(dataStr, pattern) {
      return moment(dataStr).format(pattern)
    }
  }
}
</script>

<style>
.bloglist{
  margin-top: 45px;
  margin-bottom: 2rem;
}
</style>