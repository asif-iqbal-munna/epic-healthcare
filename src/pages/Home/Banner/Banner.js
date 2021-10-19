import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <section className="banner flex justify-center items-center">
      <div className="text-white pl-2">
        <h2 className="text-4xl md:text-7xl font-bold">OUR SPECIALISTS</h2>
        <h4 className="text-2xl md:text-3xl font-semibold">
          World-class Physiotherapy Clinic in Gulshan Avenue, Dhaka
        </h4>
        <Link to="/appointment">
          <button className="p-4 hover:bg-indigo-900 bg-blue-900 mt-2 rounded-2xl">
            Book Your Appoinment
            <FontAwesomeIcon className="ml-2" icon={faCalendarAlt} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
