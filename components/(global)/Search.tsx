import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        className="w-full border border-gray-200 py-2 pl-10 tex-sm outline-2 rounded-md"
        placeholder="search..."
      />
      <IoSearch size={24} className="absolute top-2 left-3 text-gray-500" />
    </div>
  );
};

export default Search;
