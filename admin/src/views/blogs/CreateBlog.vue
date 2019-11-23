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
        <el-input type="textarea" v-model="blog.connect" rows="25"></el-input>
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

export default class CreateBlog extends Vue {
  blog = {
    title: "",
    label: "",
    connect: "",
    cover: "",
    author: "longshao"
  };

  async saveBlog() {
    await this.$http.post("blogs", this.blog);
    this.$message.success("创建成功");
    this.$router.push("/blogs/list");
  }
}
</script>

<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>