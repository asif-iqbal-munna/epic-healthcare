import React from "react";

const info = () => {
  return (
    <div className="bg-gray-200 text-center px-4">
      <div>
        <h4 className="text-xl  py-4 font-medium md:text-2xl">Service Hours</h4>
        <div className="flex justify-between border-b-2 border-gray-500">
          <p>Saturday-Thursday</p>
          <p>10:Am-9Pm</p>
        </div>
        <div className="flex justify-between border-b-2 border-gray-500 mt-4">
          <p>Friday</p>
          <p>11:Am-4Pm</p>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-xl  py-4 font-medium md:text-2xl">Location</h4>
        <address className="my-2">
          MCC Building <br />
          (2nd Floor) <br /> 76 Gulshan Avenue, <br /> Dhaka-1212 Bangladesh
        </address>
        <p>Call At: 01986660000</p>
      </div>
    </div>
  );
};

export default info;
