<template>
  <div>
    <v-navigation-drawer color="#263238" v-model="drawer" disable-resize-watcher clipped right app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon dense>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="$store.state.auth.user">
          <v-list-item-action>
            <v-icon dense>fas fa-user-lock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{$store.state.auth.user.username}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else @click="isShowLoginForm = true">
          <v-list-item-action>
            <v-icon dense>fas fa-user-lock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>登录</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#263238" clipped-right dense app>
      <img :src="Lhome.img" width="40" height="40" class="mr-2 ml-2" />
      <div class="mt-1">
        <span>{{Lhome.title}}</span>
      </div>
      <v-layout column justify-center align-center>
        <v-tabs class="toggle" background-color="#263238" color="#fff" centered right>
          <v-tab v-for="(item, i) in items" :key="i" :to="item.to">{{item.title}}</v-tab>
          <v-tab v-if="$store.state.auth.user">欢迎你，{{$store.state.auth.user.username}}</v-tab>
          <v-btn v-else @click="isShowLoginForm = true" text icon style="margin-right: 0;">
            <v-icon small>fas fa-user-lock</v-icon>
          </v-btn>
        </v-tabs>
      </v-layout>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-sm-none" />
    </v-app-bar>
    <v-dialog persistent v-model="isShowLoginForm" max-width="400px">
      <v-form class="pa-4" @submit.prevent="login">
        <v-card color="rgba(38,50,56,0.7)">
          <v-card-title>
            <span class="headline">用户登录</span>
          </v-card-title>
          <v-card-text>
            <v-text-field v-model="loginModel.username" label="用户名"></v-text-field>
            <v-text-field v-model="loginModel.password" label="密码" type="password"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text type="submit">登录</v-btn>
            <v-btn color="blue darken-1" text @click="isShowLoginForm = false">取消</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    isShowLoginForm: false,
    loginModel: {},
    drawer: false,
    Lhome: {},
    items: [
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
  }),
  mounted() {
    this.home()
  },
  methods: {
    async login() {
      await this.$auth.loginWith('local', {
        data: this.loginModel
      })
      this.isShowLoginForm = false
    },
    async home() {
      const res = await this.$axios.get('home')
      this.Lhome = res.data.data[0]
    }
  }
}
</script>

<style>
@media only screen and (max-width: 600px) {
  .toggle {
    display: none;
  }
}
</style>