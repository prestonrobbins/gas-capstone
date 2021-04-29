import React, { useState, useEffect } from "react";
import { editGroceryList } from "../modules/FetchManager";
import { useHistory, useParams } from "react-router-dom";

export const GroceryListEditForm = () => {
  const [groceryList, setGroceryList] = useState({ name: "" });
  const [allFoodItems, setAllFoodItems] = useState([])
//   const [isLoading, setIsLoading] = useState(false);

//   const { groceryListId } = useParams();
//   const history = useHistory();

//   const handleFieldChange = (evt) => {
//     const stateToChange = { ...GroceryList };
//     stateToChange[evt.target.id] = evt.target.value;
//     setGroceryList(stateToChange);
//   };

//   const handleControlledInputChange = (event) => {
//     /* When changing a state object or array,
//       always create a copy, make changes, and then set state.*/
//     const newGroceryList = { ...GroceryList };
//     let selectedVal = event.target.value;
//     // forms always provide values as strings. But we want to save the ids as numbers.
//     if (event.target.id.includes("Id")) {
//       selectedVal = parseInt(selectedVal);
//     }
//     /* Employee is an object with properties.
//       Set the property to the new value
//       using object bracket notation. */
//     newGroceryList[event.target.id] = selectedVal;
//     // update state
//     setGroceryList(newGroceryList);
//   };

//   const updateExistingGroceryList = (evt) => {
//     evt.preventDefault();
//     setIsLoading(true);

//     // This is an edit, so we need the id
//     const editedGroceryList = {
//       id: groceryList.id,
//       name: groceryList.name,
//     };

//     updateGroceryList(editedGroceryList).then(() =>
//       history.push("/groceryLists")
//     );
//   };
//   //?not sure here becuse its using locations versus
//   useEffect(() => {
//     //load location data and setState
//     getAllLocations().then((locationsFromAPI) => {
//       setLocations(locationsFromAPI);
//     });
//   }, []);

//   useEffect(() => {
//     getGroceryListById(groceryListId).then((groceryList) => {
//       setGroceryList(groceryList);
//       setIsLoading(false);
//     });
//   }, []);
  return (
    <>

      <h3>Edit Your Shopping List</h3>

      <div className="groceryEditHolder">
        <div className="userList">
          <h3>Your List</h3>
          <div className="userListCardHolder">
                
            </div>
        </div>

        <div className="storeList">
          <h3>Choose Your Items</h3>

          <label for="categoryChoose">Choose a catergory:</label>
          <select id="Categories">
            <option value="fruit">Fruit</option> 1 2
            <option value="veggies">Veggies</option>3 4
            <option value="meat">Meat</option> 5
            <option value="snacks">Snacks</option> 8
            <option value="dairy">Dairy</option>10

            


          </select>
        </div>
      </div>
    </>
  );
};
