import React from 'react';
import MainLogo from '../../assets/mainLogo1.png';
import FaceBook from '../../assets/footer/facebook.png';
import Insta from '../../assets/footer/instagram.png';
import TripIcon from '../../assets/footer/tripadvisor.png';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <div className="bg-[#D9D9D9] px-10">
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-8">
        {/* 1st columns */}
        <div className="flex md:gap-8 gap-3 items-center col-span-3 py-5   ">
          <img src={MainLogo} alt="" className="lg:w-[20%] w-[30%]" />
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

        <div className="lg:flex lg:flex-col grid grid-cols-4 gap-1 justify-items-center lg:justify-center  lg:items-center underline    col-span-2 font-poppins text-lg    border-black/25 lg:border-x-2   lg:py-10 py-2">
          <NavLink to="/" className="cursor-pointer">
            Home
          </NavLink>
          <NavLink to="/about" className="cursor-pointer">
            About
          </NavLink>
          <NavLink className="cursor-pointer"> Outlets</NavLink>
          <NavLink to="/contact" className="cursor-pointer">
            Contact
          </NavLink>
        </div>

        {/* 2nd column */}
        <div className=" flex flex-col items-center col-span-3  lg:pb-0 lg:mb-0  pb-5 mb-5  ">
          {/* Title */}
          <h2 className="text-center text-black font-bold text-[17px] lg:text-[20px] mb-4 mt-6 md:mt-0">
            Opening Hours
          </h2>

          <div className="flex flex-col gap-2 font-poppins mx-3">
            <div className="grid grid-cols-2  justify-between items-center ">
              <h1 className="text-[#A57B22] font-bold  text-[13px] lg:text-[18px]">
                10.00 A.M - 10.30 P.M
              </h1>
              <h1 className="text-black text-[13px] lg:text-[18px] text-center">
                Ocean Bistro by Starbeans
              </h1>
            </div>

            <div className="grid grid-cols-2    justify-between items-center ">
              <h1 className="text-[#A57B22] font-bold  text-[13px] lg:text-[18px]">
                10.00 A.M - 10.30 P.M
              </h1>
              <h1 className="text-black text-[13px] lg:text-[18px] text-center">
                Ocean Bistro by Starbeans
              </h1>
            </div>

            <div className="grid grid-cols-2  justify-between items-center ">
              <h1 className="text-[#A57B22] font-bold  text-[13px] lg:text-[18px]">
                10.00 A.M - 10.30 P.M
              </h1>
              <h1 className="text-black text-[13px] lg:text-[18px] text-center">
                Ocean Bistro by Starbeans
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
