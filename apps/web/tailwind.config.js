/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../node_modules/flowbite-react/lib/esm/**/*.js',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
