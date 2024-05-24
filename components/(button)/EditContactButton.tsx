import Link from "next/link";
import React from "react";
import { FiEdit } from "react-icons/fi";

const EditContactButton = () => {
  return (
    <Link
      href="/contacts/edit"
      className="inline-flex rounded-sm border p-1 hover:bg-gray-100 duration-300 ease-in-out"
    >
      <FiEdit size={20} />
    </Link>
  );
};

export default EditContactButton;
