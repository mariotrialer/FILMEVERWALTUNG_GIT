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

