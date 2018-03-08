window.addEventListener("load", initEvents);

function initEvents(){
    username = document.querySelector("#box_1");
    email = document.querySelector("#box_2");
    password = document.querySelector("#box_3");
    conf_pwd = document.querySelector("#box_4");
    span = document.getElementsByTagName("span");

    username.addEventListener("blur", checkBlank);
    email.addEventListener("keyup",validateEmail);
}

function checkBlank(){
    var str = username.value;
    /*
    if(username.value == ""){
        span[0].innerHTML = "This field is required";
        // username.style.border = "1px solid red";
        username.className = "empty";
    }
    else {
        username.className = "";
        span[0].innerHTML = "";
    }
    */

    
    if(!isEmpty(str)){
        span[0].innerHTML = "This field is required";
        username.className = "empty";
    }
    else {
        username.className = "";
        span[0].innerHTML = "";
    }
    
}

// function isEmpty(str) {
//     return (str == undefined || str == null || str == "") ? true : false;
// }

function isEmpty(str){
    return (/[^\s]/.test(str));
}

function validateEmail(){
    var str = email.value;
    pattern = /[\w]+[@]+\w/.test(str);
    if(pattern){
        span[1].innerHTML = "Valid Email";
    }
    else {
        span[1].innerHTML = "Invalid Email";
    }
}