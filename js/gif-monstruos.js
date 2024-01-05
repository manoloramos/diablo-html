$(document).ready(Inicio);

function Inicio () {

	/*$(".gif").css("opacity", "0");
	$(".static-gif").css("opacity", "1");*/
	
	$(".gif").mouseenter(function () {
		$(this).css("opacity", "1");
	});

	$(".gif").mouseleave(function () {
		$(this).css("opacity", "0");

		/*$(".static-gif").mouseleave(function () {
			$(this).css("opacity", "1");
		});*/
	});

	/*$(".gif").mouseleave(function () {
		$(this).css("opacity", "0");
		$(".static-gif").css("opacity", "1");

	});*/
}
