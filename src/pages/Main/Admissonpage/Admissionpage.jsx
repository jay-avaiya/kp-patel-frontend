import Curve from "../../../layouts/main_component/Curve";
import AdmissionProcess from "./_components/AdmissionProcess";

const Admissionpage = () => {
  return (
    <div className="flex flex-col gap-18">
      <Curve title={"Admission"} />
      <AdmissionProcess />
    </div>
  );
};

export default Admissionpage;
