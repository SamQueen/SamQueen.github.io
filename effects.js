
//Add class to nav on scroll
$(window).on('scroll', function() {
   if($(window).scrollTop()) {
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