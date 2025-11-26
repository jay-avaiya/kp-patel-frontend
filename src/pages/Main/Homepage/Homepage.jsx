import HeroSlider from "./_components/HeroSlider";
import AboutUs from "./_components/AboutUs";
import Purpose from "./_components/Purpose";
import Event from "../../../layouts/main_component/Event";
const Homepage = () => {
  return (
    <div className="flex flex-col space-y-24">
      <HeroSlider />
      <AboutUs />
      <Purpose />
      <Event />
    </div>
  );
};

export default Homepage;
