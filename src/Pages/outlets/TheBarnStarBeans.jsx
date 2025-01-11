import React from 'react';
import TheBarnHome from '../../components/outlets/theBarnStarBean/TheBarnHome';
import SecondCardSection from '../../components/outlets/theBarnStarBean/SecondCardSection';
import GallerySection from '../../components/outlets/theBarnStarBean/GallerySection';
import CallUsSection from '../../components/outlets/theBarnStarBean/CallUsSection';
import Footer from '../../components/footer/Footer';

const TheBarnStarBeans = () => {
  return (
    <>
      <TheBarnHome />
      <SecondCardSection />
      <GallerySection />
      <CallUsSection />
      <Footer />
    </>
  );
};

export default TheBarnStarBeans;
