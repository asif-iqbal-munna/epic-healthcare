import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import { useState } from "react/cjs/react.development";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, error, manualSignIn, setError, user, setUser } =
    useAuth();
  const [mail, setMial] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const history = useHistory();
  const redirectUri = location.state?.from || "/";
  console.log(redirectUri);
  const getMail = (e) => {
    setMial(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    manualSignIn(mail, password);
  };

  const handledSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // console.log(user);
        // ...
        
        history.push(redirectUri);
        // setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // The email of the user's account used.
        // The AuthCredential type that was used.
        setError(errorMessage);
        // ...
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form
          onSubmit={handleSignIn}
          className="space-y-4"
          action="#"
          method="POST"
        >
          <h4 className="text-xl py-4 font-medium md:text-2xl">Log In</h4>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid gap-6">
              <div className="col-span-12">
                <input
                  type="text"
                  onBlur={getMail}
                  name="email_address"
                  placeholder="Email"
                  autoComplete="email"
                  className="mt-1 bg-gray-50 border-2 px-2 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-12">
                <input
                  type="password"
                  onBlur={getPassword}
                  placeholder="Password"
                  className="mt-1 bg-gray-50 border-2 px-2 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#hghg"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
            <p>
              New Here?{" "}
              <Link to="/register" className="text-indigo-800">
                Please Register.
              </Link>
            </p>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="px-4 rounded-lg py-2 text-red-500">{error}</p>
        <div className="w-20 mt-2 grid grid-cols-2 gap-4 ">
          <button onClick={handledSignInWithGoogle}>
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

export default Login;
