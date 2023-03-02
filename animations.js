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
