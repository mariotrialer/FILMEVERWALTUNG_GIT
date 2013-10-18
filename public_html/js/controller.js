/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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
