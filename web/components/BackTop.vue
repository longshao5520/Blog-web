<!--
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-22 21:27:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\web\components\BackTop.vue
--> 
<template>
  <div class="test-box">
    <div class="scrollTop" v-show="showTop" @click="gotop">
      <!-- <v-icon color="white" large>fas fa-caret-up</v-icon> -->
      <i>top</i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollTop: 0
    }
  },
  computed: {
    showTop: function() {
      let value = this.scrollTop > 300 ? true : false
      return value
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getScrollTop)
  },
  methods: {
    gotop() {
      let back = setInterval(() => {
        if (document.documentElement.scrollTop || document.body.scrollTop) {
          document.documentElement.scrollTop -= 50
          document.body.scrollTop -= 50
        } else {
          clearInterval(back)
        }
      }, 20)
    },
    getScrollTop() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    }
  }
}
</script>
<style scoped>
.scrollTop {
  position: fixed;
  right: 5%;
  bottom: 10%;
  background-color: #666;
  color: white;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 50%;
  text-align: center;
  font-size: 1.3rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  z-index: 5;
}
</style>
