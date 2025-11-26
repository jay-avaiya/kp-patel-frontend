import React from "react";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const navigate = useNavigate();
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center text-center space-y-16 text-[#FF5500] py-34">
      <h3 className="font-montserrat font-bold text-5xl">Explore Our Events</h3>

      <div className="relative flex flex-row items-center justify-center gap-8 h-fit">
        <div className="w-[195px] h-[398px]">
          <img
            src="/1.jpg"
            alt="one"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="w-[195px] h-[260px]">
            <img
              src="/1.jpg"
              alt="two"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <div className="w-[195px] h-[398px]">
            <img
              src="/2.jpg"
              alt="three"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </div>

        <div className="w-[195px] h-[398px]">
          <img
            src="/thumbnail.png"
            alt="four"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        <div className="flex flex-row gap-8 self-start">
          <div className="w-[195px] h-[398px]">
            <img
              src="/3.jpg"
              alt="five"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <div className="w-[195px] h-[398px]">
            <img
              src="/4.jpg"
              alt="six"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </div>

        <div className="w-[195px] h-[398px]">
          <img
            src="/mission1.jpg"
            alt="seven"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="w-[195px] h-[260px]">
            <img
              src="/about1.jpg"
              alt="eight"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <div className="w-[195px] h-[398px]">
            <img
              src="/5.jpg"
              alt="nine"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </div>

        <div className="w-[195px] h-[398px]">
          <img
            src="/6.jpg"
            alt="ten"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        <div className="absolute text-center left-1/2 -bottom-18 -translate-x-1/2 flex flex-col items-center space-y-6">
          <p className="text-black text-[28px] max-w-[777px]">
            Our nurturing environment encourages every student <br /> to think
            creatively, learn enthusiastically, and grow confidently.
          </p>
          <button
            onClick={() => {
              navigate("/events");
              handleScroll();
            }}
            className="text-[20px] font-montserrat font-bold bg-[#FF5500] text-white rounded-full py-3 px-8 w-[300px] hover:bg-transparent border hover:border-[#FF5500] hover:text-[#FF5500] transition-colors duration-200 cursor-pointer"
          >
            View Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
