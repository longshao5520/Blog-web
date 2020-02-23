<template>
  <v-layout column justify-center align-center>
    <!-- <div>{{ blogs }}</div> -->
    <v-card v-for="item in blogs" :key="item._id" width="900" class="mt-2 mb-2" outlined>
      <v-list-item three-line :shaped="true">
        <v-list-item-avatar tile size="160" height="100" color="grey">
          <img :src="item.cover" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline ml-2">{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle class="ml-2" style="text-indent: 2rem;">{{ item.connect }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <!-- <v-card-text style="text-indent: 2rem;">{{ item.connect }}</v-card-text> -->
      <!-- <v-card-actions class="float-right mr-3"> -->
      <v-chip-group class="float-right mr-3 mb-2">
        <v-chip color="green" text-color="white">{{ item.label }}</v-chip>
        <v-chip color="teal" text-color="white">{{ item.author }}</v-chip>
        <v-chip color="teal" text-color="white">{{ dataFormat(item.createdAt, 'YYYY-MM-DD HH:MM') }}</v-chip>
      </v-chip-group>
      <!-- </v-card-actions> -->
    </v-card>
  </v-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import moment from 'moment'

export default {
  components: {
    // Logo,
    // VuetifyLogo
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('blogs')
    return {
      blogs: data.data
    }
  },
  methods: {
    dataFormat(dataStr, pattern) {
      return moment(dataStr).format(pattern)
    }
  }
  // head() {
  //   title: '首页'
  // }
}
</script>
