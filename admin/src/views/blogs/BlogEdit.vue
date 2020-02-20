<template>
  <div style="margin-right: 5%;">
    <!-- <h3>{{ isNew ? '创建': '编辑'}}文章</h3> -->
    <avue-form
      ref="form"
      v-model="data"
      :option="option"
      @reset-change="emptytChange"
      @submit="saveBlog"
      labelPosition="top"
    >
      <template slot="connect">
        <mavonEditor
          v-model="data.connect"
          :toolbars="toolbars"
          ref="md"
          @change="change"
          style="min-height: 700px; max-height: 700px;"
        ></mavonEditor>
      </template>
    </avue-form>
  </div>
</template>

<script>
import { Vue, Prop, Component } from "vue-property-decorator";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

@Component({
  components: {
    mavonEditor
  }
})
export default class CreateBlog extends Vue {
  @Prop(String) id;
  data = {};
  option = {};
  html = "";
  toolbars = {
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
  };

  get isNew() {
    return !this.id;
  }

  async fetch() {
    if (this.id) {
      const res = await this.$http.get(`blogs/${this.id}`);
      this.data = res.data;
    }
    const res = await this.$http.get(`blogs/formOption`);
    this.option = res.data;
  }

  async saveBlog() {
    // let res;
    // if (this.id) {
    //   res = await this.$http.put(`blogs/${this.id}`, this.blog);
    // } else {
    //   res = await this.$http.post(`blogs`, this.blog);
    // }
    // this.$router.push("/blogs/list");
    // this.$message({
    //   type: "success",
    //   message: "创建成功"
    // });
  }

  emptytChange() {
    this.$router.push("/blogs/ls");
  }

  created() {
    this.fetch();
  }
}
</script>

<style>
</style>