$(document).ready(function() {
	setTimeout(function() {
		$("#img-overlay").animate({
			top: '130px'
		}, 500);
		$(".hidden").fadeIn(500).removeClass('hidden');
	}, 500);
});