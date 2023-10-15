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

$('.link').on('click', function() {
	window.open('https://www.linkedin.com/in/samuel-queen-599298272/', '_blank').focus();
});

$('.github').on('click', function() {
	window.open('https://github.com/SamQueen', '_blank').focus();
});

$('.veriloot-demo').on('click', function() {
	window.open('https://652b9e6f6c9a35100a0ed88c--roaring-fenglisu-92d210.netlify.app/', '_blank').focus();
});

$('.picture-this-demo').on('click', function() {
	window.open('https://picturethisapp.netlify.app/', '_blank').focus();
});

$('.bubble-demo').on('click', function() {
	window.open('./bubble-sort/bubble.html', '_blank').focus();
});

$('.signup-demo').on('click', function() {
	window.open('https://stark-crag-02725.herokuapp.com/', '_blank').focus();
});


// slide in on scroll
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		
		if(entry.isIntersecting) {
			entry.target.classList.add('slide-in');
		} else {
			entry.target.classList.remove('slide-in');
		}
	});
});

const observer2 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		
		if(entry.isIntersecting) {
			entry.target.classList.add('slide-in');
		} else {
			entry.target.classList.remove('slide-in');
		}
	});
});



const slideInElementsLeft = document.querySelectorAll('.slide-element');
slideInElementsLeft.forEach((el) => observer.observe(el));

const listElementAnimation = document.querySelectorAll('.animate');
listElementAnimation.forEach((el) => observer2.observe(el));