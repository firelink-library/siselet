// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://firelink-library.github.io',
  base: '/siselet',
  outDir: 'dist',
  publicDir: 'static',
  integrations: [
    starlight({
      title: 'Sistemas eletrônicos',
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
        href: 'https://github.com/firelink-library/siselet'
      }],
      plugins: [
        catppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" }
        })
      ],
      sidebar: [
        {
          label: 'Eletrônica analógica',
          autogenerate: { directory: 'anal' }, collapsed: true
        },
        {
          label: 'Eletrônica digital',
          autogenerate: { directory: 'digi' }, collapsed: true
        },
        {
          label: 'Sistemas embarcados',
          autogenerate: { directory: 'embarc' }, collapsed: true
        },
        {
          label: 'Arquitetura de computadores',
          autogenerate: { directory: 'arqui' }, collapsed: true
        },
        {
          label: 'Processamento de sinais',
          autogenerate: { directory: 'sinais' }, collapsed: true
        }
      ],
    }),
  ],
});
