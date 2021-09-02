<template>
  <Modal :visible="visible">
    <div class="absolute top-1/4 left-1/2" transform="~ -translate-x-1/2" flex="~">
      <div v-for="o in 6" class="card">
        <slot name="content" :data="o"> </slot>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import Modal from './Modal.vue'

defineProps<{ visible: boolean }>()
</script>

<style lang="less" scoped>
.card {
  @apply w-200px h-300px bg-white bg-opacity-90;

  @apply rounded-lg;
  @apply border border-gray-300;

  @apply transition transition-all duration-200;
  @apply transform translate-y-0;

  &:hover {
    @apply -translate-y-10;
  }

  & + & {
    margin-left: 10px;
  }
}
</style>
