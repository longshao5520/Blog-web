<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5" :offset="6">
        <el-input v-model="blogID" placeholder="文章ID"></el-input>
      </el-col>
      <el-col :span="5">
        <el-button @click="search" type="primary">搜索</el-button>
        <el-button @click="save" type="primary">保存</el-button>
      </el-col>
    </el-row>

    <mavon-editor
      v-model="blog.connect"
      :toolbars="toolbars"
      @change="change"
      style="margin-top: 2rem;min-height: 50rem; max-height: 50rem;"
    />
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  components: {
    mavonEditor
  },
  data() {
    return {
      blogID: "",
      blog: {},
      html: "",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        navigation: true, // 导航目录
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        preview: true // 预览
      }
    };
  },
  methods: {
    goto() {
      this.$router.push("/blogs/list");
    },
    change(value, render) {
      this.html = render;
    },
    async search() {
      const res = await this.$http.get(`blogs/${this.blogID}`);
      this.blog = res.data;
    },
    async save() {
      this.blog.author = "龙少5520";
      await this.$http.put(`blogs/${this.blog._id}`, this.blog);
      this.$router.push("/blogs/list");
      this.$message.success("保存成功");
    }
  }
};
</script>

<style>
.md {
  width: 100%;
  height: 100%;
}
</style>