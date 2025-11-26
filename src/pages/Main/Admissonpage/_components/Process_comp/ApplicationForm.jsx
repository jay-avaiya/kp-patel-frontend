import { ArrowRight, UploadIcon } from "lucide-react";

const ApplicationForm = () => {
  const classOption = [
    "Choose an Option",
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
  ];

  return (
    <div className="w-full px-7.5 py-8 border-2 border-[#5065FF] rounded-[50px] space-y-10">
      <div className="border border-[#5065FF] w-[416px] text-center rounded-[60px] shadow-b shadow-black/20 shadow-md">
        <h3 className="text-2xl font-montserrat font-medium leading-[69px] -tracking-[1.99px] text-[#5065FF] px-6 py-1">
          Application Form Submission
        </h3>
      </div>

      <form>
        <div className="flex flex-row justify-between gap-[247px]">
          {/* Left side */}
          <div className="w-[745px] space-y-5">
            <div className="flex flex-col gap-5">
              <label htmlFor="name" className="text-[#F94223] text-2xl">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full bg-[#FDFDFD] rounded-[14px] font-inter text-[20px] text-[#25272980/50] px-8 py-4.5 shadow-md shadow-black/20 outline-none"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="dob" className="text-[#F94223] text-2xl">
                Date Of Birth
              </label>
              <input
                name="dob"
                type="text"
                placeholder="Enter Your DOB"
                className="w-full bg-[#FDFDFD] rounded-[14px] font-inter text-[20px] text-[#25272980/50] px-8 py-4.5 shadow-md shadow-black/20 outline-none"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="class" className="text-[#F94223] text-2xl">
                Class Applying For
              </label>
              <select
                name="class"
                className={`w-full bg-[#FDFDFD] rounded-[14px] font-inter text-[20px]  px-8 py-4.5 shadow-md shadow-black/20 outline-none appearance-none`}
              >
                {classOption.map((option, index) => (
                  <option
                    selected={option === "Choose an Option"}
                    value={option}
                    key={index}
                    className="text-black"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="section" className="text-[#F94223] text-2xl">
                Section Preference
              </label>
              <select
                name="section"
                className={`w-full bg-[#FDFDFD] rounded-[14px] font-inter text-[20px]  px-8 py-4.5 shadow-md shadow-black/20 outline-none appearance-none`}
              >
                <option value={""} selected>
                  Choose an Option
                </option>
                <option value={"A"}>A</option>
                <option value={"B"}>B</option>
                <option value={"C"}>C</option>
                <option value={"D"}>D</option>
              </select>
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="address" className="text-[#F94223] text-2xl">
                Residencial Address
              </label>
              <input
                name="address"
                type="text"
                placeholder="Enter Your Full Address"
                className="w-full bg-[#FDFDFD] rounded-[14px] font-inter text-[20px] text-[#25272980/50] px-8 py-4.5 shadow-md shadow-black/20"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="w-[745px] space-y-5">
            <div className="flex flex-col gap-5">
              <label htmlFor="contact" className="text-[#F94223] text-2xl">
                Contact Number
              </label>
              <input
                name="contact"
                type="text"
                placeholder="Enter Your Contact Number"
                className="w-full bg-[#FDFDFD] rounded-[14px] font-inter text-[20px] text-[#25272980/50] px-8 py-4.5 shadow-md shadow-black/20"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="contact" className="text-[#F94223] text-2xl">
                Email Address
              </label>
              <input
                name="contact"
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full bg-[#FDFDFD] rounded-[14px] font-inter text-[20px] text-[#25272980/50] px-8 py-4.5 shadow-md shadow-black/20"
                autoComplete="off"
              />
            </div>

            {/* Adhaar card */}
            <div className="flex flex-col gap-5">
              <label htmlFor="adhaar" className="text-[#F94223] text-2xl">
                Aadhaar Document
              </label>

              <label
                htmlFor="adhaar"
                className="w-full bg-[#FDFDFD] rounded-[14px] font-inter text-[20px]text-[#25272980/50] px-8 py-4.5 shadow-md shadow-black/20 cursor-pointer flex items-center justify-between"
              >
                <span id="fileLabel" className="text-[#25272980] text-[20px]">
                  Upload Your Document
                </span>
                <UploadIcon className="text-[#25272980]" />
              </label>

              <input
                type="file"
                id="adhaar"
                name="adhaar"
                className="hidden"
                onChange={(e) => {
                  const fileName =
                    e.target.files[0]?.name || "Upload Aadhaar (PDF/IMG)";
                  document.getElementById("fileLabel").innerText = fileName;
                }}
              />
            </div>

            {/* Nationality */}
            <div className="flex flex-col gap-5">
              <label htmlFor="section" className="text-[#F94223] text-2xl">
                Nationality & Religion
              </label>
              <select
                name="section"
                className={`w-full bg-[#FDFDFD] rounded-[14px] font-inter text-[20px]  px-8 py-4.5 shadow-md shadow-black/20 outline-none appearance-none`}
              >
                <option value={""} selected>
                  Choose an Option
                </option>
                <option value={"india"}>India</option>
                <option value={"other"}>Other</option>
              </select>
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-5">
              <label htmlFor="gender" className="text-[#F94223] text-2xl">
                Gender Selection
              </label>
              <select
                name="gender"
                className={`w-full bg-[#FDFDFD] rounded-[14px] font-inter text-[20px]  px-8 py-4.5 shadow-md shadow-black/20 outline-none appearance-none`}
              >
                <option value={""} selected>
                  Choose an Option
                </option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"other"}>other</option>
              </select>
            </div>

            <button
              className="flex items-center gap-[18px] bg-[#F94223] text-white py-2 w-full rounded-full justify-center hover:text-[#F94223] hover:bg-transparent hover:border hover:border-[#F94223] border border-transparent cursor-pointer"
              type="submit"
            >
              <span className="text-[20px]">Submit</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
