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
        <img className="foodImage" src={require(`../../images/${userFoodItem.allFoodItem.foodItemImageURL? userFoodItem.allFoodItem.foodItemImageURL: "gasLogo.png"}`).default} alt="food Image"></img>

        {/* <div className="image">image</div> */}
        <div className="flexHolder">
        <div className="priceAndNameHolder">
    <h4>{userFoodItem.allFoodItem.name}</h4>
    <p>${userFoodItem.allFoodItem.price}</p>
    </div>
    <div className="quantityHolder">
    <button type="button" className="upCardButton">🔼</button>
    <p className="quantityCounter">{count}</p>
        <button type="button" className="downCardButton" 
         onClick={() => handleDeleteUserGroceryItem(userFoodItem.id)}
        >🔽</button>
        </div>
        </div>
        </div>
    </>
      );
  };