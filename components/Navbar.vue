<template>
    <HeadlessDisclosure
        as="div"
        id="navbar"
        class="py-4 bg-[#1f2144] sticky top-0 z-50"
    >
        <HeadlessDisclosureButton
            as="div"
            class="px-8 my-4 flex items-center justify-between lg:container lg:mx-auto"
        >
            <NuxtLink to="/">
                <img
                    :src="`/images/${props.logoName || 'Lezenda_White.png'}`"
                    alt="Lezenda Logo"
                    width="130"
                />
            </NuxtLink>
            <IconsStar
                :fill="
                    props.logoName === 'Lezenda_Blue.png' ? '#1f2144' : 'white'
                "
                class="cursor-pointer"
                @click="isShowing = !isShowing"
            />
        </HeadlessDisclosureButton>
        <HeadlessTransitionRoot
            as="div"
            class="fixed top-0 z-10"
            :show="isShowing"
            enter="transform transition ease-in duration-300"
            enter-from="-translate-x-full opacity-0"
            enter-to="translate-x-0 opacity-100"
            leave="transform transition ease-out duration-300"
            leave-from="translate-x-0 opacity-100"
            leave-to="-translate-x-full opacity-0"
        >
            <HeadlessDisclosurePanel
                as="div"
                class="z-10 bg-[#9ecbea] w-screen h-screen py-4"
            >
                <div class="lg:container lg:mx-auto">
                    <div class="flex justify-end my-4 px-8">
                        <IconsStar
                            fill="#1f2144"
                            class="rotate-45 cursor-pointer"
                            @click="isShowing = !isShowing"
                        />
                    </div>
                    <ul class="font-BasisGrotesque font-medium text-2xl">
                        <li @click="isShowing = !isShowing">
                            <NuxtLink
                                to="/"
                                class="block border-b-[0.5px] border-b-black px-8 pb-1.5 mt-6"
                                >Home</NuxtLink
                            >
                        </li>
                        <li @click="isShowing = !isShowing">
                            <NuxtLink
                                to="/clients"
                                class="block border-b-[0.5px] border-b-black px-8 pb-1.5 mt-6"
                                >Clients</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/case-study"
                                class="block border-b-[0.5px] border-b-black px-8 pb-1.5 mt-6"
                                >Case Study</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to=""
                                class="block border-b-[0.5px] border-b-black px-8 pb-1.5 mt-6"
                                >Blog</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to=""
                                class="block border-b-[0.5px] border-b-black px-8 pb-1.5 mt-6"
                                >Contact</NuxtLink
                            >
                        </li>
                    </ul>
                </div>
            </HeadlessDisclosurePanel>
        </HeadlessTransitionRoot>
    </HeadlessDisclosure>
</template>

<script setup>
const isShowing = ref(false);

const props = defineProps({
    logoName: String,
});
</script>
