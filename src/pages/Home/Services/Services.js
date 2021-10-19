import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const [services] = useServices();
  //   console.log(services);

  return (
    <section className="my-24">
      <h2 className="text-2xl text-center mb-4 font-medium md:text-4xl">
        Our Services
      </h2>
      <div className="grid mx-auto grid-col-1 justify-items-center md:grid-cols-2 gap-6 px-6">
        {services.map((service) => (
          <div
            className="hover:shadow-2xl max-w-sm w-full lg:max-w-full lg:flex"
            key={service?.id}
          >
            <div
              className="h-48 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage: `url(${service.img})`,
              }}
              title="Woman holding a mug"
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2 capitalize">
                  {service?.name}
                </div>
                <p className="text-gray-700 text-base">
                  {service?.description.slice(0, 255)}
                </p>
              </div>
              <Link to={`/service/${service?.id}`}>
                <button className="p-4 hover:bg-indigo-900 bg-blue-900 mt-2 rounded-2xl text-white capitalize">
                  Book {service.name}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
