/**
 * This function removes all Whitespace form given String
 * @returns {undefined}
 */
function removeWhitespace(name){
    var empty = name.replace(/ /g, "");
    var serial = empty.toLowerCase();
    return serial;
}


/**
 * This function replaces all Whitespaces by Underscores
 * in the given String
 * @param {string} name
 * @returns {undefined}
 */
function replaceWhiteSpaceByUnderscore(name){
    var scored = name.replace(/ /g, "_");
    var serial = scored.toLowerCase();
    return serial;
}

/**
 * This function generates the id for a computed
 * tablerow. It's used for delete and rearrange the
 * movies
 * @param {string} name
 * @returns {string}
 */
function createIdForTableRow(name){
    var stringTrimmed = removeWhitespace(name);
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
    var stringTrimmed = replaceWhiteSpaceByUnderscore(name);
    return stringTrimmed;
}