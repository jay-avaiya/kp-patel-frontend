import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="w-[198px] h-[43px] rounded-[33px] border border-white/50 flex items-center justify-end py-1 px-2 bg-[#011844]">
      <input
        type="text"
        placeholder="Search"
        className="text-white w-full text-[14px] font-semibold outline-none  h-full"
      />
      <div className="w-[37px] h-[35px] rounded-full bg-white placeholder-white flex items-center justify-center">
        <IoSearch size={18} />
      </div>
    </div>
  );
};

export default Search;
