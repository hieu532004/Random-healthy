import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1D4ED8',
            },
        },
    },
    plugins: [],
};

export default config;