/* 
 * This file represents the Model of this application
 */

//Data to validate the User, this will be computed later
var userdata = {
    "name":"testuser",
    "password":"password"
};


/**
 * This function stores a given JSON-OBJECT in the LocalStorage
 * @param listItem
 */
function pushItemToLocalStorage(listItem){
    var key = listItem.name;
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


