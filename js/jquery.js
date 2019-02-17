$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "send.php", 
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
              
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

$( document ).ready(function(){
    $( ".open_agreement" ).click(function(){
        $( "#agreement" ).fadeIn();
    });
    $( ".close_agreement" ).click(function(){
        $( "#agreement" ).fadeOut();
    });
});
$( document ).ready(function(){
    $( ".open_application1" ).click(function(){
        $( ".application1" ).fadeIn();
    });
    $( ".close_application1" ).click(function(){
        $( ".application1" ).fadeOut(); 
    });
});
$( document ).ready(function(){
    $( ".open_application2" ).click(function(){ 
        $( ".application2" ).fadeIn();
    });
    $( ".close_application2" ).click(function(){ 
        $( ".application2" ).fadeOut();
    });
});
$( document ).ready(function(){
    $( ".open_application3" ).click(function(){ 
        $( ".application3" ).fadeIn();
    });
    $( ".close_application3" ).click(function(){ 
        $( ".application3" ).fadeOut(); 
    });
});