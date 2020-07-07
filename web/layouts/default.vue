<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-07 17:47:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\layouts\default.vue
-->
<template>
  <v-app>
    <v-content style="background-color: #F1F3F4;">
      <nuxt />
    </v-content>
    <BackTop></BackTop>
    <!-- <APlayer></APlayer> -->
  </v-app>
</template>

<script>
// import Navbar from '~/components/Navbar-vf'
// import Bottom from '~/components/Bottom'
import BackTop from '~/components/BackTop'
import APlayer from '~/components/APlayer'

import { mapState, mapMutations } from 'vuex'

export default {
  loading: false,
  components: {
    // Navbar,
    // Bottom,
    BackTop,
    APlayer
  },
}
</script>
<style>
*,
::before,
::after {
  text-decoration: none;
}
/* body{
  width: 80vw;
  margin: 0 auto;
} */
body::-webkit-scrollbar {
  width: 6px;
}
body::-webkit-scrollbar-thumb {
  background: rgb(200, 200, 200);
}
body::-webkit-scrollbar-track {
  background: black;
  
}</style
>>
