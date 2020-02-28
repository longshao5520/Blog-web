<template>
  <v-layout column justify-center align-center>
    <v-card
      v-for="(item, index) in blog"
      :key="item._id"
      :index="index"
      :to="`/blogs/${item._id}`"
      class="mt-2 mb-2"
      width="1000"
      color="#353b48"
    >
      <v-img class="white--text align-end img-hover" height="200px" :src="item.cover"></v-img>
      <v-card-title class="ml-3">{{ item.title }}</v-card-title>
      <v-card-subtitle class="pb-0">
        <v-list-item three-line class="ma-0 pa-0">
          <v-list-item-subtitle style="text-indent: 2rem;">{{ item.connect }}</v-list-item-subtitle>
        </v-list-item>
      </v-card-subtitle>
      <v-card-text class="text--primary">
        <v-chip-group class="float-right mr-3 mb-2">
          <v-chip color="#666" text-color="white">{{ item.label }}</v-chip>
          <v-chip color="#666" text-color="white">{{ item.author }}</v-chip>
          <v-chip color="#666" text-color="white">{{ dataFormat(item.createdAt, 'YYYY-MM-DD') }}</v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
    <v-pagination
      v-if="isPagination"
      v-model="page"
      :length="Math.ceil(this.blogs.total/5)"
      @input="loadData"
      total-visible="5"
      circle
    ></v-pagination>
  </v-layout>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    blogs: {},
    data() {}
  },
  data() {
    return {
      page: 1,
      rowsPerPage: 5,
      totalItems: this.blogs.total,
      blog: [],
      isPagination: false
    }
  },
  mounted() {
    if (Math.ceil(this.blogs.total / 5) > 1) {
      this.isPagination = true
      if (this.page == 1) {
        this.blog = []
        for (let i = 0; i < this.rowsPerPage; i++) {
          this.blog.push(this.blogs.data[i])
        }
      }
    } else {
      for (let i in this.blogs.data) {
        this.blog.push(this.blogs.data[i])
      }
    }
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
          i < this.totalItems;
          i++
        ) {
          this.blog.push(this.blogs.data[i])
        }
      }
    },
    dataFormat(dataStr, pattern) {
      return moment(dataStr).format(pattern)
    }
  }
}
</script>

<style>
</style>