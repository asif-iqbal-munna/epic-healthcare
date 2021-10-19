import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Form = () => {
  return (
    <div className="max-w-md w-full space-y-8">
      <div className="bg-indigo-500 py-6 px-4 text-white text-center">
        <h2 className="text-2xl  py-4 font-medium md:text-3xl">
          Schedule Your Appoinment
        </h2>
        <p className="text-lg text-base">
          Submit your info to confirm your appointmen
        </p>
      </div>
      <div>
        <form className="space-y-4" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm m-0">
            <div className="grid gap-6">
              <div className="col-span-12">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Name"
                  autoComplete="given-name"
                  className="mt-1 bg-gray-50 border-2 px-2 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-12">
                <input
                  type="text"
                  name="email_address"
                  id="email_address"
                  placeholder="Email"
                  autoComplete="email"
                  className="mt-1 bg-gray-50 border-2 px-2 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-12">
                <input
                  type="number"
                  name="phone-number"
                  placeholder="Phone Number"
                  className="mt-1 bg-gray-50 border-2 px-2 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-12">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="mt-1 bg-gray-50 border-2 px-2 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-12">
                <input
                  type="date"
                  name="date"
                  className="mt-1 bg-gray-50 border-2 px-2 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-12">
                <input
                  type="time"
                  name="time"
                  className="mt-1 bg-gray-50 border-2 px-2 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </form>
        <button className="p-4 hover:bg-indigo-900 bg-blue-900 mt-4 rounded-2xl">
          Book Your Appoinment
          <FontAwesomeIcon className="ml-2" icon={faCalendarAlt} />
        </button>
      </div>
    </div>
  );
};

export default Form;
