/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                void: '#0A0A0C',
                bone: '#F3F0EA',
                ink: '#111113',
                acid: '#FF2DAB',
                muted: '#8B8B92',
                'line-light': 'rgba(17,17,19,0.14)',
                'line-dark': 'rgba(255,255,255,0.12)',
            },
            fontFamily: {
                space: ['"Space Grotesk"', 'sans-serif'],
                inter: ['"Inter"', 'sans-serif'],
            },
            borderWidth: {
                1: '1px',
            },
        },
    },
    plugins: [],
}
