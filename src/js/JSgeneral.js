//main Variables
//* Contador de clicks en el nav derecho
let contNav = 0;

//funcion Disparar del Swal
function nosotros() {
	//* Disparamos Swal
	Swal.fire({
		//* Determinamos template
		template: "#nosotrosSwal",
		//* Seteamos estilo del Swal
		width: "81.46vw",
		customClass: "swal-height",
		padding: "100px 82px",
		showConfirmButton: false,
		showCloseButton: false,
		backdrop: "rgba(51,51,51,0.5)",
	});
}

//funcion Expandimos o colapsamos el nav derecho
function navDer() {
	//* Recogemos los elementos del HTML
	let topLine = document.getElementById("topLine");
	let midLine = document.getElementById("midLine");
	let botLine = document.getElementById("botLine");
	let navDer = document.getElementById("navDer");
	let linksNav = document.getElementById("linksNav");
	let legNav = document.getElementById("legNav");

	//* Evaluamos si el contador de clicks es par o impar
	if (contNav % 2 == 0) {
		//* Expandimos el nav derecho
		topLine.className.baseVal = "topLineAct";
		midLine.className.baseVal = "midLineAct";
		botLine.className.baseVal = "botLineAct";
		navDer.style.backgroundColor = "#666666";
		navDer.style.backgroundImage = "url(../../assets/vector/background.svg)";
		linksNav.style.display = "block";
		legNav.style.display = "block";
	} else {
		//* Colapsamos el nav derecho
		topLine.className.baseVal = "topLineIna";
		midLine.className.baseVal = "midLineIna";
		botLine.className.baseVal = "botLineIna";
		navDer.style.backgroundColor = "transparent";
		navDer.style.backgroundImage = "url(../)";
		linksNav.style.display = "none";
		legNav.style.display = "none";
	}

	//* Aumentamos el contador de clicks
	contNav++;
}
