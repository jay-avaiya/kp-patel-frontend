import Curve from "../../../layouts/main_component/Curve";
import Card from "./_Components/Card";
import Event from "../../../layouts/main_component/Event";

const TrushBodypage = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-16 items-center">
      <Curve title={"Trust Body"} />

      <div className="flex flex-col max-w-[844px] w-full text-center gap-8">
        <h3 className="text-[#FF5500] font-montserrat font-semibold text-3xl sm:text-4xl xl:text-5xl">
          Managing Committee
        </h3>

        <p className="text-[20px] sm:text-[24px] xl:text-[32px]">
          Our nurturing environment encourages every student to think
          creatively, learn enthusiastically, and grow confidently.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 py-10 px-8 my-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>

      <Event />
    </div>
  );
};

export default TrushBodypage;
