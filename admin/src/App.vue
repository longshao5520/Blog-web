<template>
  <div id="app">
    <router-view :key="$route.path"></router-view>
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
        title: '内容管理',
        icon: 'el-icon-tickets',
        items: [
          { title: '文章列表', icon: 'el-icon-document', path: '/blogs/list'},
          { title: '新建文章', icon: 'el-icon-document-add', path: '/blogs/create'},
          { title: '评论管理', icon: 'el-icon-edit', path: '/comments/list'},
          { title: '相片管理', icon: 'el-icon-picture-outline-round', path: '/photos/list'},
          { title: '留言管理', icon: 'el-icon-tickets', path: '/messages/list'},
        ]
      },
      {
        title: '运营管理',
        icon: 'el-icon-eleme',
        items: [
          { title: '用户管理', icon: 'el-icon-user', path: '/users/list'},
          { title: '管理员管理', icon: 'el-icon-user', path: '/admins/list'},
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
  border-bottom: 1px #e6e6e6 solid;
  background-color: #e6e6e6;
}

.logo {
  margin-top: 10%; 
  width: 75%;
  height: auto;
  border-radius: 50%;
}
.ss{
  margin-top: 15%;
}
.avue-upload__avatar{
  height: auto !important;
}
</style>