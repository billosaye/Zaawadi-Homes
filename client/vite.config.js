import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/server': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})
