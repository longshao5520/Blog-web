<template>
  <div>
    <v-img :src="home.cover" height="55vh" position="bottom center">
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
  async asyncData({ $axios }) {
    const res = await $axios.$get('home')
    const data = await $axios.$get('blogs', {
      params: {
        query: { sort: '-_id' }
      }
    })
    return {
      blogs: data,
      home: res.data[0],
      title: {
        title: res.data[0].title,
        subtitle: res.data[0].subtitle
      }
    }
  },
  head() {
    return {
      title: ''
    }
  }
}
</script>

<style>
</style>
