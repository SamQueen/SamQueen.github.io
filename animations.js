//Change nav style on scroll
$(window).on('scroll', function() {
    if($(window).scrollTop() > 1) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

//Show mibile nav list when icon is clicked 
$('nav i').on('click', function() {
    $('.mobile-nav').toggleClass('active'); 
    $('.mobile-ul').toggleClass('show'); 
});