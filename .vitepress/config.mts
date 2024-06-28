import { defineConfig } from "vitepress";
import { sidebar } from "../sidebar-menu.js";

const GTAG = process.env.NODE_ENV !== "development" ? "undefined" : undefined;

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Marco La Rosa's Website",
    appearance: false,
    base: "/",
    srcDir: "./src",
    outDir: "./docs",
    sitemap: {
        hostname: "https://marcolarosa.github.io",
    },
    description: "",
    head: [
        [
            "meta",
            {
                name: "title",
                content: "Marco La Rosa Personal Website",
            },
        ],
        [
            "meta",
            {
                name: "keywords",
                content:
                    "Marco La Rosa, Describo, metadata, editor, VueJS, JSON Linked Data, jsonld, json-ld, Linked Data, content transcription, AI, Generative AI, Conversational AI",
            },
        ],
        [
            "meta",
            {
                name: "author",
                content: "Dr Marco La Rosa (https://marcolarosa.github.io/)",
            },
        ],
        ["script", { async: "", src: `https://www.googletagmanager.com/gtag/js?id=${GTAG}` }],
        [
            "script",
            {},
            `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${GTAG}');`,
        ],
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "./images/logos/describo-logo-small.webp",
        socialLinks: [
            { icon: "github", link: "https://github.com/marcolarosa" },
            { icon: "linkedin", link: "https://www.linkedin.com/in/marcolarosa/" },
        ],
        lastUpdated: {
            text: "Updated at",
            formatOptions: {
                dateStyle: "full",
                timeStyle: "medium",
            },
        },
    },
});
