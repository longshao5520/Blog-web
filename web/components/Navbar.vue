<!--
 * @Author: your name
 * @Date: 2020-07-02 22:35:50
 * @LastEditTime: 2020-07-28 16:33:58
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

    <v-app-bar app clipped-left flat dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="font-weight-bold">{{ Lhome.title }}</span>
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer>

      <v-row align="center" style="max-width: 20vw;" class="ml-5">
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
      <v-menu v-if="$store.state.auth.user" open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="rgba(0, 0, 0, 0)"
            dark
            v-bind="attrs"
            v-on="on"
            height="50px"
            text
            class="pa-0"
          >
            <v-list-item-avatar color="grey darken-1" class="pa-0 ma-0">
              <span class="white--text">
                {{ $store.state.auth.user.username[0].toUpperCase() }}
              </span>
            </v-list-item-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              {{ $store.state.auth.user.username }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>修改密码</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>退出登录</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

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
    <v-snackbar v-model="snackbar" :color="color" :timeout="3000" top>
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    Lhome: {},
  },
  data: () => ({
    drawer: null,
    isShowLoginForm: false,
    isLoginForm: Boolean,
    loginModel: {},
    registerModule: {},
    message: '',
    text: '',
    color: 'error',
    snackbar: false,
  }),
  methods: {
    async register() {
      if (
        this.registerModule.username != undefined &&
        this.registerModule.password != undefined &&
        this.registerModule.repassword != undefined
      ) {
        if (
          this.registerModule.username.length < 2 &&
          this.registerModule.username.length > 8
        ) {
          this.text = '用户名最少两个字符，最多八个'
          this.snackbar = true
        } else if (this.registerModule.password.length < 8) {
          this.text = '密码不能少于八个字符'
          this.snackbar = true
        } else if (
          this.registerModule.password != this.registerModule.repassword
        ) {
          this.text = '两次密码不一致'
          this.snackbar = true
        } else {
          console.log(this.registerModule)
          await this.$axios.$post('/auth/register', {
            username: this.registerModule.username,
            password: this.registerModule.password,
          })
          this.text = '注册成功'
          this.color = 'success'
          this.snackbar = true
          this.isLoginForm = true
        }
      } else {
        this.text = '用户名密码不能为空'
        this.snackbar = true
      }
    },
    async login() {
      if (
        this.loginModel.username != undefined &&
        this.loginModel.password != undefined
      ) {
        await this.$auth.loginWith('local', {
          data: this.loginModel,
        })
        this.loginModel = {}
        this.isShowLoginForm = false
      } else {
        this.text = '用户名密码不能为空'
        this.snackbar = true
      }
    },
    logout() {
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
      if (!newValue) {
        this.isLoginForm = true
        this.loginModel = {}
        this.registerUname = ''
        this.registerPwd = ''
        this.registerRepwd = ''
      }
    },
  },
}
</script>

<style></style>
