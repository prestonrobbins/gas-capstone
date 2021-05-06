import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { getSelectedFoodItemsById } from "../modules/FetchManager"

export const StoreMap = () => {
    const [selectedFoodItems, setSelectedFoodItems] = useState([]);
    const history = useHistory()

    const listId = 1
    const getSelectedFoodItemsByIdReturn = () => {
        return getSelectedFoodItemsById(listId)
        .then((res) => {
            setSelectedFoodItems(res)
        })
    }

    useEffect(() => {
        getSelectedFoodItemsByIdReturn();
      }, []);

      const selectedFilteredFoodItemAisleOne = selectedFoodItems.filter(foodItem => foodItem.allFoodItem.aisleId === 1)
      console.log("aisle one objects", selectedFilteredFoodItemAisleOne)
      console.log(selectedFoodItems)


      return (
          <>
            <h3>Aisle 1</h3>
            {selectedFilteredFoodItemAisleOne.map(filteredFoodItem => {
                return <p
                key={filteredFoodItem.id}
                name={filteredFoodItem.allFoodItem.name}
                >{filteredFoodItem.allFoodItem.name}</p>
            })}
            <h3>Aisle 2</h3>
            <h3>Aisle 3</h3>
            <h3>Aisle 4</h3>
            <h3>Aisle 5</h3>
            <h3>Aisle 6</h3>
            <h3>Aisle 7</h3>
            <h3>Aisle 8</h3>
            <h3>Aisle 9</h3>
            <h3>Aisle 10</h3>

          </>
      )
}