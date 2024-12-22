import React from 'react';
import MainLogo from '../../assets/mainLogo1.png';
const NavBar = () => {
  return (
    <header className="lg:inline-block lg:relative  bg-[#333333AB] p-4 text-white items-center justify-between lg:rounded-full w-full lg:mt-12 lg:mx-40">
      {/* Logo */}
      <div className="lg:absolute  lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-20">
        <img
          src={MainLogo}
          alt="Starbeans Ceylon"
          className="lg:w-[36%] w-[20%] md:w-[10%] "
        />
      </div>

      {/* Navigation Links */}
      <div className="font-thmor  justify-center lg:justify-evenly items-center space-x-10 font-normal text-[16px] hidden lg:flex">
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
