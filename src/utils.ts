import { createKeyboardHandler } from '@0x-jerry/lib'

export const handleKeydown = createKeyboardHandler((listener) => {
  window.addEventListener('keydown', (ev) => listener(ev))
})
