import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdmissionProcess = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-12 lg:gap-y-25 px-8">
      <div className="h-[147px] w-[60%]  text-center space-y-6">
        <h3 className="text-[#F94223] font-montserrat font-semibold text-lg md:text-3xl lg:text-4xl xl:text-5xl">
          Admission Process
        </h3>
        <p className=" text-sm md:text-lg lg:text-2xl xl:text-3xl">
          Follow This Basic Steps to Begin your Nursing Journey To Us
        </p>
      </div>

      <div className=" w-full h-fit flex flex-col justify-center gap-5 items-center md:flex-wrap md:flex-row xl:justify-between">
        {/* Card 1 */}
        <div className="relative h-[330px] w-[330px] bg-[#A2C506] rounded-[20px] p-4 flex flex-col items-center justify-end">
          <div className="absolute top-5 left-4 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl text-[#F94223]">01</span>
          </div>

          <div className="mb-6 space-y-3">
            <h3 className="bg-white h-[44px] p-1 w-full rounded-full font-montserrat text-xl font-medium -tracking-[1.12px] leading-[39px]  text-center shadow-b shadow-black shadow-xl/20">
              Application Form Submission
            </h3>

            <p className="text-[18px] text-white h-[54px] text-center leading-[27px] -tracking-[0.54px]">
              Fill out the online application or visit our campus office.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-[330px] w-[330px] bg-[#19C2FB] rounded-[20px] p-4 flex flex-col items-center justify-end">
          <div className="absolute top-5 left-4 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl text-[#F94223]">02</span>
          </div>

          <div className="mb-6 space-y-3">
            <h3 className="bg-white h-[44px] p-1 w-full rounded-full font-montserrat text-xl font-medium -tracking-[1.12px] leading-[39px]  text-center shadow-b shadow-black shadow-xl/20">
              Document Verification
            </h3>

            <p className="text-[18px] text-white h-[54px] text-center leading-[27px] -tracking-[0.54px]">
              Fill out the online application or visit our campus office.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-[330px] w-[330px] bg-[#5065FF] rounded-[20px] p-4 flex flex-col items-center justify-end">
          <div className="absolute top-5 left-4 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl text-[#F94223]">03</span>
          </div>

          <div className="mb-6 space-y-3">
            <h3 className="bg-white h-[44px] p-1 w-full rounded-full font-montserrat text-xl font-medium -tracking-[1.12px] leading-[39px]  text-center shadow-b shadow-black shadow-xl/20">
              Admission Payment
            </h3>

            <p className="text-[18px] text-white h-[54px] text-center leading-[27px] -tracking-[0.54px]">
              Fill out the online application or visit our campus office.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative h-[330px] w-[330px] bg-[#FF9700] rounded-[20px] p-4 flex flex-col items-center justify-end">
          <div className="absolute top-5 left-4 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl text-[#F94223]">04</span>
          </div>

          <div className="mb-6 space-y-3">
            <h3 className="bg-white h-[44px] p-1 w-full rounded-full font-montserrat text-xl font-medium -tracking-[1.12px] leading-[39px]  text-center shadow-b shadow-black shadow-xl/20">
              Admission Confirmation
            </h3>

            <p className="text-[18px] text-white h-[54px] text-center leading-[27px] -tracking-[0.54px]">
              Fill out the online application or visit our campus office.
            </p>
          </div>
        </div>
      </div>

      <button
        className="flex items-center gap-[18px] bg-[#F94223] text-white h-[50px] w-[252px] rounded-full justify-center hover:text-[#F94223] hover:bg-transparent hover:border hover:border-[#F94223]"
        onClick={() => {
          navigate("/admission/process");
          handleClick();
        }}
      >
        <span className="text-[20px]">Start Now</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default AdmissionProcess;
