import { ArrowRight, UploadIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";

const ApplicationForm = () => {
  const [aadhaarName, setAadhaarName] = useState("Upload Your Document");
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

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

  const Schema = Yup.object().shape({
    name: Yup.string().required("Full Name is Required").min(3),
    dob: Yup.date()
      .typeError("Invalid date format")
      .max(new Date(), "Date of birth cannot be in the future")
      .min(new Date(1900, 0, 1), "Enter a valid date")
      .required("Date of birth is required"),
    class: Yup.string()
      .notOneOf(["Choose an Option"])
      .required("Please Select a Class"),
    section: Yup.string().required("Please Select a Section"),
    address: Yup.string().required("Address is Required"),
    contact: Yup.string()
      .required("Contact Number is Required")
      .matches(/^[0-9]{10}$/, "Must be 10 digits"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    adhaar: Yup.mixed().required("Aadhaar Document is Required"),
    nationality: Yup.string().required("Please Select a Nationality"),
    gender: Yup.string().required("Please Select a Gender"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({ resolver: yupResolver(Schema) });

  const handleSubmitForm = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);

    // show success msg
    setShowSuccessMsg(true);

    // hide after 2 sec
    setTimeout(() => setShowSuccessMsg(false), 2000);

    // reset form
    reset();
    setAadhaarName("Upload Your Document");
  };

  return (
    <div className="w-full px-7.5 py-8 border-2 border-[#5065FF] rounded-[50px] space-y-10">
      <div className="border border-[#5065FF] w-[416px] text-center rounded-[60px] shadow-md">
        <h3 className="text-2xl font-montserrat font-medium leading-[69px] text-[#5065FF]">
          Application Form Submission
        </h3>
      </div>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-row justify-between gap-[247px]">
          {/* LEFT SIDE */}
          <div className="w-[745px] space-y-5">
            {/* FULL NAME */}
            <div className="flex flex-col gap-5">
              <label htmlFor="name" className="text-[#F94223] text-2xl">
                Full Name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full bg-[#FDFDFD] rounded-[14px] text-[20px] px-8 py-4.5 shadow-md outline-none"
              />
              <p className="text-red-500">{errors.name?.message}</p>
            </div>

            {/* DOB */}
            <div className="flex flex-col gap-5">
              <label htmlFor="dob" className="text-[#F94223] text-2xl">
                Date Of Birth
              </label>
              <input
                {...register("dob")}
                type="date"
                className="w-full bg-[#FDFDFD] rounded-[14px] text-[20px] px-8 py-4.5 shadow-md outline-none appearance-none"
              />
              <p className="text-red-500">{errors.dob?.message}</p>
            </div>

            {/* CLASS */}
            <div className="flex flex-col gap-5">
              <label className="text-[#F94223] text-2xl">
                Class Applying For
              </label>
              <select
                {...register("class")}
                className="w-full bg-[#FDFDFD] rounded-[14px] text-[20px] px-8 py-4.5 shadow-md outline-none appearance-none"
              >
                {classOption.map((option, i) => (
                  <option value={option} key={i}>
                    {option}
                  </option>
                ))}
              </select>
              <p className="text-red-500">{errors.class?.message}</p>
            </div>

            {/* SECTION */}
            <div className="flex flex-col gap-5">
              <label className="text-[#F94223] text-2xl">
                Section Preference
              </label>
              <select
                {...register("section")}
                className="w-full bg-[#FDFDFD] rounded-[14px] text-[20px] px-8 py-4.5 shadow-md outline-none"
              >
                <option value="">Choose an Option</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
              <p className="text-red-500">{errors.section?.message}</p>
            </div>

            {/* ADDRESS */}
            <div className="flex flex-col gap-5">
              <label className="text-[#F94223] text-2xl">
                Residential Address
              </label>
              <input
                {...register("address")}
                type="text"
                placeholder="Enter Your Full Address"
                className="w-full bg-[#FDFDFD] rounded-[14px] text-[20px] px-8 py-4.5 shadow-md outline-none"
              />
              <p className="text-red-500">{errors.address?.message}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-[745px] space-y-5">
            {/* CONTACT */}
            <div className="flex flex-col gap-5">
              <label className="text-[#F94223] text-2xl">Contact Number</label>
              <input
                {...register("contact")}
                type="text"
                placeholder="Enter Your Contact Number"
                className="w-full bg-[#FDFDFD] rounded-[14px] text-[20px] px-8 py-4.5 shadow-md outline-none"
              />
              <p className="text-red-500">{errors.contact?.message}</p>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-5">
              <label className="text-[#F94223] text-2xl">Email Address</label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full bg-[#FDFDFD] rounded-[14px] text-[20px] px-8 py-4.5 shadow-md outline-none"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>

            {/* AADHAAR */}
            <div className="flex flex-col gap-5">
              <label className="text-[#F94223] text-2xl">
                Aadhaar Document
              </label>

              <label
                htmlFor="adhaar"
                className="w-full bg-[#FDFDFD] rounded-[14px] text-[20px] px-8 py-4.5 shadow-md cursor-pointer flex items-center justify-between"
              >
                <span>{aadhaarName}</span>
                <UploadIcon />
              </label>

              <input
                id="adhaar"
                type="file"
                className="hidden"
                accept="application/pdf,image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setAadhaarName(file?.name || "Upload Your Document");

                  // VERY IMPORTANT: pass file to RHF
                  setValue("adhaar", file, { shouldValidate: true });
                }}
              />

              <p className="text-red-500">{errors.adhaar?.message}</p>
            </div>

            {/* NATIONALITY */}
            <div className="flex flex-col gap-5">
              <label className="text-[#F94223] text-2xl">
                Nationality & Religion
              </label>
              <select
                {...register("nationality")}
                className="w-full bg-[#FDFDFD] rounded-[14px] text-[20px] px-8 py-4.5 shadow-md outline-none"
              >
                <option value="">Choose an Option</option>
                <option value="india">India</option>
                <option value="other">Other</option>
              </select>
              <p className="text-red-500">{errors.nationality?.message}</p>
            </div>

            {/* GENDER */}
            <div className="flex flex-col gap-5">
              <label className="text-[#F94223] text-2xl">
                Gender Selection
              </label>
              <select
                {...register("gender")}
                className="w-full bg-[#FDFDFD] rounded-[14px] text-[20px] px-8 py-4.5 shadow-md outline-none"
              >
                <option value="">Choose an Option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <p className="text-red-500">{errors.gender?.message}</p>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              disabled={isSubmitting}
              className={`flex items-center gap-[18px] py-2 w-full rounded-full justify-center border cursor-pointer ${
                isSubmitting
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#F94223] text-white hover:text-[#F94223] hover:bg-transparent hover:border-[#F94223]"
              }`}
              type="submit"
            >
              <span className="text-[20px]">
                {isSubmitting ? "Submitting..." : "Submit"}
              </span>
              {!isSubmitting && <ArrowRight size={20} />}
            </button>

            {/* AUTO-HIDE SUCCESS MESSAGE */}
            {showSuccessMsg && (
              <p className="text-green-600 text-xl font-semibold mt-3 text-center">
                Form submitted successfully!
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
