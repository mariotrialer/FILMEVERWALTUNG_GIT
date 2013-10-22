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
    var returnVal = {
        "name":movieTitle
    };
 
    appendListItem(returnVal);
}

/**
 * This function changes the name of the selected movie
 */
function changeMovieName(moviename){
    
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
 * This function generates an id from a given name
 * @returns {undefined}
 */
function createIdForEntry(name){
    var stringTrimmed = trim(name);
    console.log(stringTrimmed);
}

/**
 * This function trims a string
 * @returns {undefined}
 */
function trim(name){
    var empty = name.replace(/ /g, "");
    var serial = empty.toLowerCase();
    return serial;
}
