$(document).ready(function(){

	var theWidth = $(window).width();
		if(theWidth < 768)[
			return;
			]

	$('.autoplay').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	}); //slick by ken wheeler

		// Nave 'sticky'
		// Hover 'Nav', 'Hire Me', 'Port Img', 'B4 & After' 

		// $("nav li").hover(function(){
	 //    	$('ul').slideUp('slow');            
  //   });

		// Rotating 'Imgs'
		// Click & go to section on page


});