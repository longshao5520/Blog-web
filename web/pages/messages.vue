<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-08 15:03:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\index.vue
--> 
<template>
  <div>
    <!-- <div class="headTitle">
      <div style="">
        <h1>{{title.title}}</h1>
        <span>{{title.subtitle}}</span>
      </div>
    </div> -->
    <v-container>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  components: {
    Navbar,
    Bottom,
    // BlogList
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get('home')
    return {
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
