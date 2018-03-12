window.addEventListener("load", init);

var audio;
var image;
var slider;
var pauseBtn;
var playBtn;
function init(){
    audio = document.getElementById("audio");
    image = document.getElementById("image");
    slider = document.getElementById("slider");
    pauseBtn = document.getElementById("pauseBtn");
    playBtn = document.getElementById("playBtn");
    slider.addEventListener("change", seekSong);
    var a = document.getElementsByTagName('a');

    for(var i = 0; i < a.length; i++){
        a[i].addEventListener("click",playSong);
        // a[i].addEventListener('click', function(){
        //     console.log(event.srcElement.innerHTML);
        // });
    }
    pauseBtn.addEventListener("click", pauseSong);
    playBtn.addEventListener("click", resumeSong);
}

function playSong(){
    var songName = event.srcElement.innerHTML;
    var img = event.srcElement.parentNode.children[0];
    var startTime = document.querySelector(".s_time");
    var endTime = document.querySelector(".e_time");
    // console.log(image);
    audio.src = "songs/"+songName+".mp3";
    image.src = img.src;
    audio.play();
    setTimeout(function(){
        endTime.innerHTML = Math.round(audio.duration);
    },1000);
    setInterval(function(){
        startTime.innerHTML = Math.round(audio.currentTime);
        slider.value = Math.round(audio.currentTime);
        console.log(slider.value);
    },1000);
    // console.log(songName);
}

function pauseSong(){
    audio.pause();
}

function resumeSong(){
    audio.play();
}

function seekSong(){
    slider.max = audio.duration;
    audio.currentTime = slider.value;
}