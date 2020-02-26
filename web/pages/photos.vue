<template>
  <!-- <client-only>
    {{photos}}
  </client-only>-->
  <v-container class="lighten-5">
    <!-- <v-row>
    <v-col md="2" sm="4">-->
    <div class="box">
      <v-card
        v-for="item in photos"
        :key="item._id"
        color="#263238"
        elevation="0"
        max-width="300"
        class="mt-2"
      >
        <v-img :src="item" contain></v-img>
      </v-card>
    </div>
    <!-- </v-col>
    </v-row>-->
  </v-container>
</template>

<script>
export default {
  components: {
    // Waterfall
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get('photos')
    let photos = []
    for (let i in res.data) {
      photos.push(res.data[i].file)
    }
    return {
      photos
    }
  },
  data() {
    console.log(this.photos)
  }
}
</script>

<style>
@media only screen and (min-width: 960px) {
  .box {
    margin: 10px auto;
    width: 900px;
    /* height: 100vh; */
    column-count: 3;
    column-gap: 10px;
  }
}

@media only screen and (min-width: 400px) {
  .box {
    margin: 10px auto;
    width: 80%;
    /* height: 100vh;
    column-count: 1;
    column-gap: 10px; */
  }
}
</style>