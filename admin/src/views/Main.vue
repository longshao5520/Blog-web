<template>
  <el-container>
    <el-aside width="200px">
      <el-menu mode="vertical" style="height:100vh" :default-active="$route.path" router>
        <el-submenu v-for="(item, index) in menu.items"
          :index="`menu-item-${index}}`"
          :key="`menu-item-${index}}`">
          <template slot="title">{{item.title}}</template>
          <el-menu-item v-for="(subItem, subIndex) in item.items "
            :index="subItem.path"
            :key="`menu-item-${index}-${subIndex}`">
              {{subItem.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="hea">
        <div style="float:left;"><h2>微薄的青春ゝ - 博客后台管理</h2></div>
        <div class="hea-r">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>编辑</el-dropdown-item>
              <!-- <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item> -->
            </el-dropdown-menu>
          </el-dropdown>
          <span>longshao</span>
        </div>
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
  
</template>

<script long='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component()
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: '内容管理',
        items: [
          { title: '首页', path: '/'},
          { title: '文章管理', path: '/blogs/list'},
          { title: '评论管理', path: '/comments/list'},
          { title: '相片管理', path: '/photos/list'},
          { title: '留言管理', path: '/messages/list'},
        ]
      },
      {
        title: '运营管理',
        items: [
          { title: '用户管理', path: '/users/list'},
        ]
      },
    ]
  }
}
</script>

<style>
body{
  margin: 0;
}

.hea{
  border-bottom: 1px red solid;
  /* margin-bottom: 1%; */
}

.hea-r{
  float:right; 
  font-size: 16px; 
  text-align: right; 
  margin: 1.5%;
}
</style>
