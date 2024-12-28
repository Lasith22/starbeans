import React from 'react';
import MainLogo from '../../assets/mainLogo1.png';
import FaceBook from '../../assets/footer/facebook.png';
import Insta from '../../assets/footer/instagram.png';
import TripIcon from '../../assets/footer/tripadvisor.png';
const Footer = () => {
  return (
    <div className="bg-[#D9D9D9] px-10">
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-8">
        {/* 1st columns */}
        <div className="flex md:gap-8 gap-3 items-center col-span-3  lg:py-0 py-10   ">
          <img src={MainLogo} alt="" className="w-[30%]" />
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-5">
              <img src={FaceBook} alt="" className="w-[16%]" />
              <img src={Insta} alt="" className="w-[16%]" />
              <img src={TripIcon} alt="" className="w-[16%]" />
            </div>
            <div className="flex flex-col">
              <h1 className=" font-mainTextStyle ">Phone: +94 912 235 500</h1>
              <h1 className=" font-mainTextStyle ">
                Email: malan@starbeans.com
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-items-center justify-center  items-center underline    col-span-2 font-poppins text-lg   lg:border-black/25 lg:border-x-2  py-10">
          <h1 className="  cursor-pointer">Home</h1>
          <h1 className="  cursor-pointer">About</h1>
          <h1 className="  cursor-pointer"> Outlets</h1>
          <h1 className="  cursor-pointer">Contact</h1>
        </div>

        {/* 2nd column */}
        <div className=" flex flex-col items-center col-span-3  pb-10  ">
          {/* Title */}
          <h2 className="text-center text-black font-bold text-[20px] lg:text-[28px] mb-4 mt-6 md:mt-0">
            Opening Hours
          </h2>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-5">
              <span className="text-[#2C7A69] font-bold text-[16px] lg:text-[18px]">
                10.00 A.M - 10.30 P.M
              </span>
              <span className="text-black text-[16px] lg:text-[18px]">
                Ocean Bistro by Starbeans
              </span>
            </div>

            <div className="flex items-center gap-5">
              <span className="text-[#2C7A69] font-bold text-[16px] lg:text-[18px]">
                7.00 A.M - 10.30 P.M
              </span>
              <span className="text-black text-[16px] lg:text-[18px]">
                The Barn by Starbeans
              </span>
            </div>

            <div className="flex items-center gap-5">
              <span className="text-[#2C7A69] font-bold text-[16px] lg:text-[18px]">
                7.00 A.M - 10.00 P.M
              </span>
              <span className="text-black text-[16px] lg:text-[18px]">
                Starbeans Cafe Blue-Whale
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
