/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-12 23:23:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\nuxt.config.js
 */ 
import colors from 'vuetify/es5/util/colors'
require('dotenv').config()
export default {
  mode: 'universal',
  head: {
    // titleTemplate: '%s龙少5520',
    titleTemplate: `%s${process.env.APP_NAME}`,
    // title: process.env.npm_package_name || '',
    title: `%s${process.env.APP_NAME}` || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', href: 'http://img.yql520.com/blog_public/img/%E5%A4%B4%E5%83%8F.png' },
      { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/font-awesome/5.11.2/css/all.css' },
      { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.css', srr: false },
    ],
    script: [
      { src: 'https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.js', srr: false },
      { src: 'https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js', srr: false },
      { scr: 'https://hm.baidu.com/hm.js?1a20acd14ce73e920b167299d8d31bbc'}
    ]
  },
  loading: { color: '#263238' },
  css: [
    "mavon-editor/dist/css/index.css",
    '~/static/md.scss'
  ],
  plugins: [
    { src: '~/plugins/vue-markdown.js', srr: false },
    { src: '~/plugins/baidu.js'}
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // '@nuxtjs/pwa',
    ['@nuxtjs/dotenv', { only: ['some_key'] }],
  ],
  axios: {},
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login' },
          logout: { url: '/auth/logout', method: 'get' },
          user: { url: '/auth/user', propertyName: false }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
    extend(config, ctx) {
    }
  }
}
