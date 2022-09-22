import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://mmorasch.dev',
  integrations: [
    preact({
      compat: true
    }),
    tailwind(),
    sitemap()
  ],
  output: 'server',
  adapter: node()
});