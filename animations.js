//Change nav style on scroll
$(window).on('scroll', function() {
    if($(window).scrollTop() > 1) {
        $('nav').addClass('shrink');
        $('.mobile-nav-items').addClass('nav-items-shrink');
    } else {
        $('nav').removeClass('shrink');
        $('.mobile-nav-items').removeClass('nav-items-shrink');
    }
});

//Show mobile nav list when icon is clicked
$('#mobile-nav-icon').on('click', function() {
  
  // check if the button has already been pressed
  if (!$('.mobile-nav-items').hasClass('show-mobile-nav-items')) {
    $('.mobile-nav-items').addClass('show-mobile-nav-items'); // show mobile nav items
    $('nav').addClass('shrink2'); // shrink nav
    $('.mobile-nav-items').addClass('nav-items-shrink2'); // shrink mobile nav items
  } else {
    $('.mobile-nav-items').removeClass('show-mobile-nav-items'); // hide mobile nav items
    $('nav').removeClass('shrink2'); // return nav size
    $('.mobile-nav-items').removeClass('nav-items-shrink2'); // return mobile nav items size
  }
});

//Contact section link redirects
$('.google').on('click', function() {
  var email = 'sjqueen@asu.edu';
  var subject = '';
  var emailBody = '';
  var attach = 'path';
        
  document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
  "?attach="+attach;
});

$('.instagram').on('click', function() {
  window.open('https://www.instagram.com/sam_queen06/', '_blank').focus();
});

$('.github').on('click', function() {
  window.open('https://github.com/SamQueen', '_blank').focus();
});
