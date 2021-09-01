import { onMounted, onUnmounted } from 'vue'
import { handleKeydown } from '../utils'

export function useKeydown(key: string, listener: (e: KeyboardEvent) => any) {
  let cancel: null | (() => void)

  onMounted(() => {
    cancel = handleKeydown(key, listener)
  })

  onUnmounted(() => {
    cancel?.()
  })
}
