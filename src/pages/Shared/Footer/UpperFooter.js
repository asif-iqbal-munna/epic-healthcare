import React from "react";
import QuickLinks from "./QuickLinks";
import Location from "./Location";

const UpperFooter = () => {
  return (
    <div className="py-6 bg-gray-800 h-72 grid grid-cols-2 text-white md:px-20 lg:px-96">
      <Location />
      {/* <Map /> */}
      <QuickLinks />
    </div>
  );
};

export default UpperFooter;
