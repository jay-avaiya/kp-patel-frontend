import { ArrowRight } from "lucide-react";
import React from "react";

const ContentCard = () => {
  return (
    <div className="w-full px-28 py-18 space-y-16 flex justify-center mb-10">
      <div className="w-[1344px] flex flex-col gap-[52px] items-center">
        <div className="w-full border border-[#A2C506] rounded-[50px] px-13 py-16 flex flex-col gap-[30px] ">
          <h3 className="text-[#011844] text-4xl font-montserrat font-extrabold">
            Alumni Event
          </h3>
          <p className="text-[#F94223] text-[28px]">Coming Soon!</p>
        </div>

        <div className="w-[90%] h-[1px] bg-gradient-to-r from-[#F9422340] via-[#F94223] to-[#F9422340]"></div>

        <div className="w-full border border-[#A2C506] rounded-[50px] px-13 py-16 flex flex-col gap-[30px] ">
          <h3 className="text-[#011844] text-4xl font-montserrat font-extrabold">
            Alumni News & Updates
          </h3>
          <p className="text-[#F94223] text-[28px]">Coming Soon!</p>
        </div>

        <div className="w-[90%] h-[1px] bg-gradient-to-r from-[#F9422340] via-[#F94223] to-[#F9422340]"></div>

        <div className="w-full border border-[#A2C506] rounded-[50px] px-13 py-16 flex items-center justify-between">
          <div className="flex flex-col gap-[30px] ">
            <h3 className="text-[#011844] text-4xl font-montserrat font-extrabold">
              Donations
            </h3>
            <p className="text-[#F94223] text-[28px]">
              Want to Contribute? Donate Now!
            </p>
          </div>

          <button className="flex items-center gap-4 bg-[#F94223] border border-transparent text-white rounded-full py-2 px-6 hover:bg-transparent hover:border-[#F94223] hover:text-[#F94223] cursor-pointer transition-colors duration-200">
            <span className="text-[20px]">Donate Now</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
