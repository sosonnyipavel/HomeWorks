$ (document).ready(function(){
   'use strict';
    function tourClick(){
        $('.overlay').fadeIn("slow");
        $('.modal').slideDown(1000);
    }
    function clickClose(){
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut("slow");
    }
    $('.main_btna').on('click', function(){
        tourClick();
    });
    $('.main_btn').on('click', function(){
        tourClick();
    });
    $('[href="#sheldure"]').on('click', function(){
        tourClick();
    });
    $('.close').on('click', function(){
        clickClose();
    });
});