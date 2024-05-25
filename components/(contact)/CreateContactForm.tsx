"use client";

import React from "react";
import { createContactAction } from "@/actions/createContactAction";
import { useFormState } from "react-dom";
import SaveContactButton from "../(button)/SaveContactButton";

const CreateContactForm = () => {
  const [state, formAction] = useFormState(createContactAction, null);

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
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div>
          <div id="message-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.message}</p>
          </div>
        </div>
        <SaveContactButton label="save" />
      </form>
    </div>
  );
};

export default CreateContactForm;
