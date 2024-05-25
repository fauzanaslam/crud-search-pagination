import React from "react";
import UpdateContactForm from "../../../../components/(contact)/UpdateContactForm";
import { notFound } from "next/navigation";
import { getContactByIdAction } from "@/actions/getContactByIdAction";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const contact = await getContactByIdAction(id);
  if (!contact) {
    notFound();
  }
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update contact</h1>
      <UpdateContactForm contact={contact} />
    </div>
  );
};

export default Page;
