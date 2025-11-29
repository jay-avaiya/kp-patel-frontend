import React from "react";
import Curve from "../../../layouts/main_component/Curve";

const Eventspage = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-16">
      <Curve title={"Events"} />

      <div className="flex flex-col text-center gap-4 md:gap-10 px-8">
        <h3 className="text-[#FF5500] text-lg md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-montserrat">
          Explore Our Events
        </h3>
        <p className="text-[12px] md:text-[16px] lg:text-lg xl:text-3xl font-normal w-[350px] md:w-[430px] lg:w-[500px] xl:w-4xl">
          Our nurturing environment encourages every student to think
          creatively, learn enthusiastically, and grow confidently.
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default Eventspage;
