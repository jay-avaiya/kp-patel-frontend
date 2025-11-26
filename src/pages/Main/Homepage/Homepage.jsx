import HeroSlider from "./_components/HeroSlider";
import AboutUs from "./_components/AboutUs";
import Purpose from "./_components/Purpose";

const Homepage = () => {
  return (
    <div className="flex flex-col space-y-24">
      <HeroSlider />
      <AboutUs />
      <Purpose />
      {/* <Calendar /> */}
      {/* <Gallery /> */}
    </div>
  );
};

export default Homepage;
