import React from "react";

const EventCard = ({ title, para, img1, img2, img3 }) => {
  return (
    <div className="w-full pl-16 flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <h3 className="text-[#FF5500] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-montserrat">
          {title}
        </h3>
        <p className="text-sm md:text-[16px] lg:text-xl xl:text-2xl font-normal w-[740px]">
          {para ||
            `Our nurturing environment encourages every student to think
          creatively, learn enthusiastically, and grow confidently.`}
        </p>
      </div>

      <div className="h-[600px] flex flex-row justify-between w-full">
        <div className="w-[400px] h-[450px]">
          <img
            src={img1 || "/about1.jpg"}
            alt=""
            className="w-full h-full object-cover rounded-[40px]"
          />
        </div>
        <div className="flex items-end">
          <img
            src={img2 || "/about1.jpg"}
            alt=""
            className="w-[400px] h-[450px] object-cover rounded-[40px]"
          />
        </div>
        <div className="flex items-end">
          <img
            src={img3 || "/about1.jpg"}
            alt=""
            className="w-[400px] h-[450px] object-cover rounded-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
