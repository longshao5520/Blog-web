<template>
  <div>
    <avue-crud
      v-if="option.column"
      :page="page"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="changePage"
    >
      <!-- <template slot-scope="scope" slot="nameForm">
        <el-tag></el-tag>
      </template>-->
    </avue-crud>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Ref, Prop } from "vue-property-decorator";

@Component({
  // data: {},
})
export default class ResourceList extends Vue {
  @Prop() resource: any;
  data: any = {};
  option: any = {};
  page: any = {
    total: 0
  };
  query: any = {
    limit: 5
  };

  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }

  async changePage({ pageSize, currentPage }: any) {
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }

  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: {
        query: this.query
      }
    });
    this.page.total = res.data.total;
    this.data = res.data;
  }

  async create(row: any, done: any) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success("创建成功");
    this.fetch();
    done();
  }

  async update(row: any, index: any, done: any) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(`${this.resource}/${row._id}`, data);
    this.$message.success("编辑成功");
    this.fetch();
    done();
  }

  async remove(row: any) {
    try {
      await this.$confirm("是否确认删除？");
    } catch (e) {
      return;
    }
    await this.$http.delete(`${this.resource}/${row._id}`);
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