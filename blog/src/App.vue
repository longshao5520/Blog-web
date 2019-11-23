<template>
  <div id="app">
    <el-menu :default-active="$route.path" mode="horizontal" router class="nav" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-row>
        <el-col :span="16" :offset="4">
          <div class="grid-content">
            <el-menu-item style="float:left;width:6%;" index="/"><img src="http://img.yql520.com/blog_public/img/%E5%A4%B4%E5%83%8F.png" alt="" style="width:100%;"></el-menu-item>
            <el-menu-item v-for="(item, index) in menu.items " :index="item.path" :key="`menu-item-${index}}`" style="float:left;">{{item.title}}</el-menu-item>
            <el-menu-item style="float:right;" index="/login">登录</el-menu-item>
            <el-menu-item style="float:right;" index="/registered">注册</el-menu-item>
          </div>
        </el-col>
      </el-row>
    </el-menu>
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="grid-content">          
          <router-view :key="$route.path"></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class App extends Vue {
  menu = {
    items: [
      {
        title: '首页',
        path: '/blog',
      },
      {
        title: '相册',
        path: '/photo',
      },
      {
        title: '留言',
        path: '/message',
      },
      {
        title: '关于我',
        path: '/about',
      },
    ]
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
  background-color: #f9f9f9 ;
}
a,a:link,a:visited,a:hover,a:active{
  text-decoration: none;
  color:inherit;
}

</style>
