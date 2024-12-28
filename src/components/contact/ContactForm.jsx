import React from 'react';
import { TextField } from '@mui/material';
import { FaUser } from 'react-icons/fa';
import { FaQuestion } from 'react-icons/fa';
import { SiMaildotru } from 'react-icons/si';

const ContactForm = () => {
  return (
    <div className=" bg-[#F6F6F6] lg:p-20 p-5 flex flex-col sm:grid sm:grid-cols-2  gap-10">
      {/* name email subject section */}
      <div className="flex flex-col items-center justify-center gap-8 sm:col-span-1">
        <div className="flex items-center gap-5 w-full ">
          <FaUser color="gray" className="sm:w-10 sm:h-10 w-8 h-8 " />
          <input
            className="w-full  rounded-full p-3 border-solid border-2  border-black/90 bg-white"
            placeholder="Name"
          />
        </div>
        <div className="flex items-center gap-5 w-full">
          <SiMaildotru color="gray" className="sm:w-10 sm:h-10 w-8 h-8 " />
          <input
            className="w-full  rounded-full p-3 border-solid border-2  border-black/90 bg-white"
            placeholder="Email"
          />
        </div>
        <div className="flex items-center gap-5 w-full">
          <FaQuestion color="gray" className="sm:w-10 sm:h-10 w-8 h-8 " />
          <input
            className="w-full  rounded-full p-3 border-solid border-2  border-black/90 bg-white"
            placeholder="Subject"
          />
        </div>
      </div>

      {/* message text area section */}
      <div className="sm:col-span-1">
        <textarea
          placeholder="Message"
          className="w-full sm:h-80 h-40 rounded-xl p-2 border-solid border-2 border-black/60"
        />
      </div>
    </div>
  );
};

export default ContactForm;
