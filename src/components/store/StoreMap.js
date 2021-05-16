
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
        const canvasDiv =  useRef(null)
        const contextRef =  useRef(null)
        const [isDrawing, setIsDrawing] = useState(false)
        
        useEffect(() => {
            const canvas = canvasRef.current;
            canvas.width=window.innerWidth*0.48 ;
            canvas.height=window.innerHeight*0.85 ;
          //   canvas.fillStyle="blue";
          //   canvas.style.zIndex="5";
          //   canvas.style.width=`${window.innerWidth}px`;
          //   canvas.style.height=`${window.innerHeight}px`;
        
            const context = canvas.getContext("2d")
            context.fillRect(50, 50+75, 75, 175)  //aisle 10
            context.fillRect(50, 275+75, 75, 175) //aisle 9
            context.fillRect(175, 50+75, 75, 175)  //aisle 8
            context.fillRect(175, 275+75, 75, 175) //aisle 7
            context.fillRect(300, 50+75, 75, 175)  //aisle 6
            context.fillRect(300, 275+75, 75, 175) //aisle 5
            context.fillRect(425, 50+75, 75, 175)  //aisle 4
            context.fillRect(425, 275+75, 75, 175) //aisle 3
            context.fillRect(550, 50+75, 75, 175)  //aisle 2
            context.fillRect(550, 275+75, 75, 175) //aisle 1
            context.fillRect(50, -10, 275, 75)  //aisle 10
            context.fillRect(350, -10, 275, 75)  //aisle 10
            context.lineCap = "round"
            // context.fillStyle = "white"
            context.strokeStyle = "blue"
            context.lineWidth = 5
            contextRef.current = context;
        }, [])
        
            const startDrawing = ({nativeEvent}) => {
                  console.log("startdrawing")
                const {offsetX, offsetY} = nativeEvent;
              //   contextRef.current.beginPath()
              //   contextRef.current.moveTo(offsetX, offsetY)
                setIsDrawing(true)
            }
        
            const finishDrawing = () => {
                  console.log("finish drawing")
              //   contextRef.current.closePath()
                setIsDrawing(false)
            }
        
            const draw = (nativeEvent) => {
                console.log("is drawing")
                console.log(nativeEvent)
                if(!isDrawing){
                    return
                }
                // const {offsetX, offsetY} = nativeEvent;
              //   prevX = currX;
              // prevY = currY;
              // currX = e.clientX - canvas.offsetLeft;
              // currY = e.clientY - canvas.offsetTop;
              //   console.log(clientX)
              //   contextRef.current.lineTo(offsetX, offsetY)
              contextRef.current.beginPath()
                contextRef.current.moveTo(nativeEvent.nativeEvent.layerX, nativeEvent.nativeEvent.layerY) //previous x,y
                contextRef.current.lineTo(nativeEvent.nativeEvent.layerX, nativeEvent.nativeEvent.layerY) // current x,y
                contextRef.current.stroke()
                contextRef.current.closePath()
            }
        return (
            <>
            <div ref={canvasDiv}>
            <canvas style={{cursor:"crosshair", border:"2px solid red", background:"red"}}
                  onMouseDown={startDrawing}
                  onMouseUp={finishDrawing}
                  onMouseMove={draw}
                  ref={canvasRef}
            
              />
            </div>
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