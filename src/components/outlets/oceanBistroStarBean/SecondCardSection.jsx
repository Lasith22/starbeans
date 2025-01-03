import React from 'react';
import Image1 from '../../../assets/outlets/ocean-bistro-images/Image1.png';
const SecondCardSection = () => {
  return (
    <div className="sm:p-10 p-5">
      <div className="p-5 md:grid md:grid-cols-6 md:gap-10 flex flex-col-reverse gap-7 items-center justify-center rounded-[18px] bg-[linear-gradient(95deg,_#A6EBE4_9.12%,_#68B2AA_83.12%)] shadow-[0px_0px_55.7px_0px_rgba(0,0,0,0.31)]">
        <img src={Image1} className="md:col-span-2" alt="Contact image 1" />
        <div className="flex flex-col md:col-span-4 gap-5">
          <h1 className=" font-poppins font-normal text-[#000] 2xl:text-6xl lg:text-5xl md:text-3xl text-2xl">
            COASTAL CUISINE & MORE
          </h1>
          <h1 className=" font-poppins font-light text-[#000]  2xl:text-2xl lg:text-lg md:text-base text-sm">
            Fresh seafood, succulent burgers, and vibrant salads come together
            at Ocean Bistro by Starbeans, where every dish carries a touch of
            global inspiration. Enjoy ocean-fresh flavors and expertly prepared
            dishes at Ocean Bistro by Starbeans, blending coastal charm with
            culinary excellence.From mouthwatering seafood to hearty steaks and
            crisp salads, Ocean Bistro by Starbeans offers a flavorful dining
            experience by the shore.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SecondCardSection;
