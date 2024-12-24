import React from 'react';
import MainLogo from '../../assets/mainLogo1.png';
import FaceBook from '../../assets/footer/facebook.png';
import Insta from '../../assets/footer/instagram.png';
import TripIcon from '../../assets/footer/tripadvisor.png';
const Footer = () => {
  return (
    <div className="bg-[#E3E3E3] p-5 ">
      <div className="flex flex-col md:grid md:grid-cols-2">
        {/* 1st columns */}
        <div className="flex gap-8">
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

        {/* 2nd column */}
        <div className=" flex flex-col items-center">
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
