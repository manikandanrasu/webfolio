// tailwind.config.js

/** @type {import('tailwindcss').Config } */
export default  {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['var(--font-montserrat)'],
            },
        },
    },
    plugins: [],
};