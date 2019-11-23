<template>
  <el-row style="padding: 10px;">
    <el-col :span="16" :offset="4">
      <div class="grid-content" style="margin: 10px;">
        <el-input autofocus type="textarea" :rows="8" placeholder="请输入内容" maxlength="150" v-model="textarea.connect" show-word-limit></el-input>
        <el-button type="info" round style="float:right;margin: 10px;" @click="create">留言</el-button>
      </div>
      <div class="grid-content" style="margin-top: 70px">
        <div v-for="(data, index) in data.data.reverse() " :index="data._id" :key="`menu-item-${index}}`" style="width:100%;">
          <div class="shadow-me">
            <div class="txt"><p>{{data.connect}}</p></div>
            <div style="float:right;margin: 20px 10px;">
              <el-tag effect="dark" style="border-radius: 30px;margin-right: 10px;"  type="info">{{data.author}}</el-tag>
              <el-tag effect="dark" style="border-radius: 30px;"  type="info">{{data.createdAt | dataFormat('YYYY-MM-DD')}}</el-tag>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
})
export default class Message extends Vue{
  data = {};
  textarea = {
    author: "游客",
    connect: ''
  };
  user = '';

  async fetch(){
    const res = await this.$http.get(`messages`);
    this.data = res.data;
  }

  async create(){
    await this.$http.post('/messages', this.textarea);
    this.$message.success('创建成功');
    this.fetch();
  }

  created(){
    this.fetch();
  }
}
</script>

<style>
.el-textarea__inner{
  resize:none;
}
p{
  text-indent: 3em;
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
.shadow-me{
  border-radius: 30px;
  padding: 30px 10px 10px 10px;
  margin: 10px auto 20px;
  transition-duration: 0.5s; 
  width:90%;
  height:90px;
  background-color: #ffffff;
}
.shadow-me:hover{
  -webkit-box-shadow: #ccc 0px 10px 10px;
  -moz-box-shadow: #ccc 0px 10px 10px;
  box-shadow: #ccc 5px 5px 10px 5px;  
}
</style>