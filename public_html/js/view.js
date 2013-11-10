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

    //Get the items from Storage, according to the sorted keys
    for(var j = 0; j < ids.length; j++){

        var id = id[j];

        alert($("#" + id.replace(/rowId/g, "titlecellid")).html());#

        //Build the JSON for the new row
        var newObject = {
            "rowId":id,
            "name":$("#" + id.replace(/rowId/g, "titlecellid")).html(),
            "imageHTML":$("#" +id.replace(/rowId/g, "imageId")).html(),
            "titleId":id.replace(/rowId/g, "titlecellid")
        };


        //var itemObject = getSpecialItemFromParse(id[j]);
        $("#" + id).remove();
        appendListItem(newObject);

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

 //Remove Popup
    function removePopup(){
        
        $("#myModal").modal('hide');
    }

/**
 * This function shows the info dialog and shows that the
 * requested movie was not found in the Database
 */
function showNotFoundErrorInDialog(){
    var contentOfDialog = $("#contentOfDialog").html("");
    var headline = "<h3>Der angegebene Film wurde nicht gefunden!</h3>";
    var paragraph = "<p>Bitte prüfen sie den Namen des Films auf eventuelle Rechtschreibfehler und ändern sie diese " +
        "gegebenenfalls</p>";
    $("#contentOfDialog").append(headline);
    $("#contentOfDialog").append(paragraph);
    $("#myModal").modal('show');
}

/**
 * This function shows the info dialog and shows that the
 * requested Movie was not found in the database
 */
function showVariousOptionsDialog(data, name){
    var contentOfDialog = $("#contentOfDialog").html("");
    var headline = "<h3>Es gibt mehrere Filme zu ihrer Anfrage</h3>";
    var head2 = "<h4>Bitte treffen sie ihre Auswahl</h4>";
    $("#contentOfDialog").append(headline);
    $("#contentOfDialog").append(head2);

    var selectBox = "<select id='moviesList' class='form-control'>";
    $.each(data, function(i, obj){
        selectBox = selectBox + "<option value=" + obj.imdbID + ">" + obj.Title + ", " + obj.Year + "</option>";
    });
    selectBox = selectBox + "</select>";
    $("#contentOfDialog").append(selectBox);
    $("#dialogOk").attr("onclick", "getInfoOfSpecialMovie();");
    $("#myModal").modal('show');
}

/**
 * This function shows the info dialog with all the info to the
 * movie
 * @param data
 */
function showInfoDialog(data){
    //Clear the Dialog
    $("contentOfDialog").html("");
    var listItemTemplate = _.template($("#detailTemplate").html());
    var resultingHtml = listItemTemplate({info : data});

    $("#contentOfDialog").html(resultingHtml);
    $("#dialogOk").attr("onclick", "removePopup();");
    $("#myModal").modal('show');
}