// window.addEventListener('load', function(){
//     document.getElementById('btn').addEventListener('click', function(){
//         var name = document.getElementById("name");
//         document.getElementById("result").innerHTML = name.value;
//     });
// });

window.addEventListener('load', init);

function init(){
    document.getElementById('btn').addEventListener('click',show);
}

function show(){
    var name = document.getElementById("name");
    document.getElementById("result").innerHTML = name.value;
}