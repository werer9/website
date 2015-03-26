$(document).ready(function() {
	setTimeout(function() {
		$("#img-overlay").animate({
			top: '130px'
		}, 500);
		$(".hidden").fadeIn(500).removeClass('hidden');
	}, 500);

	$('a[href^="#"]').on('click', function(event) {

	    var target = $($(this).attr('href'));

    	if(target.length) {
        	event.preventDefault();
        	$('html, body').animate({
            	scrollTop: target.offset().top - 80
        	}, 500);
   		}
	});
});