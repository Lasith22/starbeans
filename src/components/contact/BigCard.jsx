import React from 'react';
import ContactImg2 from '../../assets/contact/ContactImg2.png';
const BigCard = () => {
  return (
    <div className="px-10 flex items-center justify-center">
      <div class=" shadow-inset-shadow p-6 w-full bg-white rounded-lg flex flex-col items-center justify-center">
        {/* 1st image and text */}
        <div className="md:grid md:grid-cols-6 md:gap-4 flex flex-col gap-7 items-center justify-center">
          <div className="flex flex-col md:col-span-4 gap-5">
            <h1 className=" font-lancelot font-normal text-[#000] 2xl:text-6xl lg:text-5xl md:text-3xl text-2xl">
              Exquisite Culinary Delights
            </h1>
            <h1 className=" font-kreon font-light text-[#000]  2xl:text-2xl lg:text-lg md:text-base text-sm">
              At STARBEANS, we offer a diverse selection of Sri Lankan, Italian,
              Mexican, and seafood dishes, all crafted using authentic
              ingredients and the finest locally sourced fresh seafood. To
              complement these flavors, we provide a curated assortment of
              premium wines, handcrafted cocktails, refreshing fruit juices, and
              creamy smoothies. Our indulgent desserts and expertly brewed
              specialty coffee ensure a memorable and satisfying dining
              experience for every guest.
            </h1>
          </div>
          <img
            src={ContactImg2}
            className="md:col-span-2"
            alt="Contact image 1"
          />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
