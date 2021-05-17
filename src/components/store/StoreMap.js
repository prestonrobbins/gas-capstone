import React, { useRef, useEffect, useState } from "react";
import { Link, useParams, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { getSelectedFoodItemsById, getFoodItemById } from "../modules/FetchManager"
import "./StoreMap.css"
export const StoreMap = () => {
    const [selectedFoodItems, setSelectedFoodItems] = useState([]);
    const [aisleOneSorted, setAisleOneSorted] = useState([])
    const [aisleTwoSorted, setAisleTwoSorted] = useState([])
    const [aisleThreeSorted, setAisleThreeSorted] = useState([])
    const [aisleFourSorted, setAisleFourSorted] = useState([])
    const [aisleFiveSorted, setAisleFiveSorted] = useState([])
    const [aisleSixSorted, setAisleSixSorted] = useState([])
    const [aisleSevenSorted, setAisleSevenSorted] = useState([])
    const [aisleEightSorted, setAisleEightSorted] = useState([])
    const [aisleNineSorted, setAisleNineSorted] = useState([])
    const [aisleTenSorted, setAisleTenSorted] = useState([])
    const history = useHistory()
    const listId = useParams()
    const sortList = (listObj) => {
        let add = false
        let sorted = []
        for (let i = 0; i < listObj.length; i++) {
            if (sorted.length === 0) {
                sorted.push({ name: listObj[0].allFoodItem.name, count: 1 })
            } else {
                for (let j = 0; j < sorted.length; j++) {
                    if (sorted[j].name === listObj[i].allFoodItem.name) {
                        sorted[j].count += 1
                        add = true
                    }
                }
                if (!add) {
                    sorted.push({ name: listObj[i].allFoodItem.name, count: 1 })
                }
                add = false
            }
        }
        return sorted
    }
    const getSelectedFoodItemsByIdReturn = () => {
        getSelectedFoodItemsById(listId.listId)
            .then((res) => {
                // console.log(res)
                setAisleOneSorted(sortList(res.filter(res => res.allFoodItem.aisleId === 1)))
                setAisleTwoSorted(sortList(res.filter(res => res.allFoodItem.aisleId === 2)))
                setAisleThreeSorted(sortList(res.filter(res => res.allFoodItem.aisleId === 3)))
                setAisleFourSorted(sortList(res.filter(res => res.allFoodItem.aisleId === 4)))
                setAisleFiveSorted(sortList(res.filter(res => res.allFoodItem.aisleId === 5)))
                setAisleSixSorted(sortList(res.filter(res => res.allFoodItem.aisleId === 6)))
                setAisleSevenSorted(sortList(res.filter(res => res.allFoodItem.aisleId === 7)))
                setAisleEightSorted(sortList(res.filter(res => res.allFoodItem.aisleId === 8)))
                setAisleNineSorted(sortList(res.filter(res => res.allFoodItem.aisleId === 9)))
                setAisleTenSorted(sortList(res.filter(res => res.allFoodItem.aisleId === 10)))
            })
    }
    // allFoodItem:
    // aisleId: 1
    // categoryID: "fruit"
    // foodItemImageURL: "banana.png"
    // id: 1
    // name: "bananas"
    // price: 3.99
    useEffect(() => {
        getSelectedFoodItemsByIdReturn();
    }, []);
    useEffect(() => {
        sortList(selectedFoodItems)
    }, [selectedFoodItems])
    // const selectedFilteredFoodItemAisleOne = selectedFoodItems.filter(foodItem => foodItem.allFoodItem.aisleId === 1)
    //NOTE items below are for canvas only
    const canvasRef = useRef(null)
    const canvasDiv = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 0.48;
        canvas.height = window.innerHeight * 0.85;
        //   canvas.fillStyle="blue";
        //   canvas.style.zIndex="5";
        //   canvas.style.width=`${window.innerWidth}px`;
        //   canvas.style.height=`${window.innerHeight}px`;
        const context = canvas.getContext("2d")
        context.fillRect(50, 50 + 75, 75, 175)  //aisle 10
        context.fillRect(50, 275 + 75, 75, 175) //aisle 9
        context.fillRect(175, 50 + 75, 75, 175)  //aisle 8
        context.fillRect(175, 275 + 75, 75, 175) //aisle 7
        context.fillRect(300, 50 + 75, 75, 175)  //aisle 6
        context.fillRect(300, 275 + 75, 75, 175) //aisle 5
        context.fillRect(425, 50 + 75, 75, 175)  //aisle 4
        context.fillRect(425, 275 + 75, 75, 175) //aisle 3
        context.fillRect(550, 50 + 75, 75, 175)  //aisle 2
        context.fillRect(550, 275 + 75, 75, 175) //aisle 1
        context.fillRect(50, -10, 275, 75)
        context.fillRect(350, -10, 275, 75)
        context.lineCap = "round"
        // context.fillStyle = "white"
        context.strokeStyle = "red"
        context.lineWidth = 15
        contextRef.current = context;
    }, [])
    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        //   contextRef.current.beginPath()
        //   contextRef.current.moveTo(offsetX, offsetY)
        setIsDrawing(true)
    }
    const finishDrawing = () => {
        //   contextRef.current.closePath()
        setIsDrawing(false)
    }
    const draw = (nativeEvent) => {
        if (!isDrawing) {
            return
        }
        // const {offsetX, offsetY} = nativeEvent;
        //   prevX = currX;
        // prevY = currY;
        // currX = e.clientX - canvas.offsetLeft;
        // currY = e.clientY - canvas.offsetTop;
        //   contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.beginPath()
        contextRef.current.moveTo(nativeEvent.nativeEvent.layerX, nativeEvent.nativeEvent.layerY) //previous x,y
        contextRef.current.lineTo(nativeEvent.nativeEvent.layerX, nativeEvent.nativeEvent.layerY) // current x,y
        contextRef.current.stroke()
        contextRef.current.closePath()
    }
    return (
        <>
            <div className="mapPusher">
                <div className="mapHolder">
                    <div ref={canvasDiv}>
                        <canvas style={{ cursor: "crosshair", border: "2px solid black", background: "#C3AE84" }}
                            onMouseDown={startDrawing}
                            onMouseUp={finishDrawing}
                            onMouseMove={draw}
                            ref={canvasRef}
                        />
                    </div>
                </div>
            </div>
            {/* aisles below */}
            {/* aisle 1 */}
            <div className="aisleOne">
                <h3 className="aisleHeading">Aisle 1</h3>
                <select>
                    {aisleOneSorted.map((filteredFoodItem, index) => {
                        return <option
                            key={index}
                        >{filteredFoodItem.name} {filteredFoodItem.count}</option>
                    })}
                </select>
            </div>
            <div className="aisleTwo">
                <h3 className="aisleHeading">Aisle 2</h3>
                <select>
                    {aisleTwoSorted.map((filteredFoodItem, index) => {
                        return <option
                            key={index}
                        >{filteredFoodItem.name} {filteredFoodItem.count}</option>
                    })}
                </select>
            </div>
            <div className="aisleThree">
                <h3 className="aisleHeading">Aisle 3</h3>
                <select>
                    {aisleThreeSorted.map((filteredFoodItem, index) => {
                        return <option
                            key={index}
                        >{filteredFoodItem.name} {filteredFoodItem.count}</option>
                    })}
                </select>
            </div>
            <div className="aisleFour">
                <h3 className="aisleHeading">Aisle 4</h3>
                <select>
                    {aisleFourSorted.map((filteredFoodItem, index) => {
                        return <option
                            key={index}
                        >{filteredFoodItem.name} {filteredFoodItem.count}</option>
                    })}
                </select>
            </div>
            <div className="aisleFive">
                <h3 className="aisleHeading">Aisle 5</h3>
                <select>
                    {aisleFiveSorted.map((filteredFoodItem, index) => {
                        return <option
                            key={index}
                        >{filteredFoodItem.name} {filteredFoodItem.count}</option>
                    })}
                </select>
            </div>
            <div className="aisleSix">
                <h3 className="aisleHeading">Aisle 6</h3>
                <select>
                    {aisleSixSorted.map((filteredFoodItem, index) => {
                        return <option
                            key={index}
                        >{filteredFoodItem.name} {filteredFoodItem.count}</option>
                    })}
                </select>
            </div>
            <div className="aisleSeven">
                <h3 className="aisleHeading">Aisle 7</h3>
                <select>
                    {aisleSevenSorted.map((filteredFoodItem, index) => {
                        return <option
                            key={index}
                        >{filteredFoodItem.name} {filteredFoodItem.count}</option>
                    })}
                </select>
            </div>
            <div className="aisleEight">
                <h3 className="aisleHeading">Aisle 8</h3>
                <select>
                    {aisleEightSorted.map((filteredFoodItem, index) => {
                        return <option
                            key={index}
                        >{filteredFoodItem.name} {filteredFoodItem.count}</option>
                    })}
                </select>
            </div>
            <div className="aisleNine">
                <h3 className="aisleHeading">Aisle 9</h3>
                <select>
                    {aisleNineSorted.map((filteredFoodItem, index) => {
                        return <option
                            key={index}
                        >{filteredFoodItem.name} {filteredFoodItem.count}</option>
                    })}
                </select>
            </div>
            <div className="aisleTen">
                <h3 className="aisleHeading">Aisle 10</h3>
                <select>
                    {aisleTenSorted.map((filteredFoodItem, index) => {
                        return <option
                            key={index}
                        >{filteredFoodItem.name} {filteredFoodItem.count}</option>
                    })}
                </select>
            </div>
        </>
    )
}