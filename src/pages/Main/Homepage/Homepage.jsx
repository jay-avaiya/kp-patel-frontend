import HeroSlider from "./_components/HeroSlider";
import Event from "../../../layouts/main_component/Event";
import Calendar from "./_components/Calendar";
import CardLeft from "../../../layouts/main_component/About & Mission/CardLeft";
import CardRight from "../../../layouts/main_component/Purpose & Vision/CardRight";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-16">
      <HeroSlider />

      <CardLeft
        title={"About Us"}
        image1={"/about1.jpg"}
        image2={"/about2.jpg"}
        color={"A2C506"}
      />

      <CardRight
        title={"Purpose"}
        image1={"/purpose1.jpg"}
        image2={"/purpose2.jpg"}
        color={"FF5500"}
      />

      <Calendar />

      <Event />
    </div>
  );
};

export default Homepage;
