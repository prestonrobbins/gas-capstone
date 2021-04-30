import React, { useState, useEffect } from "react";
import { createGroceryList } from "../modules/FetchManager";
import { useHistory, useParams } from "react-router-dom";
import { getAllFoodItems } from "../modules/FetchManager";
import { AllFoodItemsCard } from "./AllFoodItemsCard"
import "./groceryCreate.css"

export const GroceryListCreateForm = () => {
  const [groceryList, setGroceryList] = useState({ name: "" });
  const [allFoodItems, setAllFoodItems] = useState([{}])

  const history = useHistory();

  useEffect(() => {
        getAllFoodItems()
        .then(response => {
            setAllFoodItems(response)
        })
  }, []);

  return (
    <>
    {console.log(allFoodItems)}
        <h3>Edit Your Shopping List</h3>

        <div className="groceryEditHolder">
          <div className="userList">
            <h3>Your List</h3>
            <div className="userListCardHolder">
                
              </div>
          </div>

          <div className="storeList">
            <h3>Choose Your Items</h3>

            <label for="categoryChoose">Choose a category:</label>
            <select id="Categories">
              <option value="fruit">Fruit</option> 1 2
              <option value="veggies">Veggies</option>3 4
              <option value="meat">Meat</option> 5
              <option value="snacks">Snacks</option> 8
              <option value="dairy">Dairy</option>10
              </select>
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
