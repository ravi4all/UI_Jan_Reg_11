window.addEventListener("load", init);

function init(){
    var num_1 = document.getElementById("num_1");
    var num_2 = document.getElementById("num_2");

    var x = "Hello";

    btns = document.getElementsByTagName("button");
    for(var i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", calc);
    }
}

function calc(){
    var opr = event.srcElement.value;
    // console.log(opr);
    var result = 0;
    expression = num_1.value + opr + num_2.value;
    result = eval(expression);
    document.querySelector("#result").innerHTML = result;
}