import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { getStoreById } from '../modules/FetchManager'
//!import css


//?how does this work with out props again?or is this just a parameter? id like to learn it that way first if possible, but im not sure if this is the same thing. 
export const GroceryCard = ({ groceryList, handleDeleteGroceryList }) => {

  return (
      <>
    <div className="contentHolderLeft">
 {/* name */}
        <h3><span className="cardListName">
           {groceryList.name}
        </span></h3>
        
{/* store name */}
        <h3><span className="cardStoreName">
            {groceryList.store.name}
        </span></h3>

        <div className="cardButtonContainers">
{/* delete */}
        <button type="button" className="cardButton" onClick={() => handleDeleteGroceryList(groceryList.id)}>Delete</button>

{/* edit */}
        <Link to={`/groceryList/${groceryList.id}`}>
            <button className="cardButton">Edit</button>
        </Link>
        </div>
    </div>
    {/* <div className="goShoppingButton">
        <Link to={`/groceryLists/${groceryLists.id}/goshopping`}>
            <button className="cardButton">edit</button>
        </Link>
    </div> */}
    </>
    );
};



    // <div className="TaskCard">
    //     <div className="buttonHolder">
    // <Link to={`/tasks/${props.task.id}/edit`}>
    //     <button className="cardButton">✏️</button>
    // </Link>
    // <button type="button" className="cardButton" onClick={() => props.deleteTask(props.task.id)}>❎</button>
    // </div>
    // <div className="contentHolder">
    //  <h3><span className="card-name">
    //       {props.task.name}
    //     </span></h3>
    //     <h3><span className="card-date">
    //       {props.task.date}
    //     </span></h3>
    //     </div>
    //     <label className="switch">
    //     <input type="checkbox" onClick={() => props.handleCompleteTask(props.task)}></input>
    //         <span className="slider round"></span>
    //     </label>
    // </div>



