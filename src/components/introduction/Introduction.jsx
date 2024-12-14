import React from 'react';
import IntroImage1 from '../../assets/introductionImages/IntroImage1.png';
import IntroImage2 from '../../assets/introductionImages/IntroImage2.png';

const Introduction = () => {
  return (
    <div className="bg-[#fff] px-10 pt-10 mb-20 lg:py-[110px] lg:px-[120px]">
      <div className="flex flex-col-reverse justify-center lg:grid lg:grid-cols-2  items-center gap-10 md:gap-[40px]">
        {/* left image section */}
        <div className="relative inline-block mb-10">
          {/* Background rectangle */}
          <div className="absolute w-[60%] h-full border-[8px] border-black rounded-[19px] left-14 top-10 translate-y-30 z-0"></div>
          <div className="absolute w-[60%] h-full border-[8px] border-[#5B5B5B] rounded-[19px] left-8 top-16 translate-y-30 z-0"></div>
          {/* Images */}
          <div className="relative z-10">
            <img
              src={IntroImage1}
              alt="Interior view 1"
              className="w-[60%] rounded-lg shadow-lg"
            />
            <img
              src={IntroImage2}
              alt="Interior view 2"
              className="w-[50%] rounded-lg shadow-lg absolute top-1/2 left-1/3 translate-x-4 translate-y-6"
            />
          </div>
        </div>
        {/* right introduction section */}
        <div className="flex flex-col gap-3">
          <h1 className="text-[#000] text-[40px] xl:text-[70px] font-bold font-lateef">
            Starbeans
          </h1>
          <h1 className="text-[#000] text-[14px] xl:text-[20px] font-normal leading-normal font-kreon">
            Starbeans Ceylon is celebrated for its fresh, locally sourced
            seafood, complemented by an extensive selection of wines, cocktails,
            beers, and tropical fruit juices. Dessert offerings include homemade
            ice creams and specialty coffee drinks. The restaurant takes pride
            in its coffee, crafted from specially roasted Ethiopian and
            Indonesian Arabica beans imported directly from a UK roaster,
            earning recognition as one of the premier spots for expertly brewed
            espresso and cappuccino in southern Sri Lanka.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
