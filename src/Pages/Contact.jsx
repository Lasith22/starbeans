import React, { useEffect } from 'react';
import ContactHeader from '../components/contact/ContactHeader';
import ContactForm from '../components/contact/ContactForm';
import Footer from '../components/footer/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
const Contact = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px]  bg-[#E67E22] origin-left z-50"
        style={{ scaleX }}
      />
      <ContactHeader />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
