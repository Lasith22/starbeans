import React from 'react';
import NavBar from './NavBar';

const Hero = () => {
  return (
    <>
      <section className="bg-bannerImage bg-repeat bg-cover bg-center">
        <div className="w-full h-screen">
          <div className=" flex items-center justify-center">
            <NavBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
