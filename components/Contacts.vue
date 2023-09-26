<template>
    <div class="bg-gradient-to-b from-[#c3dfe2] to-[#feffd5] py-4">
        <div
            class="font-FreightDisp text-7xl px-8 py-4 tracking-wide flex flex-col gap-y-2 lg:container lg:mx-auto"
            :class="props.card && 'text-[#1E2144]'"
        >
            <p>Want to</p>
            <p class="italic">reach out?</p>
        </div>
        <div class="font-BasisGrotesque font-light lg:container lg:mx-auto">
            <ul class="flex flex-col gap-y-5 px-4 py-6">
                <li>
                    <a
                        href="mailto:ping@lezenda.com"
                        target="_blank"
                        class="opacity-95 rounded-xl px-4 py-8 flex flex-col gap-y-1.5"
                        :class="props.card || 'bg-white text-black'"
                    >
                        <p
                            class="text-2xl xs:text-3xl border-b-[1.5px] text-ellipsis border-b-black w-fit leading-7"
                            :class="props.card || 'text-black '"
                        >
                            ping@lezenda.com
                        </p>
                        <p
                            class="font-light"
                            :class="props.card || 'text-black '"
                        >
                            Click to send an email
                        </p>
                    </a>
                </li>
                <li>
                    <a
                        href="https://wa.me/6285156700100"
                        target="_blank"
                        class="opacity-95 rounded-xl px-4 py-8 flex flex-col gap-y-1.5"
                        :class="props.card || 'bg-white'"
                    >
                        <p
                            class="text-2xl xs:text-3xl border-b-[1.5px] border-b-black w-fit leading-7"
                            :class="props.card || 'text-black '"
                        >
                            +628 5156 700 100
                        </p>
                        <p
                            class="font-light"
                            :class="props.card || 'text-black '"
                        >
                            Click to send a message
                        </p>
                    </a>
                </li>
            </ul>
            <div class="px-8 my-8 flex flex-col gap-y-6">
                <ul class="flex items-center justify-between">
                    <li class="hover:underline">
                        <a href="mailto:hr@lezenda.com" target="_blank"
                            >Join the team</a
                        >
                    </li>
                    <li class="hover:underline">
                        <a
                            href="https://instagram.com/lezendacom"
                            target="_blank"
                            >Discover Our Story</a
                        >
                    </li>
                    <li><a href="">Privacy + terms</a></li>
                </ul>
                <p class="text-xs tracking-wide">@2023 Lezenda</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    card: String,
});
</script>
