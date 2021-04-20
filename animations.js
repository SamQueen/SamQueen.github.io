//change nav style on scroll
$(window).on('scroll', function() {
    if($(window).scrollTop() > 1) {
       $('nav').addClass('black');
   }else {
       $('nav').removeClass('black');
   } 
});


$(document).ready(function() {
   $('.responsive-nav h4').click(function() {
       $('.responsive-nav').toggleClass('active');
       $('.responsive-nav ul').toggleClass('show');
   }); 
});