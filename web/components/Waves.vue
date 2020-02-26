<template>
  <div class="head">
    <div class="headTitle">
      <div style="width: 100%;">
        <h1 class="pb-5">{{title.title}}</h1>
        <h4>{{title.subtitle}}</h4>
      </div>
    </div>
    <div class="waves-area">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18s 58-18 88-18s 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(38,50,56,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(38,50,56,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(38,50,56,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#263238" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      title: 'das',
      subtitle: 'fas'
    },
    data() {}
  }
}
</script>

<style>
.head {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55vh;
  z-index: 0;
}
.headTitle {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  height: 45vh;
  display: flex;
  align-items: center;
  text-align: center;
}
.waves-area {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;
}
.waves {
  width: 100%;
  height: 10vh;
  overflow: hidden;
  vertical-align: middle;
}
.parallax > use {
  animation: move-forever 15s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 3s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 5s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 8s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 10s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>