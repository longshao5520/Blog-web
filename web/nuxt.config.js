/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-31 20:49:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\nuxt.config.js
 */ 
require('dotenv').config()
export default {
  mode: 'universal',
  server:{
    port: 3300,
    host: 'localhost',
  },
  head: {
    titleTemplate: `%s${process.env.APP_NAME}`,
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
      { src: 'https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js' },
      { scr: 'https://hm.baidu.com/hm.js?1a20acd14ce73e920b167299d8d31bbc' }
    ]
  },
  loading: false,
  css: [
    "mavon-editor/dist/css/index.css",
    "~/static/index.scss",
  ],
  plugins: [
    { src: '~/plugins/vue-filter.js', srr: false },
    { src: '~/plugins/vue-com.js', srr: false },
    { src: '~/plugins/baidu.js'}
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
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
      }
    }
  },
  build: {
    extend(config, ctx) {
    }
  }
}
