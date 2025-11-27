// import React from "react";
// const Curve = () => {
//   return (
//     <div className="absolute top-20 -z-10 w-full h-[2000px]">
//       {" "}
//       <div className="w-full flex justify-center relative">
//         {" "}
//         <img
//           src="/curve.svg"
//           alt="curve"
//           className="w-full object-cover"
//         />{" "}
//         <h3 className="absolute font-semibold font-montserrat text-[56px] text-white bottom-70">
//           {" "}
//           Contact Us{" "}
//         </h3>{" "}
//       </div>{" "}
//     </div>
//   );
// };
// export default Curve;

import React from "react";

const Curve = ({ title }) => {
  return (
    <div
      className="relative w-full h-[160px] md:h-[240px] lg:h-[300px] xl:h-[380px] 2xl:h-[440px] bg-no-repeat bg-cover bg-bottom"
      style={{ backgroundImage: "url('/curve.png')" }}
    >
      <h3
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/16 text-white font-montserrat 
                    text-[20px] md:text-[28px] lg:text-[36px] xl:[42px] 2xl:text-[56px] font-semibold"
      >
        {title}
      </h3>
    </div>
  );
};

export default Curve;
