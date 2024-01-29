// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//     '../../node_modules/flowbite-react/lib/esm/**/*.js',

//     // Or if using `src` directory:
//     './src/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('flowbite/plugin')],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // ...
    '../../node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: '300px auto', // 👈 for sidebar layout. adds grid-cols-sidebar class
      },
      gridTemplateRows: {
        header: '64px auto', // 👈 for the navbar layout. adds grid-rows-header class
      },
    },
    colors: {
      primary: '#580713',
      secondary: '#8D0A1F',
      success: '#2ecc71',
      third: '#AF0B27',
      fix: '#F6EEEA',
    },
  },
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
};
