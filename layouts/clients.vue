<template>
    <Navbar class="bg-[#9ecbea]" logoName="Lezenda_Blue.png" />
    <slot />
    <Contacts
        class="from-[#ffffed] to-[#feffd5]"
        card="bg-[#1E2144] text-white border-b-white"
    />
    <a href="https://wa.me/6285156700100" target="_blank">
        <IconsWhatsapp class="fixed bottom-4 right-4" />
    </a>
</template>
