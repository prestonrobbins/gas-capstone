import React, { useState, useEffect } from 'react';
//!need to import fetch calls for info
import { useHistory } from 'react-router-dom'
import { GroceryCard } from './GroceryCard'
//TODO do i need all these? such as the edit since we dont use it in the return?
import { getGroceryList, deleteGroceryList, getAllGroceryLists, editGroceryList } from '../modules/FetchManager'
 
export const GroceryList = () => {

    const [groceryLists, setGroceryList] = useState([]);

    const history = useHistory();

    const handleDeleteGroceryList = id => {
        deleteGroceryList(id)
        .then(() => getAllGroceryLists().then(setGroceryList))
    };

    const getGroceryLists = () => {
        return getAllGroceryLists()
        .then(GroceryListFromAPI => {
            setGroceryList(GroceryListFromAPI)
        })
    };

    useEffect(() => {
        getGroceryLists();
      }, []);

      return(
          <>
            <div className="listContentContainer">
              <div className="listHeaderSection">
              <h3>Your Lists</h3>
              <button type="button"
                    className="btn"
                    onClick={() => { history.push("/storeList") }}>
                    Create New List
                </button>
              </div>
            <div className="displayGroceryLists">

                {groceryLists
                .map(groceryListItem =>
                <GroceryCard
                    key={groceryListItem.id}
                    groceryList={groceryListItem}
                    handleDeleteGroceryList={handleDeleteGroceryList}
                />
                )}       
            </div>
          </div>
          </>
      )

}
//TODO id love to know if im naming things well with in my project, the last time bryan tweeked that on my project it really helped.
