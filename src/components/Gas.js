//?here we are importing every component to combine it with nav bar,
//?as well as check for use login. if they are not logged in,
//?we will send them to the login page.

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "../components/NavBar"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { userStorageKey } from "./auth/authSettings";
import { AppViews } from "./AppViews";
//TODO import css
        //? why is render needed here? could we not just use the return statement?

export const Gas = (props) => {
  return (
    <>
      <Route
        render={() => {
          if (sessionStorage.getItem(userStorageKey)) {
            return (
              <>
                <NavBar />
                <AppViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );
};
