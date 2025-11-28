import { FaBook } from "react-icons/fa";
import React from "react";

const ProgramCard = () => {
  return (
    <div className="flex flex-col gap-4 border border-[#FF5500] rounded-2xl px-6 md:px-8 lg:px-11  py-6 md:py-8 lg:py-12 hover:bg-[#FF5500] hover:text-white">
      <div className="p-2 md:p-4 w-fit bg-white rounded-full text-[#FF5500] border border-[#FF5500]">
        <FaBook className="w-5 h-5 md:w-10 md:h-10" />
      </div>
      <p className="text-[20px] md:text-[22px] font-semibold leading-[44px]">
        Program 1
      </p>
      <p className="text-[14px] md:text-[16px] font-medium">
        We envision a world where every girl has the confidence, skills, and
        opportunity.
      </p>
    </div>
  );
};

export default ProgramCard;
