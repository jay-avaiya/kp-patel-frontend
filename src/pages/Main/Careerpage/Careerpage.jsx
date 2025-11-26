import React from "react";
import Curve from "../../../layouts/main_component/Curve";
import JobCard from "./_component/JobCard";
import JobForm from "./_component/JobForm";

const Careerpage = () => {
  return (
    <div>
      <Curve title={"Career"} />

      <div className="px-16 py-16 flex flex-col items-center space-y-24 min-h-screen my-24">
        <h3 className="text-[#FF5500] text-5xl font-montserrat font-semibold">
          Currently Open Position
        </h3>

        <div className="grid grid-cols-3 grid-rows-2 gap-24">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>

        <JobForm />
      </div>
    </div>
  );
};

export default Careerpage;
