<template>
  <div class="flex">
    <div class="nav">
      <div ref="root" class="nav-bg"></div>
      <button
        class="nav-item"
        v-for="o in items"
        :class="{ active: o === active }"
        @click="(e) => activeCurrent(e, o)"
      >
        {{ o }}{{ o }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import anime from 'animejs'

import { ref, onMounted } from 'vue'

const root = ref<HTMLDivElement | null>(null)

const items = new Array(10).fill(0).map((_, i) => i)
const active = ref(0)

onMounted(() => {
  const el = document.querySelector<HTMLDivElement>('.nav-item.active')
  el?.click()
})

function activeCurrent(e: MouseEvent, o: number) {
  const el = e.target as HTMLDivElement

  anime({
    targets: root.value,
    left: el.offsetLeft,
    easing: 'spring(1, 70, 10, 0)',
  })

  active.value = o
}
</script>

<style lang="less">
.flex {
  display: flex;
  justify-content: center;
  background: #f7f7f7;
  border: solid #d4d4d4;
  border-width: 1px 0;
}

@primary: #00a8f7;

.nav {
  position: relative;
  display: inline-flex;
  margin: auto;
  flex-wrap: wrap;
  color: #87898b;

  @unit-w: 60px;
  @unit-h: 28px;
  @time: 0.5s;

  &-bg {
    position: absolute;
    z-index: 0;
    width: @unit-w;
    height: @unit-h;
    box-sizing: content-box;

    top: -1px;
    left: 0;

    border: solid @primary;
    border-width: 1px 0;

    background: #daeef8;
  }

  &-item {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;

    background: transparent;
    transition: color ease @time;
    width: @unit-w;
    height: @unit-h;
    padding: 0;

    color: #1b1b1b;
    mix-blend-mode: color-burn;

    background: transparent;
    border: none;

    &:hover {
      color: #0f0f0f;
    }

    &.active {
      color: #252525;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
