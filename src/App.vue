<template>
  <h1 class="text-2xl text-center my-5">
    Use vue to explore how to implement a better UX interface
  </h1>

  <div class="box">
    <h2 class="title">1. A navigation component that with amazing animation</h2>
    <Navigation></Navigation>
  </div>
  <div class="box">
    <h2 class="title">2. Click the button to evoke Spotlight component</h2>
    <div class="text-center">
      <button @click="evokeSpotlight">Evoke Spotlight ( ⌘ + K )</button>
    </div>
  </div>
  <Spotlight
    v-model:visible="spotlight.visible"
    :items="spotlight.items"
    :groups="spotlight.groups"
  ></Spotlight>
  <SwapCard :visible="true">
    <template #content="{ data }">
      <div p="x-5">xx {{ data }}</div>
    </template>
  </SwapCard>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Navigation from './components/Navigation.vue'
import { ISpotlightGroup, ISpotlightOption } from './components/spotlight'
import Spotlight from './components/Spotlight.vue'
import SwapCard from './components/SwapCard.vue'

const spotlightItems: ISpotlightOption[] = [
  {
    group: 'string',
    title: 'hello',
    id: '1',
  },
  {
    group: 'string',
    title: 'world',
    id: '2',
  },
  {
    group: 'string',
    title: 'world1',
    id: '3',
  },
  {
    group: 'string',
    title: 'world2',
    id: '4',
  },
  {
    group: 'string',
    title: 'world3',
    id: '5',
  },
  {
    group: 'string',
    title: 'world4',
    id: '6',
  },
  {
    title: 'other world',
    id: '7',
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
  visible: false,
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
  color: #393d41;
}

.box {
  color: #adadad;

  &:hover {
    color: #333333;
  }

  .title {
    @apply text-xl my-4 px-10;
    transition: color ease 0.4s;
  }
}

button {
  cursor: pointer;
}
</style>
