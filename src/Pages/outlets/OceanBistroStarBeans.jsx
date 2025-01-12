import React from 'react';
import OceanBistroHome from '../../components/outlets/oceanBistroStarBean/OceanBistroHome';
import Footer from '../../components/footer/Footer';
import SecondCardSection from '../../components/outlets/oceanBistroStarBean/SecondCardSection';
import GallerySection from '../../components/outlets/oceanBistroStarBean/GallerySection';
import CallUsSection from '../../components/outlets/theBarnStarBean/CallUsSection';
import FoodSection from '../../components/outlets/common/FoodSection';

const OceanBistroStarBeans = () => {
  return (
    <>
      <OceanBistroHome />
      <SecondCardSection />
      <FoodSection />
      <GallerySection />
      <CallUsSection />
      <Footer />
    </>
  );
};

export default OceanBistroStarBeans;
