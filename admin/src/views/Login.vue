<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-24 21:29:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\admin\src\views\Login.vue
-->
<template>
  <el-card header="后台管理 - 登录" class="login-card">
    <el-form @submit.native.prevent="login">
      <el-form-item label="用户名">
        <el-input v-model="data.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="data.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="info" native-type="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Login extends Vue {
  data = {
    username: "",
    password: "",
  };

  async login() {
    await this.$http.post("login", this.data).then((res) => {
      // window.console.log(res);
      localStorage.token = res.data.token;
      this.$router.push("/home/list");
      // this.$message.success(`登录成功，欢迎你${res.data.username}`)
      this.$message.success("登录成功");
    });
    // const res = await this.$http.post("login", this.data);
  }
}
</script>

<style scoped>
.login-card {
  width: 25rem;
  margin: 15rem auto;
  background-color: rgba(255, 255, 255, 0.855);
}
</style>
