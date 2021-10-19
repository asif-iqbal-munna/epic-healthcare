import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = () => {
  return (
    <div>
      <h2 className="text-2xl text-center py-4 font-medium md:text-4xl">
        Our Locations
      </h2>
      <p className="text-lg md:text-2xl leading-relaxed mt-4 px-2 md:px-10 text-center">
        At our clinics, you are the most important person and relieving your
        problems is our primary concern. We will make sure we listen to your
        story, hear your concerns and address you as an individual, and that you
        always know we are dedicated to your recovery.
      </p>
      <div className="flex justify-center">
        <Link to="/physiotherapist">
          <button className="p-4 hover:bg-indigo-900 bg-blue-900 mt-2 rounded-2xl mt-4">
            Our Physiotherapists
            <FontAwesomeIcon className="ml-2" icon={faHandHoldingMedical} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
