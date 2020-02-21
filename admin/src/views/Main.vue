<template>
  <el-container>
    <el-aside width="200px">
      <el-menu mode="vertical" style="height:100vh" :default-active="$route.path" router>
        <el-submenu
          v-for="(item, index) in menu.items"
          :index="`menu-item-${index}}`"
          :key="`menu-item-${index}}`"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            {{item.title}}
          </template>
          <el-menu-item
            v-for="(subItem, subIndex) in item.items "
            :index="subItem.path"
            :key="`menu-item-${index}-${subIndex}`"
          >
            <i :class="subItem.icon"></i>
            {{subItem.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="22">
            <div class="grid-content bg-purple-light">
              <h2>微薄的青春ゝ - 博客后台管理</h2>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple-light ss">
              <el-dropdown>
                <i class="el-icon-setting"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span>longshao</span>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: "内容管理",
        icon: "el-icon-tickets",
        items: [
          { title: "文章管理", icon: "el-icon-document", path: "/blogs/ls" },
          {
            title: "分类管理",
            icon: "el-icon-s-operation",
            path: "/cates/list"
          },
          {
            title: "相片管理",
            icon: "el-icon-picture-outline-round",
            path: "/photos/list"
          },
          { title: "评论管理", icon: "el-icon-edit", path: "/comments/list" },
          { title: "留言管理", icon: "el-icon-tickets", path: "/messages/list" }
        ]
      },
      {
        title: "运营管理",
        icon: "el-icon-eleme",
        items: [
          { title: "用户管理", icon: "el-icon-user", path: "/users/list" }
        ]
      }
    ]
  };
}
</script>

<style>
.ss {
  margin-top: 15%;
}
.ss i {
  margin-right: 1rem;
}
</style>