<template>
    <div>
        <div
            class="h-screen bg-gradient-to-b from-[#ffffd6] to-[#9dccea] grid place-content-center text-lg font-medium"
            v-if="pending"
        >
            Loading...
        </div>
        <div class="bg-gradient-to-b from-[#ffffd6] to-[#9dccea] pb-8" v-else>
            <div
                class="font-BasisGrotesque font-medium text-lg px-8 mb-4 lg:container lg:mx-auto"
            >
                <h1 class="text-4xl mb-2 leading-snug tracking-wide">
                    {{ post.title }}
                </h1>
                <p>by {{ post.author }}</p>
                <p>
                    {{
                        new Date(post.published_at).toLocaleDateString("EN", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })
                    }}
                </p>
            </div>
            <NuxtImg
                :src="config.apiDomain + config.storagePath + post.image_url"
                alt=""
                class="mb-10 w-full lg:container lg:px-8 lg:mx-auto"
                v-if="post.image_url"
            />

            <div
                class="px-9 font-BasisGrotesque mb-12 lg:px-8 lg:container lg:mx-auto"
            >
                <div class="flex flex-col gap-y-6 text-lg leading-8 mb-8">
                    <div class="elementor-selector" v-html="post.content"></div>
                </div>
            </div>

            <div
                class="px-8 flex flex-col gap-y-4 my-8 lg:container lg:mx-auto"
            >
                <p>SHARE</p>
                <ul class="flex items-center gap-x-3">
                    <li class="grid place-content-center">
                        <a
                            :href="
                                'https://twitter.com/intent/tweet?url=https://lezenda.netlify.app/posts/' +
                                slug
                            "
                            target="_blank"
                            class="bg-[#1f2144] p-2.5 rounded-full"
                        >
                            <Icon
                                name="ri:twitter-x-fill"
                                color="white"
                                size="2em"
                            />
                        </a>
                    </li>
                    <li class="grid place-content-center">
                        <a
                            :href="
                                'https://www.facebook.com/sharer/sharer.php?u=https://lezenda.netlify.app/posts/' +
                                slug
                            "
                            target="_blank"
                            class="bg-[#1f2144] p-2.5 rounded-full"
                        >
                            <Icon
                                name="fa-brands:facebook-f"
                                color="white"
                                size="2em"
                            />
                        </a>
                    </li>
                    <li class="grid place-content-center">
                        <a
                            :href="
                                'https://api.whatsapp.com/send?text=Check%20out%20this%20article:%20https://lezenda.netlify.app/posts/' +
                                slug
                            "
                            target="_blank"
                            class="bg-[#1f2144] p-2.5 rounded-full"
                        >
                            <Icon
                                name="fa-brands:whatsapp"
                                color="white"
                                size="2em"
                            />
                        </a>
                    </li>

                    <li class="grid place-content-center">
                        <a
                            :href="
                                'https://www.linkedin.com/sharing/share-offsite/?url=https://lezenda.netlify.app/posts/' +
                                slug
                            "
                            target="_blank"
                            class="bg-[#1f2144] p-2.5 rounded-full"
                        >
                            <Icon
                                name="fa-brands:linkedin-in"
                                color="white"
                                size="2em"
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="px-8 my-8 lg:container lg:mx-auto" v-if="post.tags">
                <ul class="flex items-center gap-x-2 gap-y-2.5">
                    <li
                        class="bg-white px-4 py-2.5 rounded-xl"
                        v-for="(tag, index) in post.tags"
                        :key="index"
                    >
                        {{ tag }}
                    </li>
                </ul>
            </div>
            <div class="flex flex-col lg:container lg:mx-auto">
                <NuxtLink
                    :to="post.next_post.path"
                    class="flex gap-x-3 flex-nowrap px-4 py-6 border-y-[0.5px] border-y-black"
                    v-if="post.next_post"
                >
                    <IconsArrowLong
                        stroke="white"
                        class="bg-[#1f2144] rotate-90 shrink-0"
                    />
                    <p class="text-lg font-medium">
                        {{ post.next_post.title }}
                    </p>
                </NuxtLink>
                <NuxtLink
                    :to="post.previous_post.path"
                    class="flex gap-x-3 flex-nowrap px-4 py-6 border-b-[0.5px] border-b-black"
                    :class="{
                        'border-t-0.5px border-t-black': !post.next_post,
                    }"
                    v-if="post.previous_post"
                >
                    <IconsArrowLong
                        stroke="white"
                        class="bg-[#1f2144] -rotate-90 shrink-0"
                    />
                    <p class="text-lg font-medium">
                        {{ post.previous_post.title }}
                    </p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { config } from "~/config";

definePageMeta({
    layout: "posts",
});

const { slug } = useRoute().params;

const { data: post, pending } = await useLazyFetch(
    config.apiDomain + config.apiPath + config.customDomain + "/posts/" + slug,
    { key: slug, transform: (_post) => _post.post }
);

if (!pending.value) {
    if (!post.value) {
        throw createError({ statusCode: 404, statusMessage: "Post Not Found" });
    }
    useSeoMeta({
        title: post.value?.title,
        ogTitle: post.value?.title,
        description: post.value?.meta_description,
        ogDescription: post.value?.meta_description,
        ogImage: config.apiDomain + config.storagePath + post.value?.image_url,
    });
}

watch(pending, () => {
    if (!post.value) {
        throw createError({ statusCode: 404, statusMessage: "Post Not Found" });
    }
    useSeoMeta({
        title: post.value?.title,
        ogTitle: post.value?.title,
        description: post.value?.meta_description,
        ogDescription: post.value?.meta_description,
        ogImage: config.apiDomain + config.storagePath + post.value?.image_url,
    });
});
</script>

<style>
.elementor-selector * {
    all: revert;
}

.elementor-selector img {
    @apply max-w-[13rem] w-screen xs:max-w-xs md:max-w-full;
}
</style>
