<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-31 15:54:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\components\APlayer.vue
--> 
<template>
  <client-only>
    <div style="color: #263238;">
      <meting-js
        :server="server"
        type="playlist"
        :id="id"
        volume="0.1"
        theme="#2980b9"
        mini="true"
        fixed="true"
        autoplay="true"
        order="random"
      ></meting-js>
    </div>
  </client-only>
</template>

<script>
export default {
  data: () => ({
    // server: 'netease',
    // id: '609629369',

    server: 'tencent',
    id: '7605121511',
  })
}
</script>