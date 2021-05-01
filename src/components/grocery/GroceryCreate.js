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
            <div>
            <h3>Your List</h3>
            </div>
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

            <select class="categories">
              <option value="category">Category</option>
              <option value="fruit">Fruit</option>
              <option value="veggies">Veggies</option>
              <option value="meat">Meat</option>
              <option value="snacks">Snacks</option>
              <option value="dairy">Dairy</option>
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
