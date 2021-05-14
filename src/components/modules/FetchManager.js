// deleteGroceryList
// getAllGroceryLists

const remoteURL = "http://localhost:8088"



export const getGroceryListById = (id) => {
    return fetch(`${remoteURL}/userGroceryLists/${id}`)
     .then(res => res.json())
   }

//!using this for the new load out of the first page when used logs in
export const getGroceryListsByUserId = (userId) =>{
    return fetch(`${remoteURL}/userGroceryLists/?userId=${userId}&_expand=store`)
    .then(result => result.json())
}

export const getAllGroceryLists = () => {
    return fetch(`${remoteURL}/userGroceryLists/?_expand=store`)
    .then(result => result.json())
  }

export const getUserGroceryLists = (userId) => {
     return fetch(`${remoteURL}/userGroceryLists/?_embed=${userId}`)
     .then(result => result.json)
  } 

  export const deleteGroceryList = (groceryListId) => {
    return fetch(`${remoteURL}/userGroceryLists/${groceryListId}`,{
        method: "DELETE"})
    .then(result => result.json())
}

 export const createGroceryList = (newGroceryList) =>{ 
    return fetch(`${remoteURL}/userGroceryLists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGroceryList)
    }).then(res => res.json())
};

//TODO i believe this one will only be used for when i am editing the name, store, or other things of the grocery list, i will need another fetch call for the actual list itself 
export const editGroceryList = (editedGroceryListObject) => {
    return fetch(`${remoteURL}/userGroceryLists/${editedGroceryListObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedGroceryListObject)
    }).then(res => res.json())
};

export const getAllFoodItems = () => {
    return fetch(`${remoteURL}/allFoodItems`)
    .then(result => result.json())
  }

export const getFoodItemById = (groceryListId) => {
    return fetch(`${remoteURL}/selectedGroceryItems?userGroceriesListId=${groceryListId}&_expand=allFoodItem`)
    .then(result => result.json())
}

export const getAllStores = () => {
    return fetch(`${remoteURL}/stores`)
    .then(result => result.json())
}

export const getStoreById = (id) => {
    return fetch(`${remoteURL}/stores/${id}`)
    .then(result => result.json())
}

export const createSelectedGroceryListItem = (newListItem) => {
    return fetch(`${remoteURL}/selectedGroceryItems`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newListItem)
    }).then(res => res.json())
};

  export const deleteUserGroceryListItem = (id) => {
    return fetch(`${remoteURL}/selectedGroceryItems/${id}`,{
        method: "DELETE"})
    .then(result => result.json())
}

export const getAllUserGroceryItems = () => {
    return fetch(`${remoteURL}/selectedGroceryItems`)
    .then(result => result.json())
}

export const getSelectedFoodItemsById = (userGroceriesListId) => {
    return fetch(`${remoteURL}/selectedGroceryItems?userGroceriesListId=${userGroceriesListId}&_expand=allFoodItem`)
     .then(res => res.json())
   }
        
   export const deleteSelectedGroceryItems = (userGroceriesListId) => {
    return fetch(`${remoteURL}/selectedGroceryItems?userGroceriesListId=${userGroceriesListId}`,{
        method: "DELETE"})
    .then(result => result.json())
}