// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://firelink-library.github.io',
  base: '/', // TODO: adicionar base do repositorio
  outDir: 'dist',
  publicDir: 'static',
  integrations: [
    starlight({
      title: '', // TODO: adicionar titulo
      logo: {
        src: './src/assets/logos/logo.png'
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2
      },
      social: [{
        icon: 'github',
        label: 'GitHub',
        href: '' // TODO: adicionar link repositorio
      }],
      plugins: [
        catppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" }
        })
      ],
      sidebar: [
        // TODO: adicionar seções. Ver exemplo abaixo
        // Para mais opções de config
        // Acesse: https://starlight.astro.build/guides/sidebar/
        {
          label: 'Introdução',
          autogenerate: { directory: 'intro' }, collapsed: true
        },
      ],
    }),
  ],
});
