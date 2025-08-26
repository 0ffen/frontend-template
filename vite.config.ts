import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({ projects: ['./tsconfig.json'] }),
    tanstackStart({
      customViteReactPlugin: true,
      tsr: {
        routesDirectory: 'src/_app',
        routeToken: 'layout',
        indexToken: 'page',
      },
    }),
    tailwindcss(),
    viteReact(),
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
