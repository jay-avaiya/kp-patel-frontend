import Curve from "../../../layouts/main_component/Curve";
import Message from "./_components/Message";
import Event from "../../../layouts/main_component/Event";
import CardLeft from "../../../layouts/main_component/About & Mission/CardLeft";
import CardRight from "../../../layouts/main_component/Purpose & Vision/CardRight";

export default function Aboutpage() {
  return (
    <div className="flex flex-col space-y-16">
      <Curve title={"About Us"} />
      <div className="py-16 flex flex-col items-center gap-24">
        {/* Title */}
        <div className="flex flex-col space-y-6 text-center px-4">
          <h3 className="text-[#FF5500] text-3xl md:text-4xl xl:text-5xl font-semibold font-montserrat">
            About the School
          </h3>

          <p className="text-[18px] md:text-[22px] xl:text-[24px] max-w-[1120px] leading-snug mx-auto">
            Kantaben Manilal Patel Primary School was established with the
            belief that education is the most powerful tool to shape young minds
            and communities.
          </p>
        </div>

        {/* mobile */}
        <div className="w-full px-4 flex flex-col xl:hidden gap-8">
          <div className="relative w-full max-w-[900px] mx-auto h-[220px] md:h-[350px] lg:h-[450px]">
            <img
              src="/thumbnail.png"
              alt="video"
              className="w-full h-full object-cover rounded-[30px] md:rounded-[40px] border brightness-50"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] md:w-[75px] md:h-[75px] cursor-pointer">
              <img src="/play.png" alt="play" className="w-full h-full" />
            </div>
          </div>

          <p className="text-[18px] md:text-[20px] leading-snug text-center max-w-[600px] mx-auto">
            Kantaben Manilal Patel Primary School was established with the
            belief that education is the most powerful tool to shape young minds
            and communities.
          </p>

          <p className="text-[18px] md:text-[20px] leading-snug text-center max-w-[600px] mx-auto">
            Kantaben Manilal Patel Primary School was established with the
            belief that education is the most powerful tool to shape young minds
            and communities.
          </p>
        </div>

        {/* desktop */}
        <div className="hidden xl:flex gap-x-6 px-8">
          <p className="text-xl text-end max-w-[220px] leading-snug">
            Kantaben Manilal Patel Primary School was established with the
            belief that education is the most powerful tool to shape young minds
            and communities.
          </p>

          <div className="relative w-[1080px] h-[632px]">
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
            <p className="text-xl max-w-[220px] leading-snug">
              Kantaben Manilal Patel Primary School was established with the
              belief that education is the most powerful tool to shape young
              minds and communities.
            </p>
          </div>
        </div>
      </div>

      <CardLeft
        title={"Mission"}
        image1={"/mission1.jpg"}
        image2={"/mission2.jpg"}
        color={"19C2FB"}
      />

      <CardRight
        title={"Vision"}
        image1={"/vision1.jpg"}
        image2={"/mission2.jpg"}
        color={"5065FF"}
      />

      <Message />

      <Event />
    </div>
  );
}
