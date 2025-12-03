import React from "react";
import Curve from "../../../layouts/main_component/Curve";
import ProgramCard from "./_components/ProgramCard";
import Event from "../../../layouts/main_component/Event";

const Academicspage = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <Curve title={"Academics"} />

      <div className="px-4 md:px-16 flex flex-col items-center space-y-16 md:space-y-20 lg:space-y-26 ">
        <div className="flex flex-col space-y-10 text-center">
          <h3 className="text-[#FF5500] text-2xl md:text-3xl xl:text-5xl font-semibold font-montserrat">
            Academic Programs
          </h3>

          <p className="text-[16px] md:text-2xl xl:text-[32px] max-w-[904px]">
            Our nurturing environment encourages every student to think
            creatively, learn enthusiastically, and grow confidently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-13">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <ProgramCard key={i} />
          ))}
        </div>
      </div>

      <Event />
    </div>
  );
};

export default Academicspage;
