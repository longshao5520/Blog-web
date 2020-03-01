<template>
  <div>
    <v-img :src="home.cover" height="55vh" position="bottom center">
      <v-overlay absolute></v-overlay>
    </v-img>
    <Waves :title="title"></Waves>
    <v-container>
      <BlogList
        :blogs="blogs"
        :blog="blog"
        :isPagination="isPagination"
        :page="page"
        :rowsPerPage="rowsPerPage"
      ></BlogList>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment'
import Waves from '~/components/Waves'
import BlogList from '~/components/BlogList'

export default {
  components: {
    Waves,
    BlogList
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get('home')
    const data = await $axios.$get('blogs', {
      params: {
        query: { sort: '-_id' }
      }
    })
    let blog = []
    let isPagination = false
    let page = 1
    let rowsPerPage = 5
    if (Math.ceil(data.total / 5) > 1) {
      isPagination = true
      if (page == 1) {
        blog = []
        for (let i = 0; i < rowsPerPage; i++) {
          blog.push(data.data[i])
        }
      }
    } else {
      for (let i in data.data) {
        blog.push(data.data[i])
      }
    }
    return {
      blogs: data,
      home: res.data[0],
      title: {
        title: res.data[0].title,
        subtitle: res.data[0].subtitle
      },
      blog,
      isPagination,
      page,
      rowsPerPage
    }
  },
  head() {
    return {
      title: ''
    }
  }
}
</script>
