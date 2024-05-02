import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    reporters: ['verbose'],
    environments: ['jsdom'],
    globals: true,
    setupFiles: ['./vitest.setup.js']
  }
})
