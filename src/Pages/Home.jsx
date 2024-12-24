import React from 'react';
import Hero from '../components/hero/Hero';
import Introduction from '../components/introduction/Introduction';
import CraftingSection from '../components/introduction/CraftingSection';
import AboutThreeCafes from '../components/introduction/AboutThreeCafes';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <CraftingSection />
      <AboutThreeCafes />
      <Footer />
    </>
  );
};

export default Home;
