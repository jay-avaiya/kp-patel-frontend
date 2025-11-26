import React from "react";
import Curve from "../../../layouts/main_component/Curve";
import Card from "./_Components/Card";
import Event from "../../../layouts/main_component/Event";

const TrushBodypage = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <Curve title={"Trust Body"} />

      <div className="flex flex-col w-[844px] text-center gap-8 px-6 py-12">
        <h3 className="text-[#FF5500] font-montserrat font-semibold text-5xl">
          Managing Committee
        </h3>
        <p className="text-[32px] ">
          Our nurturing environment encourages every student to think
          creatively, learn enthusiastically, and grow confidently.
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-[88px] py-18 my-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Event />
    </div>
  );
};

export default TrushBodypage;
