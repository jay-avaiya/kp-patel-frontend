import React from "react";

const Card = () => {
  return (
    <div className="w-[460px] h-[490px] relative">
      <img
        src="/trust.png"
        alt="trust"
        className="w-full h-full object-cover overflow-hidden rounded-[38px] opacity-96"
      />
      <div className="absolute left-34 bottom-8 flex flex-col items-center gap-4 text-white">
        <h4 className="font-montserrat font-bold text-2xl leading-[36px] -tracking-[2%]">
          Girishbhai Patel
        </h4>
        <p className="text-[20px] font-semibold leading-[32px] -tracking-[2%]">
          vice President
        </p>
      </div>
    </div>
  );
};

export default Card;
