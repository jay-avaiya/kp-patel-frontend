import React from "react";

const Message = () => {
  return (
    <div className="w-full bg-[#011844] flex items-center justify-between px-28  py-45 mt-30">
      <div className="relative w-[679px] h-[879px] border-[10px] border-white rounded-[20px]">
        <h3 className="absolute bg-white rounded-full text-[#011844] text-2xl font-medium font-montserrat text-center px-5 py-3 shadow-md shadow-black/25 left-2 top-5">
          Vice Head & Principal
        </h3>
        <img
          src="/trust.png"
          alt="principal"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-[870px] text-white flex flex-col gap-10">
        <div className="absolute w-[70px] h-[58px] -left-18 -top-10">
          <img src="/comma.png" alt="comma" className="w-fit h-fit " />
        </div>

        <h3 className="text-[80px] font-montserrat font-extrabold">
          Principal Message
        </h3>

        <p className="text-2xl font-medium w-[85%]">
          Kantaben Manilal Patel Primary School was established with the belief
          that education is the most powerful tool to shape young minds and
          communities.
        </p>

        <div className="h-[1px] bg-white w-[88%]"></div>

        <div className="flex flex-row gap-7">
          <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center">
            <img
              src="/book.png"
              alt="book"
              className="w-13.5 h-13.5 object-cover"
            />
          </div>
          <p className="text-2xl font-medium">
            Kantaben Manilal Patel Primary School was established with the
            belief.
          </p>
        </div>

        <div className="flex flex-row gap-7">
          <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center">
            <img
              src="/book.png"
              alt="book"
              className="w-13.5 h-13.5 object-cover"
            />
          </div>
          <p className="text-2xl font-medium">
            Kantaben Manilal Patel Primary School was established with the
            belief.
          </p>
        </div>

        <div className="flex flex-row gap-7">
          <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center">
            <img
              src="/book.png"
              alt="book"
              className="w-13.5 h-13.5 object-cover"
            />
          </div>
          <p className="text-2xl font-medium">
            Kantaben Manilal Patel Primary School was established with the
            belief.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
