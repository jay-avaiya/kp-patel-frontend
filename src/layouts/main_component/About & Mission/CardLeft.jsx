import React from "react";

const CardLeft = ({ title, color, image1, image2, text }) => {
  return (
    <>
      <div className="w-full h-fit md:h-[317px] lg:h-[476px]  xl:h-[694px] md:px-10 lg:px-14 xl:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6 lg:gap-14 xl:gap-18">
          <div className="relative w-full flex justify-center md:justify-normal">
            <img
              src={image1}
              alt={image1}
              className="
              w-40 h-43 
              md:w-[207px] md:h-[218px] 
              lg:w-[317px] lg:h-[328px] 
              xl:w-[447px] xl:h-[478px] 
              object-cover border-4 lg:border-[10px] border-white shadow-xl/30 shadow-gray-400 rounded-[12px] 
              md:rounded-[20px] lg:rounded-[40px]"
            />

            <div
              className="
            w-[150px] h-[28px]
            md:w-[200px] md:h-[30px] 
            lg:w-[250px] lg:h-[45px] 
            xl:w-[380px] xl:h-[72px] 
            bg-[#011844] absolute 
            top-48 left-20
            md:top-59 md:-left-8 
            lg:top-[360px] xl:top-[530px]"
            ></div>

            <img
              src={image2}
              alt={image2}
              className="w-40 h-43 md:block md:w-[207px] md:h-[218px] lg:w-[317px] lg:h-[328px] xl:w-[447px] xl:h-[478px] object-cover border-4 lg:border-[10px] border-white shadow-xl/30 shadow-gray-400 rounded-[12px] md:rounded-[20px] lg:rounded-[40px] 
              absolute 
              left-49 top-19
              md:left-[107px] md:top-[98px] 
              lg:left-[170px] lg:top-[147px] 
              xl:left-[250px] xl:top-[215px]"
            />
          </div>

          <div className="flex flex-col items-center text-center md:text-start md:items-start md:justify-start md:ml-10 mt-18 py-10 md:mt-0 space-y-7">
            <h3
              className={`font-montserrat font-semibold text-xl md:text-3xl lg:text-4xl  xl:text-5xl  leading-tight ${
                color ? "text-[#" + color + "]" : "text-[#A2C506]"
              } `}
            >
              {title || "Add Title"}
            </h3>
            <p className="text-sm lg:text-[14px] xl:text-[20px] font-medium leading-normal w-[350px] md:w-[300px] lg:w-[420px] xl:w-[580px]">
              {` ${
                text
                  ? text
                  : "Kantaben Manilal Patel Primary School was established with the belief that education is the most powerful tool to shape young minds and communities."
              } `}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLeft;
