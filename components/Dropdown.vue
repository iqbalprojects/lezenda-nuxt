<template>
    <div>
        <div
            class="px-8 relative"
            @click="
                isOpen = !isOpen;
                props.client && runNumber();
            "
        >
            <h2 class="tracking-wide">
                {{ props.client ? props.data.brand : props.data.title }}
            </h2>
            <IconsArrowLong
                class="absolute right-7 top-5 xs:top-7"
                :class="
                    props.client && isOpen
                        ? 'rotate-90 bg-[#1f2144] border-[0.5px] border-black'
                        : props.client && !isOpen
                        ? 'bg-white outline outline-[0.5px]'
                        : !props.client && !isOpen
                        ? 'bg-[#1f2144]'
                        : 'rotate-90 bg-[#9ecbea]'
                "
                :stroke="
                    props.client && isOpen
                        ? 'white'
                        : props.client && !isOpen
                        ? 'black'
                        : !props.client && !isOpen
                        ? 'white'
                        : 'black'
                "
            />
        </div>
        <div
            class="max-h-0 border-t-[0.5px] mt-2.5 overflow-hidden transition-all duration-500"
            :class="{ 'max-h-96': isOpen }"
            v-if="!props.client"
        >
            <p class="text-lg my-6 font-SelfModern text-white px-8">
                {{ props.data.descTitle }}
            </p>
            <div
                class="font-BasisGrotesque font-light px-8 pb-1.5 flex flex-col gap-y-5 mb-1.5 text-lg border-b-[0.5px]"
            >
                <p
                    v-for="(text, index) in props.data.descText.split('\n')"
                    :key="index"
                >
                    {{ text }}
                </p>
            </div>
        </div>
        <div
            class="max-h-0 border-t-[0.5px] border-t-black mt-2.5 overflow-hidden transition-all duration-500"
            :class="{
                'max-h-96': isOpen,
            }"
            v-else
        >
            <p
                class="my-6 font-BasisGrotesque px-8 font-medium text-sm text-[#1f2144]"
            >
                {{ props.data.title }}
            </p>
            <div
                class="flex flex-col gap-y-2 px-8 pb-6 border-b-[0.5px] border-b-black"
            >
                <div class="flex no-wrap gap-x-3.5 items-center">
                    <p class="text-black font-medium text-2xl max-w-[3rem]">
                        {{ firstValue }}%
                    </p>
                    <p class="text-[0.7rem] leading-none font-medium">
                        {{ props.data.descriptions[0].text }}
                    </p>
                </div>
                <div class="flex no-wrap gap-x-3.5 items-center">
                    <p class="text-black font-medium text-2xl max-w-[3rem]">
                        {{ secondValue }}%
                    </p>
                    <p class="text-[0.7rem] leading-none font-medium">
                        {{ props.data.descriptions[1].text }}
                    </p>
                </div>
                <div class="flex no-wrap gap-x-3.5 items-center">
                    <p class="text-black font-medium text-2xl max-w-[3rem]">
                        {{ thirdValue }}%
                    </p>
                    <p class="text-[0.7rem] leading-none font-medium">
                        {{ props.data.descriptions[2].text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const isOpen = ref(false);
const showNumber = ref(false);
const firstValue = ref(0);
const secondValue = ref(0);
const thirdValue = ref(0);

const props = defineProps({
    data: Object,
    client: Boolean,
});

function runNumber() {
    if (
        firstValue.value === 0 &&
        secondValue.value === 0 &&
        thirdValue.value === 0
    ) {
        const debounce1 = setInterval(() => {
            if (firstValue.value < props.data.descriptions[0].value) {
                firstValue.value++;
            }
        }, 25);
        const debounce2 = setInterval(() => {
            if (secondValue.value < props.data.descriptions[1].value) {
                secondValue.value++;
            }
        }, 25);
        const debounce3 = setInterval(() => {
            if (thirdValue.value < props.data.descriptions[2].value) {
                thirdValue.value++;
            }
        }, 25);
        return () => {
            clearInterval(debounce1);
            clearInterval(debounce2);
            clearInterval(debounce3);
        };
    } else {
        firstValue.value = 0;
        secondValue.value = 0;
        thirdValue.value = 0;
    }
}
</script>

<style>
.q-circular-progress__text div::after {
    content: "%";
    font-size: small;
}
</style>
