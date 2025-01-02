import React from 'react';
import Hero from '../components/hero/Hero';
import Introduction from '../components/introduction/Introduction';
import CraftingSection from '../components/introduction/CraftingSection';
import AboutThreeCafes from '../components/introduction/AboutThreeCafes';
import Footer from '../components/footer/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px]  bg-[#E67E22] origin-left z-50"
        style={{ scaleX }}
      />
      <Hero />
      <Introduction />
      <CraftingSection />
      <AboutThreeCafes />
      <Footer />
    </>
  );
};

export default Home;
