import React from 'react';
import ThreeCafe1 from '../../assets/introductionImages/ThreeCafe1.png';

const AboutThreeCafes = () => {
  return (
    <div className="w-full px-5 md:px-10 py-10 md:py-20 flex flex-col gap-15">
      {/* 1st round section */}
      <div className="bg-[#CFF4F0] rounded-full flex    lg:justify-between  lg:items-start lg:gap-10 gap-5">
        <img
          src={ThreeCafe1}
          className="w-[30%] border-solid ring-[#28E2D2] ring-[8px] md:ring-[20px] rounded-full "
        />
        {/* text */}
        <div className="flex flex-col lg:justify-start lg:items-start text-start">
          <h1 className="text-[#0E6066] font-bold leading-normal font-lateef  lg:text-[60px] lg:mt-0 mt-2">
            Ocean Bistro by Starbeans
          </h1>
          <h1 className="text-start w-[90%]  lg:w-[80%] text-[#052C2F] font-kreon lg:text-[17px] font-light text-[6px]">
            Starbeans' flagship outlet is situated in the historic Old Dutch
            Hospital in Galle, offering a fine-dining experience with stunning
            panoramic views of Galle Fort, the bay, harbor entrance, and
            Rumassala hills. The menu features a fusion of Western, Mexican,
            Italian, and Sri Lankan cuisines, with an emphasis on fresh, locally
            sourced seafood. This location is ideal for both casual diners and
            those seeking a more luxurious dining experience while enjoying the
            heritage ambiance of Galle.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutThreeCafes;
