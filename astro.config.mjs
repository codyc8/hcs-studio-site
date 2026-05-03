import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hcs-studio.vercel.app', // update to real domain after deploy
  output: 'static',
  integrations: [mdx(), sitemap()],
});
