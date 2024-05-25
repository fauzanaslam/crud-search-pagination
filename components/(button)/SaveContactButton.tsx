"use client";

import { useFormStatus } from "react-dom";
import clsx from "clsx";

const SaveContactButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  const className = clsx(
    "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
    { "opacity-50 cursor-progress": pending }
  );

  return (
    <button type="submit" className={className} disabled={pending}>
      {label === "save" ? (
        <span>{pending ? "saving..." : "save"}</span>
      ) : (
        <span>{pending ? "updating" : "update"}</span>
      )}
    </button>
  );
};

export default SaveContactButton;
