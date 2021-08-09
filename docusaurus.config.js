const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const baseUrl = '/libro-disenio-oop/';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Diseño de software orientado a objetos',
  url: 'https://surprograma.github.io/',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'surprograma',
  projectName: 'libro-disenio-oop',
  trailingSlash: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        lightIcon: '☀️',
        darkIcon: '🌙',
      },
    },
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
      copyright: `<img src="${baseUrl}img/logo.png" width="70px" /><p style="margin-bottom: 0">Todo el contenido de este sitio se publica bajo una licencia <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es">CC BY-SA 4.0</a></p><p>Algunos derechos reservados. © ${new Date().getFullYear()} El Sur También programa.</p>`,
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
          showLastUpdateTime: true,
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
        searchResultContextMaxLength: 100,
        translations: {
          search_placeholder: 'Buscar',
          see_all_results: 'Ver todos los resultados',
          no_results: 'No hay resultados. 😞',
          search_results_for: 'Buscar resultados para "{{ keyword }}"',
          search_the_documentation: 'Buscar en la documentación',
          count_documents_found: '{{ count }} documento encontrado',
          count_documents_found_plural: '{{ count }} documentos encontrados',
          no_documents_were_found:
            'No encontramos nada que coincida con tu búsqueda... 😢',
        },
      },
    ],
  ],
};
