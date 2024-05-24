import React from "react";
import ContactTable from "../../components/(contact)/ContactTable";
import Search from "../../components/(global)/Search";
import AddContactButton from "../../components/(button)/AddContactButton";

const Page = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-2 mb-5">
        <Search />
        <AddContactButton />
      </div>
      <ContactTable />
    </div>
  );
};

export default Page;
