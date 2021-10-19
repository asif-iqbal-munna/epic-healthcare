import React from "react";
import { Link } from "react-router-dom";
import img from "../../../images/404.jpg";

const NotFound = () => {
  return (
    <div className="p-20">
      <h1 className="text-7xl">Oops!</h1>
      <img className="h-96" src={img} alt="" />
      <Link to="/">
        <button className="p-4 hover:bg-indigo-900 bg-blue-900 mt-2 text-white rounded-2xl">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
