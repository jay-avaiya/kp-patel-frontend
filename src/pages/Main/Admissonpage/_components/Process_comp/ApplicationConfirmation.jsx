import React from "react";

const ApplicationConfirmation = () => {
  return (
    <div className="w-full h-[572px] px-7.5 py-8 border-2 border-[#5065FF] rounded-[50px] space-y-10">
      <div className="border border-[#5065FF] w-[416px] text-center rounded-[60px] shadow-b shadow-black/20 shadow-md">
        <h3 className="text-2xl font-montserrat font-medium leading-[69px] -tracking-[1.99px] text-[#5065FF] px-6 py-1">
          Application Confirmation
        </h3>
      </div>

      <div className="w-[75%] h-[1px] bg-gradient-to-r from-[#5065FF40] via-[#5065FF] to-[#5065FF40]" />

      <p className="text-[32px] -tracking-[2px] text-[#011844]">
        Once the student clears the evaluation and document check, parents will
        receive an official confirmation. Admission will be secured after
        payment of fees and completion of formalities. A welcome kit, school
        rules, academic calendar, and other details will be shared after final
        enrollment.
      </p>
    </div>
  );
};

export default ApplicationConfirmation;
