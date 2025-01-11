import React from 'react';
import TheBarnImage1 from '../../../assets/outlets/the-barn-images/TheBarnImage1.png';

const SecondCardSection = () => {
  return (
    <>
      <div className="sm:p-10 p-5">
        <div className="p-5 md:grid md:grid-cols-6 md:gap-10 flex flex-col-reverse gap-7 items-center justify-center rounded-[18px] bg-[linear-gradient(98deg,_#BFF7D7_44.08%,_#799D89_118.14%,_#70917E_192.19%)]">
          <img
            src={TheBarnImage1}
            className="md:col-span-2"
            alt="Contact image 1"
          />
          <div className="flex flex-col md:col-span-4 gap-5">
            <h1 className=" font-poppins font-normal text-[#000] 2xl:text-6xl lg:text-5xl md:text-3xl text-2xl">
              Facilities and Expertise
            </h1>
            <h1 className=" font-poppins font-light text-[#000]  2xl:text-2xl lg:text-lg md:text-base text-sm">
              STARBEANS takes pride in offering exceptional services and
              versatile spaces for a variety of occasions, from intimate dinners
              and family reunions to lavish high tea events. Whether you're
              indulging in a steaming cup of coffee or tea while admiring a
              breathtaking sunset or celebrating a special birthday with friends
              and family, STARBEANS is the perfect destination. <br /> Our
              dedicated team, equipped with extensive hospitality experience,
              consistently performs at their best, even under pressure.
              Friendly, professional, and committed, they ensure that every
              visit reflects STARBEANS’ unwavering commitment to excellence.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondCardSection;
