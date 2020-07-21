<!--
 * @Author: your name
 * @Date: 2020-07-02 22:35:50
 * @LastEditTime: 2020-07-21 09:29:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\components\Navbar.vue
-->
<template>
  <div>
    <!-- <v-navigation-drawer v-model="drawer" fixed app> -->
    <v-navigation-drawer v-model="drawer" clipped app>
      <!-- <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="Lhome.img" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ Lhome.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ Lhome.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template> -->

      <v-divider></v-divider>

      <v-list shaped>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon dense>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar app dense absolute clipped-left color="#fff"> -->
    <v-app-bar app dense clipped-left flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-img :src="Lhome.img" width="10px"></v-img> -->
      <v-toolbar-title class="mr-12 align-center">
        <span class="subtitle-1 font-weight-bold">{{ Lhome.title }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title v-if="$store.state.auth.user">
        欢迎你，{{ $store.state.auth.user.username }}
      </v-toolbar-title>
      <!-- <v-row align="center" style="max-width: 30vw">
        <v-text-field
          rounded
          dense
          filled
          single-line
          placeholder="Search..."
          append-icon="mdi-magnify"
          color="white"
          hide-details
        ></v-text-field>
      </v-row> -->
      <v-spacer></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        hide-details
        class="ma-2"
      ></v-switch>
      <v-btn v-if="$store.state.auth.user" @click="logOut" text class="ml-3">
        <v-icon dense class="mt-1 mr-1">fas fa-power-off</v-icon>
        安全退出
      </v-btn>
      <v-btn
        v-if="!$store.state.auth.user"
        @click="isShowLoginForm = true"
        icon
      >
        <v-icon dense>fas fa-user-lock</v-icon>
      </v-btn>
    </v-app-bar>

    <v-dialog v-model="isShowLoginForm" max-width="400px">
      <v-form @submit.prevent="login">
        <v-card class="pa-3">
          <v-card-title>
            <span class="headline">用户登录</span>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="loginModel.username"
              label="用户名"
            ></v-text-field>
            <v-text-field
              v-model="loginModel.password"
              label="密码"
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="cyan" outlined text type="submit">登录</v-btn>
            <v-btn color="grey" outlined text @click="isShowLoginForm = false"
              >取消</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    Lhome: {},
  },
  data: () => ({
    isShowLoginForm: false,
    loginModel: {},
    drawer: null,
  }),
  methods: {
    async login() {
      await this.$auth.loginWith('local', {
        data: this.loginModel,
      })
      this.loginModel = {}
      this.isShowLoginForm = false
    },
    logOut() {
      this.$auth.logout()
    },
  },
  created() {
    if (process.browser) {
      this.$vuetify.theme.dark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    // this.$vuetify.theme.dark = false
  },
}
</script>

<style></style>
