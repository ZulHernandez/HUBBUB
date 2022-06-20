//funcion Activar o desactivar navegador izquierdo
//param a = over o out
function navIzq(a) {
	//* Obtenemos elementos del HTML
	let textNavIzq = document.getElementsByClassName("textNavIzq");
	let opcionCero = document.getElementById("opcionCero");
	let opcionUno = document.getElementById("opcionUno");
	let opcionDos = document.getElementById("opcionDos");
	let opcionTres = document.getElementById("opcionTres");
	let opcionCuatro = document.getElementById("opcionCuatro");
	let opcionCinco = document.getElementById("opcionCinco");
	let opcionSeis = document.getElementById("opcionSeis");
	let opcionSiete = document.getElementById("opcionSiete");

	//* Ponemos el estado desactivado del nav on mouse out
	if (a == 0) {
		for (let i = 0; i < textNavIzq.length; i++) {
			textNavIzq[i].style.opacity = "0";
			opcionCero.className = "textoDivNavIna";
			opcionUno.className = "textoDivNavIna";
			opcionDos.className = "textoDivNavIna";
			opcionTres.className = "textoDivNavIna";
			opcionCuatro.className = "textoDivNavIna";
			opcionCinco.className = "textoDivNavIna";
			opcionSeis.className = "textoDivNavIna";
			opcionSiete.className = "textoDivNavIna";
		}
	}

	//* Ponemos el estado activado del nav on mouse over
	if (a == 1) {
		for (let i = 0; i < textNavIzq.length; i++) {
			textNavIzq[i].style.opacity = "1";
			opcionCero.className = "textoDivNavAct";
			opcionUno.className = "textoDivNavAct";
			opcionDos.className = "textoDivNavAct";
			opcionTres.className = "textoDivNavAct";
			opcionCuatro.className = "textoDivNavAct";
			opcionCinco.className = "textoDivNavAct";
			opcionSeis.className = "textoDivNavAct";
			opcionSiete.className = "textoDivNavAct";
		}
	}
}