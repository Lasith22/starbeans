import React from 'react';
import NavBar from '../hero/NavBar';

const ContactHome = () => {
  return (
    <section className="bg-contactImage  bg-repeat bg-cover bg-center">
      <div className="lg:flex items-center justify-center   ">
        <NavBar />
      </div>
      <div className="h-screen items-center justify-center flex">
        <h1 className=" font-normal font-kranky  text-7xl md:text-6xl lg:text-8xl  2xl:text-9xl text-[#ffffff] pb-10 text-center">
          Starbeans Ceylon.
        </h1>
      </div>
    </section>
  );
};

export default ContactHome;
