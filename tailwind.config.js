/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'mm-black': '#1E1E1E',
            },
        },
        fontFamily: {
            jost: ['Jost', 'sans-serif'],
        }
    },
    plugins: [],
};
