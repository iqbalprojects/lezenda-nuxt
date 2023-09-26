<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import { config } from "~/config";

const { data: gaID } = await useFetch(
    config.apiDomain + config.apiPath + config.customDomain,
    {
        transform: (_gaID) => _gaID.user.ga_id,
    }
);

useHead({
    script: [
        {
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${gaID.value}`,
            tagPosition: "head",
        },
        {
            innerHTML: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaID.value}');
                  `,
            tagPosition: "head",
        },
    ],
});

useSeoMeta({
    title: "Lezenda - Ecommerce Marketing Consultant",
    ogTitle: "Lezenda - Ecommerce Marketing Consultant",
    description: "We help grow brand awareness and increase sales.",
    ogDescription: "We help grow brand awareness and increase sales.",
    ogImage: "/images/lezenda_logo.png",
    twitterCard: "summary_large_image",
});
</script>
