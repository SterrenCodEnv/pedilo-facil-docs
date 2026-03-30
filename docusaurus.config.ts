import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "PediloFácil — Guía para Franquiciados",
  tagline:
    "Todo lo que necesitás saber para gestionar tu local con PediloFácil",
  favicon: "img/favicon.ico",

  url: "https://SterrenCodEnv.github.io",
  baseUrl: "/pedilo-facil-docs/",
  trailingSlash: false,

  organizationName: "SterrenCodEnv",
  projectName: "pedilo-facil-docs",
  deploymentBranch: "gh-pages",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/pedilofacil-card.png",
    navbar: {
      title: "PediloFácil",
      logo: {
        alt: "PediloFácil Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentación",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `© ${new Date().getFullYear()} PediloFácil — Plataforma de pedidos para heladerías Grido`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
