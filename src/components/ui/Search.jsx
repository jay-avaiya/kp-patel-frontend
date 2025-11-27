import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="w-[198px] h-[43px] rounded-[33px] border border-white/50 flex items-center justify-between py-1 px-1 bg-[#011844]">
      <input
        type="text"
        placeholder="Search"
        className="text-white w-full text-[14px] font-semibold outline-none  h-full px-3 placeholder:text-white"
      />
      <div className="w-[37px] h-[35px] rounded-full bg-white placeholder-white flex items-center justify-center shrink-0">
        <IoSearch size={18} />
      </div>
    </div>
  );
};

export default Search;
