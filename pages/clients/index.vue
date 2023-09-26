<template>
    <div>
        <div class="bg-[#9ecbea] pt-14">
            <div class="px-8 flex flex-col gap-y-10 lg:container lg:mx-auto">
                <h1
                    class="font-FreightDisp text-[#1f2144] text-5xl xs:text-7xl tracking-wide"
                >
                    Meet<span class="block italic">our clients</span>
                </h1>
                <HeadlessMenu
                    as="div"
                    class="relative self-end font-BasisGrotesque"
                >
                    <div>
                        <HeadlessMenuButton
                            class="flex items-center underline font-light gap-x-1.5 text-sm"
                        >
                            View all
                            <IconsArrow />
                        </HeadlessMenuButton>
                    </div>
                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <HeadlessMenuItems
                            class="absolute z-10 right-0 mt-2 w-64 divide-y-[1.2px] divide-gray-300 rounded-2xl bg-[#e9ebec] opacity-95 shadow-lg"
                        >
                            <HeadlessMenuItem
                                v-for="(data, index) in datas.expertise"
                                :key="index"
                                v-slot="{ active }"
                            >
                                <button
                                    :class="[
                                        active
                                            ? 'bg-[#9ecbea]'
                                            : 'text-gray-900',
                                        'w-full flex px-7 pb-3 pt-3.5 font-medium',
                                    ]"
                                >
                                    {{ data }}
                                </button>
                            </HeadlessMenuItem>
                        </HeadlessMenuItems>
                    </transition>
                </HeadlessMenu>
            </div>
        </div>
        <ul
            class="font-BasisGrotesque py-10 font-light text-2xl bg-gradient-to-b from-[#9ecbea] to-[#ffffed]"
        >
            <li
                class="mb-5 lg:container lg:mx-auto"
                v-for="(data, index) in datas.clients"
                :key="index"
            >
                <Dropdown :data="data" :client="true" />
            </li>
        </ul>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "clients",
});

const emits = defineEmits(["setColorNavbar"]);

onMounted(async () => {
    emits("setColorNavbar", "bg-[#9ecbea]");
});

const datas = reactive({
    expertise: [
        "Website Development",
        "Google Ads",
        "Instagram Ads",
        "Marketing Strategy",
        "Data & Analytics",
        "Marketplace Optimization",
        "Others",
    ],
    clients: [
        {
            brand: "I Am Geprek Bensu",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
            link: "brewsuniq.com",
        },
        {
            brand: "Brewsuniq",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Otten Coffe",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Smiley",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Posu",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Norvus Mall",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Terapung FLoat Club",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Maxima",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Jawara Roti & Kue",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Shop with Celine",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Loulourose",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Menatar Bawah Sadar",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Organic Basic",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Sugarbomb",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Daily Beating",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Mauv",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Kiyora",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "OHO Eyewear",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "OOTD Pet",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "The Prime",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Hartwell",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Nirvana",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
        {
            brand: "Brothers Cafe",
            title: "SETTING UP THE ONLINE PLATFORM AND PENETRATING THE DIGITAL MARKET",
            descriptions: [
                {
                    value: 60,
                    text: "web-based sales conversion growth over the first year",
                },
                {
                    value: 70,
                    text: "customer base growth over 3 months period",
                },
                {
                    value: 30,
                    text: "sales conversion from online campaign over a period of 3 months.",
                },
            ],
            whatWeDid: ["Website Development", "Digital Ads"],
        },
    ],
});
</script>
