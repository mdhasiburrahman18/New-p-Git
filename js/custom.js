
// -----=====Scroll top button js start=====-----//
    $(window).scroll(function(){
        if( $(this).scrollTop() > 100){
            $(".scrollTop").fadeIn();
        } else{
            $(".scrollTop").fadeOut();
        }
    });

    $(".scrollTop").click(function(){
            $("html ,body").animate({scrollTop : 0}, 500 );
        });
// -----=====Scroll top button js end=====-----//

    
// -----=====Scrolling navbar js start=====-----//
$(function(){
    var navbar=$('.navbar');
    $(window).scroll(function(){
        if($(window).scrollTop() <=10){
            navbar.removeClass('navbar_scroll');
        }else{
            navbar.addClass('navbar_scroll');
        }
    });
});
// -----=====Scrolling navbar js end=====-----//


// -----=====CounterUp js start=====-----//
   $('.counter').counterUp();
// -----=====CounterUp js end=====-----//