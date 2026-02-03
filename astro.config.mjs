// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'
import catppuccin from '@catppuccin/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
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
      plugins: [
        starlightSidebarTopics([
          {
            label: 'Eletrônica analógica',
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            icon: 'open-book',
          },
          {
            label: 'Eletrônica digital',
            id: 'digi',
            icon: 'open-book',
            link: '/transistor',
            items: [
              {
                label: "Conteúdo",
                autogenerate: { directory: 'digi' }, collapsed: true
              }
            ],
          },
          {
            label: 'Arquitetura de computadores',
            icon: 'open-book',
            link: '/historia-comp',
            items: [
              {
                label: "Conteúdo",
                autogenerate: { directory: 'arqui' }, collapsed: true
              }
            ],
          },
          {
            label: 'Sistemas embarcados',
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            icon: 'open-book',
          },
          {
            label: 'Processamento de sinais',
            icon: 'open-book',
            link: '/sinais-imagem',
            items: [
              {
                label: "Conteúdo",
                autogenerate: { directory: 'sinais' }, collapsed: true
              }
            ],
          },
        ]),
      ],
    }),
  ],
});
