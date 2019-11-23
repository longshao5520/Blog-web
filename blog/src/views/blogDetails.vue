<template>
  <el-row style="margin: 10px;">
    <el-col :span="18">
      <div class="grid-content bg-purple">
        <el-breadcrumb style="margin: 10px 0px 0px 20px;">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>文章详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <div style="margin: 10px;">
          <div style="margin: 10px;">
            <h2>{{data.title}}</h2>
            <el-tag effect="dark" style="border-radius: 30px;margin-right: 10px;"  type="info">{{data.author}}</el-tag>
            <el-tag type="info">{{data.label}}</el-tag>
          </div>
          
          <div style="margin: 10px;">
            <p>{{data.connect}}</p>
          </div>
        </div>
          <!-- {{data}} -->
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple-light">
        这是侧边栏
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
})
export default class Blog extends Vue{
  data = {};

  async fetch(){
    const res = await this.$http.get(`blogs`);
    for(var i = 0; i<res.data.total; i++){
      if(res.data.data[i]._id == this.$route.params.id){
        this.data = res.data.data[i];
      }
    }
  }

  created(){
    this.fetch();
  }
}
</script>

<style>

</style>