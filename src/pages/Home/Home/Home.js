import React from "react";
import Banner from "../Banner/Banner";
import Equipments from "../Equipments/Equipments";
import Features from "../Features/Features";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Equipments />
      <Features />
    </div>
  );
};

export default Home;
