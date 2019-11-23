<template>
  <el-row style="margin: 10px;">
    <el-col :span="6" v-for="(data, index) in data.data " :index="data._id" :key="`menu-item-${index}`">
      <div class="grid-content bg-purple shadow">
        <el-popover
                placement="bottom"
                title=""
                trigger="click">
            <el-image style="width: 100%; height: 100%;" slot="reference" :src="data.file" :alt="data.tpmc" fit="contain"></el-image>
            <el-image  style="max-height: 800px;max-width: 800px" :src="data.file"></el-image>
        </el-popover>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
})
export default class Photo extends Vue{
  data = {};

  async fetch(){
    const res = await this.$http.get(`photos`);
    this.data = res.data;
  }

  created(){
    this.fetch();
  }
}
</script>

<style>

</style>