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
}


/**
 * This function iterates over the LocalStorage and returns
 * an array with all values
 * @returns {Array}
 */
function getAllItemsFromLocalStorage(){

    //Array that will be returned
    var items = new Array();

    for(var i = 0, l = localStorage.length; i<l; i++){
        var key = localStorage.key(i);
        var value= localStorage[key];
        items.push(value);
    }

    return items;

}

/**
 * This function gets a special item from localstorage
 * (called by given key)
 * @param {type} key
 * @returns {undefined}
 */
function getSpecialItem(key){
    var itemString = localStorage.getItem(key);
    var itemObject = JSON.parse(itemString);
    return itemObject;
}

/**
 * This function updates the value of the given
 * object ('id') in localstorage
 * @param {type} itemNew
 * @returns {undefined}
 */
function updateItemInLocalStorage(id, itemNew){
    var key = id;
    var value= JSON.stringify(itemNew);
    localStorage[key] = value;
}

/**
 * This function removes the Item specified by the given
 * id from the localstorage
 * @param key
 */
function deleteItemFromLocalStorage(key){
    localStorage.removeItem(key);
}

function getMovies(movie_name){
    $.ajax({
        url:"http://www.omdbapi.com/?s=" + movie_name,
        type:"Get",
        dataType:"JSON",
        success: function(data){

            alert(JSON.stringify(data));

            //Get the wanted data
            var dataNew = data.Search;

            //Counter for the Movies
            var counter = 0;

            if(counter == 1){
                alert("Treffer");
            }else{
                var contentOfDialog = $("#contentOfDialog").html("");
                var headline = "<h3>Es gibt mehrere Filme zu ihrer Anfrage</h3>";
                var head2 = "<h4>Bitte treffen sie ihre Auswahl</h4>";
                $("#contentOfDialog").append(headline);
                $("#contentOfDialog").append(head2);

                var selectBox = "<select class='form-control'>";
                $.each(dataNew, function(i, obj){
                    selectBox = selectBox + "<option value="+obj.Year + ">" + obj.Title + ", " + obj.Year + "</option>";
                });
                selectBox = selectBox + "</select>";
                $("#contentOfDialog").append(selectBox);
                $("#myModal").modal('show');
            }

        },
        error: function(){
            alert("Der Film wurde nicht gefunden");
        }



    });
}




