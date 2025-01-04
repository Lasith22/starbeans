import { div } from 'motion/react-client';
import React from 'react';
import GalleryImg1 from '../../../assets/outlets/the-barn-images/GalleryImg1.png';
import GalleryImg2 from '../../../assets/outlets/the-barn-images/GalleryImg2.png';
import GalleryImg3 from '../../../assets/outlets/the-barn-images/GalleryImg3.png';
import GalleryImg4 from '../../../assets/outlets/the-barn-images/GalleryImg4.png';
import GalleryImg5 from '../../../assets/outlets/the-barn-images/GalleryImg5.png';
import GalleryImg6 from '../../../assets/outlets/the-barn-images/GalleryImg6.png';

const GallerySection = () => {
  return (
    <div id="gallery-section" className=" p-5 sm:p-10">
      <div className="flex flex-col items-center justify-center gap-7 p-5">
        <h1 className=" font-poppins font-normal text-[#000] 2xl:text-6xl lg:text-5xl md:text-3xl text-2xl">
          Gallery{' '}
        </h1>
      </div>
      {/* Gallery photos */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="flex flex-col gap-4">
          <img src={GalleryImg1} alt="" />
          <img src={GalleryImg2} alt="" />
        </div>

        <img src={GalleryImg3} alt="" />
        <img src={GalleryImg4} alt="" />
        <div className="flex flex-col gap-4">
          <img src={GalleryImg5} alt="" />
          <img src={GalleryImg6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
