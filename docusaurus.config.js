const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Diseño de software orientado a objetos',
  url: 'https://surprograma.github.io/',
  baseUrl: '/libro-disenio-oop/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'surprograma',
  projectName: 'libro-disenio-oop',
  trailingSlash: true,
  themeConfig: {
    navbar: {
      title: 'Diseño de software',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Material',
        },
        {
          href: 'https://github.com/surprograma/libro-disenio-oop',
          label: 'Ver en GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Comunidad',
          items: [
            {
              label: 'YouTube',
              href: 'https://youtube.com/c/elsurtambienprograma',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/qwAgfDx3tX',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/surprograma',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/surprograma',
            },
          ],
        },
      ],
      copyright: `<img src="/static/img/logo.png" width="70px" /><p style="margin-bottom: 0">Todo el contenido de este sitio se publica bajo una licencia <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es">CC BY-SA 4.0</a></p><p>Algunos derechos reservados. © ${new Date().getFullYear()} El Sur También programa.</p>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['kotlin'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/surprograma/libro-disenio-oop/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/surprograma/libro-disenio-oop/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: 'es',
      },
    ],
  ]
};
