<template>
    <div class="bg-[#1f2144]">
        <Vue3Marquee>
            <p
                class="px-20 font-BasisGrotesque font-medium tracking-wider text-white text-4xl mt-10 mb-2"
            >
                READ OUR SUCCESS STORY
            </p>
        </Vue3Marquee>

        <div class="divide-y-[0.3px]">
            <PostsList :posts="posts" />
        </div>
    </div>
</template>

<script setup>
import { config } from "~/config";
import axios from "axios";

definePageMeta({
    layout: "case-study",
});
const posts = ref(null);

onMounted(async () => {
    const { data } = await axios.get(
        config.apiDomain + config.apiPath + config.customDomain + "/posts"
    );
    posts.value = data.posts.data;
});
</script>
