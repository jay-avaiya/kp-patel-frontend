import React from "react";
import Curve from "../../../layouts/main_component/Curve";
import Mission from "./_components/Mission";
import Vision from "./_components/Vision";
import Message from "./_components/Message";
import Event from "../../../layouts/main_component/Event";

export default function Aboutpage() {
  return (
    <div className="flex flex-col space-y-16">
      <Curve title={"About Us"} />

      <div className="py-16 my-12 flex flex-col items-center space-y-26">
        {/* Title */}
        <div className="flex flex-col space-y-10 text-center">
          <h3 className="text-[#FF5500] text-5xl font-semibold font-montserrat">
            About the School
          </h3>
          <p className="text-[32px] max-w-[1120px]">
            Kantaben Manilal Patel Primary School was established with the
            belief that education is the most powerful tool to shape young minds
            and communities.
          </p>
        </div>

        {/* Video */}
        <div className="flex  gap-x-6">
          <p className="text-2xl text-end max-w-[264px]">
            Kantaben Manilal Patel Primary School was established with the
            belief that education is the most powerful tool to shape young minds
            and communities.
          </p>

          <div className="relative w-[1158px] h-[632px]">
            <img
              src="/thumbnail.png"
              alt="video"
              className="w-full h-full object-cover rounded-[50px] border brightness-50"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] cursor-pointer">
              <img src="/play.png" alt="play" />
            </div>
          </div>

          <div className="flex items-end">
            <p className="text-2xl max-w-[264px]">
              Kantaben Manilal Patel Primary School was established with the
              belief that education is the most powerful tool to shape young
              minds and communities.
            </p>
          </div>
        </div>
      </div>

      <Mission />

      <Vision />

      <Message />

      <Event />
    </div>
  );
}
