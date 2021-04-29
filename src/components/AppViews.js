import React, { useState } from "react";
import { Route } from "react-router-dom";
import { GroceryList } from "./grocery/GroceryList"
import { userStorageKey } from "../components/auth/authSettings"

export const AppViews = (props) => {
  //? no clue on how this works, but do know that it is checking for a login
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem(userStorageKey) !== null
  );
  const setAuthUser = (user) => {
    sessionStorage.setItem(userStorageKey, JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem(userStorageKey) !== null);
  };

  const setUser = props.setUser;
  const hasUser = true;
  return (
    <>
      <Route exact path="/">
        <GroceryList />
      </Route>

      {/* <Route exact path="/GroceryCreate">
        <GroceryCreate />
      </Route>

      <Route path="/:GroceryListEdit(\d+)/edit">
        <GroceryListEdit />
      </Route> */}

    </>
  );
};
