$(document).ready(function(){ //prevent JQuery code from running before the document is finished loading!!
    $(".startBtn").click(function(){
        $(".box").css("color", "white").slideUp(1000).slideDown(1000);
    });

    $(".stopBtn").click(function(){
        $(".box").stop();
    });

    $(".resetBtn").click(function(){
        $(".box").animate({left: '0px',
        fontSize : '1em'},1000);
    });


});