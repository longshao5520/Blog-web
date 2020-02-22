<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app>
      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="http://img.yql520.com/blog_public/img/%E5%A4%B4%E5%83%8F.png" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>longshao</v-list-item-title>
            <v-list-item-subtitle>Node.js developer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-subheader>导航</v-subheader> -->
        <!-- <v-divider></v-divider> -->
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-subheader>分类</v-subheader>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer class="d-sm-none" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn mr-5 icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>fas fa-user</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: null,
      items: [
        { icon: 'fas fa-home', title: '首页', to: '/' },
        { icon: 'fas fa-list', title: '博客', to: '/blogs' },
        { icon: 'fas fa-images', title: '相册', to: '/photos' }
      ],
      title: '微薄の青春'
    }
  },
  created() {
    this.$vuetify.theme.dark = false
  }
}
</script>
