<template>
  <div>
    <v-img :src="cate.cover" height="55vh">
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
import Waves from '~/components/Waves'
import BlogList from '~/components/BlogList'

export default {
  components: {
    Waves,
    BlogList
  },
  async asyncData({ query, $axios }) {
    const data = await $axios.$get(`cates/${query.id}`)
    const res = await $axios.$get('blogs', {
      params: {
        query: { where: { cate: query.id }, sort: '-_id' }
      }
    })
    let blog = []
    let isPagination = false
    let page = 1
    let rowsPerPage = 5
    if (Math.ceil(res.total / 5) > 1) {
      isPagination = true
      if (page == 1) {
        blog = []
        for (let i = 0; i < rowsPerPage; i++) {
          blog.push(res.data[i])
        }
      }
    } else {
      for (let i in res.data) {
        blog.push(res.data[i])
      }
    }
    return {
      blogs: res,
      cate: data,
      title: {
        title: data.title,
        subtitle: `该标签下有 ${res.total} 篇文章`
      },
      blog,
      isPagination,
      page,
      rowsPerPage
    }
  },
  head() {
    return {
      title: `${this.cate.title} - `
    }
  }
}
</script>
<style>
</style>
