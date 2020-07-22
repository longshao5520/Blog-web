<!--
 * @Author: your name
 * @Date: 2020-07-08 15:05:39
 * @LastEditTime: 2020-07-22 21:28:20
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
.headTitle {
  width: 100%;
  position: relative;
  left: 0;
  z-index: 1;
  height: 120px;
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 0;
}
.headTitle div{
  width: 100%;
}
</style>