<template>
  <div class="login-container">
    <el-card header="后台管理" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="info" style="float:right;" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
      
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      model: {}
    }
  },
  methods: {
    async login(){
      const res = await this.$http.post('login', this.model)
      window.console.log(res.data)
    }
  }
}
</script>

<style>
.login-card{
  width: 25rem;
  margin: 10rem auto;
}
</style>