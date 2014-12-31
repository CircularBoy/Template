$(document).ready(function() {

	$('nav.top ul li a').click(function() {
		$('nav.top ul li').removeClass('active');
		$(this).parent().addClass('active');
	});

});
