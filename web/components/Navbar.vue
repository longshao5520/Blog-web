<template>
  <div>
    <v-navigation-drawer color="#263238" v-model="drawer" clipped right app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon dense>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#263238" clipped-right dense fixed app>
      <v-spacer class="d-sm-none" />
      <v-list-item two-line>
        <v-list-item-avatar width="40" height="40">
          <img :src="Lhome.img" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">{{Lhome.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
  </div>
</template>

<script>
// rgba(255, 0, 0, 0.5)
export default {
  data() {
    return {
      drawer: null,
      Lhome: {},
      cates: [],
      items: []
    }
  },
  mounted() {
    this.drawer = null
    setTimeout(() => {
      this.drawer = false
    }, 1000)
    this.drawer = null
    this.home()
  },
  methods: {
    async home() {
      const res = await this.$axios.get('home')
      this.Lhome = res.data.data[0]
      const respon = await this.$axios.get('cates')
      this.cates = respon.data.data
      this.items = [
        { icon: 'fas fa-home', title: '首页', to: '/' },
        {
          icon: 'fas fa-code',
          title: this.cates[1].title,
          to: `/a/code?id=${this.cates[1]._id}`
        },
        {
          icon: 'fas fa-terminal',
          title: this.cates[2].title,
          to: `/a/terminal?id=${this.cates[2]._id}`
        },
        {
          icon: 'fas fa-coffee',
          title: this.cates[0].title,
          to: `/a/coffee?id=${this.cates[0]._id}`
        },
        { icon: 'fas fa-comments', title: '友链', to: '/links' }
      ]
    }
  }
}
</script>