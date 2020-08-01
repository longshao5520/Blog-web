/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-08-01 09:45:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\plugins\vue-markdown.js
 */ 
import Vue from 'vue'


import mavonEditor from 'mavon-editor'

Vue.use(mavonEditor)

import animate from 'animate.css'

Vue.use(animate)

import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/solarized-light.css'
Vue.use(VueHighlightJS)