<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-20 16:21:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\admin\src\views\ResourceCrud.vue
--> 
<template>
  <avue-crud
    v-if="option.column"
    :page="page"
    :data="data.data"
    :option="option"
    @row-save="create"
    @row-update="update"
    @row-del="remove"
    @on-load="changePage"
  ></avue-crud>
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop } from "vue-property-decorator";

@Component({
  // components: {
  //   mavonEditor
  // }
})
export default class ResourceList extends Vue {
  @Prop(String) resource!: String;
  data = {};
  option = {};
  page: any = {
    pageSize: 5,
    pageSizes: [5, 10],
    total: 10,
  };
  query: any = {
    sort: "-_id",
  };

  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }

  async changePage({ pageSize, currentPage }) {
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }

  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: {
        query: this.query,
      },
    });
    this.data = res.data;
    this.page.total = res.data.total;
  }

  async create(row, done) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success("创建成功");
    this.fetch();
    done();
  }

  async update(row, index, done) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(`${this.resource}/${row._id}`, data);
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

<style></style>
