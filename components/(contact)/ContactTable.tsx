import { getContactsAction } from "@/actions/getContactAction";
import { formatDate } from "@/utils/formatDate";
import React from "react";
import EditContactButton from "../(button)/EditContactButton";
import DeleteContactButton from "../(button)/DeleteContactButton";

const ContactTable = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const contacts = await getContactsAction(query, currentPage);
  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="py-3 px-6">#</th>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Phone</th>
            <th className="py-3 px-6">Created At</th>
            <th className="py-3 px-6 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact, index) => (
            <tr key={contact.id}>
              <td className="py-3 px-6">{index + 1}</td>
              <td className="py-3 px-6">{contact.name}</td>
              <td className="py-3 px-6">{contact.phone}</td>
              <td className="py-3 px-6">
                {formatDate(contact.createdAt.toString())}
              </td>
              <td className="py-3 inline-flex items-center justify-center gap-2 w-full ">
                <EditContactButton id={contact.id} />
                <DeleteContactButton id={contact.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
