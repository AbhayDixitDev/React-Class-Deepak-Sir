import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    outDir: 'dist', // Output directory for bundled files
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