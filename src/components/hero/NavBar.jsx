import React from 'react';
import MainLogo from '../../assets/mainLogo1.png';
const NavBar = () => {
  return (
    <header className="inline-block relative  bg-[#333333AB] p-4 text-white items-center justify-between rounded-full w-full mt-12 mx-40">
      {/* Logo */}
      <div className="absolute  top-1/2 transform -translate-y-1/2 -translate-x-20">
        <img src={MainLogo} alt="Starbeans Ceylon" className="w-[36%]  " />
      </div>

      {/* Navigation Links */}
      <div className=" font-thmor flex justify-center lg:justify-evenly items-center space-x-10 font-normal text-[16px]">
        <a
          href="#home"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          About
        </a>
        <a
          href="#outlets"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          Outlets
        </a>
        <a
          href="#reservations"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          Reservations
        </a>
        <a
          href="#contact"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default NavBar;
