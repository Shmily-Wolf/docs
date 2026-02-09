import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Shmily-Wolf',
  description: 'A VitePress Site',
  base: '/docs/',
  head: [
    ['link', { rel: 'icon', href: '/docs/favicon.ico' }]
  ],
  // outDir: '../dist',
  // cacheDir: '../cache/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/Shmily-Wolf' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Evan You'
    },

    editLink: {
      pattern: 'https://github.com/Shmily-Wolf',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: '更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: 'prev',
      next: 'next'
    },

    externalLinkIcon: true
  }
});
