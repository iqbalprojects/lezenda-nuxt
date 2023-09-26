<template>
    <Introduce />
    <Navbar />
    <slot />
    <Contacts class="text-black" />
    <a href="https://wa.me/6285156700100" target="_blank">
        <IconsWhatsapp class="fixed bottom-4 right-4" v-if="showButton" />
    </a>
</template>

<script setup>
const showButton = ref(false);

onMounted(() => {
    window.addEventListener("scroll", () => {
        const positionY = window.scrollY;
        if (positionY > 160) {
            showButton.value = true;
        } else {
            showButton.value = false;
        }
    });
});
</script>
