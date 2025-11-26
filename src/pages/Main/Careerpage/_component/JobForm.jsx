import React from "react";

const JobForm = () => {
  return (
    <div className="border border-[#FF5500] rounded-[50px] shadow-md shadow-black/25 w-[1482px] h-fit px-6 pt-10 pb-26 flex flex-col space-y-16">
      <div className="bg-[#011844] py-3 text-2xl font-montserrat font-bold text-white text-center w-full rounded-[40px]">
        Join Our Team
      </div>

      <form className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border bg-[#FCFCFC] border-white rounded-[52px] px-16 py-4 placeholder-[#707070CC] text-2xl leading-[24px] outline-none shadow-md shadow-black/25"
        />
        <input
          type="Email"
          placeholder="Your Email"
          className="w-full border bg-[#FCFCFC] border-white rounded-[52px] px-16 py-4 placeholder-[#707070CC] text-2xl leading-[24px] outline-none shadow-md shadow-black/25"
        />
        <input
          type="text"
          placeholder="Your Position"
          className="w-full border bg-[#FCFCFC] border-white rounded-[52px] px-16 py-4 placeholder-[#707070CC] text-2xl leading-[24px] outline-none shadow-md shadow-black/25"
        />
        <textarea
          rows={9}
          placeholder="Enter Your Message"
          className="w-full border bg-[#FCFCFC] border-white rounded-[52px] px-16 py-4 placeholder-[#707070CC] text-2xl leading-[24px] outline-none shadow-md shadow-black/25 resize-none"
        />
        <button
          type="submit"
          class="w-full bg-[#F24F35] text-white py-3 font-montserrat font-bold text-2xl
         text-center rounded-full
         transition-all duration-300 ease-in
         hover:scale-102 hover:opacity-90 cursor-pointer"
        >
          Send Application
        </button>
      </form>
    </div>
  );
};

export default JobForm;
