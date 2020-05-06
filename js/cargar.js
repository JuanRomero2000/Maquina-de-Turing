//llenado de la cinta

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

function cargar() {
	expresion = document.getElementById("input").value;

	if (isEmpty(!expresion)) {
		limpiar_cinta();

		if (validar(expresion) == true) {
			document.getElementById("play").removeAttribute("disabled");
			document.getElementById("pause").removeAttribute("disabled");
			document.getElementById("stop").removeAttribute("disabled");
			document.getElementById("step").removeAttribute("disabled");

			var longitud = expresion.length;
			index = 0;
			pos = 13;

			while (index < longitud) {
				document.getElementById("cuadro" + pos).innerHTML = "<h1>" + expresion.charAt(index) + "</h1>";
				index++;
				pos++;
			}
		} else {
			alert("Expresión invalida");
		}
	} else {
		alert("No has ingresado ninguna expresión");
	}
}

function limpiar_cinta() {
	for (i = 1; i <= 25; i++) {
		document.getElementById("cuadro" + i).innerHTML = "";
	}
}
