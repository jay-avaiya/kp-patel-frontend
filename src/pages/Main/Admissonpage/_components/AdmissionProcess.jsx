import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdmissionProcess = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-y-25 my-16">
      <div className="h-[147px] w-[939px] text-center space-y-6">
        <h3 className="text-[#F94223] font-montserrat font-semibold text-5xl">
          Admission Process
        </h3>
        <p className="text-[30px]">
          Follow This Basic Steps to Begin your Nursing Journey To Us
        </p>
      </div>

      <div className=" w-[1726px] h-[400px] flex flex-row justify-between">
        {/* Card 1 */}
        <div className="relative h-full w-[400px] bg-[#A2C506] rounded-[20px] p-4 flex flex-col items-center justify-end">
          <div className="absolute top-5 left-4 w-[73px] h-[73px] bg-white rounded-full flex items-center justify-center">
            <span className="text-3xl text-[#F94223]">01</span>
          </div>

          <div className="mb-6 space-y-3">
            <h3 className="bg-white h-[44px] p-1 w-full rounded-full font-montserrat text-2xl font-medium -tracking-[1.12px] leading-[39px]  text-center shadow-b shadow-black shadow-xl/20">
              Application Form Submission
            </h3>

            <p className="text-[18px] text-white h-[54px] text-center leading-[27px] -tracking-[0.54px]">
              Fill out the online application or visit our campus office.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-full w-[400px] bg-[#19C2FB] rounded-[20px] p-4 flex flex-col items-center justify-end">
          <div className="absolute top-5 left-4 w-[73px] h-[73px] bg-white rounded-full flex items-center justify-center">
            <span className="text-3xl text-[#F94223]">02</span>
          </div>

          <div className="mb-6 space-y-3">
            <h3 className="bg-white h-[44px] p-1 w-full rounded-full font-montserrat text-2xl font-medium -tracking-[1.12px] leading-[39px]  text-center shadow-b shadow-black shadow-xl/20">
              Document Verification
            </h3>

            <p className="text-[18px] text-white h-[54px] text-center leading-[27px] -tracking-[0.54px]">
              Fill out the online application or visit our campus office.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-full w-[400px] bg-[#5065FF] rounded-[20px] p-4 flex flex-col items-center justify-end">
          <div className="absolute top-5 left-4 w-[73px] h-[73px] bg-white rounded-full flex items-center justify-center">
            <span className="text-3xl text-[#F94223]">03</span>
          </div>

          <div className="mb-6 space-y-3">
            <h3 className="bg-white h-[44px] p-1 w-full rounded-full font-montserrat text-2xl font-medium -tracking-[1.12px] leading-[39px]  text-center shadow-b shadow-black shadow-xl/20">
              Admission Payment
            </h3>

            <p className="text-[18px] text-white h-[54px] text-center leading-[27px] -tracking-[0.54px]">
              Fill out the online application or visit our campus office.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative h-full w-[400px] bg-[#FF9700] rounded-[20px] p-4 flex flex-col items-center justify-end">
          <div className="absolute top-5 left-4 w-[73px] h-[73px] bg-white rounded-full flex items-center justify-center">
            <span className="text-3xl text-[#F94223]">04</span>
          </div>

          <div className="mb-6 space-y-3">
            <h3 className="bg-white h-[44px] p-1 w-full rounded-full font-montserrat text-2xl font-medium -tracking-[1.12px] leading-[39px]  text-center shadow-b shadow-black shadow-xl/20">
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
          handleScroll();
        }}
      >
        <span className="text-[20px]">Start Now</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default AdmissionProcess;
