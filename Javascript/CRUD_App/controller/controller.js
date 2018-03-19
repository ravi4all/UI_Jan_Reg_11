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
    document.getElementById("delete").addEventListener("click",deleteItem);
    document.getElementById("save").addEventListener("click",saveItem);
    document.getElementById("load").addEventListener("click",loadItems);

    document.getElementById("edit").addEventListener("click",editItem);
}

function saveItem(){
    if(window.localStorage){
        var json = JSON.stringify(obj.itemList);
        localStorage.setItem('data', json);
        alert("Data Saved...");
    }
    else {
        alert("Localstorage not supported...");
    }
}

function loadItems(){
    if(window.localStorage){
        obj.itemList = JSON.parse(localStorage.data);
        printItem();
    }
    else {
        alert("Localstorage not supported...");
    }
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

    itemName.value = "";
    itemPrice.value = "";
    itemDesc.value = "";

    img.addEventListener("click", markItem);

}

function markItem(){
    elem = event.srcElement.parentElement.parentElement;
    elem.classList.toggle('marked');
    current_id = elem.innerHTML.split(" ")[0];
    // console.log(current_id);
    obj.toggleItem(current_id);
}

function deleteItem(){
    obj.deleteItem();
    printItem();
}

function editItem(){
    itemName.value = elem.innerHTML.split(" ")[1];
    itemPrice.value = elem.innerHTML.split(" ")[2];
    itemDesc.value = elem.innerHTML.split(" ")[3];
}

function printItem(){
    var ul = document.getElementById("itemList");
    ul.innerHTML = "";

    obj.itemList.forEach(function(obj){
        var li = document.createElement("li");
        
            var img = document.createElement('img');
            img.src = '../images/trash.png'
        
            var cartBtn = document.createElement("button");
            cartBtn.setAttribute('class','btn');
            cartBtn.innerHTML = "Add to cart";
        
            var span = document.createElement("span");
            span.setAttribute("class",'itemDetails');
        
            li.innerHTML = obj.id + " " + obj.name + " " + obj.price + " " + obj.desc;
            span.appendChild(img);
            span.appendChild(cartBtn);
            li.appendChild(span);
            // console.log(itemName.value + " " + itemPrice.value + " " + itemDesc.value);
            ul.appendChild(li);
        
            img.addEventListener("click", markItem);
    });
}