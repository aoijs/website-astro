import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "aoi.js",
    social: {
      github: "https://github.com/aoijs/website-astro",
      discord: "https://discord.com/invite/HMUfMXDQsV"
    },
    editLink: {
      baseUrl: 'https://github.com/aoijs/website-astro/edit/main/docs/',
    },
    sidebar: [{
      label: "Introduction",
      link: "/guides/setup"
    }, {
      label: "Guides",
      items: [{
        label: "Application Commands",
        autogenerate: {
          directory: "guides/application-cmds"
        },
        collapsed: true
      }, {
        label: "Client",
        autogenerate: {
          directory: "guides/client"
        },
        collapsed: true
      }, {
        label: "Other",
        autogenerate: {
          directory: "guides/other"
        },
        collapsed: true
      }]
    },
    // A group linking to all pages in the reference directory.
    {
      label: "Functions",
      autogenerate: {
        directory: "functions"
      },
      collapsed: true
    }]
  }), react(), tailwind()],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp"
    }
  }
});