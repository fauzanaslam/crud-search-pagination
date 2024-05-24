import React from "react";
import CreateContactForm from "../../../components/(contact)/CreateContactForm";

const Page = () => {
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2"> Add new contact</h1>
      <CreateContactForm />
    </div>
  );
};

export default Page;
