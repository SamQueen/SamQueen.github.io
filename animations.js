//Change nav style on scroll
$(window).on('scroll', function() {
    if($(window).scrollTop() > 1) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

//Show mobile nav list when icon is clicked
$('nav i').on('click', function() {
    $('.mobile-nav').toggleClass('active');
    $('.mobile-ul').toggleClass('show');
});

//Contact section link redirects
$('.github').on('click', function() {
  window.open('https://github.com/SamQueen', '_blank').focus();
});
