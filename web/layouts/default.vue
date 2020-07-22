<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-22 20:16:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\layouts\default.vue
-->
<template>
  <v-app>
    <Navbar :items="items" :Lhome="Lhome"></Navbar>
    <v-main>
      <nuxt />
      <Bottom></Bottom>
    </v-main>
    <BackTop></BackTop>
    <APlayer></APlayer>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Bottom from '~/components/Bottom'
import BackTop from '~/components/BackTop'
import APlayer from '~/components/APlayer'

export default {
  loading: false,
  components: {
    Navbar,
    Bottom,
    BackTop,
    APlayer,
  },
  data: () => ({
    items: [
      { icon: 'fas fa-home', title: '首页', to: '/' },
      {
        icon: 'fas fa-code',
        title: '编程技术',
        to: `/cates/5e4db4f8ad98430d6087d096`,
      },
      {
        icon: 'fas fa-terminal',
        title: '奇巧淫技',
        to: `/cates/5e5334f0fece3a2c84d3aa4a`,
      },
      {
        icon: 'fas fa-coffee',
        title: '随便写写',
        to: `/cates/5e4db1523f05360c96dde820`,
      },
      { icon: 'fas fa-comments', title: '留言板', to: '/messages' },
      { icon: 'fas fa-people-carry', title: '我的朋友', to: '/links' },
    ],
    Lhome: {},
  }),
  async mounted() {
    const home = await this.$axios.$get('home')
    this.Lhome = home.data[0]
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
body::-webkit-scrollbar-track {
  background: black;
}
</style>
