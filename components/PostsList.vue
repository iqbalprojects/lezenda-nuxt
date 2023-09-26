<template>
    <figure class="px-4 py-10" v-for="post in props.posts" :key="post.id">
        <NuxtImg
            :src="config.apiDomain + config.storagePath + post.image_url"
            class="rounded-lg w-full"
            alt=""
        />
        <figcaption class="text-white px-4 pt-6 pb-2">
            <p class="font-BasisGrotesque text-xs mb-2">
                {{ post.author }}
            </p>
            <p class="font-FreightDisp text-4xl leading-snug">
                {{ post.title }}
            </p>
            <div
                class="font-BasisGrotesque text-sm mt-6 underline underline-offset-2 decoration-[0.5px]"
            >
                <NuxtLink :to="'/posts/' + post.path">READ MORE</NuxtLink>
            </div>
        </figcaption>
    </figure>
</template>

<script setup>
import { config } from "~/config";

const props = defineProps(["posts"]);
</script>
