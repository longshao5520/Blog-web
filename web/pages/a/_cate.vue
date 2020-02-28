<template>
  <div>
    <v-img :src="cate.cover" height="55vh">
      <v-overlay absolute></v-overlay>
    </v-img>
    <Waves :title="title"></Waves>
    <v-container>
      <BlogList :blogs="blogs"></BlogList>
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
    return {
      blogs: res,
      cate: data,
      title: {
        title: data.title,
        subtitle: `该标签下有 ${res.total} 篇文章`
      }
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
