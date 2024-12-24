import React from 'react';
import ContactHome from '../components/contact/ContactHome';
import ContactCard from '../components/contact/ContactCard';
import BigCard from '../components/contact/BigCard';
import Footer from '../components/footer/Footer';

const Contact = () => {
  return (
    <>
      <ContactHome />
      <ContactCard />
      <BigCard />
      <Footer />
    </>
  );
};

export default Contact;
