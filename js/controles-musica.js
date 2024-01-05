$(document).ready(Inicio);

function Inicio(){
	var pararMusica = $("#boton_sonido");
	pararMusica.click(function () {
		var bool = $("#mus_fondo").prop("muted");
		$("#mus_fondo").prop("muted", !bool);
	});

	//Sonidos hover
	var elsonido = $("#sonido")[0];

	$(".img-snd").mouseenter(function (){
	   elsonido.play();
	});
}

/*var mus_fondo = $("#mus_fondo");

	if (mus_fondo.paused) {

		mus_fondo.play();

	} else {

		mus_fondo.data('muted',true);
		mus_fondo.pause();
	}*/