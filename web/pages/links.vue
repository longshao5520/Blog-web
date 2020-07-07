<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-07 17:39:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\links.vue
-->
<template>
  <div>
    <Navbar :items="items" :Lhome="home"></Navbar>
    <v-container  style="margin-top: 45px;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <h3 class="ma-5">My friends</h3>
        <v-row>
          <v-col v-for="(item, i) in links" :key="i" lg="3" md="4" sm="4">
            <v-card
              target="_blank"
              :href="item.link"
              class="mx-auto"
              max-width="344"
              elevation="5"
              outlined
            >
              <v-list-item two-line>
                <v-list-item-avatar width="60" height="60">
                  <img :src="item.img" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title">{{
                    item.title
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    item.subtitle
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar-vf'
import Bottom from '~/components/Bottom'
export default {
  components: {
    Navbar,
    Bottom
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get('friends')
    const home = await $axios.$get('home')
    const cates = await $axios.$get(`cates`)
    let items = [
      { icon: 'fas fa-home', title: '首页', to: '/' },
      {
        icon: 'fas fa-code',
        title: '编程技术',
        to: `/a/code?id=5e4db4f8ad98430d6087d096`
      },
      {
        icon: 'fas fa-terminal',
        title: '奇巧淫技',
        to: `/a/terminal?id=5e5334f0fece3a2c84d3aa4a`
      },
      {
        icon: 'fas fa-coffee',
        title: '随便写写',
        to: `/a/coffee?id=5e4db1523f05360c96dde820`
      },
      { icon: 'fas fa-comments', title: '友链', to: '/links' }
    ]
    return {
      items,
      links: res.data,
      home: home.data[0]
    }
  },
  head() {
    return {
      title: '友链 - '
    }
  }
}
</script>

<style></style>
