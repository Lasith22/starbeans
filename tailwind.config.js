/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bannerImage: 'url(assets/bg-image.jpg)',
      },
      fontFamily: {
        mainTextStyle: ['Manrope'],
        testText: ['Caveat'],
      },
    },
  },
  plugins: [],
};
