import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://amplifycreativelab.github.io",
  base: "/demo-drop-culture/",
  output: "static",
  integrations: [tailwind()]
});
