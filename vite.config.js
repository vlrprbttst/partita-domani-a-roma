import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/partita-domani-a-roma/',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
  server: {
    proxy: {
      '/football-api': {
        target: 'https://api.football-data.org',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/football-api/, ''),
      },
    },
  },
})
