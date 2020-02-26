<template>
  <v-container>
    <div style="max-width: 1200px; margin: 0 auto;">
      <h3 class="ma-5">My friends</h3>
      <v-row>
        <v-col v-for="(item, i) in links" :key="i" lg="3" md="4" sm="4">
          <v-card
            target="_blank"
            :href="item.link"
            color="#263238"
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
                <v-list-item-title class="title">{{item.title}}</v-list-item-title>
                <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
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
    const res = await $axios.$get('friends')
    return {
      links: res.data
    }
  },
  data() {
    return {
      items: [
        {
          img: 'https://lllxy.oss-cn-shenzhen.aliyuncs.com/coreHome/user.jpg',
          title: 'LLLXY',
          subtitle: '.Net Developer',
          link: 'https://lllxy.net/'
        },
        {
          img: 'https://www.ccczg.site/images/anthony.jpg',
          title: 'CCCZG',
          subtitle: 'Java Developer',
          link: 'https://www.ccczg.site/'
        }
      ]
    }
  },
  head() {
    return {
      title: '友链 - '
    }
  }
}
</script>

<style>
</style>