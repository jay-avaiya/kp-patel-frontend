import { ArrowRight, Pencil } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const AdmissionPayment = () => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const Schema = Yup.object().shape({
    payment: Yup.string().required("Please select a payment method"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const submitForm = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("PAYMENT DATA => ", data);

    setShowSuccessMsg(true);
    setTimeout(() => setShowSuccessMsg(false), 2000);

    reset();
  };

  return (
    <div className="w-full px-7.5 py-8 border-2 border-[#5065FF] rounded-[50px] space-y-10">
      {/* title */}
      <div className="border border-[#5065FF] w-[416px] text-center rounded-[60px] shadow-md">
        <h3 className="text-2xl font-montserrat font-medium leading-[69px] text-[#5065FF]">
          Admission Payment
        </h3>
      </div>

      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="w-[703px] space-y-[55px] pr-8">
            <div className="space-y-2">
              <h3 className="text-[28px] text-[#F94223]">
                Admission Fee Amount
              </h3>
              <input
                type="text"
                value="1,50,499 Rs"
                disabled
                className="w-full px-6 py-3 bg-white shadow-md rounded-[13px] text-[28px] text-[#25272980]"
              />
            </div>

            {/* payment methods */}
            <div className="space-y-2">
              <h3 className="text-[28px] text-[#F94223]">Payment Methods</h3>

              <div className="flex items-center justify-between w-full">
                <label className="flex items-center gap-x-6">
                  <input type="radio" {...register("payment")} value="upi" />
                  <img
                    src="/upi.png"
                    className="w-[59px] h-[44px] object-cover"
                  />
                </label>

                <label className="flex items-center gap-x-6">
                  <input type="radio" {...register("payment")} value="paytm" />
                  <img
                    src="/paytm.png"
                    className="w-[59px] h-[44px] object-cover"
                  />
                </label>

                <label className="flex items-center gap-x-6">
                  <input
                    type="radio"
                    {...register("payment")}
                    value="phonepe"
                  />
                  <img
                    src="/phonepe.png"
                    className="w-[59px] h-[44px] object-cover"
                  />
                </label>

                <label className="flex items-center gap-x-6">
                  <input type="radio" {...register("payment")} value="gpay" />
                  <img
                    src="/gpay.png"
                    className="w-[59px] h-[44px] object-cover"
                  />
                </label>
              </div>

              <p className="text-red-500">{errors.payment?.message}</p>
            </div>

            {/* Fee Receipt */}
            <div className="space-y-2">
              <h3 className="text-[28px] text-[#F94223]">Fee Receipt</h3>
              <div className="flex flex-row items-center gap-8">
                <button
                  type="button"
                  className="flex items-center px-2 py-3 border border-dashed rounded-[13px] border-[#707070CC] gap-3"
                >
                  <span className="text-2xl text-[#707070CC]">View</span>
                  <Pencil size={24} className="text-[#707070CC]" />
                </button>

                <button
                  type="button"
                  className="flex items-center px-2 py-3 border border-dashed rounded-[13px] border-[#707070CC] gap-3"
                >
                  <span className="text-2xl text-[#707070CC]">Download</span>
                  <Pencil size={24} className="text-[#707070CC]" />
                </button>
              </div>
            </div>
          </div>

          {/* Fees breakdown */}
          <div className="w-[678px] flex flex-col gap-10">
            <h3 className="text-[28px] text-[#F94223]">Fees Breakdown</h3>

            <div className="flex flex-col gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-full bg-white rounded-[13px] shadow-md py-3 px-3 border border-[#F94223]"
                >
                  <ul className="list-disc pl-5 marker:text-[#F94223]">
                    <li className="text-[22px] text-[#F94223]">
                      Registration Fees
                    </li>
                    <span className="text-[18px] text-[#25272980]">
                      1,00,000 Rs
                    </span>
                  </ul>
                </div>
              ))}
            </div>

            {/* submit */}
            <button
              disabled={isSubmitting}
              className={`flex items-center gap-[18px] h-[50px] rounded-full justify-center border w-full cursor-pointer 
                ${
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#F94223] text-white hover:bg-transparent hover:text-[#F94223] hover:border-[#F94223]"
                }`}
              type="submit"
            >
              <span className="text-[20px]">
                {isSubmitting ? "Processing..." : "Submit"}
              </span>

              {!isSubmitting && <ArrowRight size={20} />}
            </button>

            {/* Success msg */}
            {showSuccessMsg && (
              <p className="text-green-600 text-xl text-center font-semibold">
                Payment submitted successfully!
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionPayment;
