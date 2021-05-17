import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StoreCard } from "./StoreCard";
import "./StoreList.css"
import { getStoreById, getAllStores, createGroceryList } from "../modules/FetchManager";

export const StoreList = (user) => {
  const [stores, setStores] = useState([]);
//   const [userGroceryList, setUserGroceryList] = useState({
//     id: 1,
//     name: "",
//     storeId: 0,
//     userId: parseInt(sessionStorage.getItem("app_user_id"))
// });

// const handleControlledInputChange = (evt) => {
//     // const newLocation = { ...userGroceryList }
//     let selectedVal = evt.target.value
//     // forms always provide values as strings. But we want to save the ids as numbers.
//     if (evt.target.id.includes("Id")) {
//         selectedVal = parseInt(selectedVal)
//     }
    /* Location is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    //TODO newUserGroceryList[evt.target.id] = selectedVal
    // update state
    //TODO setUserGroceryList(newUserGroceryList)
// }

// const handleClickSaveUserGroceryList = (event) => {
//     event.preventDefault()
//         addUserGroceryList(userGroceryList)
//             .then(() => history.push("/locations"))
//     }

  const getStoreListReturn = () => {
    return getAllStores()
    .then((storesFromAPI) => {
      setStores(storesFromAPI);
    });
  };

  useEffect(() => {
    getStoreListReturn();
  }, []);

  return (
    <>
    <div className="storeCardPusher">
      <div className="storeCardHolder">
      <div className="listHeaderSection">
        <h3>Choose a Store</h3>
      </div>
      <div className="displayStoreCards">
        {stores.map((storeItem) => (
          <StoreCard
            key={storeItem.id}
            store={storeItem}
            // setUserGroceryList={setUserGroceryList}
          />
        ))}
        </div>
      </div>
      </div>
    </>
  );
};
