import HeroSlider from "./_components/HeroSlider";
import AboutUs from "./_components/AboutUs";
import Purpose from "./_components/Purpose";
import Event from "../../../layouts/main_component/Event";
import Calendar from "./_components/Calendar";
const Homepage = () => {
  return (
    <div className="flex flex-col gap-36">
      <HeroSlider />
      <AboutUs />
      <Purpose />
      <Calendar />
      <Event />
    </div>
  );
};

export default Homepage;
