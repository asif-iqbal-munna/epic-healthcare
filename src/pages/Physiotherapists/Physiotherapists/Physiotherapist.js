import React from "react";
import useDoctors from "../../../hooks/useDoctors";
import Banner from "../../Home/Banner/Banner";

const Physiotherapist = () => {
  const [doctors] = useDoctors();
  console.log(doctors);
  return (
    <>
      <Banner />
      <section className="my-24">
        <h2 className="text-2xl text-center mb-4 font-medium md:text-4xl">
          Meet Our Specialists
        </h2>
        <div className="grid mx-auto grid-col-1 justify-items-center md:grid-cols-2 gap-6 px-6">
          {doctors.map((doctor) => (
            <div
              className="hover:shadow-2xl shadow-lg p-6 max-w-sm w-full lg:max-w-full lg:flex"
              key={doctor?.id}
            >
              <div
                className="h-48 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage: `url(${doctor.img})`,
                }}
                title="Woman holding a mug"
              ></div>
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2 capitalize">
                    {doctor?.name}
                  </div>
                  <p className="text-gray-700 text-base">
                    {doctor?.qualifications.position1}
                  </p>
                  <p className="text-gray-700 text-base">
                    {doctor?.qualifications?.position2}
                  </p>
                  <p className="text-gray-700 text-base">
                    {doctor?.qualifications?.position3}
                  </p>
                  <p className="text-gray-700 text-base">
                    {doctor?.qualifications?.position4}
                  </p>
                  <p className="text-gray-700 text-base">
                    {doctor?.qualifications?.position5}
                  </p>
                  <p className="text-gray-700 text-base">
                    {doctor?.qualifications?.position6}
                  </p>
                  <p className="text-gray-700 text-base">
                    {doctor?.qualifications?.position7}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Physiotherapist;
