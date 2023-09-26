<template>
    <div
        class="bg-white opacity-[0.85] rounded-xl"
        :class="{ 'cursor-pointer': props.client.description, 'pb-6': isOpen }"
        @click="isOpen = !isOpen"
    >
        <div class="flex items-center justify-between pl-4 flex-nowrap">
            <div>
                <p class="text-lg leading-5 sm:text-2xl font-medium">
                    {{ props.client.brand }}
                </p>
                <p class="text-xs">{{ props.client.title }}</p>
            </div>
            <img
                :src="props.client.image"
                width="102"
                :alt="props.client.brand"
            />
        </div>
        <div class="text-xs pl-4 pr-6 flex flex-col gap-y-4" v-if="isOpen">
            <p>
                {{ props.client.description }}
            </p>
            <NuxtLink
                :to="props.client.link"
                class="underline"
                v-if="props.client.link"
                >Read more</NuxtLink
            >
        </div>
    </div>
</template>

<script setup>
const isOpen = ref(false);

const props = defineProps({
    client: Object,
});
</script>
