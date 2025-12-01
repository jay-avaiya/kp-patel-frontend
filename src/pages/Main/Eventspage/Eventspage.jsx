import React from "react";
import Curve from "../../../layouts/main_component/Curve";
import EventCard from "./_components/EventCard";

const Eventspage = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-16">
      <Curve title={"Events"} />

      <div className="flex flex-col text-center gap-4 md:gap-10 px-8 mb-6">
        <h3 className="text-[#FF5500] text-lg md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-montserrat">
          Explore Our Events
        </h3>
        <p className="text-[12px] md:text-[16px] lg:text-lg xl:text-3xl font-normal w-[350px] md:w-[430px] lg:w-[500px] xl:w-4xl">
          Our nurturing environment encourages every student to think
          creatively, learn enthusiastically, and grow confidently.
        </p>
      </div>

      <EventCard
        title={"Diwali Festival Celebration"}
        img1={"/mission1.jpg"}
        img2={"/purpose1.jpg"}
        img3={"/vision1.jpg"}
      />
      <EventCard
        title={"Sports Day Celebration"}
        img1={"/mission2.jpg"}
        img2={"/purpose2.jpg"}
        img3={"/about1.jpg"}
      />
    </div>
  );
};

export default Eventspage;
