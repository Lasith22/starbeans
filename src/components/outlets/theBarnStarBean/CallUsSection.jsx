import React from 'react';

const CallUsSection = () => {
  return (
    <section className="bg-callUsImage  bg-repeat bg-cover bg-center">
      <div className=" flex flex-col justify-start items-start mx-10 p-10">
        <div className="flex flex-col     font-normal font-kufam text-4xl lg:text-6xl 2xl:text-7xl   text-[#ffffff] pb-10">
          <h1>Satisfy Your Cravings</h1>
          <h1> with Just </h1>
          <h1> One Call!</h1>
        </div>
        <h1 className="font-normal font-kufam text-lg   text-[#ffffff] md:w-2/3">
          From tasty snacks to delicious meals and irresistible desserts, we’re
          here to serve your favorites just the way you love them. Call us now,
          and we’ll have your order ready for pick-up or delivered straight to
          your doorstep!
        </h1>
      </div>
      <div className="flex justify-center items-center justify-items-center">
        <button
          type="button"
          class="text-white bg-[#FE7611] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-2xl md:text-4xl px-5 py-2.5 text-center me-2 mb-10"
        >
          Call us
        </button>
      </div>
    </section>
  );
};

export default CallUsSection;
