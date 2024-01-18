// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KarteLore',
  tagline: 'Pierwszy Geopolityczny serwer minecraft w Polsce!',
  favicon: 'img/favicon.ico',
  
  url: 'https://docs.kartelore.pl',
  baseUrl: '/',

  organizationName: 'KarteloreMc', // Usually your GitHub org/user name.
  projectName: 'karteloredocs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/card.png',
    navbar: {
      title: 'KarteLore',
      logo: {
        alt: 'Logo Strony',
        src: 'img/koronka.png',
      },
      items: [
        {
          to: 'https://www.kartelore.pl/',
          label: 'Strona Serwera', 
          position: 'left', 
        },
        {
          href: 'https://mapa.kartelore.pl/',
          label: 'Dynmapa',
          position: 'left',
        },
		{
          href: 'https://sklep.kartelore.pl/',
          label: 'Sklep',
          position: 'left',
        },
		{
          href: 'https://discord.gg/kartelore',
          label: 'Discord',
          position: 'left',
        },
      ],
    },
	algolia: {
      apiKey: 'e24badb7e4e9ae9554c98fae8c862a82',
      indexName: 'karteloredocs',
      appId: 'RQF4GWDI8V',

      // Optional: see doc section bellow
      // contextualSearch: true,

      //... other Algolia params
    },
    footer: {
      style: 'dark',
      links: [
      ],
      // Use string concatenation instead of template literals
      copyright:
        'Copyright © ' + new Date().getFullYear() + ' KarteLore',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
	colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },
};

module.exports = config;