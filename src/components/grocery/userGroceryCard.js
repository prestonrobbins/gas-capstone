import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

export const UserGroceryCard = ({ userFoodItem, handleDeleteUserGroceryItem }) => {
    return (
    <>
    <h4>{userFoodItem.allFoodItem.name}</h4>
    <h4>{userFoodItem.allFoodItem.id}</h4>
    <p>${userFoodItem.allFoodItem.price}</p>

        <button type="button" className="cardButton" 
         onClick={() => handleDeleteUserGroceryItem(userFoodItem.id)}
        >remove</button>
    </>
      );
  };