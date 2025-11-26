import React from "react";
import MainButton from "../../../../components/ui/MainButton";
import { ArrowRight } from "lucide-react";

const AlumniTitle = () => {
  return (
    <div className="w-full px-28 py-8 space-y-16">
      <h3 className="text-5xl font-montserrat font-semibold text-[#F94223]">
        Ash Education Alumni Network A <br /> Lifelong Community
      </h3>

      <div className="flex flex-col gap-16">
        <p className="text-[#011844] text-2xl">
          As an alumnus, you are an important part of our journey. This platform
          helps you reconnect with classmates, teachers, and your alma mater.
          Whether you wish to network professionally, share achievements, mentor
          current students, or simply stay updated, this community keeps you
          connected. We invite all alumni to strengthen this network by sharing
          experiences, participating in events, and contributing to the progress
          of future nursing professionals. Together, we continue building a
          legacy of skilled, confident and compassionate healthcare providers.
        </p>

        <button className="flex items-center gap-4 bg-[#F94223] text-white rounded-full w-[252px] py-2 px-3 justify-center border border-transparent hover:text-[#F94223] hover:border hover:border-[#F94223] hover:bg-transparent transition-colors duration-200 cursor-pointer">
          <span className="text-[20px]">Join Now</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AlumniTitle;
