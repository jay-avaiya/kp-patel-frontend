import React from "react";

const Vision = () => {
  return (
    <>
      <div className="w-full py-40 px-31">
        <div className="grid grid-cols-2 items-center gap-12 ">
          <div className="flex flex-col items-center justify-end mr-10 space-y-6">
            <h3 className="font-montserrat font-semibold text-6xl text-[#5065FF] leading-tight text-end">
              Vision
            </h3>
            <p className="text-[30px] font-medium leading-normal max-w-[681px] text-end">
              Kantaben Manilal Patel Primary School was established with the
              belief that education is the most powerful tool to shape young
              minds and communities.
            </p>
          </div>

          <div className="relative w-full -rotate-y-180">
            <img
              src="/vision1.jpg"
              alt="vision_1"
              className="w-[547px] h-[578px] object-cover border-[10px] border-white shadow-xl/30 shadow-gray-400 rounded-[40px] -rotate-y-180"
            />

            <div className="w-[480px] h-[82px] bg-[#011844] absolute top-[635px] -left-[90px]"></div>

            <img
              src="/mission2.jpg"
              alt="mission_2"
              className="w-[547px] h-[578px] object-cover border-[10px] border-white shadow-xl/30 shadow-gray-400 rounded-[40px] absolute left-[310px] top-[260.5px] -rotate-y-180"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
