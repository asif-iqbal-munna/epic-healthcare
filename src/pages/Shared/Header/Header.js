import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user.email, user);
  return (
    <header className="sticky top-0 lg:px-16 px-6 bg-gray-700 flex flex-wrap items-center lg:py-0 py-2 z-50">
      <div className="flex-1 flex justify-between items-center text-indigo-400 text-xl md:text-3xl font-bold">
        <Link to="/">epic healthcare</Link>
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>Navigation Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-white pt-4 lg:pt-0">
            <li>
              <Link
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                to="/physiotherapist"
              >
                Therapist
              </Link>
            </li>
            <li>
              <Link
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                to="/appointment"
              >
                Appointment
              </Link>
            </li>
          </ul>
        </nav>
        {user.email || user.displayName ? (
          <button
            onClick={logOut}
            className="px-4 py-2 text-white hover:bg-indigo-900 bg-blue-900 mt-2 rounded-2xl"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="px-4 py-2 text-white hover:bg-indigo-900 bg-blue-900 mt-2 rounded-2xl">
              Sign In
            </button>
          </Link>
        )}
        <p className="lg:ml-4 flex items-center text-white justify-start lg:mb-0 mb-4 pointer-cursor">
          {user?.displayName || user?.email}
        </p>
      </div>
    </header>
  );
};

export default Header;
