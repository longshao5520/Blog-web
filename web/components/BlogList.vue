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