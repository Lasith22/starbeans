import React from 'react';
import NavBar from '../hero/NavBar';

const ContactHome = () => {
  return (
    <section className="bg-contactImage  bg-repeat bg-cover bg-center">
      <div className="lg:flex items-center justify-center   ">
        <NavBar />
      </div>
      <div className="h-screen items-center  sm:justify-center sm:items-center sm:pt-0 pt-20 flex flex-col "></div>
    </section>
  );
};

export default ContactHome;
