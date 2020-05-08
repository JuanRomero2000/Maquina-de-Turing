/*Máquina de Turing lógica tomando en cuenta las transiciones, estados y sus movimientos en cinta respectivamente
 */

//Los String en Js son Inmutables, por esa razón se hace este subcódigo para reemplazarlos por una copia
String.prototype.replaceAt = function (index, replacement) {
	return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

function isEmpty(str) {
	return !str || 0 === str.length;
}

let aux;
let velocidad;
aux = document.querySelector("#slider");

aux.oninput = () => {
	velocidad = aux.value;
	console.log(velocidad);
};

function logica() {
	var expresion = document.getElementById("input").value;

	/*declaración de variables que operan en la máquina de turing y sus movimientos, index es el encargado de moverse
	dentro del String*/
	var index = 1;
	var estado = 1;
	var pos = 13;
	var sw = 1;
	var pasos = 0;

	//Ciclo que controla todo el movimiento y finaliza en el estado de aceptación//
	if (isEmpty(!expresion)) {
		expresion = "B" + expresion + "B";
		while (estado != 3) {
			//Controla el esta Q1 y sus movimientos//
			while (estado == 1) {
				if (expresion.charAt(index) == "a") {
					pasos++;
					moverIzquierda(estado,pasos);
					pos++;
					
				} else {
					if (expresion.charAt(index) == "b") {
						expresion = expresion.replaceAt(index, "a");
						$("#cuadro" + pos).fadeIn(function () {
							$(this).html("<h1>a</h1>").fadeIn();
						});
						pasos++;
						moverIzquierda(estado,pasos);
						pos++;
						
					} else {
						if (expresion.charAt(index) == "B") {
							estado = 2;
							pasos++;
							moverDerecha(estado,pasos);
							index--;

							sw = 0;
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
					moverDerecha(estado,pasos);
					
				} else {
					if (expresion.charAt(index) == "B") {
						estado = 3;
						pasos++;
						moverIzquierda(estado,pasos);

						index++;
						sw = 0;

						document.getElementById("play").setAttribute("disabled", "true");
						document.getElementById("pause").setAttribute("disabled", "true");
						//document.getElementById("stop").setAttribute("disabled", "true");
						document.getElementById("step").setAttribute("disabled", "true");
					}
				}
				if (sw == 1) {
					index--;
				}
			}
		}
	} else {
		alert("No puedes jugar si está vacía la expresión");
	}
}

function moverDerecha(estado,pasos) {
	if (velocidad <= 33) {
			$(".cuadrado").animate({ left: "+=53px" }, "slow")
			.fadeIn(function() {
			$("#estado").html( '<h3>Estado:'+estado+'</h3>' );
			$("#pasos").html( '<h3>Pasos:'+pasos+'</h3>' );

		  		});
	} else {
		if (velocidad > 33 && velocidad <= 66) {
			$(".cuadrado").animate({ left: "+=53px" }, "medium").
			fadeIn(function() {
			$("#estado").html( '<h3>Estado:'+estado+'</h3>' );
			$("#pasos").html( '<h3>Pasos:'+pasos+'</h3>' );
			  });
			
		} else {
			$(".cuadrado").animate({ left: "+=53px" }, "fast")
			.fadeIn(function() {
			$("#estado").html( '<h3>Estado:'+estado+'</h3>' );
			$("#pasos").html( '<h3>Pasos:'+pasos+'</h3>' );
			  });
		}
	}
}

function moverIzquierda(estado,pasos) {
	if (velocidad <= 33) {
			$(".cuadrado").animate({ left: "-=53px" }, "slow")
			.fadeIn(function() {
			$("#estado").html( '<h3>Estado:'+estado+'</h3>' );
			$("#pasos").html( '<h3>Pasos:'+pasos+'</h3>' );
		  		});
	} else {
		if (velocidad > 33 && velocidad <= 66) {
			$(".cuadrado").animate({ left: "-=53px" }, "medium")
			.fadeIn(function() {
			$("#estado").html( '<h3>Estado:'+estado+'</h3>' );
			$("#pasos").html( '<h3>Pasos:'+pasos+'</h3>' );
				});
		} else {
		$(".cuadrado").animate({ left: "-=53px" }, "fast")
			.fadeIn(function() {
			$("#estado").html( '<h3>Estado:'+estado+'</h3>' );
			$("#pasos").html( '<h3>Pasos:'+pasos+'</h3>' );
				});
		}
	}
}

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

//Con esta función podemos manipular el Stop
$( "#stop" ).click(function() {
	$( "div" )
	  .queue( "fx", [] )
	  .stop();
	  window.setTimeout(function(){location.reload()},1000);
  });

 