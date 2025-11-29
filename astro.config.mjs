import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-netlify-site.netlify.app',
  integrations: [tailwind()],
  vite: {
    server: {
      fs: {
        allow: ['.']
      }
    }
  }
});
