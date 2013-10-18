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
    $("#statusMonitor").html("Sie sind eingeloggt");
    $("#statusMonitor").fadeIn();
    $("#statusMonitor").fadeIn();
    $("#logoutButton").fadeIn();
    $("#signinopener").hide();
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
    $("#statusMonitor").hide();
    $("#signinopener").fadeIn();
}



