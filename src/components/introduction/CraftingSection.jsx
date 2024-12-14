import React from 'react';
import CraftingImage from '../../assets/introductionImages/Crafting.png';

const CraftingSection = () => {
  return (
    <div className="bg-[#F3F3F3] px-10 py-20 w-full">
      <div className=" max-w-[1240px] mx-auto flex flex-col md:grid md:grid-cols-3 gap-20">
        <div className="col-span-2 flex flex-col gap-3">
          <h1 className="text-[#000] text-[40px] xl:text-[70px] font-bold font-lateef gap-0">
            Crafting Excellence in Coffee
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
        <div className=" col-span-1 ">
          <img src={CraftingImage} className=" " />
        </div>
      </div>
    </div>
  );
};

export default CraftingSection;
