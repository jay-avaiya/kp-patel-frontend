import Curve from "../../../layouts/main_component/Curve";
import AdmissionProcess from "./_components/AdmissionProcess";

const Admissionpage = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <Curve title={"Admission"} />
      <AdmissionProcess />
    </div>
  );
};

export default Admissionpage;
