<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="Lhome.img" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ Lhome.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ Lhome.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

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
    <v-app-bar dense absolute color="#fff">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-layout column justify-center align-center>
        <v-tabs centered right>
          <v-tab v-if="$store.state.auth.user"
            >欢迎你，{{ $store.state.auth.user.username }}</v-tab
          >
          <v-btn
            v-else
            @click="isShowLoginForm = true"
            text
            icon
            style="margin-right: 0;"
          >
            <v-icon small>fas fa-user-lock</v-icon>
          </v-btn>
        </v-tabs>
      </v-layout>
    </v-app-bar>

    <v-dialog v-model="isShowLoginForm" max-width="400px">
      <v-form @submit.prevent="login">
        <v-card class="pa-3" color="rgba(255,255,255,1)">
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
    Lhome:{},
  },
  data: () => ({
    isShowLoginForm: false,
    loginModel: {},
    drawer: true,
  }),
}
</script>

<style>
</style>
