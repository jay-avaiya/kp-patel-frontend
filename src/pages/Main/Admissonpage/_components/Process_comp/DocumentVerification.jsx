import { ArrowRight, ImageIcon, UploadIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";

const FileUploadField = ({
  id,
  label,
  fileName,
  setFileName,
  registerName,
  setValue,
  error,
}) => {
  return (
    <div className="flex flex-col gap-3 xl:gap-5">
      <label className="text-[#F94223] text-sm md:text-[16px] lg:text-xl xl:text-2xl">
        {label}
      </label>

      <label
        htmlFor={id}
        className="w-full bg-[#FDFDFD] rounded-[14px] px-8 py-2 xl:py-4.5 shadow-md cursor-pointer flex items-center justify-between"
      >
        <span className="text-xs md:text-sm lg:text-[18px] xl:text-[20px] text-[#25272980]">
          {fileName}
        </span>
        <UploadIcon className="w-3 md:w-3 lg:w-5 xl:w-6" />
      </label>

      <input
        id={id}
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files[0];
          setFileName(file?.name || "Upload Your Document");
          setValue(registerName, file, { shouldValidate: true });
        }}
      />

      <p className="text-red-500 text-[10px] lg:text-sm">{error}</p>
    </div>
  );
};

const DocumentVerification = () => {
  const [preview, setPreview] = useState(null);

  const [bcName, setBcName] = useState("Upload Your Document");
  const [tcName, setTcName] = useState("Upload Your Document");
  const [rcName, setRcName] = useState("Upload Your Document");
  const [ccName, setCcName] = useState("Upload Your Document");

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

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
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("FINAL DATA =>", data);

    setShowSuccessMsg(true);
    setTimeout(() => setShowSuccessMsg(false), 2000);

    reset();
    setPreview(null);
    setBcName("Upload Your Document");
    setTcName("Upload Your Document");
    setRcName("Upload Your Document");
    setCcName("Upload Your Document");
  };

  const handleImagePreview = (file) => {
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="w-full px-7.5 py-8 border-2 border-[#5065FF] rounded-4xl lg:rounded-[50px] space-y-6 md:space-y-10">
      {/* Heading */}
      <div className="border border-[#5065FF] w-[220px] md:w-[265px] lg:w-[316px] xl:w-[416px] text-center rounded-full shadow-md">
        <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-montserrat font-medium text-[#5065FF] md:leading-10 lg:leading-16 px-6 py-1">
          Document Verification
        </h3>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Left */}
          <div className="space-y-3 md:space-y-5">
            <h4 className="text-xs md:text-sm lg:text-xl xl:text-2xl font-semibold text-center">
              Student Profile Picture
            </h4>

            <label
              htmlFor="studentPic"
              className="w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] xl:w-[280px] xl:h-[280px] bg-white rounded-[30px] border border-[#5065FF] border-dashed cursor-pointer flex items-center justify-center overflow-hidden relative"
            >
              {preview ? (
                <img
                  src={preview}
                  className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                />
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <ImageIcon className="w-7 h-7 xl:w-[83px] xl:h-[83px] text-[#5065FF]" />
                  <p className="text-xs md:text-sm lg:text-lg xl:text-xl">
                    Upload
                  </p>
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

          {/* Right */}
          <div className="w-[270px] md:w-[360px] lg:w-[520px] xl:w-[750px] mt-4 md:mt-0 space-y-2">
            {/* Birth Certificate */}
            <FileUploadField
              id="bc"
              label="Birth Certificate"
              fileName={bcName}
              setFileName={setBcName}
              registerName="birthCertificate"
              setValue={setValue}
              error={errors.birthCertificate?.message}
            />

            {/* Transfer Certificate */}
            <FileUploadField
              id="tc"
              label="Transfer Certificate"
              fileName={tcName}
              setFileName={setTcName}
              registerName="transferCertificate"
              setValue={setValue}
              error={errors.transferCertificate?.message}
            />

            {/* Report Card */}
            <FileUploadField
              id="rc"
              label="Report Card"
              fileName={rcName}
              setFileName={setRcName}
              registerName="reportCard"
              setValue={setValue}
              error={errors.reportCard?.message}
            />

            {/* Caste Certificate */}
            <FileUploadField
              id="cc"
              label="Caste Certificate"
              fileName={ccName}
              setFileName={setCcName}
              registerName="casteCertificate"
              setValue={setValue}
              error={errors.casteCertificate?.message}
            />

            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              className={`flex items-center gap-3.5 lg:gap-5 py-2 w-full rounded-full justify-center border 
                ${
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#F94223] text-white hover:text-[#F94223] hover:bg-transparent hover:border-[#F94223]"
                }`}
              type="submit"
            >
              <span className="text-sm md:text-[16px] lg:text-[18px] xl:text-[20px]">
                {isSubmitting ? "Submitting..." : "Submit"}
              </span>
              {!isSubmitting && <ArrowRight />}
            </button>

            {showSuccessMsg && (
              <p className="text-green-600 text-sm md:text-base lg:text-lg xl:text-xl font-semibold mt-3 text-center">
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
