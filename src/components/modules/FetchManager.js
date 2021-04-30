// deleteGroceryList
// getAllGroceryLists

const remoteURL = "http://localhost:8088"



export const getGroceryListById = (id) => {
    return fetch(`${remoteURL}/userGroceryLists/${id}`)
     .then(res => res.json())
   }

export const getAllGroceryLists = () => {
    return fetch(`${remoteURL}/userGroceryLists`)
    .then(result => result.json())
  }

export const getUserGroceryLists = (userId) => {
     return fetch(`${remoteURL}/userGroceryLists/?_embed=${userId}`)
     .then(result => result.json)
  }   

  export const deleteGroceryList = (id) => {
    return fetch(`${remoteURL}/userGroceryLists/${id}`,{
        method: "DELETE"})
    .then(result => result.json())
}

export const createGroceryList = (newGroceryList) => {
    return fetch(`${remoteURL}/userGroceryLists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGroceryList)
    }).then(res => res.json())
};

//TODO i believe this one will only be used for when i am editing the name, store, or other things of the grocery list, i will need another fetch call for the actual list itself 
export const editGroceryList = (editTask) => {
    return fetch(`${remoteURL}/tasks/${editTask.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editGroceryList)
    }).then(res => res.json())
};

export const getAllFoodItems = () => {
    return fetch(`${remoteURL}/allFoodItems`)
    .then(result => result.json())
  }

export const getFoodItemById = (groceryListId) => {
    return fetch(`${remoteURL}/selectedGroceryItems?userGroceryList=${groceryListId}&_expand=allFoodItems`)
    .then(result => result.json())
}




   //? embed vs extract
   //?