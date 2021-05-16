
import React, { useRef, useEffect, useState } from "react";
import { Link, useParams, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { getSelectedFoodItemsById } from "../modules/FetchManager"
import "./StoreMap.css"

export const StoreMap = () => {
    const [selectedFoodItems, setSelectedFoodItems] = useState([]);
    const history = useHistory()

    const listId = useParams()
    const getSelectedFoodItemsByIdReturn = () => {
        getSelectedFoodItemsById(listId.listId)
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

    //   console.log("aisle one objects", selectedFilteredFoodItemAisleOne)
    //   console.log(selectedFoodItems)
    

    //NOTE items below are for canvas only
      const canvasRef =  useRef(null)
      const contextRef =  useRef(null)
      const [isDrawing, setIsDrawing] = useState(false)
      
      useEffect(() => {
          const canvas = canvasRef.current;
          canvas.width=window.innerWidth * 2;
          canvas.height=window.innerHeight * 2;
          canvas.fillStyle="blue";
          canvas.style.zIndex="5";
          canvas.style.width=`${window.innerWidth}px`;
          canvas.style.height=`${window.innerHeight}px`;
      
          const context = canvas.getContext("2d")
          context.scale(2,2)
          context.lineCap = "round"
          context.strokeStyle = "red"
          context.lineWidth = 5
          contextRef.current = context;
      }, [])
      
          const startDrawing = ({nativeEvent}) => {
                console.log("startdrawing")
              const {offsetX, offsetY} = nativeEvent;
              contextRef.current.beginPath()
              contextRef.current.moveTo(offsetX, offsetY)
              setIsDrawing(true)
          }
      
          const finishDrawing = () => {
                console.log("finish drawing")
              contextRef.current.closePath()
              setIsDrawing(false)
          }
      
          const draw = (nativeEvent) => {
              console.log("is drawing")
              if(!isDrawing){
                  return
              }
              const {offsetX, offsetY} = nativeEvent;
              contextRef.current.lineTo(offsetX, offsetY)
              contextRef.current.stroke()
          }

      return (
          <>
          <canvas
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            />

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
            <ul>
            {selectedFilteredFoodItemAisleTwo.map(filteredFoodItem => {
                return <p
                key={filteredFoodItem.id}
                name={filteredFoodItem.allFoodItem.name}
                price={filteredFoodItem.allFoodItem.price}
                >{filteredFoodItem.allFoodItem.name}</p>
            })}
            </ul>
            <h3>Aisle 3</h3>
            <ul>
            {selectedFilteredFoodItemAisleThree.map(filteredFoodItem => {
                return <p
                key={filteredFoodItem.id}
                name={filteredFoodItem.allFoodItem.name}
                price={filteredFoodItem.allFoodItem.price}
                >{filteredFoodItem.allFoodItem.name}</p>
            })}
            </ul>
            <h3>Aisle 4</h3>
            <ul>
            {selectedFilteredFoodItemAisleFour.map(filteredFoodItem => {
                return <p
                key={filteredFoodItem.id}
                name={filteredFoodItem.allFoodItem.name}
                price={filteredFoodItem.allFoodItem.price}
                >{filteredFoodItem.allFoodItem.name}</p>
            })}
            </ul>
            <h3>Aisle 5</h3>
            <ul>
            {selectedFilteredFoodItemAisleFive.map(filteredFoodItem => {
                return <p
                key={filteredFoodItem.id}
                name={filteredFoodItem.allFoodItem.name}
                price={filteredFoodItem.allFoodItem.price}
                >{filteredFoodItem.allFoodItem.name}</p>
            })}
            </ul>
            <h3>Aisle 6</h3>
            <ul>
            {selectedFilteredFoodItemAisleSix.map(filteredFoodItem => {
                return <p
                key={filteredFoodItem.id}
                name={filteredFoodItem.allFoodItem.name}
                price={filteredFoodItem.allFoodItem.price}
                >{filteredFoodItem.allFoodItem.name}</p>
            })}
            </ul>
            <h3>Aisle 7</h3>
            <ul>
            {selectedFilteredFoodItemAisleSeven.map(filteredFoodItem => {
                return <p
                key={filteredFoodItem.id}
                name={filteredFoodItem.allFoodItem.name}
                price={filteredFoodItem.allFoodItem.price}
                >{filteredFoodItem.allFoodItem.name}</p>
            })}
            </ul>
            <h3>Aisle 8</h3>
            <ul>
            {selectedFilteredFoodItemAisleEight.map(filteredFoodItem => {
                return <p
                key={filteredFoodItem.id}
                name={filteredFoodItem.allFoodItem.name}
                price={filteredFoodItem.allFoodItem.price}
                >{filteredFoodItem.allFoodItem.name}</p>
            })}
            </ul>
            <h3>Aisle 9</h3>
            <ul>
            {selectedFilteredFoodItemAisleNine.map(filteredFoodItem => {
                return <p
                key={filteredFoodItem.id}
                name={filteredFoodItem.allFoodItem.name}
                price={filteredFoodItem.allFoodItem.price}
                >{filteredFoodItem.allFoodItem.name}</p>
            })}
            </ul>
            <h3>Aisle 10</h3>
            <ul>
            {selectedFilteredFoodItemAisleTen.map(filteredFoodItem => {
                return <p
                key={filteredFoodItem.id}
                name={filteredFoodItem.allFoodItem.name}
                price={filteredFoodItem.allFoodItem.price}
                >{filteredFoodItem.allFoodItem.name}</p>
            })}
            </ul>


          </>
      )
}