<template>
  <div class="box">
    <h1 class="title">Use vue to explore how to implement a better UX interface</h1>
  </div>
  <div class="box">
    <h2 class="title">1. A navigation component that with amazing animation</h2>
    <Navigation></Navigation>
  </div>
  <div class="box">
    <h2 class="title">2. Click the button to evoke Spotlight component</h2>
    <button @click="evokeSpotlight">Evoke Spotlight</button>
  </div>
  <Spotlight
    v-model:visible="spotlight.visible"
    :items="spotlight.items"
    :groups="spotlight.groups"
  ></Spotlight>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Navigation from './components/Navigation.vue'
import { ISpotlightGroup, ISpotlightOption } from './components/spotlight'
import Spotlight from './components/Spotlight.vue'

const spotlightItems: ISpotlightOption[] = [
  {
    group: 'string',
    title: 'hello',
  },
  {
    group: 'string',
    title: 'world',
  },
  {
    group: 'string',
    title: 'world1',
  },
  {
    group: 'string',
    title: 'world2',
  },
  {
    group: 'string',
    title: 'world3',
  },
  {
    group: 'string',
    title: 'world4',
  },
  {
    title: 'other world',
  },
]

const spotlightGroups: ISpotlightGroup[] = [
  {
    id: 'string',
    title: 'string',
  },
  {
    id: 'other',
    title: 'other world',
  },
]

const spotlight = reactive({
  visible: true,
  items: spotlightItems,
  groups: spotlightGroups,
})

function evokeSpotlight() {
  spotlight.visible = true
}
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
