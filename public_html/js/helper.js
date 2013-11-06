
/**
 * This function generates the id for a computed
 * tablerow. It's used for delete and rearrange the
 * movies
 * @param {string} name
 * @returns {string}
 */
function createIdForTableRow(name){
    var stringTrimmed = name.toLowerCase().replace(/ /g, "");
    stringTrimmed = "rowId_" + stringTrimmed;
    return stringTrimmed;
}

/**
 * This function generates the id for a computed
 * titlecell. It's used for changing the title of
 * a movie
 * @param {string} name
 * @returns {string}
 */
function createIdForTitleCell(name){
    var stringTrimmed = name.toLowerCase().replace(/ /g, "");
    stringTrimmed = "titlecellid_" + stringTrimmed;
    return stringTrimmed;
}

/**
 * This function generates the id for a computed
 * imagecell. It's used for rating the movie
 * @param name
 * @returns {string}
 */
function createIdForImageCell(name){
    var stringTrimmed = name.toLowerCase().replace(/ /g, "");
    var stringTrimmed = "imageId_" + stringTrimmed;
    return stringTrimmed;
}

/**
 * This function creates an id for a computed
 * rename-button (used to override the onclick)
 * @param movieTitle
 * @returns {string}
 */
function createIdForRenameButton(movieTitle){
    var trimmed = movieTitle.replace(/ /g, "");
    trimmed = trimmed.toLowerCase();
    var returnVal = "btnrename_" + trimmed;
    return returnVal;
}


function createIdForRemoveButton(movieTitle){
    var trimmed = movieTitle.replace(/ /g, "");
    trimmed = trimmed.toLowerCase();
    var returnVal = "btnremove_" + trimmed;
    return returnVal;
}

function createIdForDetailButton(name){
    var stringTrimmed = name.toLowerCase().replace(/ /g, "");
    stringTrimmed = "btnDetail_" + stringTrimmed;
    return stringTrimmed;
}

/*
 * Fires when user press Enter
 */
function pressEnterAddMovie(e) {
    if (e.keyCode == 13) {
        requestNewItem();
        
    }
}

/*
 * Fires when user press Enter
 */
function pressEnterLogin(e) {
    if (e.keyCode == 13) {
        validateUserForm();;
        
    }
}