// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

import tailwindcss from '@tailwindcss/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blackTheme = JSON.parse(
  readFileSync(path.join(__dirname, './public/themes/black-theme.json'), 'utf-8')
);

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: blackTheme,
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