// https://nuxt.com/docs/api/configuration/nuxt-config
import axios from "axios";

export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        "nuxt-headlessui",
        "nuxt-swiper",
        "nuxt-icon",
        "nuxt-simple-sitemap",
        "@nuxt/image",
    ],
    headlessui: {
        prefix: "Headless",
    },
    swiper: {
        prefix: "Swiper",
        styleLang: "css",
        modules: ["navigation", "pagination", "free-mode"],
    },
    site: {
        url: "https://lezenda.netlify.app",
    },
    sitemap: {
        // provide dynamic URLs to be included
        xslColumns: [
            // URL column must always be set, no value needed
            { label: "URL", width: "75%" },
            { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
        ],
        urls: async () => {
            const { data: posts }: any = await axios.get(
                "https://s2fb.lezenda.com/api/v1/lezenda.com/posts"
            );
            return posts.posts.data.map((page: any) => ({
                loc: `/posts/${page.path}`,
                lastmod: page.published_at,
            }));
        },
    },
});
