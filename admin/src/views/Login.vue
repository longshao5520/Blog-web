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
    password: ""
  };

  async login() {
    const res = await this.$http.post("login", this.data);
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