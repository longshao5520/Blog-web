<template>
  <el-row style="margin-top: 100px;">
    <el-col :span="8" :offset="8">
      <div class="grid-content bg-purple-dark">
        <el-form ref="form"  :model="data" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="data.username" minlength=“4” maxlength="32" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="" v-model="data.password" minlength=“8” show-password maxlength="20"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
           <el-input placeholder="" v-model="data.repassword" minlength=“8” show-password maxlength="20"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="data.phone" maxlength="11" show-word-limit></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="info" @click="createUser" style="float:right;">立即注册</el-button>
            <el-button style="float:right; margin-right:10px;">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
})
export default class Registered extends Vue{
  data = {
    username: '',
    password: '',
    repassword: '',
    phone: '',
  };
  isNull(str) {
    if (str == "") return true;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
  }

  async createUser(){
    if(this.isNull(this.data.username)){
      this.$message.error("请输入用户名！");
    }else{
      if(this.isNull(this.data.password)){
        this.$message.error("请输入密码！");
      }else{
        if(this.isNull(this.data.repassword)){
          this.$message.error("请确认密码！");
        }else{
          if(this.data.password === this.data.repassword){
            if(this.isNull(this.data.phone)){
              this.$message.error("请输入手机号！");
            }else{
              await this.$http.post('users', this.data);
              this.$message.success("创建成功");
              this.$router.push("/login");
            }
          }else{
            this.$message.error("两次密码不一致！");
          }
        }
      }
    }
    
    
  }
}
</script>

<style>
</style>