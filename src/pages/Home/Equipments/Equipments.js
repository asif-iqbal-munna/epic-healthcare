import React from "react";
import img1 from "../../../images/equipments/eq11-1.jpg";
import img2 from "../../../images/equipments/eq22.jpg";
import img3 from "../../../images/equipments/eq33.jpg";
import img4 from "../../../images/equipments/eq44.jpg";
import img5 from "../../../images/equipments/eq55.jpg";
import img6 from "../../../images/equipments/eq66.jpg";
import img7 from "../../../images/equipments/eq77.jpg";
import img8 from "../../../images/equipments/eq88.jpg";

const Equipments = () => {
  return (
    <section className="mb-20">
      <h2 className="text-2xl text-center mb-4 font-medium md:text-4xl">
        Our Digital Equipments
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 grid-cols-2 p-4 gap-6">
        <img
          className="bg-indigo-300 shadow-xl p-6 rounded-xl"
          src={img1}
          alt=""
        />
        <img
          className="bg-indigo-300 shadow-xl p-6 rounded-xl"
          src={img2}
          alt=""
        />
        <img
          className="bg-indigo-300 shadow-xl p-6 rounded-xl"
          src={img3}
          alt=""
        />
        <img
          className="bg-indigo-300 shadow-xl p-6 rounded-xl"
          src={img4}
          alt=""
        />
        <img
          className="bg-indigo-300 shadow-xl p-6 rounded-xl"
          src={img5}
          alt=""
        />
        <img
          className="bg-indigo-300 shadow-xl p-6 rounded-xl"
          src={img6}
          alt=""
        />
        <img
          className="bg-indigo-300 shadow-xl p-6 rounded-xl"
          src={img7}
          alt=""
        />
        <img
          className="bg-indigo-300 shadow-xl p-6 rounded-xl"
          src={img8}
          alt=""
        />
      </div>
    </section>
  );
};

export default Equipments;
