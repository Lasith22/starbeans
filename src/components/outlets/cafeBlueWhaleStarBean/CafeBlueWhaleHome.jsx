import React from 'react';
import NavBar from '../../hero/NavBar';

const CafeBlueWhaleHome = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-outletImage3 bg-repeat bg-cover bg-center" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(36deg, rgba(0, 0, 0, 0.68) 11.06%, rgba(0, 0, 0, 0.39) 39.52%, rgba(0, 0, 0, 0.00) 55.04%)',
        }}
      />
      <div className="relative">
        <div className="lg:flex items-center justify-center">
          <NavBar />
        </div>
        <div className="h-screen items-center bg-black/20 sm:bg-inherit text-center sm:text-start ">
          <div className="flex flex-col   mb-10 pt-16 md:pt-24 2xl:pt-40 mx-2 md:mx-20">
            <h1 className="font-normal font-lancelot  text-7xl md:text-6xl lg:text-8xl 2xl:text-9xl text-[#ffffff]">
              Cafe Blue - Whale
            </h1>
            <h1 className="font-normal font-lancelot  text-7xl text-[#ffffff]">
              By Starbeans
            </h1>
          </div>
          <div className="md:grid md:grid-cols-2 gap-4 mx-2 md:mx-20">
            <div className="flex justify-items-center items-center mt-10 gap-2">
              <div className="h-0 p-0.5 w-full bg-white rounded-md" />
              <button className="py-2 px-5 bg-white text-[#1F5363] text-2xl font-lancelot font-semibold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-xl">
                Menu
              </button>
              <div className="h-0 p-0.5 w-full bg-white rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeBlueWhaleHome;
