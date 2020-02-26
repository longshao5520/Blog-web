<template>
  <div class="test-box">
    <div class="scrollTop" v-show="showTop" @click="gotop">
      <v-icon color="#40739e" large>fas fa-caret-up</v-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: 'this-is-backtop-test',
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
  background-color: #afafaf;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  z-index: 5;
}
</style>
