/* 
 *  This function shows the Userlogin-Form
 *  which is hidden on Pageload
 */

/*
 * This function shows the Area that contains
 * the form for Logging in the User
 */
function showUserLoginForm(){
    $("#loginFormContainer").slideDown();
    $("#signinopener").fadeOut();
}

/**
 * This function hides the Area that contains
 * the form for Logging out the User
 */
function hideUserLoginForm(){
    $("#loginFormContainer").slideUp();
    $("#signinopener").fadeIn();
}

/*
 * This Function shows the Controls when the
 * User was logged in
 */
function showLoggedInView(){
    //Hide Loginform
    hideUserLoginForm();
    $("#logoutButton").fadeIn();
    $("#signinopener").hide();
    $("#moviesAddContainer").fadeIn();
    $(".toolbar").fadeIn();
    $("#sortButton").attr("onclick", "sortRows();");
    $("#sortButton").addClass("sorterButton");
}

/**
 * 
 * This function gets the Data the user wrote
 * into the form
 * It returns the given Data as JSON
 */
function getUserDataFromForm(){
    var username = $("#namefield").val();
    var password = $("#passfield").val();
    var dataInput = {
        "name":username,
        "pass":password
    };
    
    return dataInput;
}

/**
 * This funnction shows the View when the
 * User was logged out
 */
function updateViewToLoggedOut(){
    $("#logoutButton").hide();
    $("#signinopener").fadeIn();
    $("#moviesAddContainer").fadeOut();
    $(".toolbar").fadeOut();
    $("#sortButton").attr("onclick", "");
    $("#sortButton").removeClass("sorterButton");
}

/**
 * This function appends the template to the List
 */
function appendListItem(data){
    
    var listItemTemplate = _.template($("#filmListTemplate").html());
    var resultingHtml = listItemTemplate({item : data});
    
    $("#tablebody").append(resultingHtml);
}

/**
 * This function removes the given TR from
 * the Mastertable
 */
function removeMovieFromView(id){
    $(id).remove();
}


/**
 * This function updates the Movie Title of the selected movie
 * @returns {undefined}
 */
function updateMovieTitle(newtitle ,titleId){
    $("#"+titleId).html(newtitle);
}


/**
 * This function updates the image in the
 * ration cell
 * @param html
 * @param id
 */
function updateRation(html, id){
    var newId = "#" + id;
    $(newId).html(html);
}

/**
 * This function adds the Error-Look to the field where the user
 * can input a new Movie Title
 */
function setErrorToINputField(){
    $("#errorField").addClass("has-error");
}

/**
 * This function sorts the List of Movies alphabetically
 * upwards
 */
function sortRowsAlphabeticallyUpwards(){

    //Array to contain the TR-Ids
    var ids = new Array();

    //Fill all the RowIds into an array
    for(var i = 0, row; row =tablebody.rows[i]; i++){
        ids.push(row.id);
    }

    //Sort the Array
    var id = ids.sort();

    //Clear the table
    $("#tablebody").html("");

    //Get the items from Storage, according to the sorted keys
    for(var j = 0; j < ids.length; j++){
        var itemObject = getSpecialItem(id[j]);
        appendListItem(itemObject);
    }
}

/**
 * This function sorts the List of movies by their
 * Ration
 */
function sortRowsByRation(){

    //Array to contain the image sources
    var images = new Array();
    //Array to contain the storage ids
    var ids = new Array();

    //Fill all the ImageSources into an array
    for(var i = 0, row; row =tablebody.rows[i]; i++){
        ids.push(row.imageId);
        images.push(row.imageId.html());
    }

    //Sort the Array
    var image = images.sort();

    //Clear the table
    $("#tablebody").html("");

    //Get the items from Storage, according to the sorted keys

}
