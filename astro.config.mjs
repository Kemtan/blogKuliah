// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// markdown
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
    integrations: [mdx(), sitemap()],
    markdown: {
        remarkPlugins: [remarkMath, remarkBreaks],
        rehypePlugins: [rehypeKatex],
    },
    fonts: [
        {
            provider: fontProviders.local(),
            name: "Atkinson",
            cssVariable: "--font-atkinson",
            fallbacks: ["sans-serif"],
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/atkinson-regular.woff"],
                        weight: 400,
                        style: "normal",
                        display: "swap",
                    },
                    {
                        src: ["./src/assets/fonts/atkinson-bold.woff"],
                        weight: 700,
                        style: "normal",
                        display: "swap",
                    },
                ],
            },
        },
    ],
});
