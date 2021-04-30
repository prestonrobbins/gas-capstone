import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

export const AllFoodItemsCard = ({ name, price }) => {
    return (
    <>
    <h4>{name}</h4>
        <button type="button" className="cardButton" 
        // onClick={() => handleAddFoodItem(foodItem.id)}
        >Add</button>
    </>
      );
  };