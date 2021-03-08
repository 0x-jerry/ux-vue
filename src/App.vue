<template>
  <h1>Use vue to explore how to implement a better UX interface</h1>
  <Navigation></Navigation>
</template>

<script lang="ts" setup>
import Navigation from './components/Navigation.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  cursor: pointer;
}
</style>
