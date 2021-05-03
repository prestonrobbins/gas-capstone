import React, { useState } from "react";
import { Route } from "react-router-dom";
import { GroceryList } from "./grocery/GroceryList"
import { GroceryListEditForm } from "./grocery/GroceryEdit"
import { GroceryListCreateForm } from "./grocery/GroceryCreate"
import { StoreList } from "./store/StoreList"
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


  const dingus="dangus"


  const setUser = props.setUser;
  const hasUser = true;
  return (
    <>
      <Route exact path="/">
        <GroceryList />
      </Route>

      <Route exact path="/GroceryLists/:groceryListId(\d+)/edit">
        <GroceryListEditForm />
      </Route>

      <Route exact path="/groceryList/:listId(\d+)">
        <GroceryListCreateForm dingis={dingus}/>
      </Route>

      <Route exact path="/storeList">
        <StoreList />
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
