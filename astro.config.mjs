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
    rehypePlugins: [[rehypeKatex, { output: 'html' }]],
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
      customCss: [
        './src/styles/custom.css',
      ],
      plugins: [
        catppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" }
        }),
        starlightSidebarTopics([
          {
            label: 'Eletrônica analógica',
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            icon: 'setting',
          },
          {
            label: 'Eletrônica digital',
            id: 'digi',
            icon: 'matrix',
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
            icon: 'laptop',
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
            icon: 'puzzle',
          },
          {
            label: 'Processamento de sinais',
            icon: 'magnifier',
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
