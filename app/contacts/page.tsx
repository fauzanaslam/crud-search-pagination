import React from "react";
import ContactTable from "../../components/(contact)/ContactTable";
import Search from "../../components/(global)/Search";
import AddContactButton from "../../components/(button)/AddContactButton";
import Pagination from "../../components/(global)/Pagination";
import { getContactPagesAction } from "@/actions/getContactAction";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getContactPagesAction(query);
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-2 mb-5">
        <Search />
        <AddContactButton />
      </div>
      <ContactTable query={query} currentPage={currentPage} />
      <div className="flex justify-center mt-4">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Page;
