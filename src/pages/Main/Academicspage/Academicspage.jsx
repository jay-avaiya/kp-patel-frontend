import React from "react";
import Curve from "../../../layouts/main_component/Curve";
import ProgramCard from "./_components/ProgramCard";

const Academicspage = () => {
  return (
    <div className="flex flex-col gap-26">
      <Curve title={"Academics"} />

      <div className="px-16 py-16 my-12 flex flex-col items-center space-y-26 ">
        <div className="flex flex-col space-y-10 text-center">
          <h3 className="text-[#FF5500] text-5xl font-semibold font-montserrat">
            Academic Programs
          </h3>

          <p className="text-[32px] max-w-[904px]">
            Our nurturing environment encourages every student to think
            creatively, learn enthusiastically, and grow confidently.
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-y-12 gap-x-14 px-16">
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </div>
      </div>
    </div>
  );
};

export default Academicspage;
