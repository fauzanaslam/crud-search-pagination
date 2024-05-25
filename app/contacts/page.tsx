import React from "react";
import ContactTable from "../../components/(contact)/ContactTable";
import Search from "../../components/(global)/Search";
import AddContactButton from "../../components/(button)/AddContactButton";

const Page = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-2 mb-5">
        <Search />
        <AddContactButton />
      </div>
      <ContactTable query={query} currentPage={currentPage} />
    </div>
  );
};

export default Page;
