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
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#263238" clipped-right dense app>
      <img :src="Lhome.img" width="40" height="40" class="mr-2 ml-2" />
      <div class="mt-1 ttt">
        <span>{{Lhome.title}}</span>
      </div>
      <v-layout column justify-center align-center>
        <v-tabs class="toggle" background-color="#263238" color="#fff" centered right>
          <v-tab optional v-for="(item, i) in items" :key="i" :to="item.to">{{item.title}}</v-tab>
        </v-tabs>
      </v-layout>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-sm-none" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      Lhome: {},
      cates: [],
      items: []
    }
  },
  mounted() {
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

<style>
.ttt {
  height: 48px;
  line-height: 48px;
}
@media only screen and (max-width: 600px) {
  .toggle {
    display: none;
  }
}
</style>