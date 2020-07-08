<!--
 * @Author: your name
 * @Date: 2020-07-08 15:05:39
 * @LastEditTime: 2020-07-08 15:07:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\components\Title.vue
--> 
<template>
  <div class="headTitle">
    <div>
      <h1>{{title.title}}</h1>
      <span>{{title.subtitle}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title:{},
  },
}
</script>

<style>

</style>