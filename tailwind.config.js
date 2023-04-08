/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                transparent:'transparent',
                current:'currentColor',
                'p-orange': '#e08f17',
                'p-dark-orange':'#ffa51f',
                'p-gray': '#808080',
                'p-darkgray': '#292929',
                'p-bar-gray':'#252525',
                'p-black': '#1b1b1b'
            },
        },
    },
    plugins: [],
}

