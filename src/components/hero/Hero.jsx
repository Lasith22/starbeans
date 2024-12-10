import React from 'react';
import NavBar from './NavBar';

const Hero = () => {
  return (
    <>
      <section className="bg-bannerImage bg-repeat bg-cover bg-bottom">
        <div className="w-full h-screen">
          <div>
            <NavBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
