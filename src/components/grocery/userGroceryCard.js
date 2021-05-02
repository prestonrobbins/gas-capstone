import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

export const UserGroceryCard = ({ userFoodItem }) => {
    return (
    <>
    <h4>{userFoodItem.allFoodItems.name}</h4>
    <h4>{userFoodItem.allFoodItems.id}</h4>
    <p>${userFoodItem.allFoodItems.price}</p>

        <button type="button" className="cardButton" 
        // onClick={() => handleAddFoodItem(foodItem.id)}
        >Add</button>
    </>
      );
  };