<template>
    <Navbar class="bg-[#ffffd6]" logoName="Lezenda_Blue.png" />
    <slot />
    <Contacts
        class="bg-[#9dccea] bg-none"
        card="bg-white text-black border-b-black"
    />
    <a href="https://wa.me/6285156700100" target="_blank">
        <IconsWhatsapp class="fixed bottom-4 right-4" />
    </a>
</template>
