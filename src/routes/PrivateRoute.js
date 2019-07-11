import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({component: Component, ...rest}) {
    const token = localStorage.getItem("token");
    console.log(token);
    
    return (
      <Route
        {...rest}
        component={props =>
          token ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
}
