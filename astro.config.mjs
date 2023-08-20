import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://aoijs.github.io",
  base: "/website-astro",
  integrations: [
    starlight({
      title: "aoi.js",
      favicon: "/favicon.png",
      logo: {
        src: "/favicon.png",
      },
      social: {
        github: "https://github.com/aoijs/website-astro",
        discord: "https://discord.com/invite/HMUfMXDQsV",
      },
      editLink: {
        baseUrl: "https://github.com/aoijs/website-astro/edit/main/docs/",
      },
      sidebar: [
        {
          label: "Introduction",
          link: "/guides/setup",
        },
        {
          label: "Guides",
          items: [
            {
              label: "Application Commands",
              autogenerate: {
                directory: "guides/application-cmds",
              },
              collapsed: true,
            },
            {
              label: "Client",
              autogenerate: {
                directory: "guides/client",
              },
              collapsed: true,
            },
            {
              label: "Other",
              autogenerate: {
                directory: "guides/other",
              },
              collapsed: true,
            },
          ],
        },
        // A group linking to all pages in the reference directory.
        {
          label: "Functions",
          items: [
            {
              label: "Array",
              autogenerate: {
                directory: "functions/array-related",
              },
              collapsed: true,
            },
            {
              label: "Awaited",
              autogenerate: {
                directory: "functions/awaited-related",
              },
              collapsed: true,
            },
            {
              label: "Client",
              autogenerate: {
                directory: "functions/client-related",
              },
              collapsed: true,
            },
            {
              label: "Event",
              autogenerate: {
                directory: "functions/event-related",
              },
              collapsed: true,
            },
            {
              label: "Guild",
              autogenerate: {
                directory: "functions/guild-related",
              },
              collapsed: true,
            },
            {
              label: "Info",
              autogenerate: {
                directory: "functions/info-related",
              },
              collapsed: true,
            },
            {
              label: "Interaction",
              autogenerate: {
                directory: "functions/interaction-related",
              },
              collapsed: true,
            },
            {
              label: "Invite",
              autogenerate: {
                directory: "functions/invite-related",
              },
              collapsed: true,
            },
            {
              label: "Math",
              autogenerate: {
                directory: "functions/math-related",
              },
              collapsed: true,
            },
            {
              label: "Message",
              autogenerate: {
                directory: "functions/message-related",
              },
              collapsed: true,
            },
            {
              label: "Misc",
              autogenerate: {
                directory: "functions/misc-related",
              },
              collapsed: true,
            },
            {
              label: "User",
              autogenerate: {
                directory: "functions/user-related",
              },
              collapsed: true,
            },
            {
              label: "Util",
              autogenerate: {
                directory: "functions/util-related",
              },
              collapsed: true,
            },
            {
              label: "Variables",
              autogenerate: {
                directory: "functions/variables-related",
              },
              collapsed: true,
            },
          ],
          collapsed: true,
        },
      ],
    }),
    react(),
    tailwind(),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
