import React from 'react';
import ContactImg1 from '../../assets/contact/ContactImg1.png';
const ContactCard = () => {
  return (
    <div className="px-10 py-10 flex items-center justify-center">
      <div class="shadow-custom-card p-6 bg-white rounded-lg  w-full flex flex-col items-center justify-center">
        <h1 class="2xl:text-6xl lg:text-5xl md:text-3xl  text-2xl font-normal font-lancelot text-center">
          A Journey from Humble Beginnings to <br /> Culinary Excellence
        </h1>
        {/* image and text  */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-5 md:gap-2 gap-10 items-center justify-center py-5">
          <img
            src={ContactImg1}
            className="md:w-[80%] w-[90%] md:col-span-2"
            alt="Contact image 1"
          />
          <h1 className="md:col-span-3 lg:text-lg 2xl:text-2xl md:text-xl text-xs font-kreon font-light ">
            Founded in 2010 by Malan Dharmathilake, Starbeans Ceylon began as a
            modest coffee shop in Hikkaduwa, offering a variety of hot and cold
            beverages, cakes, breakfast items, and snacks. The brand expanded
            with its first franchise in Unawatuna in September 2013, followed by
            a third outlet in Arugam Bay in May 2014. In September 2014,
            Starbeans elevated its dining experience by opening the Ocean
            Restaurant & Cafe at the renovated Galle Dutch Hospital, marking its
            entry into fine dining. This venture allowed the brand to diversify
            its menu, incorporating Sri Lankan, Italian, Mexican, and seafood
            dishes made from fresh, authentic ingredients. The expansion
            continued with a franchise in Ella in July 2015 and a sixth outlet
            in Mirissa by December 2016. Throughout this growth, Starbeans has
            remained committed to quality service, leveraging modern technology
            to enhance operations and customer experience.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
