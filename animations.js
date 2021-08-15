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
    alert("clicked");
});

//Contact section link redirects
$('.linkedin').on('click', function() {
  window.open('https://www.linkedin.com/in/queen-sam/', '_blank').focus();
});

$('.instagram').on('click', function() {
  window.open('https://www.instagram.com/sam_queen06/', '_blank').focus();
});

$('.github').on('click', function() {
  window.open('https://github.com/SamQueen', '_blank').focus();
});
