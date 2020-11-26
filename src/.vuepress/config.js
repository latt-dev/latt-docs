const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Latt Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#5D34B0' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'assets/favicon.png' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Overview',
        link: '/overview/',
      },
      {
        text: 'Back End',
        link: '/backend/',
      },
      {
        text: 'Front End',
        link: '/frontend/',
      },
      {
        text: 'Admin',
        link: '/admin/',
      },
      {
        text: 'API doc',
        link: 'https://latt-api.herokuapp.com/api',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/latt-dev',
      },
    ],
    sidebar: {
      '/overview/': [
        {
          title: 'Overview',
          collapsable: false,
          children: [
            '',
            'technical-overview',
            'design-guide',
            'roadmap',
            'contributing',
            'technical-debt',
            'self-hosting',
          ],
        },
      ],
      '/backend/': [
        {
          title: 'Back End Guide',
          collapsable: false,
          children: ['', 'installation', 'authentication', 'database'],
        },
      ],
      '/frontend/': [
        {
          title: 'Front End Guide',
          collapsable: false,
          children: ['', 'installation', 'firebase', 'pwa', 'ios', 'android'],
        },
      ],
      '/admin/': [
        {
          title: 'Admin (CMS) Guide',
          collapsable: false,
          children: ['', 'installation', 'authorization', 'content-creation'],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
