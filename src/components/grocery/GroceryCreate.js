import React, { useState, useEffect } from "react";
import { createGroceryList } from "../modules/FetchManager";
import { useHistory, useParams } from "react-router-dom";
import { getAllFoodItems, getFoodItemById, getGroceryListById, editGroceryList, deleteUserGroceryListItem, deleteSelectedGroceryItems, createSelectedGroceryListItem } from "../modules/FetchManager";
import { AllFoodItemsCard } from "./AllFoodItemsCard"
import { UserGroceryCard } from "./userGroceryCard"
import "./groceryCreate.css"

export const GroceryListCreateForm = (dingus) => {
  const [userGroceryList, setUserGroceryList] = useState([]);
  const [reducedUniqueItems, setReducedUniqueItems] = useState([])
  const [allFoodItems, setAllFoodItems] = useState([{}])
  const [groceryList, setGroceryList] = useState({name: ""})
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const {listId}  = useParams()
  // console.log(listId, "dis be the list id")

//!we use this to set setUserGroceryList to hold the data from the fetch call getFoodItemById. we could have done this in a use effect, but we made a seperate function for it.
  const getUserList = () =>{
    getGroceryListById(listId)
    .then(res => {
      setGroceryList(res)
    })
    // getFoodItemById(listId)
    // .then(response => {
    //   console.log(response, "filtered data for specific user grocery list items")
    //   setUserGroceryList(response)})
  }

  const getUserGroceryList = () =>{
    getFoodItemById(listId)
    .then(response => {
      // console.log(response, "filtered data for specific user grocery list items")
      setUserGroceryList(response)})
  }

  // console.log(groceryList)

  const handleFieldChange = evt => {
    const stateToChange = { ...groceryList };
    stateToChange[evt.target.id] = evt.target.value;
    // console.log(evt.target.value, "event.target.value")
    // console.log(groceryList, "UGL")
    setGroceryList(stateToChange);
  };

  const handleSaveButton = () => {
    editGroceryList(groceryList)
    .then(() => {
      history.push("/")
    })
  }

  const handleSaveButtonAndViewMap = () => {
    editGroceryList(groceryList)
    .then(() => {
      history.push(`/storeMap/${listId}`)
    })
  }

  const handleDeleteUserGroceryItem = (id) =>{
    //!NOTE this is the new fetch call that i have placed in.
    deleteUserGroceryListItem(id)
    .then(getUserGroceryList);
  }

  // const updateExistingUserGroceryList = evt => {
  //   evt.preventDefault()
  //   setIsLoading(true);

  //    //! do i need all of these? or just the property that im currently editing?
  //    const editedUserGroceryList = {
  //     key: userGroceryList.id,
  //     name: userGroceryList.name
  //   };

  //   updateExistingUserGroceryList(editedUserGroceryList)
  //   //!this is for the submit button, right? and if so, i dont beleive i need it jsut yet.
  //   .then(() => history.push("/store")
  //   )
  // }

  const handleAddFoodItem = (foodItem) => {
    //NOTE i need to pass in all the properties of the object, correct?
      const newSelectedGroceryItem = {
        allFoodItemId: foodItem.id,
        userGroceriesListId: groceryList.id
      }
      createSelectedGroceryListItem(newSelectedGroceryItem)
      .then(getUserGroceryList)
    }

    useEffect(() => {
        const uniqueItems = userGroceryList.filter((value, index) => {

            const indexPosition = userGroceryList.findIndex((item) => {
                return item.allFoodItemId === value.allFoodItemId
            })

            return index === indexPosition
        })

        console.log(uniqueItems)

        setReducedUniqueItems(uniqueItems)
    }, [userGroceryList])

  useEffect(() => {
    getUserList()
    getUserGroceryList()
  }, []);

  useEffect(() => {
        getAllFoodItems()
        .then(response => {
            setAllFoodItems(response)
        })
  }, []);

  return (
    <>
      <div className="createContentPusher">
        <div className="groceryEditHolder">
          <div className="userList">
            <div>
            <form>
            <h4><input
              placeholder="Name Your List"
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={groceryList.name}
            />
        </h4>
</form>
            </div>
            <div className="userListCardHolder">
                {reducedUniqueItems.map(userFoodItem =>
                  <UserGroceryCard
                  key={userFoodItem.id}
                  userFoodItem={userFoodItem}
                  userGroceryList={userGroceryList}
                  handleDeleteUserGroceryItem={handleDeleteUserGroceryItem}
                  />
                    )}
              </div>
              <button className="addToList" onClick={() => {handleSaveButton()}}>Save List</button>
              <button className="addToList" onClick={() => {handleSaveButtonAndViewMap()}}>View Map</button>
          </div>

          <div className="storeList">
            <div className="storeHeader">
            <h3>Choose Your Items</h3>

            {/* <select class="categories">
              <option value="category">Category</option>
              <option value="fruit">Fruit</option>
              <option value="veggies">Veggies</option>
              <option value="meat">Meat</option>
              <option value="snacks">Snacks</option>
              <option value="dairy">Dairy</option>
              </select> */}
              </div>
              <div className="storeItemsScroll">
              {allFoodItems
                .map(foodItem =>
                <AllFoodItemsCard
                    key={foodItem.id}
                    foodItem={foodItem}
                    groceryList={groceryList}
                    handleAddFoodItem={handleAddFoodItem}
                />
                )}
                </div>

          </div>
        </div>
        </div>
      </>
  );
};