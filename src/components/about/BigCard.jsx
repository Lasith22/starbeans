import React from 'react';
import ContactImg2 from '../../assets/contact/ContactImg2.png';
import ContactImg3 from '../../assets/contact/ContactImg3.png';
import ContactImg4 from '../../assets/contact/ContactImg4.png';
const BigCard = () => {
  return (
    <div className="px-5 md:px-10  pb-10 flex items-center justify-center">
      <div class=" shadow-inset-shadow p-6 w-full bg-white rounded-lg flex flex-col items-center justify-center gap-8">
        {/* 1st image and text */}
        <div className="md:grid md:grid-cols-6 md:gap-10 flex flex-col gap-7 items-center justify-center">
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

        {/* 2nd image and text */}
        <div className="md:grid md:grid-cols-6 md:gap-10 flex flex-col-reverse gap-7 items-center justify-center">
          <img
            src={ContactImg3}
            className="md:col-span-2"
            alt="Contact image 1"
          />
          <div className="flex flex-col md:col-span-4 gap-5">
            <h1 className=" font-lancelot font-normal text-[#000] 2xl:text-6xl lg:text-5xl md:text-3xl text-2xl">
              Facilities and Expertise
            </h1>
            <h1 className=" font-kreon font-light text-[#000]  2xl:text-2xl lg:text-lg md:text-base text-sm">
              STARBEANS takes pride in offering exceptional services and
              versatile spaces for a variety of occasions, from intimate dinners
              and family reunions to lavish high tea events. Whether you're
              indulging in a steaming cup of coffee or tea while admiring a
              breathtaking sunset or celebrating a special birthday with friends
              and family, STARBEANS is the perfect destination. <br /> Our
              dedicated team, equipped with extensive hospitality experience,
              consistently performs at their best, even under pressure.
              Friendly, professional, and committed, they ensure that every
              visit reflects STARBEANS’ unwavering commitment to excellence.
            </h1>
          </div>
        </div>
        {/* 3rd image and text */}
        <div className="md:grid md:grid-cols-6 md:gap-10 flex flex-col gap-7 items-center justify-center">
          <div className="flex flex-col md:col-span-4 gap-5">
            <h1 className=" font-lancelot font-normal text-[#000] 2xl:text-6xl lg:text-5xl md:text-3xl text-2xl">
              Tech-Savvy Dining Experience
            </h1>
            <h1 className=" font-kreon font-light text-[#000]  2xl:text-2xl lg:text-lg md:text-base text-sm">
              At STARBEANS, we leverage the latest technology to streamline our
              operations and deliver a smooth, hassle-free experience for our
              diners. From efficient inventory management and order processing
              to seamless bill payments, our advanced online system ensures
              everything runs effortlessly behind the scenes. <br /> We’ve also
              prioritized our customers' comfort by offering free Wi-Fi and
              maintaining a robust online presence, creating an inviting and
              connected environment that enhances every visit.
            </h1>
          </div>
          <img
            src={ContactImg4}
            className="md:col-span-2"
            alt="Contact image 1"
          />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
