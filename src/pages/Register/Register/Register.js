import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { signInWithGoogle, error, manuallySignUp } = useAuth();
  const [mail, setMial] = useState("");
  const [password, setPassword] = useState("");

  const getMail = (e) => {
    setMial(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    manuallySignUp(mail, password);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form
          onSubmit={handleRegistration}
          className="space-y-4"
          action="#"
          method="POST"
        >
          <h4 className="text-xl py-4 font-medium md:text-2xl">Register</h4>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid gap-6">
              <div className="col-span-12">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Name"
                  autoComplete="given-name"
                  className="mt-1 bg-gray-50 border-2 px-2 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-12">
                <input
                  onBlur={getMail}
                  type="text"
                  name="email_address"
                  placeholder="Email"
                  autoComplete="email"
                  className="mt-1 bg-gray-50 border-2 px-2 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-12">
                <input
                  onBlur={getPassword}
                  type="password"
                  placeholder="Password"
                  className="mt-1 bg-gray-50 border-2 px-2 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm"></div>
            <p>
              Already User?{" "}
              <Link to="/login" className="text-indigo-800">
                Please Login.
              </Link>
            </p>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="py-2 text-red-500">{error}</p>
        <div className="w-20 mt-2 grid grid-cols-2 gap-4 ">
          <button onClick={signInWithGoogle}>
            <i className="fab fa-google text-2xl"></i>
          </button>
          <button>
            <i className="fab fa-github text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
