window.addEventListener("load", init);

function init(){
    var num_1 = document.getElementById("num_1");
    var num_2 = document.getElementById("num_2");

    var x = "Hello";

    document.getElementById("add").addEventListener("click", add);
    document.querySelector("#sub").addEventListener("click", sub);
    document.querySelector("#div").addEventListener("click", div);
    document.querySelector("#mul").addEventListener("click", mul);
}

function add(){
    // console.log(num_1.value, num_2.value);
    // console.log(x);
    var result = 0;
    result = parseInt(num_1.value) + parseInt(num_2.value);
    document.querySelector("#result").innerHTML = result;
}
function sub(){
    var result = 0;
    result = parseInt(num_1.value) - parseInt(num_2.value);
    document.querySelector("#result").innerHTML = result;
}
function div(){
    var result = 0;
    result = parseInt(num_1.value) / parseInt(num_2.value);
    document.querySelector("#result").innerHTML = result;
}
function mul(){
    var result = 0;
    result = parseInt(num_1.value) * parseInt(num_2.value);
    document.querySelector("#result").innerHTML = result;
}