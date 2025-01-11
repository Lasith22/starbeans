import React from 'react';
import NavBar from '../hero/NavBar';

const ContactHeader = () => {
  return (
    <section className="bg-contactImage2 bg-repeat bg-cover bg-center">
      <div className="lg:flex items-center justify-center">
        <NavBar />
      </div>
      {/* three cards */}
      <div className="h-auto lg:h-screen flex flex-col items-center justify-center px-5 ">
        <div className=" py-20 lg:flex grid   grid-cols-1 gap-10  ">
          {/* 1st card */}
          <div className="flex flex-col justify-start items-start p-5 bg-[#000] opacity-25 text-white rounded-2xl">
            <h1 className="2xl:text-4xl lg:text-2xl   font-bold font-josefin text-[#FFF] leading-normal">
              Ocean Bistro By Starbeans
            </h1>
            <div className="flex justify-start items-start justify-items-start gap-5 font-manjari text-lg font-extrabold mt-5">
              <h1>
                {' '}
                No.4,
                <br />
                First Floor,
                <br />
                Dutch Hospital Shopping Precinct,
                <br />
                Fort,Galle,
                <br />
                Sri Lanka
              </h1>
            </div>
            <h1 className="font-inter font-normal text-[#FFF] text-lg mt-5">
              <span className=" font-bold"> Phone:</span> +94 912 235 500{' '}
            </h1>
          </div>
          {/* 2nd card */}
          <div className="   flex flex-col  justify-start items-start p-5 bg-[#000]  opacity-50 text-white rounded-2xl">
            <h1 className="  2xl:text-4xl lg:text-2xl  font-bold font-josefin text-[#FFF] leading-normal">
              Ocean Bistro By Starbeans
            </h1>
            <div className="flex justify-start items-start justify-items-start gap-5 font-manjari text-lg font-extrabold mt-5">
              <h1>
                {' '}
                No.4,
                <br />
                First Floor,
                <br />
                Dutch Hospital Shopping Precinct,
                <br />
                Fort,Galle,
                <br />
                Sri Lanka
              </h1>
            </div>
            <h1 className=" font-inter font-normal text-[#FFF] text-lg mt-5">
              <span className=" font-bold"> Phone:</span> +94 912 235 500{' '}
            </h1>
          </div>
          {/* 3rd card */}
          <div className="  flex flex-col  justify-start items-start p-5 bg-[#000]  opacity-65 text-white rounded-2xl">
            <h1 className="  2xl:text-4xl lg:text-2xl  font-bold font-josefin text-[#FFF] leading-normal">
              Ocean Bistro By Starbeans
            </h1>
            <div className="flex justify-start items-start justify-items-start gap-5 font-manjari text-lg font-extrabold mt-5">
              <h1>
                {' '}
                No.4,
                <br />
                First Floor,
                <br />
                Dutch Hospital Shopping Precinct,
                <br />
                Fort,Galle,
                <br />
                Sri Lanka
              </h1>
            </div>
            <h1 className=" font-inter font-normal text-[#FFF] text-lg mt-5">
              <span className=" font-bold"> Phone:</span> +94 912 235 500{' '}
            </h1>
          </div>
        </div>
        {/* email */}
        <div className="rounded-full flex justify-center items-center justify-items-center w-full   p-5    mb-10 bg-[#000]  opacity-50">
          <h1 className=" text-white font-inter font-bold lg:text-[20px]">
            Email:{' '}
            <span className=" font-normal"> info@starbeansceylon.com</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
