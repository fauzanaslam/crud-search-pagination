import Link from "next/link";
import { IoIosAdd } from "react-icons/io";

const AddContactButton = () => {
  return (
    <Link
      href="/contacts/create"
      className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 duration-300 ease-in-out transition-all py-1 px-5 rounded"
    >
      <IoIosAdd size={31} />
      Create
    </Link>
  );
};

export default AddContactButton;
