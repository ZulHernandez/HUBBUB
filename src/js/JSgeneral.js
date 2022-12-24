//main Variables
//* Contador de clicks en el nav derecho
let contNav = 0;
let contSwal = 1;

//funcion Nos aseguramos si el swal esta abierto o cerrado en el resize
function swalRez() {
	//param contSwal par cerrado
	//param contSwal impar abierto
	if (contSwal % 2 == 0) {
		//* Llamamos a la funcion Disparar del Swal
		nosotros(false);
	}
}

//funcion Disparar del Swal
//param a true para actualizar estado
function nosotros(a) {
	//* Evaluamos la orientacion de la pantalla
	//* Si es horizontal
	if (window.innerWidth > window.innerHeight) {
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
			willClose: () => {
				contSwal++;
			},
		});
		//* Si es vertical
	} else {
		Swal.fire({
			//* Determinamos template
			template: "#nosotrosSwalCh",
			//* Seteamos estilo del Swal
			width: "81.46vw",
			customClass: "swal-height",
			padding: "25px 0px 25px 20px",
			showConfirmButton: false,
			showCloseButton: false,
			backdrop: "rgba(51,51,51,0.5)",
			willClose: () => {
				contSwal++;
			},
		});
	}
	//* Evaluamos si se actualiza el estado
	if (a) {
		contSwal++;
	}
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
		navDer.style.height = "100vh";
		linksNav.style.display = "block";
		legNav.style.display = "block";
	} else {
		//* Colapsamos el nav derecho
		topLine.className.baseVal = "topLineIna";
		midLine.className.baseVal = "midLineIna";
		botLine.className.baseVal = "botLineIna";
		navDer.style.backgroundColor = "transparent";
		navDer.style.backgroundImage = "url(../)";
		navDer.style.height = "50vh";
		linksNav.style.display = "none";
		legNav.style.display = "none";
	}

	//* Aumentamos el contador de clicks
	contNav++;
}

//funcion Mostramos u ocultamos elementos de la página
//param aidi = id del elemento a mostrar u ocultar
//param a modo de display
function hideShow(aidi, a) {
	let modoDis = ["none", "block", "flex"];
	document.getElementById(aidi).style.display = modoDis[a];
}