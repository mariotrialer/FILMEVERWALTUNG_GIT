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

        //Check if title consists out of 1 word
        if(movieTitle.indexOf(' ') >= 0){
            var titleCellId = createIdForTitleCell(movieTitle);
            var tableRowId = createIdForTableRow(movieTitle);
            var imageCellId = createIdForImageCell(movieTitle);
            var returnVal = {
                "name":movieTitle,
                "rowId": tableRowId,
                "titleId": titleCellId,
                "imageId": imageCellId
            };
        }else{
            var titleCellId = '_' + movieTitle.toLowerCase();
            var tableRowId = '__'  + movieTitle.toLowerCase();
            var imageCellId = '___' + movieTitle.toLowerCase();
            var returnVal = {
                "name":movieTitle,
                "rowId":tableRowId,
                "titleId": titleCellId,
                "imageId": imageCellId
            }
        }
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
    //Get sure that user wants to delete the movie
    var isWanted = confirm("Wollen sie den ausgewählten Film wirklich aus ihrer Liste entfernen?");
   
    //React to the Result
    if(isWanted == true){
       var hashid = "#";
       var fullId = hashid + id;
    
       removeMovieFromView(fullId);
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
    updateMovieTitle(newName, id);
    
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
        oldObject.imageId = generatedHtml;
        updateItemInLocalStorage(storageId, oldObject);
        
        updateRation(generatedHtml, id);
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

