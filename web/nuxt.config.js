import colors from 'vuetify/es5/util/colors'
require('dotenv').config()
export default {
  mode: 'universal',
  head: {
    titleTemplate: '%s微薄の青春',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', href: 'http://img.yql520.com/blog_public/img/%E5%A4%B4%E5%83%8F.png' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.11.2/css/all.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    "mavon-editor/dist/css/index.css",
    '~/assets/variables.scss',
    '~/static/md.scss'
  ],
  script: ['~/static/ap.js'],
  plugins: [
    { src: '~/plugins/vue-markdown.js', srr: false }
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy'
  ],
  axios: {},
  vuetify: {
    // customVariables: [],
    theme: {
      dark: true,
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
