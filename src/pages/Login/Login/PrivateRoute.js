import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="my-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user?.displayName || user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      ></Route>
    );
  }
};

export default PrivateRoute;
