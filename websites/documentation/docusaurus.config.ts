import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "STIKOM UI",
  favicon: "img/favicon.ico",
  url: "https://stikom-ui-docs.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: { defaultLocale: "en", locales: ["en"] },
  tagline: "React component library powered by Tailwind CSS.",
  themeConfig: {
    docs: { sidebar: { autoCollapseCategories: true } },
    colorMode: { defaultMode: "dark" },
    navbar: {
      title: "STIKOM UI",
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Learn",
        },
        {
          type: "docSidebar",
          sidebarId: "components",
          position: "left",
          label: "Components",
        },
        {
          href: "https://github.com/haikalrowi/stikom-ui-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Core Concepts", to: "/docs/core-concepts" },
            { label: "Prerequisites", to: "/docs/prerequisites" },
            { label: "Installation", to: "/docs/installation" },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/haikalrowi/stikom-ui-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} STIKOM PGRI Banyuwangi. Built with Docusaurus.`,
    },
    prism: { theme: prismThemes.vsLight, darkTheme: prismThemes.vsDark },
  } satisfies Preset.ThemeConfig,
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/haikalrowi/stikom-ui-docs/tree/main",
        },
        theme: { customCss: "./src/css/custom.css" },
      } satisfies Preset.Options,
    ],
  ],
};

export default config;
