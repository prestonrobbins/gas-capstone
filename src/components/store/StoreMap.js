import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { getSelectedFoodItemsById } from "../modules/FetchManager"
import "./StoreMap.css"

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
      const selectedFilteredFoodItemAisleTwo = selectedFoodItems.filter(foodItem => foodItem.allFoodItem.aisleId === 2)
      const selectedFilteredFoodItemAisleThree = selectedFoodItems.filter(foodItem => foodItem.allFoodItem.aisleId === 3)
      const selectedFilteredFoodItemAisleFour = selectedFoodItems.filter(foodItem => foodItem.allFoodItem.aisleId === 4)
      const selectedFilteredFoodItemAisleFive = selectedFoodItems.filter(foodItem => foodItem.allFoodItem.aisleId === 5)
      const selectedFilteredFoodItemAisleSix = selectedFoodItems.filter(foodItem => foodItem.allFoodItem.aisleId === 6)
      const selectedFilteredFoodItemAisleSeven = selectedFoodItems.filter(foodItem => foodItem.allFoodItem.aisleId === 7)
      const selectedFilteredFoodItemAisleEight = selectedFoodItems.filter(foodItem => foodItem.allFoodItem.aisleId === 8)
      const selectedFilteredFoodItemAisleNine = selectedFoodItems.filter(foodItem => foodItem.allFoodItem.aisleId === 9)
      const selectedFilteredFoodItemAisleTen = selectedFoodItems.filter(foodItem => foodItem.allFoodItem.aisleId === 10)


      console.log("aisle one objects", selectedFilteredFoodItemAisleOne)
      console.log(selectedFoodItems)

      

      return (
          <>
            <h3>Aisle 1</h3>
            <ul>
            {selectedFilteredFoodItemAisleOne.map(filteredFoodItem => {
                return <p
                key={filteredFoodItem.id}
                name={filteredFoodItem.allFoodItem.name}
                price={filteredFoodItem.allFoodItem.price}
                >{filteredFoodItem.allFoodItem.name}</p>
            })}
            </ul>
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