// import React from "react";

// const EventCard = ({ title, para, img1, img2, img3 }) => {
//   return (
//     <div className="w-full md:pl-16 flex flex-col gap-8">
//       <div className="flex flex-col items-center md:items-start text-center md:text-start gap-5">
//         <h3 className="text-[#FF5500] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-montserrat">
//           {title}
//         </h3>
//         <p className="text-sm md:text-[16px] lg:text-xl xl:text-2xl font-normal w-[90%] md:w-[740px]">
//           {para ||
//             `Our nurturing environment encourages every student to think
//           creatively, learn enthusiastically, and grow confidently.`}
//         </p>
//       </div>

//       <div className="h-fit md:h-[480px] xl:h-[600px] flex flex-col md:flex-row justify-between w-full gap-6 md:gap-0 pl-10 md:pl-0">
//         <div className="w-[310px] h-[180px] md:w-[230px] md:h-[280px] lg:w-[310px] lg:h-[360px] xl:w-[400px] xl:h-[450px]">
//           <img
//             src={img1 || "/about1.jpg"}
//             alt=""
//             className="w-full h-full object-cover rounded-[40px]"
//           />
//         </div>
//         <div className="flex items-center md:items-end">
//           <img
//             src={img2 || "/about1.jpg"}
//             alt=""
//             className="w-[310px] h-[180px] md:w-[230px] md:h-[280px] lg:w-[310px] lg:h-[360px] xl:w-[400px] xl:h-[450px] object-cover rounded-[40px]"
//           />
//         </div>
//         <div className="flex items-center md:items-end">
//           <img
//             src={img3 || "/about1.jpg"}
//             alt=""
//             className="w-[310px] h-[180px] md:w-[230px] md:h-[280px] lg:w-[310px] lg:h-[360px] xl:w-[400px] xl:h-[450px] object-cover rounded-[40px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

import React from "react";

const EventCard = ({ title, para, img1, img2, img3 }) => {
  return (
    <div className="w-full md:pl-16 flex flex-col gap-8">
      {/* Title & Text */}
      <div className="flex flex-col items-center md:items-start text-center md:text-start gap-5">
        <h3 className="text-[#FF5500] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-montserrat">
          {title}
        </h3>
        <p className="text-sm md:text-[16px] lg:text-xl xl:text-2xl font-normal w-[90%] md:w-[740px]">
          {para ||
            `Our nurturing environment encourages every student to think creatively,
            learn enthusiastically, and grow confidently.`}
        </p>
      </div>

      {/* IMAGES */}
      <div className="h-fit md:h-[480px] xl:h-[600px] flex flex-col md:flex-row justify-between w-full gap-6 md:gap-0 pl-10 md:pl-0 overflow-x-auto md:overflow-visible no-scrollbar">
        {/* Image 1 */}
        <div className="flex items-center md:items-end justify-center shrink-0 w-[310px] h-[180px] md:w-[230px] md:h-[280px] lg:w-[310px] lg:h-[360px] xl:w-[400px] xl:h-[450px]">
          <img
            src={img1 || "/about1.jpg"}
            alt=""
            className="w-full h-full object-cover rounded-[40px]"
          />
        </div>

        {/* Image 2 */}
        <div className="flex items-center md:items-end justify-center shrink-0">
          <img
            src={img2 || "/about1.jpg"}
            alt=""
            className="w-[310px] h-[180px] md:w-[230px] md:h-[280px] lg:w-[310px] lg:h-[360px] xl:w-[400px] xl:h-[450px] object-cover rounded-[40px]"
          />
        </div>

        {/* Image 3 */}
        <div className="flex items-center md:items-end justify-center shrink-0">
          <img
            src={img3 || "/about1.jpg"}
            alt=""
            className="w-[310px] h-[180px] md:w-[230px] md:h-[280px] lg:w-[310px] lg:h-[360px] xl:w-[400px] xl:h-[450px] object-cover rounded-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
