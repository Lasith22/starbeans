/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bannerImage: 'url(assets/bg-image3.jpg)',
        contactImage: 'url(assets/ContactMainImage4.jpg)',
        contactImage2: 'url(assets/Hikkaduwa1.png)',
      },
      fontFamily: {
        mainTextStyle: ['Manrope'],
        testText: ['Caveat'],
        kreon: ['Kreon', 'serif'],
        lateef: ['Lateef', 'cursive'],
        thmor: ['Kdam Thmor Pro', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        kranky: ['Kranky', 'cursive'],
        lancelot: ['Lancelot', 'cursive'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
        manjari: ['"Manjari"', 'sans-serif'],
      },
      boxShadow: {
        'custom-card': '0px 4px 29px 11px rgba(0, 0, 0, 0.25)',
        'inset-shadow': 'inset 0px 0px 20px 0px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
