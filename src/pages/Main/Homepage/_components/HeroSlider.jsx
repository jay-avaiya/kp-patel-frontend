import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../../styles/index.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HeroSlider() {
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

  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[580px]">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}"
          style="width:8px;
          height:8px;
          background:white;
          opacity:1;
          margin: 0 6px;
          "></span>`,
        }}
        navigation={{
          enabled: true,
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.nextEl = ".custom-next";
            swiper.params.navigation.prevEl = ".custom-prev";
            swiper.navigation.init();
            swiper.navigation.update();
          }, 0);
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {" "}
            <div className="relative w-full h-full">
              {" "}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover brightness-[0.35] blur-[2px]"
              />
              <div className="absolute inset-0 flex flex-col items-center gap-4 md:gap-6 justify-center text-white text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl line-clamp-2 leading-tight max-w-2xl font-bold font-montserrat">
                  {slide.title}
                </h3>
                <p className="font-medium text-[16px] lg:text-lg line-clamp-2 max-w-lg">
                  {slide.desc}
                </p>
                <button
                  onClick={() => {
                    navigate("/academics");
                    handleScroll();
                  }}
                  className="bg-[#FF5500] rounded-full py-2 px-6 text-lg hover:bg-transparent hover:text-[#FF5500] hover:border-[#FF5500] border border-transparent"
                >
                  Explore Academics
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <div className="custom-prev absolute md:left-[42%] md:bottom-2 lg:left-[43%] xl:left-[46%] xl:bottom-2 z-50 text-white cursor-pointer">
        <ArrowLeft className="hidden md:block md:w-[20px] md:h-[20px] " />
      </div>

      <div className="custom-next absolute md:right-[42%] md:bottom-2 lg:right-[43%] xl:right-[46%] xl:bottom-2 z-50 text-white cursor-pointer">
        <ArrowRight className="hidden  md:block md:w-[20px] md:h-[20px] " />
      </div>
    </div>
  );
}
