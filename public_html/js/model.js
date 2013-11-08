/* 
 * This file represents the Model of this application
 */

//Data to validate the User, this will be computed later
var userdata = {
    "name":"root",
    "password":"root"
};


/**
 * This function stores a given JSON-OBJECT in the LocalStorage
 * @param listItem
 */
function pushItemToLocalStorage(listItem){
    var key = listItem.rowId;
    var jsonString = JSON.stringify(listItem);
    localStorage.setItem(key, jsonString);
    pushItemToParse(listItem);
}

/**
 * This function stores a given JSON-Object in the Parse Database
 * @param listItem
 */
function pushItemToParse(listItem){
    //Simple Syntax to create a new Subclass of the Parse object
    var ListRow = Parse.Object.extend("ListRow");
    //Create a new Instance of that class
    var listRow = new ListRow();
    //Assign the Values to the store entry
    listRow.set("name",listItem.name);
    listRow.set("rowId", listItem.rowId);
    listRow.set("titleId", listItem.titleId);
    listRow.set("isSeen", listItem.isSeen);
    listRow.set("ration", listItem.ration);
    listRow.set("imageId", listItem.imageId);
    listRow.set("imageHTML", listItem.imageHTML);
    listRow.set("renameButtonId", listItem.renameButtonId);
    listRow.set("removeButtonId", listItem.removeButtonId);
    //Sign the Entry
    listRow.save(null, {
        success: function(listRow){

        },
        error: function(){
            alert("Fehler");
        }
    })

}

/**
 * This function gets all Movie-Objects from parse and appends
 * them to the list
 */
function getAllItemsFromParse(){

    var ListRow = Parse.Object.extend("ListRow");
    var query = new Parse.Query(ListRow);
    query.find({
        success: function(results){
            for(var i = 0; i < results.length; i++){
                var object = results[i];

                //Build the Object for the listRow
                var provider = {
                    "name":object.get('name'),
                    "rowId":object.get('rowId'),
                    "titleId":object.get('titleId'),
                    "isSeen":object.get('isSeen'),
                    "ration":object.get('ration'),
                    "imageId":object.get('imageId'),
                    "imageHTML":object.get('imageHTML'),
                    "renameButtonId":object.get('renameButtonId'),
                    "removeButtonId":object.get('removeButtonId')
                }
                appendListItem(provider);
                $(".toolbar").hide();
            }
        },
        error: function(error){
            alert("Error: " + error.code + " " + error.message);
        }
    });

    $(".tools").hide();

}


/**
 * This function gets a single Item from parse, specified
 * by the rowId as key
 * @param key
 */
function getSpecialItemFromParse(key){

    var ListRow = Parse.Object.extend("ListRow");
    var query = new Parse.Query(ListRow);
    query.equalTo('rowId', key);
    var object = query.first({
        success: function(object){

            //Build the returning JSON here
            var provider = {
                "name":object.get('name'),
                "rowId":object.get('rowId'),
                "titleId":object.get('titleId'),
                "isSeen":object.get('isSeen'),
                "ration":object.get('ration'),
                "imageId":object.get('imageId'),
                "imageHTML":object.get('imageHTML'),
                "renameButtonId":object.get('renameButtonId'),
                "removeButtonId":object.get('removeButtonId')
            }
            return provider;
        },
        error: function(object){
            alert("Fehler beim Laden der Daten");
        }
    });

    return object;
}

function deleteSpecialItemFromParse(key){
    var ListRow = Parse.Object.extend("ListRow");
    var query = new Parse.Query(ListRow);
    query.equalTo('rowId', key);
    query.first({
        success: function(object){
            object.destroy({
                success: function(myObject){

                },
                error: function(myObject, error){
                    alert("Fehler");
                }
            });
        }
    })
}

/**
 * This function updates the entry of ration of the
 * object specified by the id in storage
 * @param id
 * @param newRation
 */
function updateRationOnParse(id, generatedHTML, ration){
    var ListRow = Parse.Object.extend("ListRow");
    var query = new Parse.Query(ListRow);
    query.equalTo("rowId", id);
    query.first({
        success: function(object){
            object.set("imageHTML", generatedHTML);
            object.set("ration", ration);
            object.save();
        }
    });
}

/**
 * This function updates the Movie after renaming on Parse
 * @param id
 * @param titleNew
 */
function updateMovieOnParse(id, json){
    var ListRow = Parse.Object.extend("ListRow");
    var query = new Parse.Query(ListRow);
    query.equalTo("rowId", id);
    query.first({
        success: function(object){
            object.set("name", json.name);
            object.set("rowId", json.rowId);
            object.set("titleId", json.titleId);
            object.set("imageId", json.imageId);
            object.set("renameButtonId", json.renameButtonId);
            object.set("removeButtonId", json.removeButtonId);
            object.save();
        }
    })
}

/**
 * This function removes the Item specified by the given
 * id from the localstorage
 * @param key
 */
function deleteItemFromLocalStorage(key){
    localStorage.removeItem(key);
}

/**
 * This function removes a single item from parse, specified
 * by the rowId given as Parameter
 * @param key
 */
function deleteItemFromParse(key){

}

/**
 * This function fires a search-request to the
 * Webservice
 * @param movie_name
 */
function getMovies(movie_name){
    $.ajax({
        url:"http://www.omdbapi.com/?s=" + movie_name,
        type:"Get",
        dataType:"JSON",
        success: function(data){

            //Check if there was an Error
            if(data.hasOwnProperty('Response')){
                showNotFoundErrorInDialog();
            }else if(data.Search.length > 1){
                showVariousOptionsDialog(data.Search, movie_name);
            }else{

            }


        },
        error: function(){
            alert("Der Film wurde nicht gefunden");
        }



    });
}


/**
 * This function fires a request to the service
 * with the paramaters title and year
 */
function getInfoOfSpecialMovie(){
    var value = $("#moviesList").val();
    $.ajax({
        url: "http://www.omdbapi.com/?i=" + value,
        type: "Get",
        dataType: "JSON",
        success: function(data){
            //Build the Json with the required information
            var infoObject = {
                "title":data.Title,
                "cover":data.Poster,
                "rating":data.imdbRating,
                "year":data.Year,
                "regie":data.Director,
                "runtime":data.Runtime,
                "genre":data.Genre
            }

            showInfoDialog(infoObject);
        },
        error: function(){
            alert("Fuck");
        }
    });
}




