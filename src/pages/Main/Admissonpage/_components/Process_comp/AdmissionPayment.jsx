import { ArrowRight, Pencil } from "lucide-react";
import React from "react";

const AdmissionPayment = () => {
  return (
    <div className="w-full px-7.5 py-8 border-2 border-[#5065FF] rounded-[50px] space-y-10">
      {/* title */}
      <div className="border border-[#5065FF] w-[416px] text-center rounded-[60px] shadow-b shadow-black/20 shadow-md">
        <h3 className="text-2xl font-montserrat font-medium leading-[69px] -tracking-[1.99px] text-[#5065FF] px-6 py-1">
          Admission Payment
        </h3>
      </div>
      <div className="flex flex-row justify-center items-center space-x-2">
        <div className="w-[703px] space-y-[55px] pr-8">
          {/* admission fee amount */}
          <div className="space-y-2">
            <h3 className="text-[28px] text-[#F94223]">
              {" "}
              Admission Fee Amount
            </h3>
            <input
              type="text"
              value={"1,50,499 Rs"}
              disabled
              className="w-full px-6 py-3 bg-white shadow-md rounded-[13px] text-[28px] font-inter text-[#25272980] outline-none"
            />
          </div>

          {/* payment methods */}
          <div className="space-y-2">
            <h3 className="text-[28px] text-[#F94223]">Payment Methods</h3>

            <div className="flex items-center justify-between w-full">
              <label className="flex items-center gap-x-6">
                <input type="radio" name="payment" value={"upi"} />
                <img
                  src="/upi.png"
                  alt="upi"
                  className="w-[59px] h-[44px] object-cover"
                />
              </label>

              <label className="flex items-center gap-x-6">
                <input type="radio" name="payment" value={"paytm"} />
                <img
                  src="/paytm.png"
                  alt="paytm"
                  className="w-[59px] h-[44px] object-cover"
                />
              </label>

              <label className="flex items-center gap-x-6">
                <input type="radio" name="payment" value={"phonepe"} />
                <img
                  src="/phonepe.png"
                  alt="phonepe"
                  className="w-[59px] h-[44px] object-cover"
                />
              </label>
              <label className="flex items-center gap-x-6">
                <input type="radio" name="payment" value={"gpay"} />
                <img
                  src="/gpay.png"
                  alt="gpay"
                  className="w-[59px] h-[44px] object-cover"
                />
              </label>
            </div>
          </div>

          {/* Fee Receipt */}
          <div className="space-y-2">
            <h3 className="text-[28px] text-[#F94223]">
              {" "}
              Admission Fee Amount
            </h3>
            <div className="flex flex-row items-center gap-8">
              <button className="flex items-center px-2 py-3 border border-dashed rounded-[13px] border-[#707070CC] gap-3 cursor-pointer">
                <span className="text-2xl text-[#707070CC]">View</span>
                <Pencil size={24} className="text-[#707070CC]" />
              </button>
              <button className="flex items-center px-2 py-3 border border-dashed rounded-[13px] border-[#707070CC] gap-3 cursor-pointer">
                <span className="text-2xl text-[#707070CC]">Download</span>
                <Pencil size={24} className="text-[#707070CC]" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-[678px] flex flex-col gap-10">
          <h3 className="text-[28px] text-[#F94223]">Fees Breakdown</h3>

          <div className="flex flex-col gap-4">
            <div className="w-full bg-white rounded-[13px] shadow-md shadow-black/20 py-3 px-3 border border-[#F94223]">
              <ul className="list-disc marker:text-[#F94223] marker:text-[22px] pl-5">
                <li className="text-[22px] font-inter text-[#F94223]">
                  Registration Fees
                </li>
                <span className="text-[18px] text-[#25272980]">
                  1,00,000 Rs
                </span>
              </ul>
            </div>

            <div className="w-full bg-white rounded-[13px] shadow-md shadow-black/20 py-3 px-3 border border-[#F94223]">
              <ul className="list-disc marker:text-[#F94223] marker:text-[22px] pl-5">
                <li className="text-[22px] font-inter text-[#F94223]">
                  Registration Fees
                </li>
                <span className="text-[18px] text-[#25272980]">
                  1,00,000 Rs
                </span>
              </ul>
            </div>

            <div className="w-full bg-white rounded-[13px] shadow-md shadow-black/20 py-3 px-3 border border-[#F94223]">
              <ul className="list-disc marker:text-[#F94223] marker:text-[22px] pl-5">
                <li className="text-[22px] font-inter text-[#F94223]">
                  Registration Fees
                </li>
                <span className="text-[18px] text-[#25272980]">
                  1,00,000 Rs
                </span>
              </ul>
            </div>

            <div className="w-full bg-white rounded-[13px] shadow-md shadow-black/20 py-3 px-3 border border-[#F94223]">
              <ul className="list-disc marker:text-[#F94223] marker:text-[22px] pl-5">
                <li className="text-[22px] font-inter text-[#F94223]">
                  Registration Fees
                </li>
                <span className="text-[18px] text-[#25272980]">
                  1,00,000 Rs
                </span>
              </ul>
            </div>
          </div>

          <button className="flex items-center gap-[18px] bg-[#F94223] text-white h-[50px] rounded-full justify-center hover:text-[#F94223] hover:bg-transparent hover:border hover:border-[#F94223] w-full cursor-pointer">
            <span className="text-[20px]">Submit</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPayment;
