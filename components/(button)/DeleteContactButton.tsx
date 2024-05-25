import { deleteContactAction } from "@/actions/deleteContactAction";
import React from "react";
import { MdDeleteSweep } from "react-icons/md";

const DeleteContactButton = ({ id }: { id: string }) => {
  const DeleteContactwithId = deleteContactAction.bind(null, id);
  return (
    <form action={DeleteContactwithId}>
      <button className="inline-flex rounded-sm border p-1 hover:bg-gray-100 duration-300 ease-in-out">
        <MdDeleteSweep size={20} />
      </button>
    </form>
  );
};

export default DeleteContactButton;
