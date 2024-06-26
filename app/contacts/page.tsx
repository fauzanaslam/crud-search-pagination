import React from "react";
import ContactTable from "../../components/(contact)/ContactTable";
import Search from "../../components/(global)/Search";
import AddContactButton from "../../components/(button)/AddContactButton";
import { getContactPagesAction } from "@/actions/getContactAction";
import { Suspense } from "react";
import { TableSkeleton } from "@/components/(global)/Skeleton";
import PaginationF from "@/components/(global)/PaginationF";

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
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <ContactTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center mt-4">
        <PaginationF totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Page;
