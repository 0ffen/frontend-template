import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      autoCodeSplitting: true,
      routesDirectory: 'src/_app',
      routeToken: 'layout',
      indexToken: 'page',
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './src/_app'),
      '@pages': resolve(__dirname, './src/_pages'),
      '@domain': resolve(__dirname, './src/domain'),
      '@shared': resolve(__dirname, './src/shared'),
    },
  },
});
