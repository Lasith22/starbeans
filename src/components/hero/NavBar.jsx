import MainLogo from '../../assets/mainLogo1.png';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { TiThMenuOutline } from 'react-icons/ti';
import { Drawer } from '@mui/material';
import { NavLink } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import { Dropdown } from 'antd';

const NavBar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const items = [
    {
      key: '1',
      label: (
        <NavLink
          to="/outlets/the-barn-outlet"
          className={({ isActive }) =>
            isActive
              ? 'text-black rounded-lg underline font-kreon'
              : 'text-white cursor-pointer z-40 font-kreon'
          }
        >
          The Barn By Starbeans
        </NavLink>
      ),
    },
    {
      key: '2',
      label: (
        <NavLink
          to="/outlets/ocean-bistro-outlet"
          className={({ isActive }) =>
            isActive
              ? 'text-black rounded-lg underline font-kreon'
              : 'text-white cursor-pointer z-40 font-kreon'
          }
        >
          Ocean Bistro By Starbeans
        </NavLink>
      ),
    },
    {
      key: '3',
      label: (
        <NavLink
          to="/outlets/cafe-blue-whale-outlet"
          className={({ isActive }) =>
            isActive
              ? 'text-black rounded-lg underline font-kreon'
              : 'text-white cursor-pointer z-40 font-kreon'
          }
        >
          Cafe Blue - Whale By Starbeans
        </NavLink>
      ),
    },
  ];
  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };
  return (
    <header className="lg:inline-block lg:relative  bg-[#333333AB] p-4 text-white items-center justify-between lg:rounded-full w-full lg:mt-12 lg:mx-40">
      {/* Logo */}
      <div className="flex justify-between  items-center lg:flex-none lg:justify-normal lg:absolute  lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-20">
        <img
          src={MainLogo}
          alt="Starbeans Ceylon"
          className="lg:w-[36%] w-[20%] md:w-[10%] "
        />
        <div className="lg:hidden  ">
          <div
            onClick={isDrawerVisible ? closeDrawer : showDrawer}
            className="flex lg:hidden mr-5"
          >
            {isDrawerVisible ? (
              <MdClose size={24} color="white" />
            ) : (
              <TiThMenuOutline size={24} />
            )}
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="font-thmor justify-center lg:justify-evenly items-center space-x-10 font-normal text-[16px] hidden lg:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-black border-solid border-b-2 border-2 p-2 bg-white rounded-lg'
              : 'text-white hover:text-gray-300 transition duration-300 cursor-pointer z-40'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-black border-solid border-b-2 border-2 p-2 bg-white rounded-lg'
              : 'text-white hover:text-gray-300 transition duration-300 cursor-pointer z-40'
          }
        >
          About
        </NavLink>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <div className="flex flex-row gap-2 justify-center items-center group ">
            <a
              href="#outlets"
              className={({ isActive }) =>
                isActive
                  ? 'text-black border-solid border-b-2 border-2 p-2 bg-white rounded-lg'
                  : 'text-white hover:text-gray-300 transition duration-300 cursor-pointer z-40'
              }
            >
              Outlets
            </a>

            <FaArrowRight className="transition-transform duration-300 group-hover:rotate-90" />
          </div>
        </Dropdown>

        <NavLink
          to="/reservations"
          className={({ isActive }) =>
            isActive
              ? 'text-black border-solid border-b-2 border-2 p-2 bg-white rounded-lg'
              : 'text-white hover:text-gray-300 transition duration-300 cursor-pointer z-40'
          }
        >
          Reservations
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-black border-solid border-b-2 border-2 p-2 bg-white rounded-lg'
              : 'text-white hover:text-gray-300 transition duration-300 cursor-pointer z-40'
          }
        >
          Contact
        </NavLink>
      </div>
      <Drawer
        className="!z-[9999]"
        anchor="left"
        onClose={closeDrawer}
        open={isDrawerVisible}
      >
        <div className="flex flex-col gap-5 bg-slate-400 ">
          <div className="mt-6 flex flex-col gap-5 mx-10 text-[20px] font-sans font-semibold">
            <NavLink
              to="/"
              className="text-black hover:text-gray-300 transition duration-300 font-thmor"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className=" text-black hover:text-gray-300 transition duration-300 font-thmor"
            >
              About
            </NavLink>

            <div className="flex flex-row gap-2 items-center group">
              <NavLink
                onClick={() => setDropDownVisible(!dropDownVisible)}
                className=" text-black hover:text-gray-300 transition duration-300 font-thmor"
              >
                Outlets
              </NavLink>

              <FaArrowRight
                className={`  ${
                  dropDownVisible
                    ? 'rotate-90 transition-transform duration-300 text-gray-300'
                    : 'rotate-0'
                }`}
              />
            </div>
            {dropDownVisible && (
              <div className="flex flex-col gap-1">
                <NavLink
                  to="/outlets/the-barn-outlet"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-black rounded-lg underline font-kreon text-sm'
                      : 'text-white cursor-pointer z-40 font-kreon  text-sm'
                  }
                >
                  The Barn By Starbeans
                </NavLink>
                <NavLink
                  to="/outlets/ocean-bistro-outlet"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-black rounded-lg underline font-kreon text-sm'
                      : 'text-white cursor-pointer z-40 font-kreon  text-sm'
                  }
                >
                  Ocean Bistro By Starbeans
                </NavLink>
                <NavLink
                  to="/outlets/cafe-blue-whale-outlet"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-black rounded-lg underline font-kreon text-sm'
                      : 'text-white cursor-pointer z-40 font-kreon  text-sm'
                  }
                >
                  Cafe Blue - Whale By Starbeans
                </NavLink>
              </div>
            )}

            <NavLink
              to="/reservations"
              className=" text-black hover:text-gray-300 transition duration-300 font-thmor"
            >
              Reservations
            </NavLink>
            <NavLink
              to="/contact"
              className=" text-black hover:text-gray-300 transition duration-300 font-thmor"
            >
              Contact
            </NavLink>
          </div>

          <div className="border-t border-gray-300 shadow-lg shadow-black mx-5 my-5"></div>
        </div>
      </Drawer>
    </header>
  );
};

export default NavBar;
