<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-14 17:34:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\links.vue
-->
<template>
  <v-container>
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
                <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const links = await $axios.$get('friends')
    return {
      links: links.data,
    }
  },
  head() {
    return {
      title: '友链 - ',
    }
  },
}
</script>

<style></style>
