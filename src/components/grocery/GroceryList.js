import React, { useState, useEffect } from 'react';
//!need to import fetch calls for info
import { useHistory } from 'react-router-dom'
import { GroceryCard } from './GroceryCard'
import { getGroceryList, deleteGroceryList, getAllGroceryLists, editGroceryList } from '../modules/FetchManager'
 
export const GroceryList = (props) => {

    const [groceryLists, setGroceryList] = useState([]);

    const history = useHistory();

    const handleDeleteGroceryList = id => {
        deleteGroceryList(id)
        .then(() => getAllGroceryLists().then(setGroceryList))
    };

    const getGroceryLists = () =>{
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
              <button>Create List</button>
              </div>
            <div className="displayGroceryLists">

                {groceryLists
                .map(groceryLists =>
                <GroceryCard
                    key={groceryLists.id}
                    groceryList={groceryLists}
                    deleteGroceryList={handleDeleteGroceryList}
                    {...props}
                />
                )}       
            </div>

          </div>
          </>
      )

    


}

