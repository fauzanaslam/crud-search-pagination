"use client";

import React from "react";
import { useFormState } from "react-dom";
import SaveContactButton from "../(button)/SaveContactButton";
import type { Contact } from "@prisma/client";
import { updateContactAction } from "@/actions/updateContactAction";

const UpdateContactForm = ({ contact }: { contact: Contact }) => {
  const UpdateContactWithId = updateContactAction.bind(null, contact.id);
  const [state, formAction] = useFormState(UpdateContactWithId, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className=" block text-sm font-medium text-gray-900 "
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
            placeholder="Full Name...."
            defaultValue={contact.name}
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className=" block text-sm font-medium text-gray-900 "
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
            placeholder="phone..."
            defaultValue={contact.phone}
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div>
          <div id="message-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.message}</p>
          </div>
        </div>
        <SaveContactButton label="update" />
      </form>
    </div>
  );
};

export default UpdateContactForm;
