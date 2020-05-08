//llenado de la cinta

var expresion;

function cargar() {
	expresion = document.getElementById("input").value;

	if (isEmpty(!expresion)) {
		limpiar_cinta();

		if (validar(expresion) == true) {

			var longitud = expresion.length;
			var index_palabra = 0;
			var pos_actual = 13;

			while (index_palabra < longitud) {
				document.getElementById("cuadro" + pos_actual).innerHTML = "<h1>" + expresion.charAt(index_palabra) + "</h1>";
				index_palabra++;
				pos_actual++;
			}
			
			$("#pasos").fadeIn(function () {
				$(this).html("<h3>Pasos: </h3>").fadeIn();
			});

			$("#estado").fadeIn(function () {
				$(this).html("<h3>Estado: </h3>").fadeIn();
			});

			document.getElementById("play").removeAttribute("disabled");
			document.getElementById("stop").removeAttribute("disabled");


		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops....',
				text: '¡No puedes iniciar la máquina! La expresión es inválida!'
				 
			  })
		}
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Oops....',
			text: '¡No puedes iniciar la máquina si la expresión está vacía!'
			 
		  })
	}
}

function isEmpty(str) {
	return !str || 0 === str.length;
}

function validar(expresion) {
	for (i = 0; i < expresion.length; i++) {
		if (expresion.charAt(i) != "a" && expresion.charAt(i) != "b") {
			return false;
		}
	}
	return true;
}

function limpiar_cinta() {
	for (i = 1; i <= 25; i++) {
		document.getElementById("cuadro" + i).innerHTML = "";
	}
}



