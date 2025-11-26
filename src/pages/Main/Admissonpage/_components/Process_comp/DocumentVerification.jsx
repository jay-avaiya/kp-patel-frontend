import { ArrowRight, ImageIcon, UploadIcon } from "lucide-react";
import { useState } from "react";

const DocumentVerification = () => {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full px-7.5 py-8 border-2 border-[#5065FF] rounded-[50px] space-y-10">
      {/* title */}
      <div className="border border-[#5065FF] w-[416px] text-center rounded-[60px] shadow-b shadow-black/20 shadow-md">
        <h3 className="text-2xl font-montserrat font-medium leading-[69px] -tracking-[1.99px] text-[#5065FF] px-6 py-1">
          Application Form Submission
        </h3>
      </div>

      {/* form */}
      <form>
        <div className="flex flex-row justify-between">
          {/* left */}
          <div className="space-y-5 w-auto">
            <h4 className="text-2xl font-semibold text-center leading-[50px] -tracking-[2%]">
              Student Profile Picture
            </h4>
            <label
              htmlFor="studentPic"
              className="w-[347px] h-[303px] bg-white rounded-[30px] border border-[#5065FF] border-dashed relative cursor-pointer overflow-hidden flex items-center justify-center"
              style={{ borderDasharray: "10 10" }}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                />
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <ImageIcon className="w-[83px] h-[83px] text-[#5065FF]" />
                  <p className="text-black font-montserrat font-medium text-[20px]">
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
              onChange={handleChange}
            />
          </div>

          {/* right */}
          <div className="w-[1150px] space-y-5">
            {/* Birht Certificate */}
            <div className="flex flex-col gap-5">
              <label htmlFor="bc" className="text-[#F94223] text-2xl">
                Birth Certificate(PDF/JPEG)
              </label>

              <label
                htmlFor="bc"
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

            {/* Transfer certi */}
            <div className="flex flex-col gap-5">
              <label htmlFor="tc" className="text-[#F94223] text-2xl">
                Transfer Certificate
              </label>

              <label
                htmlFor="tc"
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

            {/* Report Card */}
            <div className="flex flex-col gap-5">
              <label htmlFor="rc" className="text-[#F94223] text-2xl">
                Report Card
              </label>

              <label
                htmlFor="rc"
                className="w-full bg-[#FDFDFD] rounded-[14px] font-inter text-[20px]text-[#25272980/50] px-8 py-4.5 shadow-md shadow-black/20 cursor-pointer flex items-center justify-between"
              >
                <span id="fileLabel" className="text-[#25272980] text-[20px]">
                  Upload Your Document
                </span>
                <UploadIcon className="text-[#25272980]" />
              </label>

              <input
                type="file"
                id="rc"
                name="rc"
                className="hidden"
                onChange={(e) => {
                  const fileName =
                    e.target.files[0]?.name || "Upload Aadhaar (PDF/IMG)";
                  document.getElementById("fileLabel").innerText = fileName;
                }}
              />
            </div>

            {/* Caste Certificate */}
            <div className="flex flex-col gap-5">
              <label htmlFor="cc" className="text-[#F94223] text-2xl">
                Caste Certificate
              </label>

              <label
                htmlFor="cc"
                className="w-full bg-[#FDFDFD] rounded-[14px] font-inter text-[20px]text-[#25272980/50] px-8 py-4.5 shadow-md shadow-black/20 cursor-pointer flex items-center justify-between"
              >
                <span id="fileLabel" className="text-[#25272980] text-[20px]">
                  Upload Your Document
                </span>
                <UploadIcon className="text-[#25272980]" />
              </label>

              <input
                type="file"
                id="cc"
                name="cc"
                className="hidden"
                onChange={(e) => {
                  const fileName =
                    e.target.files[0]?.name || "Upload Aadhaar (PDF/IMG)";
                  document.getElementById("fileLabel").innerText = fileName;
                }}
              />
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

export default DocumentVerification;
