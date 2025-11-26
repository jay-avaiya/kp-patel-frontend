import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="w-full h-[1080px] py-[157px] px-[125px] mt-[200px]">
        <div className="grid grid-cols-2 items-center gap-12 ">
          <div className="relative w-full">
            <img
              src="/about1.jpg"
              alt="about_1"
              className="w-[547px] h-[578px] object-cover border-[10px] border-white shadow-xl/30 shadow-gray-400 rounded-[40px]"
            />

            <div className="w-[480px] h-[82px] bg-[#011844] absolute top-[635px] -left-[90px]"></div>

            <img
              src="/about2.jpg"
              alt="about_2"
              className="w-[547px] h-[578px] object-cover border-[10px] border-white shadow-xl/30 shadow-gray-400 rounded-[40px] absolute left-[310px] top-[260.5px]"
            />
          </div>

          <div className="flex flex-col justify-start ml-10 space-y-6 ">
            <h3 className="font-montserrat font-semibold text-6xl text-[#A2C506] leading-tight">
              About Us
            </h3>
            <p className="text-[30px] font-medium leading-normal max-w-[681px]">
              Kantaben Manilal Patel Primary School was established with the
              belief that education is the most powerful tool to shape young
              minds and communities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
