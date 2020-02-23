<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app>
      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="http://img.yql520.com/blog_public/img/%E5%A4%B4%E5%83%8F.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>龙少5520</v-list-item-title>
            <v-list-item-subtitle>Node.js developer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-subheader>分类</v-subheader>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" :dense="true" :hide-on-scroll="true" fixed app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer class="d-sm-none" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-avatar size="36px" color="red">
        <span class="white--text headline">CJ</span>
      </v-avatar>-->
      <v-btn mr-5 icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>fas fa-user</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content style="background-color: #efefef;">
      <v-img
        src="http://blogweb.oss-cn-hangzhou.aliyuncs.com/4dacaa3545133d3d6edd7204a6227897.jpg"
        width="2500"
        max-height="400"
        position="top center"
      ></v-img>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <div class="bottom-div font-weight-bold">
      <span>Design and Development of</span>
      <a href>龙少5520</a>
      <span>Supported by</span>
      <a href>Nodejs</a>
      <span>and</span>
      <a href>Vuejs</a>
      <br />© 2020 - YQL520
      <a href>豫ICP备19009859号</a>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
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
<style>
.bottom-div {
  /* height: 12rem; */
  background-color: #ffffff;
  text-align: center;
  line-height: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #6c757d !important;
}
a:before {
  text-decoration: none;
  color: #007bff;
}
a:after {
  text-decoration: none;
  color: #007bff;
}
</style>>
