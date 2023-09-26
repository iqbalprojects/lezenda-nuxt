/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        fontFamily: {
            BasisGrotesque: "'Basis Grotesque', sans-serif",
            FreightDisp: "'Freight Disp', sans-serif",
            FreightText: "'Freight Text', sans-serif",
            SelfModern: "'Self Modern', sans-serif",
        },
        screens: {
            xxs: "280px",
            xs: "376px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {},
    },
    plugins: [],
};
