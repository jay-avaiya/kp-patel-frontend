import React from "react";
import Curve from "../../../layouts/main_component/Curve";
import AlumniTitle from "./_components/AlumniTitle";
import ContentCard from "./_components/ContentCard";

const Alumnipage = () => {
  return (
    <div className="flex flex-col space-y-30">
      <Curve title={"Alumni"} />
      <AlumniTitle />
      <ContentCard />
    </div>
  );
};

export default Alumnipage;
