window.addEventListener("load", init);

var itemName;
var itemPrice;
var itemDesc;
function init(){
    console.log("Init Executed...");
    itemName = document.getElementById("box_1");
    itemPrice = document.getElementById("box_2");
    itemDesc = document.getElementById("box_3");
    document.getElementById("create").addEventListener("click",addItem);

}

function addItem(){
    var ul = document.getElementById("itemList");
    var li = document.createElement("li");

    var img = document.createElement('img');
    img.src = '../images/trash.png'

    var cartBtn = document.createElement("button");
    cartBtn.setAttribute('class','btn');
    cartBtn.innerHTML = "Add to cart";

    var span = document.createElement("span");
    span.setAttribute("class",'itemDetails');

    obj.addItem(itemName.value, itemPrice.value, itemDesc.value);

    li.innerHTML = obj.id + " " + itemName.value + " " + itemPrice.value + " " + itemDesc.value;
    span.appendChild(img);
    span.appendChild(cartBtn);
    li.appendChild(span);
    // console.log(itemName.value + " " + itemPrice.value + " " + itemDesc.value);
    ul.appendChild(li);

    img.addEventListener("click", markItem);

}

function markItem(){
    var elem = event.srcElement.parentElement.parentElement;
    var current_id = elem.innerHTML.split(" ")[0];
    console.log(current_id);
}