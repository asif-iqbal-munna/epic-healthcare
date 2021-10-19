import React from "react";
import SingleFeature from "./SingleFeature";
import { faPhoneAlt, faUsers, faCogs } from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="bg-indigo-700 w-full pb-16 text-white">
      <h2 className="text-2xl text-center pt-4 font-medium md:text-4xl p-4">
        Features
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-6">
        <SingleFeature
          icon={faPhoneAlt}
          name="Talehealth"
          des="Need help remotely? Our qualified physiotherapists are also available
        via telehealth to help you."
        />
        <SingleFeature
          icon={faUsers}
          name="Experienced Team"
          des="We pride ourselves on providing you with the best experience possible from our team of expert physiotherapists."
        />
        <SingleFeature
          icon={faCogs}
          name="Modern Technology"
          des="Equipped with state-of-the-art equipment, we are focused on maintaining a positive atmosphere to aid in recovery."
        />
      </div>
      <div className="w-11/12 p-4 md:max-w-5xl mx-auto bg-indigo-800 pb-12 rounded-3xl">
        <FeatureCard />
      </div>
    </section>
  );
};

export default Features;
