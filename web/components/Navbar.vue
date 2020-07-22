<!--
 * @Author: your name
 * @Date: 2020-07-02 22:35:50
 * @LastEditTime: 2020-07-22 21:22:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\components\Navbar.vue
-->
<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped app>
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

    <v-app-bar app dense clipped-left flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="subtitle-1 font-weight-bold">{{ Lhome.title }}</span>
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->

      <!-- <v-row align="center" style="max-width: 20vw;" class="ml-5">
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
      <v-btn
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        icon
        class="mr-1"
      >
        <v-icon dense v-if="$vuetify.theme.dark">fas fa-moon</v-icon>
        <v-icon dense v-else>fas fa-sun</v-icon>
      </v-btn>
      <v-toolbar-title v-if="$store.state.auth.user">
        <span class="subtitle-1"
          >欢迎你，{{ $store.state.auth.user.username }}</span
        >
        <v-btn v-if="$store.state.auth.user" @click="logOut" text class="ml-3">
          <v-icon dense class="mt-1 mr-1">fas fa-power-off</v-icon>
          安全退出
        </v-btn>
      </v-toolbar-title>
      <v-btn
        v-if="!$store.state.auth.user"
        @click="isShowLoginForm = true"
        icon
        class="mr-1"
      >
        <v-icon dense>fas fa-user-lock</v-icon>
      </v-btn>
    </v-app-bar>
    <v-dialog v-model="isShowLoginForm" max-width="400px">
      <v-form v-if="isLoginForm" @submit.prevent="login">
        <v-card class="pa-3">
          <v-card-title>
            <span class="headline">登&emsp;录</span>
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
            <v-btn color="grey" outlined text @click="isLoginForm = false"
              >立即注册</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn color="cyan" outlined text type="submit">登录</v-btn>
            <v-btn color="grey" outlined text @click="isShowLoginForm = false"
              >取消</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
      <v-form v-else @submit.prevent="register">
        <v-card class="pa-3">
          <v-card-title>
            <span class="headline">注&emsp;册</span>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="registerModule.username"
              label="用户名"
            ></v-text-field>
            <v-text-field
              v-model="registerModule.password"
              label="密码"
              type="password"
            ></v-text-field>
            <v-text-field
              v-model="registerModule.repassword"
              label="确认密码"
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="grey" outlined text @click="isLoginForm = true"
              >登录</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn color="cyan" outlined text type="submit">注册</v-btn>
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
    isLoginForm: Boolean,
    loginModel: {},
    registerModule: {},
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
    async register() {
      // await this.$axios.$post('/auth/register', )
      console.log(this.registerModule)
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
  },
  watch: {
    isShowLoginForm(newValue) {
      this.$emit('newIsShowLoginForm', newValue)
      if (!newValue) {
        this.isLoginForm = true
        this.loginModel = {}
      }
    },
    registerModule() {
      if (this.registerModule.password != this.registerModule.repassword) {
        console.log('两次密码不一致')
      }
    },
  },
}
</script>

<style></style>
