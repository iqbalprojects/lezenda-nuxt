<template>
    <Expertise />
    <div class="font-FreightDisp text-6xl text-white bg-[#1f2144] px-8">
        <div class="lg:container lg:mx-auto">
            <p class="tracking-wider leading-[1.1]">that crossed path with</p>
            <p class="italic max-w-[17rem] leading-[1.1]">
                the best in the business :
            </p>
        </div>
    </div>
    <ul
        class="bg-gradient-to-b from-[#1f2144] to-[#799cbc] px-4 font-BasisGrotesque tracking-wide flex flex-col gap-y-5 py-8"
    >
        <li
            v-for="(client, index) in clients"
            class="lg:container lg:mx-auto"
            :key="index"
        >
            <Clients :client="client" />
        </li>
    </ul>
    <QnA />
</template>

<script setup>
definePageMeta({
    layout: "index",
});

const clients = [
    {
        brand: "Otten Coffee",
        image: "/images/Otten_Coffee.png",
        title: "Web Development, Ads Management",
        description: "Brewing the best in industry onto online platform with Data-driven strategy, supporting the best and biggest online coffee & tools supplier in Indonesia since 2014.",
        link: null,
    },
    {
        brand: "I Am Geprek Bensu",
        image: "/images/IAM_Geprek_Bensu.png",
        title: "Ads Management, Data & Analytics",
        description: "Build customer base for the growing franchise across Indonesia, Malaysia and Singapore",
        link: "/clients/iamgeprekbensu",
    },
    {
        brand: "Brewsuniq",
        image: "/images/Brewsuniq.png",
        title: "Website Development, Ads Management",
        description: "Successfully Positioned the Brewsuniq high-valued products into Indonesia Ecommerce Landscape since 2015 becoming the main role model in tableware industry in Indonesia.",
        link: null,
    },
    {
        brand: "Smiley",
        image: "/images/Smiley.png",
        title: "Web & App Development",
        description: "Customer Relationship Management to uphold brand standards from the very first step of consultation until transformation. Accumulating all the information and progress in one platform to help customer monitor and understand their transformation.",
        link: null,
    },
    {
        brand: "Norvus Mall",
        image: "/images/Norvus_Mall.png",
        title: "Ads Management, Website Development",
        description: "Developing a one-stop platform for Brand Awareness to Sales. Turning billions into revenue within months.",
        link: null,
    },
    {
        brand: "POSU",
        image: "/images/Posu.png",
        title: "Website Development, Ads Management",
        description: "Fully automate the brand's webhunt (flash sale) trend, making it possible to process hundreds of orders within seconds. While providing unique promotion strategy for brand needs.",
        link: null,
    },
    {
        brand: "Terapung",
        image: "/images/terapung-logo.webp",
        title: "Website Development, Ads Management",
        description: "Integrated Online booking system with Mindbody Wellness Booking System. Enabling swift booking for first-time traveller to Bali without the need to download app or prior registration.",
        link: null,
    },
];
</script>
