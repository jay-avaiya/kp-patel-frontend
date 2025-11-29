import Curve from "../../../layouts/main_component/Curve";
import AdmissionPayment from "./_components/Process_comp/AdmissionPayment";
import ApplicationConfirmation from "./_components/Process_comp/ApplicationConfirmation";
import ApplicationForm from "./_components/Process_comp/ApplicationForm";
import DocumentVerification from "./_components/Process_comp/DocumentVerification";

const AdmissionProcessPage = () => {
  return (
    <div className="flex flex-col gap-12">
      <Curve title={"Admission Process"} />

      <div className="w-full flex flex-col items-center py-16 gap-y-[100px]">
        <h3 className="text-[#F94223] font-montserrat font-semibold text-5xl text-center">
          Admission Form
        </h3>

        <div className="w-[90%] h-auto flex flex-col items-center gap-25">
          <ApplicationForm />
          <DocumentVerification />
          <AdmissionPayment />
          <ApplicationConfirmation />
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcessPage;
