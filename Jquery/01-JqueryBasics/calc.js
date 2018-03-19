$(document).ready(function(){

    var num_1 = $("#num_1");
    var num_2 = $("#num_2");
    var result = 0;
    
    $("#add").click(function(){
        result = parseInt(num_1.val()) + parseInt(num_2.val());
        $("span").html(result);
    });
})