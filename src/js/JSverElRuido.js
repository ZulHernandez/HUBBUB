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

//funcion Recogemos la fecha del día de hoy y la pintamos en el HTML
function getDate() {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	var yyyy = today.getFullYear();
	let fechaActual = document.getElementById("fechaActual");

	switch(mm){
		case "01":
			mm = "Enero";
			break;
		case "02":
			mm = "Febrero";
			break;
		case "03":
			mm = "Marzo";
			break;
		case "04":
			mm = "Abril";
			break;
		case "05":
			mm = "Mayo";
			break;
		case "06":
			mm = "Junio";
			break;
		case "07":
			mm = "Julio";
			break;
		case "08":
			mm = "Agosto";
			break;
		case "09":
			mm = "Septiembre";
			break;
		case "10":
			mm = "Octubre";
			break;
		case "11":
			mm = "Noviembre";
			break;
		case "12":
			mm = "Diciembre";
			break;
	}


	today = dd + " de " + mm + " del " + yyyy;
	fechaActual.innerHTML = today;
}
