import React from "react";
import Form from "./Form";
import Info from "./info";

const Appoinment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Info />
        <Form />
      </div>
    </div>
  );
};

export default Appoinment;
