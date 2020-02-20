<template>
  <div>
    <avue-crud
      v-if="option.column"
      :page="page"
      :data="data.data"
      :option="option"
      @row-del="remove"
      @on-load="changePage"
    >
      <template slot="menuLeft">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="small"
          @click="$router.push('/blogs/create')"
        >新增</el-button>
      </template>
      <template slot-scope="scope" slot="menu">
        <el-button
          type="text"
          icon="el-icon-edit"
          size="small"
          plain
          @click="$router.push(`/blogs/edit/${scope.row._id}`)"
        >编辑</el-button>
      </template>
    </avue-crud>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Ref, Prop } from "vue-property-decorator";

@Component({})
export default class BlogsList extends Vue {
  @Prop(String) resource!: String;
  data = {};
  option = {};
  page: any = {
    pageSize: 5,
    pageSizes: [5, 10],
    total: 10
  };
  query: any = {};

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
    this.data = res.data;
    this.page.total = res.data.total;
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