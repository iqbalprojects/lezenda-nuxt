<template>
    <div class="border rounded-full h-8 w-8 grid place-content-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            class="w-5 h-5"
            :stroke="props.stroke"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
            />
        </svg>
    </div>
</template>

<script setup>
const props = defineProps({
    stroke: String,
});
</script>
