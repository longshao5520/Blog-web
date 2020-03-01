<template>
  <v-app dark>
    <Navbar></Navbar>
    <v-content style="background-color: #263238;">
      <nuxt />
      <Bottom></Bottom>
    </v-content>
    <BackTop></BackTop>
    <APlayer></APlayer>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Bottom from '~/components/Bottom'
import BackTop from '~/components/BackTop'
import APlayer from '~/components/APlayer'

export default {
  loading: false,
  components: {
    Navbar,
    Bottom,
    BackTop,
    APlayer
  }
}
</script>
<style>
*,
::before,
::after {
  text-decoration: none;
}
</style>>
