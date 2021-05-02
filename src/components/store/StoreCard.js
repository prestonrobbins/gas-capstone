import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
//!import css


//?how does this work with out props again?or is this just a parameter? id like to learn it that way first if possible, but im not sure if this is the same thing. 
export const StoreCard = ({ name, address }) => {
  return (
      <>
      <h3 className="cardName">
            {name}
        </h3>
        <h3 className="cardAddress">
            {address}
        </h3>
{/* //! This probably needs to be a "useHistory". it also needs to create a new object with in the "useGroceryList" array. it should create each property with in the object except for name, which will be blank until the next page on the "create form page" */}
        <Link to={`/GroceryLists/create`}>
          <button>Choose Store</button>
        </Link>
      </>
    );
};