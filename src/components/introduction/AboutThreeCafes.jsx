import React from 'react';
import ThreeCafe1 from '../../assets/introductionImages/ThreeCafe1.png';

const AboutThreeCafes = () => {
  return (
    <div className="w-full px-5 md:px-10 py-10 md:py-20 flex flex-col gap-15">
      {/* 1st round section */}
      <div className="bg-[#CFF4F0] rounded-full ">
        <img
          src={ThreeCafe1}
          className="w-[30%] border-solid ring-[#28E2D2] ring-[8px] md:ring-[20px] rounded-full "
        />
      </div>
    </div>
  );
};

export default AboutThreeCafes;
