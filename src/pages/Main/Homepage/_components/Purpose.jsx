import React from "react";

const Purpose = () => {
  return (
    <>
      <div className="w-full h-[1080px] py-[157px] px-[125px]">
        <div className="grid grid-cols-2 items-center gap-12 ">
          <div className="flex flex-col items-center justify-end mr-10 space-y-6">
            <h3 className="font-montserrat font-semibold text-6xl text-[#FF5500] leading-tight text-end">
              Purpose
            </h3>
            <p className="text-[30px] font-medium leading-normal max-w-[681px] text-end">
              Kantaben Manilal Patel Primary School was established with the
              belief that education is the most powerful tool to shape young
              minds and communities.
            </p>
          </div>

          <div className="relative w-full -rotate-y-180">
            <img
              src="/purpose1.jpg"
              alt="purpose_1"
              className="w-[547px] h-[578px] object-cover border-[10px] border-white shadow-xl/30 shadow-gray-400 rounded-[40px]"
            />

            <div className="w-[480px] h-[82px] bg-[#011844] absolute top-[635px] -left-[90px]"></div>

            <img
              src="/purpose2.jpg"
              alt="purpose_2"
              className="w-[547px] h-[578px] object-cover border-[10px] border-white shadow-xl/30 shadow-gray-400 rounded-[40px] absolute left-[310px] top-[260.5px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Purpose;
