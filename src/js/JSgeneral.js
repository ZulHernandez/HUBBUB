//main Variables
//* Contador de clicks en el nav derecho
let contNav = 0;
let contSwal = 1;

function swalRez() {
	if (contSwal % 2 == 0) {
		nosotros(false);
	}
}

//funcion Disparar del Swal
function nosotros(a) {
	//* Disparamos Swal
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

function hideShow(aidi, a) {
	switch (a) {
		case 0:
			document.getElementById(aidi).style.display = "none";
			break;
		case 1:
			document.getElementById(aidi).style.display = "block";
			break;
		case 2:
			document.getElementById(aidi).style.display = "flex";
			break;
	}
}
