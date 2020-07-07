<!--
 * @Author: your name
 * @Date: 2020-07-02 22:35:50
 * @LastEditTime: 2020-07-03 15:44:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\components\Navbar-we.vue
--> 
<template>
  <b-navbar toggleable="lg" type="dark" variant="" class="NavBer" sticky>
    <b-navbar-brand>
      <img :src="Lhome.img" width="40" height="40" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" expanded></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="(item, i) in items" :key="i" :to="item.to" router>{{
          item.title
        }}</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto"> </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
.NavBer {
  background-color: reba(0, 0, 0, 0) !important;
}
</style>
