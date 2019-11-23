<template>
  <el-row style="margin-top: 100px;">
    <el-col :span="8" :offset="8">
      <div class="grid-content bg-purple-dark">
        <el-form ref="form" :model="data" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="data.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="" v-model="data.passeord" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="info" @click="onSubmit" style="float:right;">登录</el-button>
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
  };

  async onSubmit(){
    // const res = await this.$http.get();
  }
}
</script>

<style>

</style>