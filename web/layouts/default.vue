<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-02 23:08:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\layouts\default.vue
--> 
<template>
  <v-app dark>
    
    <v-content style="background-color: #263238;">
    <Navbar></Navbar>
      <nuxt />
      <Bottom></Bottom>
    </v-content>
    <BackTop></BackTop>
    <APlayer></APlayer>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar-we'
import Bottom from '~/components/Bottom'
import BackTop from '~/components/BackTop'
import APlayer from '~/components/APlayer'

export default {
  loading: false,
  components: {
    Navbar,
    Bottom,
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
body::-webkit-scrollbar {
  width: 6px;
}
body::-webkit-scrollbar-thumb {
  background: rgb(200, 200, 200);
}
body::-webkit-scrollbar-track{
  background: black;
}
/* @media only screen and (max-width: 600px) {
  body{
    font-size: 12px ;
  }
} */
</style>>
