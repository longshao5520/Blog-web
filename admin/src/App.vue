<template>
  <div id="app">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
}
.avue-upload__avatar {
  height: auto !important;
}
</style>