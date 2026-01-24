// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import theme from './src/lib/theme';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: { ...theme, type: 'dark' },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      }
    }
  }
});