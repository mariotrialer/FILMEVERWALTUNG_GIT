/**
 * This function processes the Authentification
 * of the User
 */
function validateUserForm(){
    
    //Get Data from userform
    var inputData = getUserDataFromForm();
   
    //Check is data is valid
    if((userdata.name == inputData.name) & (userdata.password == inputData.pass)){
        //Display the Logged on Theme
        showLoggedInView();
    }else{
        alert("Login failed");
    }
}

/**
 * This function calls the function
 * that shows the Logged-Out Perspective
 */
function logoutUser(){
    updateViewToLoggedOut();
}

/**
 * This function gets the MovieTitle and
 * gives it to the vie function as json
 */
function requestNewItem(){
    var movieTitle = $("#inputTitle").val();

    if(movieTitle == ""){
        setErrorToINputField();
        $("#errorMessage").slideDown();
    }else{
            var titleCellId = createIdForTitleCell(movieTitle);
            var tableRowId = createIdForTableRow(movieTitle);
            var imageCellId = createIdForImageCell(movieTitle);
            var renameButtonId = createIdForRenameButton(movieTitle);
            var removeButtonId = createIdForRemoveButton(movieTitle);
            var detailButtonId = createIdForDetailButton(movieTitle);
            
            var returnVal = {
                "name":movieTitle,
                "rowId": tableRowId,
                "titleId": titleCellId,
                "imageId": imageCellId,
                "imageHTML": "Noch keine Bewertung",
                "renameButtonId": renameButtonId,
                "removeButtonId": removeButtonId
            };

        //Persist the Item
        pushItemToLocalStorage(returnVal);

        //Append Item to the List
        appendListItem(returnVal);
    }


    //Clear the Input-Field
    $("#inputTitle").val("");
}


/**
 * This function removes the given movie
 */
function removeMovie(id){
    //Get sure the user wants to delete the movie
    var isWanted = confirm("Wollen sie den ausgewählten Film wirklich aus ihrer Liste entfernen?");
   
    //React to the Result
    if(isWanted == true){
       var hashid = "#";
       var fullId = hashid + id;
    
       removeMovieFromView(fullId);
       deleteItemFromLocalStorage(id);
    }else{
        
    }
}

/**
 * This function changes the name of a movie
 * that is already in list
 * @param {string} id 
 * @returns {undefined}
 */
function renameMovie(id){
    //Let the user input the new name
    var newName = prompt("Wie soll der Film heißen?");
    //Remove the Whitespace and big letters from title
    var idBase = newName.replace(/ /g,"").toLowerCase();

    //Update the id of the row
    var oldRowId = id.replace(/titlecellid_/g, ""); //Id of the old row
    oldRowId = "rowId_" + oldRowId;
    var newRowId = "rowId_" + idBase;
    var oldRowHashId = "#" +oldRowId;
    $(oldRowHashId).attr("id", newRowId);

    //Update the id of the titlecell
    var oldTitlecellId = id;
    var newTitlecellId = "titlecellid_" + idBase;
    var oldTitlecellHashId = "#" + oldTitlecellId;
    $(oldTitlecellHashId).attr("id", newTitlecellId);

    //Update the id of the ImageCell
    var oldImageId = id.replace(/titlecellid_/g, "");
    oldImageId = "imageId_" + oldImageId;
    var newImageId = "imageId_" + idBase;
    var oldImageHashId = "#" + oldImageId;
    $(oldImageHashId).attr("id", newImageId);

    //Update the id of the Renamebutton
    var oldRenameBtnId = id.replace(/titlecellid_/g, "");
    oldRenameBtnId = "btnrename_" + oldRenameBtnId;
    var newRenameBtnId = "btnrename_" + idBase;
    var oldHashRenamBtnId = "#" + oldRenameBtnId;
    $(oldHashRenamBtnId).attr("id", newRenameBtnId);

    //Update the id of the Removebutton
    var oldRemoveBtnId = id.replace(/titlecellid_/g, "");
    oldRemoveBtnId = "btnremove_" + oldRemoveBtnId;
    var newRemoveBtnId = "btnremove_" + idBase;
    var oldHashRemoveBtnId = "#" + oldRemoveBtnId;
    $(oldHashRemoveBtnId).attr("id", newRemoveBtnId);


    //Get the od Item from the Localstorage (imageHTML)
    var key = oldRowId;
    var oldItem = getSpecialItem(key);

    //Build the new JSON for storing
    var newJson = {
        "name": newName,
        "rowId": newRowId,
        "titleId": newTitlecellId,
        "imageId": newImageId,
        "imageHTML": oldItem.imageHTML,
        "renameButtonId": newRenameBtnId,
        "removeButtonId": newRemoveBtnId
    }

    //Store the new Item in LocalStorage
    pushItemToLocalStorage(newJson);

    //Delete the old Item from LocalStorage
    deleteItemFromLocalStorage(oldRowId);

    //Update the Name of the Movie in the View
    updateMovieTitle(newName, newTitlecellId);
    
}

/**
*This function ....
*/

function detailMovie(mName){

    getMovieDetails(mName);
}

/**
 * This function lets the user rate the movie
 */
function rateMovie(id){

    var ration = prompt("Zahl zwischen 0 und 5");

    //Check if input is alright
    if(ration >= 0 & ration <= 5){
        var imagesource = "img/" + ration + "stars.png";
        var generatedHtml = "<img src='" + imagesource + "' alt='" + ration + " Sterne'/>";
        
        //Generate the id for calling the storageobject
        var storageId = id.replace(/__/g, "");


        //Update entry in localStorage
        var oldObject = getSpecialItem(storageId);
        oldObject.imageHTML = generatedHtml;
        updateItemInLocalStorage(storageId, oldObject);

        var imageId = storageId.replace(/rowId_/g, "imageId_");
        updateRation(generatedHtml, imageId);
    }else{
        alert("Üngültige Eingabe, sie müssen eine Zahl zwischen 0 und 5 eingeben!");
    }
}

/**
 * This function gets the stored items from localstorage
 * and appends them to the list
 */
function getStoredItems(){
    var storedItems = getAllItemsFromLocalStorage();

    //Iterate through the array
    for(var s = 0; s < storedItems.length; s++){
        var object = JSON.parse(storedItems[s]);
        appendListItem(object);
    }

}

/**
 * This function sorts the Table Rows
 */
function sortRows(){
    sortRowsAlphabeticallyUpwards();
}

