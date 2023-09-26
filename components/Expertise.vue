<template>
    <div id="expertise" class="bg-[#1f2144] text-white pb-6 pt-14">
        <div class="lg:container lg:mx-auto">
            <div
                class="font-FreightDisp text-5xl xs:text-7xl flex flex-col mb-10 px-8"
            >
                <p class="italic tracking-wider">Digital consultants</p>
                <p class="">experts in</p>
            </div>
            <ul class="font-BasisGrotesque font-light text-base xs:text-2xl">
                <li
                    class="mb-5"
                    v-for="(data, index) in datas.expertise"
                    :key="index"
                >
                    <Dropdown :data="data" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const datas = reactive({
    expertise: [
        {
            title: "Website Development",
            descTitle: "",
            descText:
                "Build your dream websites.\n Whether you're envisioning an e-commerce powerhouse, a slick company profile, or something uniquely you, we've got the skills to make it happen. Expect a site that's not only a feast for the eyes but also a breeze for users to navigate.\n",
        },
        {
            title: "Google Ads",
            descTitle: "Search, Youtube, Display Network",
            descText:
                "Need more leads, sales and awareness.\n Gain exposure on Google Search high-intent users then make sure they remember you on Youtube and Google Display Network.\n",
        },
        {
            title: "Instagram Ads",
            descTitle: "Instagram, Facebook, Meta",
            descText:
                "Harness the power of the biggest social media with high-buying power users to influence your product to the masses digitally.\n",
        },
        {
            title: "Marketplace Optimization",
            descTitle: "Tokopedia, Shopee",
            descText:
                "Ecommerce isn't just about setting up shop; it's about being the store everyone talks about. We'll walk you through everything, from selecting the ideal platform, sprucing up your product listings, and optimizing your store for better visibility.  Let’s maximize your ecommerce potential and achieve sustainable growth.\n",
        },
        {
            title: "SEO Management",
            descTitle: "Search Engine Optimization",
            descText:
                "Unlock the Full Potential of Google Search for Your Business.\n",
        },
    ],
});
</script>
