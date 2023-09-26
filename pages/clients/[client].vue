<template>
    <div>
        <div class="text-white bg-[#1f2144] pb-8">
            <div class="flex items-center justify-between px-5">
                <IconsArrowLong stroke="white" class="rotate-90 scale-90" />
                <p
                    class="font-FreightDisp italic text-5xl text-center mb-5 leading-[2.8rem]"
                >
                    I Am <span class="block">Geprek Bensu</span>
                </p>
                <IconsArrowLong stroke="white" class="-rotate-90 scale-90" />
            </div>
            <div
                class="font-BasisGrotesque text-xs px-8 flex flex-col gap-y-3 text-center mb-8"
            >
                <div class="flex flex-col gap-y-0.5">
                    <p class="text-[#9ecbea] font-medium">WHAT WE DID</p>
                    <p class="font-light tracking-widest">
                        Web Development, Ads Management for Malaysia and
                        Singapore Branch, Data & Analytics
                    </p>
                </div>
                <div class="flex flex-col gap-y-0.5">
                    <p class="text-[#9ecbea]">SINCE</p>
                    <p>2018</p>
                </div>
            </div>
            <img
                src="/images/iam_geprek_bensu_hero.jpeg"
                alt=""
                class="mb-14"
            />

            <div class="px-7 font-BasisGrotesque font-light mb-12">
                <div class="flex flex-col gap-y-6 text-base leading-8 mb-8">
                    <p>
                        Famous for it's crazy good spicy fried chicken, I Am
                        Geprek Bensu has more than 124 opening outlets in
                        Indonesia.
                    </p>
                    <p>
                        Lezenda was worked closely with I Am Geprek Bensu
                        Indonesia for over (x) years to support (lorem ipsum).
                    </p>
                    <p>
                        With the expansion to other country such as Malaysia and
                        Singapore. Lezenda advised on building a strong customer
                        base, (data and analytic - location), conducted
                        (facebook ads), and directed (marketing strategy)
                    </p>
                    <p>As a result, I Am Geprek Bensu Malaysia ...</p>
                </div>

                <div class="font-FreightDisp text-4xl mb-8">
                    <p>They spice the chicken,</p>
                    <p class="italic">
                        We spice
                        <span
                            class="underline underline-[0.5px] underline-offset-[6px] decoration-[1px] text-[#9ecbea]"
                            >the numbers.</span
                        >
                    </p>
                </div>

                <div class="flex flex-col divide-y-[1px] last:border-b-[1px]">
                    <div class="flex items-center gap-x-6 py-4">
                        <p class="text-4xl w-28">{{ firstValue }}%</p>
                        <p class="w-40">
                            Offline sales with organic and paid engagement.
                        </p>
                    </div>
                    <div class="flex items-center gap-x-6 py-4">
                        <p class="text-4xl w-28">{{ secondValue }}%</p>
                        <p class="w-40">
                            Engagement level over (x) month period.
                        </p>
                    </div>
                    <div class="flex items-center gap-x-6 py-4">
                        <p class="text-4xl w-28">{{ thirdValue }}+</p>
                        <p class="w-40">
                            35+ pieces of campaign secured over 2022.
                        </p>
                    </div>
                </div>
            </div>
            <Swiper
                :slides-per-view="'auto'"
                :initial-slide="1"
                :centered-slides="true"
                :space-between="10"
                :modules="[SwiperPagination]"
                class="mySwiper"
            >
                <SwiperSlide as="div" class="max-w-fit">
                    <img
                        src="/images/1.jpg"
                        alt=""
                        class="rounded-xl h-[32rem]"
                    />
                </SwiperSlide>
                <SwiperSlide as="div" class="max-w-fit">
                    <img
                        src="/images/2.jpg"
                        alt=""
                        class="rounded-xl h-[32rem]"
                    />
                </SwiperSlide>
                <SwiperSlide as="div" class="max-w-fit">
                    <img
                        src="/images/3.jpg"
                        alt=""
                        class="rounded-xl h-[32rem]"
                    />
                </SwiperSlide>
            </Swiper>
            <div
                class="px-8 font-BasisGrotesque text-xs font-light flex flex-col gap-y-2 mt-4 mb-12"
            >
                <p class="text-[#9ecbea]">VISIT</p>
                <a href="" class="underline">iamgeprekbensu.com</a>
                <a href="" class="underline">@iamgeprekbensu.my</a>
            </div>

            <NuxtLink
                to="/case-study"
                class="px-8 underline underline-offset-2 decoration-[0.5px] flex items-center gap-x-2"
                >ALL STORIES
                <IconsArrowLong stroke="white" class="-rotate-90 border-none" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "case-study",
});

const firstValue = ref(0);
const secondValue = ref(0);
const thirdValue = ref(0);

onMounted(() => {
    window.addEventListener("scroll", () => {
        const positionY = window.scrollY;
        if (positionY > 900 && positionY < 1000) {
            const debounce1 = setInterval(() => {
                if (firstValue.value < 300) {
                    firstValue.value++;
                }
            }, 25);
            const debounce2 = setInterval(() => {
                if (secondValue.value < 40) {
                    secondValue.value++;
                }
            }, 150);
            const debounce3 = setInterval(() => {
                if (thirdValue.value < 35) {
                    thirdValue.value++;
                }
            }, 150);

            return () => {
                clearInterval(debounce1);
                clearInterval(debounce2);
                clearInterval(debounce3);
            };
        }
    });
});
</script>
