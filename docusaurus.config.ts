import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Sista AI", // Sista AI Documentation   (I append Documentation inthe page)
  tagline: "Advaned library for AI powered Apps",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.sista.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sista-ai", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/sista-ai/docs/blob/main",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  // Plugins configuration
  plugins: [
    [
      // Google Analytics plugin configuration
      "@docusaurus/plugin-google-analytics",
      {
        // Your Google Analytics tracking ID
        trackingID: "G-0GR5RGB090",
        // Whether to anonymize IP addresses
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "/img/sista-ai-logo.png",
    navbar: {
      title: "",
      logo: {
        alt: "Sista AI Logo",
        src: "/img/sista-ai-logo.png",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://smart.sista.ai?utm_source=sista_docs&utm_medium=header_link&utm_campaign=home_link",
          label: "Home",
          position: "left",
        },
				{
          href: "https://smart.sista.ai/about.html?utm_source=sista_docs&utm_medium=header_link&utm_campaign=about_sista_ai/",
          label: "About",
          position: "left",
        },

				{
          href: "https://blog.sista.ai/",
          label: "Blog",
          position: "left",
        },


        {
          href: "https://github.com/sista-ai",
          label: "Github",
          position: "right",
        },
        {
          href: "https://discord.gg/e2arxq9Js4",
          label: "Discord",
          position: "right",
        },

        {
          href: "https://admin.sista.ai",
          label: "Dashboard",
          position: "right",
        },
      ],
    },
    colorMode: {
      defaultMode: "dark",
      // disableSwitch: true,
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © 2022-${new Date().getFullYear()} | Sista AI - All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
