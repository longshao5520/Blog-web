<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-07 17:40:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\blogs\_id.vue
-->
<template>
  <div style="margin-top: 45px;">
    <Navbar :items="items" :Lhome="home"></Navbar>
    <v-container>
      <v-layout column justify-center align-center>
        <v-row>
          <v-col xs="1" class="md">
            <v-breadcrumbs :items="toItems">
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
            <client-only>
              <mavon-editor
                v-model="blog.connect"
                :subfield="prop.subfield"
                :default-open="prop.defaultOpen"
                :toolbars-flag="prop.toolbarsFlag"
                :editable="prop.editable"
                :scroll-style="prop.scrollStyle"
                :codeStyle="prop.codeStyle"
              ></mavon-editor>
            </client-only>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar-vf'
import Bottom from '~/components/Bottom'
import moment from 'moment'

export default {
  components: {
    Navbar,
    Bottom
  },
  async asyncData({ params, $axios }) {
    const blog = await $axios.$get(`blogs/${params.id}`)
    const cate = await $axios.$get(`cates/${blog.cate}`)
    const home = await $axios.$get('home')
    const cates = await $axios.$get(`cates`)
    let items = [
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
    let toItems = [
      {
        text: '首页',
        disabled: false,
        href: '/'
      },
      {
        text: cate.title,
        disabled: false,
        href: `/a/code?id=${cate._id}`
      },
      {
        text: blog.title,
        disabled: true
      }
    ]
    return {
      blog,
      items,
      cate,
      toItems,
      home: home.data[0]
    }
  },
  data() {
    return {
      prop: {
        subfield: false,
        defaultOpen: 'preview',
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true,
        codeStyle: 'agate'
      }
    }
  },
  methods: {
    dataFormat(dataStr, pattern) {
      return moment(dataStr).format(pattern)
    }
  },
  head() {
    return {
      title: `${this.blog.title} - `
    }
  }
}
</script>

<style scoped>
.md {
  margin-bottom: 2rem;
}
@media only screen and (min-width: 300px) {
  .md {
    width: 20rem;
  }
}
@media only screen and (min-width: 400px) {
  .md {
    width: 23.5rem;
  }
}
@media only screen and (min-width: 500px) {
  .md {
    width: 30rem;
  }
}
@media only screen and (min-width: 580px) {
  .md {
    width: 35rem;
  }
}
@media only screen and (min-width: 820px) {
  .md {
    width: 44rem;
  }
}
@media only screen and (min-width: 960px) {
  .md {
    width: 50rem;
  }
}
</style>
