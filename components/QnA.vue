<template>
    <div
        class="bg-gradient-to-b from-[#799cbc] to-[#c3dfe2] text-[#1f2144] py-5"
    >
        <Vue3Marquee>
            <p class="px-20 font-FreightDisp tracking-wide text-6xl my-7">
                A peek into
                <span class="underline underline-offset-8 decoration-2 italic"
                    >our mind</span
                >
            </p>
        </Vue3Marquee>

        <div class="font-BasisGrotesque text-[1.33rem] lg:container lg:mx-auto">
            <div
                class="border-b border-b-black pb-4 mt-8"
                v-for="post in dataPosts"
                :key="post.id"
            >
                <div class="px-8">
                    <p>"{{ post.title }}"</p>
                    <NuxtLink :to="'/posts/' + post.path">
                        <p class="text-sm font-light underline">Read more</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { config } from "~/config";
import axios from "axios";

// const { data: posts } = await useAsyncData("mountains", () =>
//     $fetch(config.apiDomain + config.apiPath + config.customDomain + "/posts")
// );

const dataPosts = ref(null);

onMounted(async () => {
    const { data } = await axios.get(
        config.apiDomain + config.apiPath + config.customDomain + "/posts"
    );
    dataPosts.value = data.posts.data.filter((post, index) => index < 3);
});
</script>
