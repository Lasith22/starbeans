/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bannerImage: 'url(assets/bg-image3.jpg)',
      },
      fontFamily: {
        mainTextStyle: ['Manrope'],
        testText: ['Caveat'],
        kreon: ['Kreon', 'serif'],
        lateef: ['Lateef', 'cursive'],
      },
    },
  },
  plugins: [],
};
