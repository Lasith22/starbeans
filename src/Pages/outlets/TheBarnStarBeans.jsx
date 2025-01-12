import React from 'react';
import TheBarnHome from '../../components/outlets/theBarnStarBean/TheBarnHome';
import SecondCardSection from '../../components/outlets/theBarnStarBean/SecondCardSection';
import GallerySection from '../../components/outlets/theBarnStarBean/GallerySection';
import CallUsSection from '../../components/outlets/theBarnStarBean/CallUsSection';
import Footer from '../../components/footer/Footer';
import FoodSection from '../../components/outlets/common/FoodSection';

const TheBarnStarBeans = () => {
  return (
    <>
      <TheBarnHome />
      <SecondCardSection />
      <FoodSection />
      <GallerySection />
      <CallUsSection />
      <Footer />
    </>
  );
};

export default TheBarnStarBeans;
