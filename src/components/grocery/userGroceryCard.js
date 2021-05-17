import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

export const UserGroceryCard = ({ userFoodItem, handleDeleteUserGroceryItem, userGroceryList }) => {
    let count = 0
    for(const item of userGroceryList){
        if(item.allFoodItemId === userFoodItem.allFoodItemId){
            count = count+1
        }
    }
    return (
    <>
    <div className="selectedItemCard">
    <h4>{userFoodItem.allFoodItem.name}</h4>
    <p>${userFoodItem.allFoodItem.price}</p>
    <p>{count}</p>
        <button type="button" className="cardButton" 
         onClick={() => handleDeleteUserGroceryItem(userFoodItem.id)}
        >remove</button>
        </div>
    </>
      );
  };