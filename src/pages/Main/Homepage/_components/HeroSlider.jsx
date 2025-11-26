import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import MainButton from "../../../../components/ui/MainButton";

const slides = [
  {
    img: "/swiper1.png",
    title: "Nurturing Young Minds for a Brighter Tomorrow",
    desc: "At Kantaben Manilal Patel Primary School, we believe every child is unique and capable of greatness.",
  },
  {
    img: "/swiper1.png",
    title: "A Place Where Learning Feels Like Home",
    desc: "Creating a supportive and inspiring environment for every child.",
  },
  {
    img: "/swiper1.png",
    title: "Building Strong Foundations for the Future",
    desc: "Empowering students with knowledge and creativity.",
  },
];

const HeroSlider = () => {
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full relative h-[838px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-[90vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.img}
                className="w-full h-full object-cover brightness-[0.35]"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl line-clamp-2">
                  {slide.title}
                </h1>

                <p className="text-white mt-4 text-lg max-w-2xl line-clamp-2 mb-6">
                  {slide.desc}
                </p>

                <div onClick={handleScroll}>
                  <MainButton
                    title={"Explore Academics"}
                    navigate={() => navigate("/academics")}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        {/* prev arrow */}
        <button className="custom-prev text-[#FF5500] text-3xl font-bold">
          &lt;
        </button>

        {/* bullets */}
        <div className="custom-pagination flex gap-2"></div>

        {/* Next arrow */}
        <button className="custom-next text-[#FF5500] text-3xl font-bold">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
