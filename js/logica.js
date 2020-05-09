/*Declaración de variables usadas*/
var expresion;
var index;
var pos;
var pasos;
var estado;
var sw;
var aux = document.querySelector("#slider");
var velocidad;

function logica() {
	
	index = 1;
	pos = 13;
	pasos = 0;
	estado = 1;
	sw = 1;
	expresion = "B" + document.getElementById("input").value + "B";

	while (estado != 3) {
		//Controla el esta Q1 y sus movimientos//
		while (estado == 1) {
			if (expresion.charAt(index) == "a") {
				pasos++;
				pos++;
				moverIzquierda(estado, pasos);
			} else {
				if (expresion.charAt(index) == "b") {
					expresion = expresion.replaceAt(index, "a");
					$("#cuadro" + pos).fadeIn(function () {
						$(this).html("<h1>a</h1>").fadeIn();
					});
					pasos++;
					pos++;
					moverIzquierda(estado, pasos);
				} else {
					if (expresion.charAt(index) == "B") {
						estado = 2;
						index--;
						pasos++;
						sw = 0;
						moverDerecha(estado, pasos);
					}
				}
			}
			/*Como hemos restado index, para no tener un movimento de 2 a la derecha y uno a izquierda, se establece un sw*/
			if (sw == 1) {
				index++;
			}
		}

		sw = 1;
		//Controla el estado Q2 y sus movimientos*/
		while (estado == 2) {
			if (expresion.charAt(index) == "a") {
				pasos++;
				moverDerecha(estado, pasos);
			} else {
				if (expresion.charAt(index) == "B") {
					estado = 3;
					index++;
					pasos++;
					sw = 0;
					moverIzquierda(estado, pasos);
				}
			}
			if (sw == 1) {
				index--;
			}
		}
	}
}

function isEmpty(str) {
	return !str || 0 === str.length;
}

//Los String en Js son Inmutables, por esa razón se hace este subcódigo para reemplazarlos por una copia
String.prototype.replaceAt = function (index, replacement) {
	return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

aux.oninput = () => {
	velocidad = aux.value;
	console.log(velocidad);
};

function moverDerecha(estado, pasos) {
	if (velocidad == 0) {
		$(".cuadrado").animate({ left: "+=53px" }, "slow").fadeIn(function () {
			$("#estado").html("<h3>Estado:" + estado + "</h3>");
			$("#pasos").html("<h3>Pasos:" + pasos + "</h3>");
		});
	} else {
		if (velocidad == 33) {
			$(".cuadrado").animate({ left: "+=53px" }, "medium").fadeIn(function () {
				$("#estado").html("<h3>Estado:" + estado + "</h3>");
				$("#pasos").html("<h3>Pasos:" + pasos + "</h3>");
			});
		} else {
			$(".cuadrado").animate({ left: "+=53px" }, "fast").fadeIn(function () {
				$("#estado").html("<h3>Estado:" + estado + "</h3>");
				$("#pasos").html("<h3>Pasos:" + pasos + "</h3>");
			});
		}
	}
}

function moverIzquierda(estado, pasos) {
	if (velocidad == 0) {
		$(".cuadrado").animate({ left: "-=53px" }, "slow").fadeIn(function () {
			$("#estado").html("<h3>Estado:" + estado + "</h3>");
			$("#pasos").html("<h3>Pasos:" + pasos + "</h3>");
		});
	} else {
		if (velocidad == 33) {
			$(".cuadrado").animate({ left: "-=53px" }, "medium").fadeIn(function () {
				$("#estado").html("<h3>Estado:" + estado + "</h3>");
				$("#pasos").html("<h3>Pasos:" + pasos + "</h3>");
			});
		} else {
			$(".cuadrado").animate({ left: "-=53px" }, "fast").fadeIn(function () {
				$("#pasos").html("<h3>Pasos:" + pasos + "</h3>");
				$("#estado").html("<h3>Estado:" + estado + "</h3>");
			});
		}
	}
}

//Con esta función podemos manipular el Stop
$("#stop").click(function () {
	$("div").queue("fx", []).stop();
	window.setTimeout(function () {
		location.reload();
	}, 100);
});
