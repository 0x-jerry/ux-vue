<template>
  <div class="box">
    <h1 class="title">Use vue to explore how to implement a better UX interface</h1>
  </div>
  <div class="box">
    <h2 class="title">1. A navigation component that with amazing animation</h2>
    <Navigation></Navigation>
  </div>
</template>

<script lang="ts" setup>
import Navigation from './components/Navigation.vue'
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #393d41;
}

.box {
  color: #adadad;

  &:hover {
    color: #333333;
  }

  .title {
    transition: color ease 0.4s;
  }
}

button {
  cursor: pointer;
}
</style>
