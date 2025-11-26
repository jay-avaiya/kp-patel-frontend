import { Clock, LucideBriefcaseBusiness, MapPin, Wallet } from "lucide-react";
import React from "react";
import MainButton from "../../../../components/ui/MainButton";

const JobCard = () => {
  return (
    <div className="w-[450px] rounded-[50px] shadow-2xl shadow-black/25 px-8 pt-11 pb-6 flex flex-col gap-[18px]">
      <p className="text-[#213455] text-[32px] font-montserrat font-bold">
        Full Time
      </p>
      <h3 className="text-[#213455] text-[40px] font-montserrat font-bold">
        Marketing Advisor
      </h3>

      <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          <LucideBriefcaseBusiness size={24} className="text-[#FF5500]" />
          <span className="font-inter font-semibold text-[16px] text-[#6C757D]">
            Hotels & Tourism
          </span>
        </div>

        <div className="flex gap-3">
          <Clock size={24} className="text-[#FF5500]" />
          <span className="font-inter font-semibold text-[16px] text-[#6C757D]">
            Full time
          </span>
        </div>

        <div className="flex gap-3">
          <Wallet size={24} className="text-[#FF5500]" />
          <span className="font-inter font-semibold text-[16px] text-[#6C757D]">
            $40000-$42000
          </span>
        </div>

        <div className="flex gap-3">
          <MapPin size={24} className="text-[#FF5500]" />
          <span className="font-inter font-semibold text-[16px] text-[#6C757D]">
            New-York, USA
          </span>
        </div>
      </div>

      <MainButton title={"Enroll Now"} style="w-full" />
    </div>
  );
};

export default JobCard;
