<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-08 16:48:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\components\APlayer.vue
--> 
<template>
  <client-only>
    <div style="color: #263238;">
      <meting-js
        server="netease"
        type="playlist"
        id="609629369"
        volume="0.3"
        theme="#2980b9"
        mini="true"
        fixed="true"
        autoplay="true"
        order="random"
      ></meting-js>
    </div>
  </client-only>
</template>