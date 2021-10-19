import React from "react";

const Location = () => {
  return (
    <div>
      <h5 className="text-xl mb-1 border-indigo-800 border-b-2 inline">
        Location
      </h5>
      <address className="mt-2">
        MCC Building <br />
        (2nd Floor) <br /> 76 Gulshan Avenue, <br /> Dhaka-1212 Bangladesh
      </address>
      <p>
        Phone:{" "}
        <small className="text-indigo-300 cursor-pointer">02-9850038</small>
      </p>
      <p>
        Mobile 1:{" "}
        <small className="text-indigo-300 cursor-pointer">01986660000</small>
      </p>
      <p>
        Mobile 2:{" "}
        <small className="text-indigo-300 cursor-pointer">01986660001</small>
      </p>
      <p>
        Email:{" "}
        <small className="text-indigo-300 cursor-pointer">
          info@mayfair.com.bd
        </small>
      </p>
    </div>
  );
};

export default Location;
