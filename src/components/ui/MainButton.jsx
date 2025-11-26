import React from "react";

const MainButton = ({ title, navigate, style = "", type, disabled, color }) => {
  const colorHandler = color || "#FF5500";

  return (
    <button
      className={`text-2xl bg-[${colorHandler}] text-white font-medium py-2.5 px-6 border border-transparent rounded-full cursor-pointer hover:bg-transparent hover:border hover:border-[#FF5500] hover:text-[#FF5500] transition-all duration-300 ${style} text-center`}
      onClick={navigate ? () => navigate() : undefined}
      type={type || "button"}
      disabled={disabled || false}
    >
      {title}
    </button>
  );
};

export default MainButton;
