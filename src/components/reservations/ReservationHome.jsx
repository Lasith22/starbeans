import React from 'react';
import NavBar from '../hero/NavBar';
import ReservationImg from '../../assets/reservation/ReservationImg.png';
import { DatePicker, TimePicker, Input } from 'antd';
const { TextArea } = Input;
const ReservationHome = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <section className="bg-[#000000] bg-repeat bg-cover bg-center">
      <div className="lg:flex items-center justify-center   ">
        <NavBar />
      </div>
      <div className=" flex flex-col">
        <h1 className="font-bold font-manuale  lg:text-4xl text-2xl  text-[#ffffff] pb-10 text-center my-5">
          Reserve Your Spot - Taste the Finest
        </h1>

        <div className="lg:grid lg:grid-cols-7 flex flex-col gap-10 pb-10 justify-center items-center">
          <div className="flex flex-col gap-7 lg:mx-10 mx-5 col-span-4 ">
            <div className="bg-[#232323] rounded-full lg:p-4 p-2  flex gap-2 font-manjari   font-normal text-[#000]">
              <div className="bg-white  rounded-full flex justify-center items-center w-full p-2 text-center ">
                Starbeans Galle
              </div>
              <div className="border-2 border-[#FFFFFF] text-white  text-center  rounded-full flex justify-center items-center w-full p-2 ">
                Starbeans Mirissa
              </div>
              <div className=" border-2 border-[#FFFFFF] text-white text-center  rounded-full flex justify-center items-center w-full p-2 ">
                Starbeans Ella
              </div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <DatePicker
                placeholder="Select date"
                onChange={onChange}
                className=" border-2 border-[#FFFFFF] text-white w-full rounded-3xl bg-[#232323] p-2 placeholder:text-white/35 "
              />
              <TimePicker
                className=" border-2 border-[#FFFFFF]   w-full  rounded-3xl bg-[#232323] p-2 placeholder:text-white/35"
                onChange={onChange}
              />
            </div>
            <div className="flex justify-center items-center gap-3">
              <Input
                placeholder="First Name"
                onChange={onChange}
                className=" border-2 border-[#FFFFFF] text-white w-full rounded-3xl bg-[#232323] p-2 placeholder:text-white/35 "
              />
              <Input
                placeholder="Last Name"
                className=" border-2 border-[#FFFFFF]   w-full  rounded-3xl bg-[#232323] p-2 placeholder:text-white/35"
                onChange={onChange}
              />
            </div>
            <Input
              placeholder="Email"
              onChange={onChange}
              className=" border-2 border-[#FFFFFF] text-white w-full rounded-3xl bg-[#232323] p-2 placeholder:text-white/35 "
            />
            <div className="flex justify-center items-center gap-3">
              <Input
                placeholder="People Count"
                className=" border-2 border-[#FFFFFF]   w-full  rounded-3xl bg-[#232323] p-2 placeholder:text-white/35 "
                onChange={onChange}
              />
              <Input
                placeholder="Phone Number"
                className=" border-2 border-[#FFFFFF]   w-full  rounded-3xl bg-[#232323] p-2 placeholder:text-white/35 "
                onChange={onChange}
              />
            </div>

            <TextArea
              placeholder="Special request (optional)"
              className=" border-2 border-[#FFFFFF]   w-full  rounded-3xl bg-[#232323] p-2 placeholder:text-white/35  "
            />
            <button
              type="button"
              class="text-white bg-[#FE7611] hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full lg:text-lg text-sm  py-2.5 text-center mb-2"
            >
              Reserve
            </button>
          </div>
          {/* right part */}
          <div className=" col-span-3">
            <img src={ReservationImg} className="w-[90%]" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationHome;
