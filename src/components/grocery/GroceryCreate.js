import React, { useState, useEffect } from "react";
import { createGroceryList } from "../modules/FetchManager";
import { useHistory, useParams } from "react-router-dom";
import { getAllFoodItems, getFoodItemById } from "../modules/FetchManager";
import { AllFoodItemsCard } from "./AllFoodItemsCard"
import { UserGroceryCard } from "./userGroceryCard"
import "./groceryCreate.css"

export const GroceryListCreateForm = (dingus) => {
  const [userGroceryList, setUserGroceryList] = useState({});
  const [allFoodItems, setAllFoodItems] = useState([{}])
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const {listId}  = useParams()
  console.log(listId)

//!we use this to set setUserGroceryList to hold the data from the fetch call getFoodItemById. we could have done this in a use effect, but we made a seperate function for it.
  const getUserList = () =>{
    getFoodItemById()
    .then(response => {
      console.log(response)
      setUserGroceryList(response)})

  }

  //!is this just for when someone types into fields? not sure why itsn needed. 
  const handleFieldChange = evt => {
    const stateToChange = { ...userGroceryList };
    stateToChange[evt.target.id] = evt.target.value;
    setUserGroceryList(stateToChange);
  };

  const updateExistingUserGroceryList = evt => {
    evt.preventDefault()
    setIsLoading(true);

     //! do i need all of these? or just the property that im currently editing?
     const editedUserGroceryList = {
      key: userGroceryList.id,
      name: userGroceryList.name
    };

    updateExistingUserGroceryList(editedUserGroceryList)
    //!this is for the submit button, right? and if so, i dont beleive i need it jsut yet. 
    .then(() => history.push("/store")
    )
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
        <h4><input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={userGroceryList.name}
            />
        </h4>  

        <div className="groceryEditHolder">
          <div className="userList">
            <div>
            <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
</form>
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
              <button className="addToList" onClick={() => {console.log("you clicked me")}}>save list</button>
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
