import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    publicDir: 'dist', // Set the public directory to "dist"
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./styles/variables";`,
      },
    },
  },
  plugins: [react()],
})