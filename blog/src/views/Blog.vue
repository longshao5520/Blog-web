<template>
  <el-row style="margin: 10px;">
    <el-col :span="18">
      <div class="grid-content bg-purple">
        <div v-for="(data, index) in data.data.reverse()" :index="data._id" :key="`menu-item-${index}`">
          <a :href="`/blog/details/${data._id}`">
            <div class="shadow">
              <div style="margin: 20px 20px 10px 20px;"><h3>{{data.title}}</h3></div>
              <div class="txt"><p>{{data.connect}}</p></div>
              <div style="float:right;margin: 20px 10px;">
                <el-tag effect="dark" style="border-radius: 30px;margin-right: 10px;"  type="info">{{data.author}}</el-tag>
                <el-tag effect="dark" style="border-radius: 30px;"  type="info">{{data.createdAt | dataFormat('YYYY-MM-DD')}}</el-tag>
              </div>
            </div>
          </a>
        </div>
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
    this.data = res.data;
  }

  created(){
    this.fetch();
  }
}
</script>

<style>
p{
  text-indent: 2em;
  line-height:1.4em;
  margin: 0;
}
.txt{
  width: 90%;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.shadow{
  border-radius: 30px;
  padding: 10px;
  margin: 10px auto 20px;
  transition-duration: 0.5s; 
  width:90%;
  height:150px;
  background-color: #ffffff;
}
.shadow:hover{
  -webkit-box-shadow: #ccc 0px 10px 10px;
  -moz-box-shadow: #ccc 0px 10px 10px;
  box-shadow: #ccc 5px 5px 10px 5px;  
}
</style>