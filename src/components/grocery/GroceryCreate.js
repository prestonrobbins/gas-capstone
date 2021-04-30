import React, { useState, useEffect } from "react";
import { createGroceryList } from "../modules/FetchManager";
import { useHistory, useParams } from "react-router-dom";
import { getAllFoodItems, getFoodItemById } from "../modules/FetchManager";
import { AllFoodItemsCard } from "./AllFoodItemsCard"
import { UserGroceryCard } from "./userGroceryCard"
import "./groceryCreate.css"

export const GroceryListCreateForm = () => {
  const [userGroceryList, setUserGroceryList] = useState({});
  const [allFoodItems, setAllFoodItems] = useState([{}])
  const history = useHistory();

//!we use this to set setUserGroceryList to hold the data from the fetch call getFoodItemById. we could have done this in a use effect, but we made a seperate function for it.
  const getUserList = () =>{
    getFoodItemById()
    .then(response => {
      console.log(response)
      setUserGroceryList(response)})
  }

  useEffect(() => {
    getUserList()
  }, []);
  
  useEffect(() => {
        getAllFoodItems()
        .then(response => {
            setAllFoodItems(response)
        })
  }, []);

  return (
    <>
        <h3>Edit Your Shopping List</h3>

        <div className="groceryEditHolder">
          <div className="userList">
            <h3>Your List</h3>
            <div className="userListCardHolder">
                {userGroceryList.length > 0 &&
                userGroceryList.map(userFoodItem => 
                  <UserGroceryCard
                  key={userFoodItem.id}
                  userFoodItem={userFoodItem}
                  />
                    )}
              </div>
          </div>

          <div className="storeList">
            <div className="storeHeader">
            <h3>Choose Your Items</h3>

            <label for="categoryChoose">Choose a category:</label>
            <select id="Categories">
              <option value="fruit">Fruit</option> 1 2
              <option value="veggies">Veggies</option>3 4
              <option value="meat">Meat</option> 5
              <option value="snacks">Snacks</option> 8
              <option value="dairy">Dairy</option>10
              </select>
              </div>
              <div className="storeItemsScroll">
              {allFoodItems
                .map(foodItem =>
                <AllFoodItemsCard
                    key={foodItem.id}
                    name={foodItem.name}
                    price={foodItem.price}   
                />
                )} 
                </div>
            
          </div>
        </div>
      </>
  );
};
