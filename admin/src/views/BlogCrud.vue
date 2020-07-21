<template>
  <div>
    <avue-crud
      v-if="option.column"
      :page="page"
      :data="data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="changePage"
    >
      <template slot-scope="scope" slot="connectForm">
        <mavonEditor
          v-model="scope.row.connect"
          :toolbars="toolbars"
          ref="md"
          style="min-height: 525px;"
        ></mavonEditor>
      </template>
    </avue-crud>
  </div>
</template>

<script>
import { Vue, Component, Ref, Prop } from "vue-property-decorator";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

@Component({
  components: {
    mavonEditor
  }
})
export default class BlogsList extends Vue {
  @Prop(String) resource;
  data = {};
  option = {};
  toolbars = {
    bold: true, // 粗体
    italic: true, // 斜体
    header: true, // 标题
    underline: true, // 下划线
    strikethrough: true, // 中划线
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
    undo: true, // 上一步
    redo: true, // 下一步
    trash: true, // 清空
    navigation: true, // 导航目录
    preview: true // 预览
  };
  page = {
    pageSize: 5,
    pageSizes: [5, 10],
    total: 10
  };
  query = {};

  async fetchOption() {
    const res = await this.$http.get(`/blogs/option`);
    this.option = res.data;
  }

  async changePage({ pageSize, currentPage }) {
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }

  async fetch() {
    const res = await this.$http.get(`/blogs`, {
      params: {
        query: this.query
      }
    });
    this.data = res.data.data;
    this.page.total = res.data.total;
  }

  async create(row, done) {
    row.author = "龙少5520";
    await this.$http.post(`/blogs`, row);
    this.$message.success("创建成功");
    this.fetch();
    done();
  }

  async update(row, index, done) {
    const blog = JSON.parse(JSON.stringify(row));
    blog.author = "龙少5520";
    delete blog.$index;
    await this.$http.put(`/blogs/${row._id}`, blog);
    this.$message.success("编辑成功");
    this.fetch();
    done();
  }

  async remove(row) {
    try {
      await this.$confirm("是否确认删除？");
    } catch (e) {
      return;
    }
    await this.$http.delete(`/blogs/${row._id}`);
    this.$message.success("删除成功");
    this.fetch();
  }

  created() {
    this.fetch();
    this.fetchOption();
  }
}
</script>

<style>
</style>