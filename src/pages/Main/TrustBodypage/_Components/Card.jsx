import React from "react";

const Card = () => {
  return (
    <div className="relative xl:w-[460px] xl:h-[490px] max-w-full mx-auto sm:w-[380px] sm:h-[420px] w-[320px] h-[380px]">
      <img
        src="/trust.png"
        alt="trust"
        className="w-full h-full object-cover rounded-[38px] brightness-69"
      />

      {/* bottom text */}
      <div className="absolute left-8 bottom-8 flex flex-col items-center gap-1 text-white w-[80%]">
        <h4 className="font-montserrat font-bold text-lg sm:text-xl xl:text-2xl leading-tight">
          Girishbhai Patel
        </h4>

        <p className="text-[16px] sm:text-[18px] xl:text-[20px] font-semibold leading-tight">
          Vice President
        </p>
      </div>
    </div>
  );
};

export default Card;
