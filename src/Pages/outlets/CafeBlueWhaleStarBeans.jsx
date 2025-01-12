import React from 'react';
import CafeBlueWhaleHome from '../../components/outlets/cafeBlueWhaleStarBean/CafeBlueWhaleHome';
import SecondCardImage from '../../components/outlets/cafeBlueWhaleStarBean/SecondCardImage';
import GallerySection from '../../components/outlets/theBarnStarBean/GallerySection';
import CallUsSection from '../../components/outlets/theBarnStarBean/CallUsSection';
import Footer from '../../components/footer/Footer';
import FoodSection from '../../components/outlets/common/FoodSection';

const CafeBlueWhaleStarBeans = () => {
  return (
    <>
      <CafeBlueWhaleHome />
      <SecondCardImage />
      <FoodSection />
      <GallerySection />
      <CallUsSection />
      <Footer />
    </>
  );
};

export default CafeBlueWhaleStarBeans;
