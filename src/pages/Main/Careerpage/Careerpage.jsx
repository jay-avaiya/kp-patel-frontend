import Curve from "../../../layouts/main_component/Curve";
import JobCard from "./_component/JobCard";
import JobForm from "./_component/JobForm";

const Careerpage = () => {
  return (
    <div>
      <Curve title={"Career"} />

      <div className="px-4 md:px-10 lg:px-16 py-16 flex flex-col items-center space-y-24 min-h-screen my-24">
        <h3 className="text-[#FF5500] text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-center">
          Currently Open Position
        </h3>

        {/* Responsive Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-10 lg:gap-24 w-full place-items-center">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>

        <JobForm />
      </div>
    </div>
  );
};

export default Careerpage;
