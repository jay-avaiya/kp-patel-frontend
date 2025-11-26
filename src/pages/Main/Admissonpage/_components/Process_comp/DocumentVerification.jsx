import { ArrowRight, ImageIcon, UploadIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";

const DocumentVerification = () => {
  const [preview, setPreview] = useState(null);

  const [bcName, setBcName] = useState("Upload Your Document");
  const [tcName, setTcName] = useState("Upload Your Document");
  const [rcName, setRcName] = useState("Upload Your Document");
  const [ccName, setCcName] = useState("Upload Your Document");

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  // Validation
  const schema = Yup.object().shape({
    studentPic: Yup.mixed().required("Profile picture is required"),
    birthCertificate: Yup.mixed().required("Birth Certificate is required"),
    transferCertificate: Yup.mixed().required(
      "Transfer Certificate is required"
    ),
    reportCard: Yup.mixed().required("Report Card is required"),
    casteCertificate: Yup.mixed().required("Caste Certificate is required"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("FINAL DATA => ", data);

    setShowSuccessMsg(true);
    setTimeout(() => setShowSuccessMsg(false), 2000);

    reset();
    setPreview(null);
    setBcName("Upload Your Document");
    setTcName("Upload Your Document");
    setRcName("Upload Your Document");
    setCcName("Upload Your Document");
  };

  // Preview for profile picture
  const handleImagePreview = (file) => {
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full px-7.5 py-8 border-2 border-[#5065FF] rounded-[50px] space-y-10">
      <div className="border border-[#5065FF] w-[416px] text-center rounded-[60px] shadow-md">
        <h3 className="text-2xl font-montserrat font-medium leading-[69px] text-[#5065FF]">
          Document Verification
        </h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row justify-between">
          {/* LEFT */}
          <div className="space-y-5 w-auto">
            <h4 className="text-2xl font-semibold text-center">
              Student Profile Picture
            </h4>

            <label
              htmlFor="studentPic"
              className="w-[347px] h-[303px] bg-white rounded-[30px] border border-[#5065FF] border-dashed cursor-pointer flex items-center justify-center overflow-hidden relative"
            >
              {preview ? (
                <img
                  src={preview}
                  className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                />
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <ImageIcon className="w-[83px] h-[83px] text-[#5065FF]" />
                  <p className="font-montserrat text-[20px]">Upload</p>
                </div>
              )}
            </label>

            <input
              id="studentPic"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                handleImagePreview(file);
                setValue("studentPic", file, { shouldValidate: true });
              }}
            />

            <p className="text-red-500 text-sm">{errors.studentPic?.message}</p>
          </div>

          {/* RIGHT */}
          <div className="w-[1150px] space-y-5">
            {/* Birth Certificate */}
            <div className="flex flex-col gap-5">
              <label className="text-[#F94223] text-2xl">
                Birth Certificate
              </label>

              <label
                htmlFor="bc"
                className="w-full bg-[#FDFDFD] rounded-[14px] px-8 py-4.5 shadow-md cursor-pointer flex items-center justify-between"
              >
                <span className="text-[20px] text-[#25272980]">{bcName}</span>
                <UploadIcon />
              </label>

              <input
                id="bc"
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setBcName(file?.name || "Upload Your Document");
                  setValue("birthCertificate", file, { shouldValidate: true });
                }}
              />

              <p className="text-red-500 text-sm">
                {errors.birthCertificate?.message}
              </p>
            </div>

            {/* Transfer Certificate */}
            <div className="flex flex-col gap-5">
              <label className="text-[#F94223] text-2xl">
                Transfer Certificate
              </label>

              <label
                htmlFor="tc"
                className="w-full bg-[#FDFDFD] rounded-[14px] px-8 py-4.5 shadow-md cursor-pointer flex items-center justify-between"
              >
                <span className="text-[20px] text-[#25272980]">{tcName}</span>
                <UploadIcon />
              </label>

              <input
                id="tc"
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setTcName(file?.name || "Upload Your Document");
                  setValue("transferCertificate", file, {
                    shouldValidate: true,
                  });
                }}
              />

              <p className="text-red-500 text-sm">
                {errors.transferCertificate?.message}
              </p>
            </div>

            {/* Report Card */}
            <div className="flex flex-col gap-5">
              <label className="text-[#F94223] text-2xl">Report Card</label>

              <label
                htmlFor="rc"
                className="w-full bg-[#FDFDFD] rounded-[14px] px-8 py-4.5 shadow-md cursor-pointer flex items-center justify-between"
              >
                <span className="text-[20px] text-[#25272980]">{rcName}</span>
                <UploadIcon />
              </label>

              <input
                id="rc"
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setRcName(file?.name || "Upload Your Document");
                  setValue("reportCard", file, { shouldValidate: true });
                }}
              />

              <p className="text-red-500 text-sm">
                {errors.reportCard?.message}
              </p>
            </div>

            {/* Caste Certificate */}
            <div className="flex flex-col gap-5">
              <label className="text-[#F94223] text-2xl">
                Caste Certificate
              </label>

              <label
                htmlFor="cc"
                className="w-full bg-[#FDFDFD] rounded-[14px] px-8 py-4.5 shadow-md cursor-pointer flex items-center justify-between"
              >
                <span className="text-[20px] text-[#25272980]">{ccName}</span>
                <UploadIcon />
              </label>

              <input
                id="cc"
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setCcName(file?.name || "Upload Your Document");
                  setValue("casteCertificate", file, { shouldValidate: true });
                }}
              />

              <p className="text-red-500 text-sm">
                {errors.casteCertificate?.message}
              </p>
            </div>

            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              className={`flex items-center gap-[18px] py-2 w-full rounded-full justify-center border
                ${
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#F94223] text-white hover:text-[#F94223] hover:bg-transparent hover:border-[#F94223]"
                }`}
              type="submit"
            >
              <span className="text-[20px]">
                {isSubmitting ? "Submitting..." : "Submit"}
              </span>
              {!isSubmitting && <ArrowRight />}
            </button>

            {showSuccessMsg && (
              <p className="text-green-600 text-xl font-semibold mt-3 text-center">
                ✔ Documents uploaded successfully!
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DocumentVerification;
