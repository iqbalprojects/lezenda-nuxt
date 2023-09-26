<template>
    <div class="relative -z-10">
        <div class="h-screen">
            <video
                class="min-h-[57rem] w-full object-cover md:h-full"
                poster="/images/cloud.jpeg"
                playsinline
                autoplay
                loop
                muted
            >
                <source src="~assets/videos/cloud.mp4" type="video/mp4" />
            </video>
        </div>

        <div
            class="absolute px-8 w-full h-screen top-0 text-white grid grid-rows-4 items-center"
        >
            <div class="flex flex-col items-center gap-y-1">
                <p
                    class="font-FreightDisp font-light italic text-xl tracking-wider"
                >
                    introducing :
                </p>
                <img
                    src="/images/Lezenda_White.png"
                    alt="Lezenda Logo"
                    width="160"
                />
            </div>

            <div class="flex flex-col items-center gap-y-4 row-span-2">
                <h1
                    class="font-FreightDisp text-5xl xs:text-7xl sm:text-3xl md:text-7xl text-center"
                >
                    we help
                    <span class="italic block">
                        grow brand awareness and increase sales.
                    </span>
                </h1>

                <div class="font-BasisGrotesque">
                    <a href="#expertise" class="underline underline-offset-2"
                        >GET TO KNOW US</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>
