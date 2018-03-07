window.addEventListener("load", init);

var count = 0;

function init() {
    image = document.getElementById("image");
    var container = document.getElementById("container");
    backgroundImage = document.getElementById("inner_container");
    container.addEventListener("keyup",moveBg);
}

function moveBg(){
    // console.log("Moving Bg");
    key = event.keyCode;
    console.log(key);
    if (key == 39) {
        image.style.transform = 'rotateY(0deg)';
        count += 5;
        backgroundImage.style.backgroundPosition = '-'+count+'% 0px';
        // console.log(backgroundImage);
    }
    else if (key == 37){
        backgroundImage.style.backgroundPosition = count+'% 0px';
        image.style.transform = 'rotateY(180deg)';
    }
}