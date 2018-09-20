$(document).ready(function() {
	$('#show_menu-lv1').mouseenter(function() {
		$('#menu_dropt-lv1').fadeToggle()
	});
	$('#show_menu-lv1').mouseleave(function() {
		$('#menu_dropt-lv1').fadeOut()
	});

	$('#show_menu-lv2').mouseenter(function() {
		$('#menu_dropt-lv2').fadeIn()
	});
	$('#show_menu-lv2').mouseleave(function() {
		$('#menu_dropt-lv2').fadeOut()
	});
});