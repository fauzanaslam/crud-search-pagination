import React from "react";
import { MdDeleteSweep } from "react-icons/md";

const DeleteContactButton = () => {
  return (
    <button className="inline-flex rounded-sm border p-1 hover:bg-gray-100 duration-300 ease-in-out">
      <MdDeleteSweep size={20} />
    </button>
  );
};

export default DeleteContactButton;
