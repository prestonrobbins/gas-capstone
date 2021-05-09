import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { createGroceryList } from "../modules/FetchManager"
//!import css


//?how does this work with out props again?or is this just a parameter? id like to learn it that way first if possible, but im not sure if this is the same thing. 
export const StoreCard = ({ store }) => {
  // const handleSetUserGroceryList = (storeId) => {
  //   setUserGroceryList({...userGroceryList, storeId: storeId})
  // }

  const history = useHistory()
  const loggedInUserId = parseInt(sessionStorage.getItem("app_user_id"))
  const handleStoreSelect = () => {
    const newGroceryList = {
      name: "",
      userId: loggedInUserId,
      storeId: store.id
    }
    createGroceryList(newGroceryList)
    .then(res => {
      // console.log(res)
      history.push(`/groceryList/${res.id}`)
    })
  }
  return (
      <>
      <h3 className="cardName">
            {store.name}
        </h3>
        <h3 className="cardAddress">
            {store.address}
        </h3>

          <button onClick={ handleStoreSelect }>Choose Store</button>
      </>
    );
};