import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'view',
  publicDir: 'public',
  server: {
    port: 3001,
    strictPort: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
});
