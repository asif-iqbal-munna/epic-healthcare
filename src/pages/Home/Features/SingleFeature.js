import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleFeature = ({ name, des, icon }) => {
  return (
    <div className="text-center p-8 md:mt-6">
      <div className="bg-white h-12 w-12 rounded-full p-3 mx-auto">
        <FontAwesomeIcon className="text-black" icon={icon} />
      </div>
      <h4 className="text-2xl font-medium my-3">{name}</h4>
      <p className="text-sm">{des}</p>
    </div>
  );
};

export default SingleFeature;
