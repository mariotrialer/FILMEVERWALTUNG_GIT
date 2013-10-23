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
    var titleCellId = createIdForTitleCell(movieTitle);
    var tableRowId = createIdForTableRow(movieTitle);
    var returnVal = {
        "name":movieTitle,
        "rowId": tableRowId,
        "titleId": titleCellId
    };
 
    appendListItem(returnVal);
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

