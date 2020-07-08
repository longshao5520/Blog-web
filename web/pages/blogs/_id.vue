<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-08 15:01:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\pages\blogs\_id.vue
-->
<template>
  <div style="margin-top: 45px;">
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
  </div>
</template>

<script>
import moment from 'moment'

export default {
  async asyncData({ params, $axios }) {
    const blog = await $axios.$get(`blogs/${params.id}`)
    const cate = await $axios.$get(`cates/${blog.cate}`)
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
      cate,
      toItems,
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
