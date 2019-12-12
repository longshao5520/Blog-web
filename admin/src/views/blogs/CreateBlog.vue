<template>
  <div style="margin-right: 5%;">
    <h3>新建文章</h3>
    <el-form @submit.native.prevent="saveBlog" ref="form" :model="blog" label-width="120px">
      <el-form-item label="文章标题">
        <el-input v-model="blog.title"></el-input>
      </el-form-item>
      <el-form-item label="文章标签">
        <el-input v-model="blog.label"></el-input>
      </el-form-item>
      <el-form-item label="封面图">
        <el-input v-model="blog.cover"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <vue-editor v-model="blog.connect"></vue-editor>
        <!-- <el-input type="textarea" v-model="blog.connect" rows="22"></el-input> -->
      </el-form-item>
      <el-form-item style="float:right;">
        <el-button type="primary" native-type="submit">发布</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Vue } from "vue-property-decorator";
import { VueEditor } from "vue2-editor"

export default{
  props: {
    id: {}
  },
  data(){
    return {
      blog: {}
    }
  },
  components: {
    VueEditor
  },
  methods: {
    async saveBlog() {
      let res 
      if(this.id){
        res = await this.$http.puy(`blogs/${this.id}`, this.blog);
      }else{
        res = await this.$http.post(`blogs`, this.blog);
      }
      // await this.$http.post("blogs", this.blog);
      this.$router.push("/blogs/list");
      this.$message({
        type: 'success',
        message: '创建成功'
      })
    }
  }
  
}

// export default class CreateBlog extends Vue {
//   blog = {
//     title: "",
//     label: [],
//     connect: "",
//     cover: "",
//     author: "longshao"
//   };
//   tagg = {
//     inputVisible: false,
//     inputValue: ''
//   }
//   components: {
//     VueEditor
//   }
//   async saveBlog() {
//     await this.$http.post("blogs", this.blog);
//     this.$message.success("创建成功");
//     this.$router.push("/blogs/list");
//   }
// }
</script>

<style>
</style>