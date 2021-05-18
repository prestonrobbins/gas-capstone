import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom'
import { createSelectedGroceryListItem } from "../modules/FetchManager"

export const AllFoodItemsCard = ({ foodItem, handleAddFoodItem}) => {

    // const { userGroceryListId } = useParams()
    // let userGroceryListIdInt = parseInt(userGroceryListId)


    // const handleAddFoodItem= () => {
    //     //NOTE i need to pass in all the properties of the object, correct?
    //       const newSelectedGroceryItem = {
    //         allFoodItemId: foodItem.id,
    //         userGroceriesListId: groceryList.id
    //       }
    //       console.log(newSelectedGroceryItem, "HELP ME")
    //       return createSelectedGroceryListItem(newSelectedGroceryItem)
    //     }

    return (
    <>
<div className="selectedItemCard">
        <img className="foodImage" src={require(`../../images/${foodItem.foodItemImageURL? foodItem.foodItemImageURL: "gasLogo.png"}`).default} alt="food Image"></img>

        {/* <div className="image">image</div> */}
        <div className="flexHolder">
        <div className="priceAndNameHolder">
        <h4>{foodItem.name}</h4>
    <p>${foodItem.price}</p>
    </div>
    <div className="quantityHolder">
    <button type="button" className="cardButton" 
            onClick={() => handleAddFoodItem(foodItem)}
        >Add</button>
        </div>
        </div>
        </div>

    </>
      );
  };