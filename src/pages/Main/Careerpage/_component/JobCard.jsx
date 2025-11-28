import { Clock, LucideBriefcaseBusiness, MapPin, Wallet } from "lucide-react";

const JobCard = () => {
  return (
    <div className="w-full max-w-[400px] rounded-[50px] shadow-2xl shadow-black/25 px-6 md:px-8 pt-11 pb-6 flex flex-col gap-[18px] mx-auto">
      <p className="text-[#213455] text-[22px] md:text-[26px] font-montserrat font-bold">
        Full Time
      </p>

      <h3 className="text-[#213455] text-[26px] md:text-[32px] font-montserrat font-bold">
        Marketing Advisor
      </h3>

      <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          <LucideBriefcaseBusiness size={22} className="text-[#FF5500]" />
          <span className="font-inter font-semibold text-[15px] md:text-[16px] text-[#6C757D]">
            Hotels & Tourism
          </span>
        </div>

        <div className="flex gap-3">
          <Clock size={22} className="text-[#FF5500]" />
          <span className="font-inter font-semibold text-[15px] md:text-[16px] text-[#6C757D]">
            Full time
          </span>
        </div>

        <div className="flex gap-3">
          <Wallet size={22} className="text-[#FF5500]" />
          <span className="font-inter font-semibold text-[15px] md:text-[16px] text-[#6C757D]">
            $40000-$42000
          </span>
        </div>

        <div className="flex gap-3">
          <MapPin size={22} className="text-[#FF5500]" />
          <span className="font-inter font-semibold text-[15px] md:text-[16px] text-[#6C757D]">
            New-York, USA
          </span>
        </div>
      </div>

      <button className="w-full py-2.5 px-6 bg-[#FF5500] text-white text-lg md:text-xl border border-transparent rounded-full cursor-pointer hover:bg-transparent hover:border hover:border-[#FF5500] hover:text-[#FF5500] transition-all duration-300 text-center">
        Enroll Now
      </button>
    </div>
  );
};

export default JobCard;
