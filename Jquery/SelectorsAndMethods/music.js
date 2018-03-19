$(document).ready(function(){

    $("ul li a").click(function(){
        var songName = $(this).html();
        var audio = $("#audio");
        audio[0].src = 'songs/'+songName+'.mp3';
        audio[0].play();
    })

})