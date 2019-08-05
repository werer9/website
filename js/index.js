$(document).ready(function() {
    //change navbar colour on scroll
    $(document).scroll(function () {
	    var $nav = $("#toggleContent");
	    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

    //scroll animation on click on navlink
    $('a').click(function() {
        var link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 1000);
    });
});
