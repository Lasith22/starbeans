import React from 'react';
import NavBar from './NavBar';
import HomePageImage1 from '../../assets/HomePageImage1.png';
import HomePageImage2 from '../../assets/HomePageImage2.png';
import HomePageImage3 from '../../assets/HomePageImage3.png';
import HomePageImage4 from '../../assets/HomePageImage4.png';

const Hero = () => {
  return (
    <>
      <section className="bg-bannerImage bg-repeat bg-cover bg-center">
        <div className=" md:flex items-center justify-center hidden ">
          <NavBar />
        </div>
        <div className="h-screen items-center  sm:justify-center sm:items-center sm:pt-0 pt-20 flex flex-col">
          <div className="w-full px-10 sm:px-20  justify-items-center items-center justify-center flex md:flex flex-col gap-10  sm:gap-40 md:items-baseline lg:items-center lg:grid place-items-center lg:grid-cols-2">
            {/* left section */}
            <div className="bg-[#333333AB] items-center justify-center flex flex-col p-10 rounded-3xl">
              <h1 className=" font-inter text-xl  lg:text-4xl 2xl:text-6xl font-light mb-4 leading-tight text-white">
                "A Feast For Your Senses Awaits."
              </h1>
              <p className="font-sans text-sm sm:text-base leading-relaxed">
                <h1 className=" text-sm  lg:text-2xl 2xl:text-3xl text-[#FFFFFF] font-inter font-normal">
                  "Discover a feast for your senses with delicious flavors,
                  inviting aromas, and a warm ambiance that make every meal
                  unforgettable"
                </h1>
              </p>
            </div>

            {/* right section */}
            <div className="relative inline-block lg:mb-60 lg:pt-0 ">
              {/* Images */}
              <div className="relative z-10">
                <img
                  src={HomePageImage1}
                  alt="Interior view 1"
                  className="2xl:w-[60%] lg:w-[50%] md:w-[60%] w-[60%] z-20 relative translate-x-20 sm:translate-x-0"
                />
                <img
                  src={HomePageImage4}
                  alt="Interior view 2"
                  style={{ position: 'absolute' }}
                  className="2xl:w-[100%] lg:w-[100%] w-[100%]  absolute top-0 sm:-top-1 sm:-translate-x-6 sm:translate-y-22 z-0"
                />
                <img
                  src={HomePageImage2}
                  alt="Interior view 2"
                  className="2xl:w-[50%] lg:w-[40%] md:w-[40%] w-[50%] absolute sm:top-1/2 sm:left-1/3 translate-x-40 -translate-y-14  sm:translate-x-4 sm:translate-y-6 z-50"
                />
                <img
                  src={HomePageImage3}
                  alt="Interior view 2"
                  className="2xl:w-[80%] lg:w-[80%] w-[80%] absolute sm:top-1/5 sm:left-1/8 sm:-translate-x-6 translate-x-10 translate-y-14 sm:translate-y-10 z-40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
