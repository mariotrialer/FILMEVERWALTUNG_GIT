/* 
 * This file represents the Model of this application
 */

//Data to validate the User, this will be computed later
var userdata = {
    "name":"root",
    "password":"root"
};


/**
 * This function stores a given JSON-OBJECT in the LocalStorage
 * @param listItem
 */
function pushItemToLocalStorage(listItem){
    var key = listItem.rowId;
    var jsonString = JSON.stringify(listItem);
    localStorage.setItem(key, jsonString);
}


/**
 * This function iterates over the LocalStorage and returns
 * an array with all values
 * @returns {Array}
 */
function getAllItemsFromLocalStorage(){

    //Array that will be returned
    var items = new Array();

    for(var i = 0, l = localStorage.length; i<l; i++){
        var key = localStorage.key(i);
        var value= localStorage[key];
        items.push(value);
    }

    return items;

}

/**
 * This function gets a special item from localstorage
 * (called by given key)
 * @param {type} key
 * @returns {undefined}
 */
function getSpecialItem(key){
    var itemString = localStorage.getItem(key);
    var itemObject = JSON.parse(itemString);
    return itemObject;
}

/**
 * This function updates the value of the given
 * object ('id') in localstorage
 * @param {type} itemNew
 * @returns {undefined}
 */
function updateItemInLocalStorage(id, itemNew){
    var key = id;
    var value= JSON.stringify(itemNew);
    localStorage[key] = value;
}

/**
 * This function removes the Item specified by the given
 * id from the localstorage
 * @param key
 */
function deleteItemFromLocalStorage(key){
    localStorage.removeItem(key);
}




