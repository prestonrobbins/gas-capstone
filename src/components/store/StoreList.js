import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StoreCard } from "./StoreCard";
//TODO do i need all these? such as the edit since we dont use it in the return?
import { getStoreById, getAllStores } from "../modules/FetchManager";

export const StoreList = () => {
  const [stores, setStores] = useState([]);

  // const history = useHistory();

  const getStoreListReturn = () => {
    return getAllStores().then((storesFromAPI) => {
      setStores(storesFromAPI);
    });
  };

  useEffect(() => {
    getStoreListReturn();
  }, []);
  //TODO ??? what is history doing here? still confused on it.
  //TODO why are we not defining edit here? we have create, delete, the useState function and all but not that.

  return (
    <>
      <div className="listHeaderSection">
        <h3>Choose a Store</h3>
      </div>
      <div className="displayStoreCards">
        {stores.map((storeItem) => (
          <StoreCard
            key={storeItem.id}
            name={storeItem.name}
            address={storeItem.address}
          />
        ))}
      </div>
    </>
  );
};
//TODO id love to know if im naming things well with in my project, the last time bryan tweeked that on my project it really helped.
