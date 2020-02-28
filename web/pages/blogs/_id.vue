<template>
  <div>
    <v-img :src="blog.cover" height="350" max-height="400">
      <v-overlay absolute></v-overlay>
    </v-img>
    <v-container>
      <v-layout column justify-center align-center>
        <v-row>
          <v-col xs="1">
            <client-only>
              <mavon-editor
                v-model="blog.connect"
                :subfield="prop.subfield"
                :default-open="prop.defaultOpen"
                :toolbars-flag="prop.toolbarsFlag"
                :editable="prop.editable"
                :scroll-style="prop.scrollStyle"
                :codeStyle="prop.codeStyle"
                class="md"
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
    return {
      blog
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
        codeStyle: 'atelier-lakeside-dark'
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

<style>
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
