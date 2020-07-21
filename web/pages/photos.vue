<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-20 10:11:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\photos.vue
-->
<template>
  <!-- <client-only>
    {{photos}}
  </client-only>-->
  <v-container class="lighten-5">
    <v-row>
      <v-col v-for="item in photos" :key="item._id" md="2" sm="4">
        <!-- <div class="box"> -->
        <v-card color="#263238" elevation="0" max-width="300" class="mt-2">
          <v-img :src="item" contain></v-img>
        </v-card>
        <!-- </div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    // Waterfall
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get('photos')
    let photos = []
    for (let i in res.data) {
      photos.push(res.data[i].file)
    }
    return {
      photos,
    }
  },
  data() {},
  head() {
    return {
      title: '相册 - ',
    }
  },
}
</script>

<style>
/* @media only screen and (min-width: 960px) {
  .box {
    margin: 10px auto;
    width: 900px;
    column-count: 3;
    column-gap: 10px;
  }
}

@media only screen and (min-width: 400px) {
  .box {
    margin: 10px auto;
    width: 80%;
  }
} */
</style>
