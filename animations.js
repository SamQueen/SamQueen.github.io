//Change nav style on scroll
$(window).on('scroll', function() {
   if($(window).scrollTop() > 1) {
       $('nav').addClass('shrink');
   } else {
       $('nav').removeClass('shrink');
   }
});
