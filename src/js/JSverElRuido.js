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

	switch (mm) {
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

var nodo;
var imagen = new Image();

function createImagen(a) {
	nodo = document.getElementById("imgDown");
	console.log(nodo);

	switch (a) {
		case 0:
			domtoimage.toPng(nodo).then(function (dataUrl) {
				//console.log(dataUrl);
				//var img = new Image();
				imagen.src = dataUrl;
				downloadImage(imagen.src, 0);
			});
			break;
		case 1:
			nodo.style.backgroundColor = "white";
			domtoimage.toJpeg(nodo).then(function (dataUrl) {
				//console.log(dataUrl);
				//var img = new Image();
				imagen.src = dataUrl;
				downloadImage(imagen.src, 1);
			});
			break;
		case 2:
			nodo.style.backgroundColor = "white";
			domtoimage.toSvg(nodo).then(function (dataUrl) {
				//console.log(dataUrl);
				//var img = new Image();
				imagen.src = dataUrl;
				downloadImage(imagen.src, 2);
			});
			break;
	}
}

async function downloadImage(imageSrc, a) {
	const image = await fetch(imageSrc);
	const imageBlog = await image.blob();
	const imageURL = URL.createObjectURL(imageBlog);
	const link = document.createElement("a");
	link.href = imageURL;

	switch (a) {
		case 1:
			link.download = "grafico.jpg";
			break;
		default:
			link.download = "grafico";
			break;
	}
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	nodo.style.backgroundColor = "transparent";
}

function llamaShot(a,b) {
	let url = document.getElementById(a).contentWindow.takeShot(b);
	setTimeout(function () {
		//* Disparamos Swal
		Swal.fire({
			//* Determinamos template
			template: "#shootSwal",
			//* Seteamos estilo del Swal
			width: "81.46vw",
			customClass: "swal-height",
			showCloseButton: true,
			padding: "50px 50px",
			showConfirmButton: false,
			backdrop: "rgba(51,51,51,0.5)",
		});
		let urls = url.src;
		document.getElementById("imgOut").src = urls;
	}, 1000);
}


function appearLabel(a,b) {
	var descargar = document.getElementById("descargar" + b);
	var imagen = document.getElementById("imagen" + b);
	var embedar = document.getElementById("embedar" + b);
	var embedarMenu = document.getElementById("embedarMenu" + b);
	var citaInfo = document.getElementById("citaInfo");
	var embedInfo = document.getElementById("embedInfo");
	switch (a) {
		case 0:
			descargar.style.display = "block";
			break;
		case 1:
			imagen.style.display = "block";
			break;
		case 2:
			embedar.style.display = "block";
			break;
		case 3:
			embedar.style.display = "none";
			embedarMenu.style.display = "block";
			break;
		case 4:
			citaInfo.style.display = "block";
			break;
		case 5:
			embedInfo.style.display = "block";
			break;
	}
}

function hideLabel(a,b) {
	var descargar = document.getElementById("descargar"+b);
	var imagen = document.getElementById("imagen"+b);
	var embedar = document.getElementById("embedar"+b);
	switch (a) {
		case 0:
			var citaInfo = document.getElementById("citaInfo");
			citaInfo.style.display = "none";
			break;
		case 1:
			var embedInfo = document.getElementById("embedInfo");
			embedInfo.style.display = "none";
			break;
	}
	descargar.style.display = "none";
	imagen.style.display = "none";
	embedar.style.display = "none";
}

let contadorMenu = 0;

function appearMenu(a) {
	var embedar = document.getElementById("embedar"+a);
	var embedarMenu = document.getElementById("embedarMenu"+a);
	contadorMenu++;
	if (contadorMenu % 2 == 0) {
		embedar.style.display = "none";
		embedarMenu.style.display = "none";
	} else {
		embedar.style.display = "none";
		embedarMenu.style.display = "block";
	}
}

function hideMenu(a) {
	var embedarMenu = document.getElementById("embedarMenu"+a);
	embedarMenu.style.display = "none";
}

function citaSwal(a) {
	//* Disparamos Swal
	Swal.fire({
		//* Determinamos template
		template: "#citaSwal",
		//* Seteamos estilo del Swal
		width: "50vw",
		customClass: "citaSwal-height",
		showCloseButton: true,
		padding: "10px 10px",
		showConfirmButton: false,
		backdrop: "rgba(51,51,51,0.5)",
	});

	hideMenu(a);
}

function embedSwal(a) {
	//* Disparamos Swal
	Swal.fire({
		//* Determinamos template
		template: "#embedSwal",
		//* Seteamos estilo del Swal
		width: "50vw",
		customClass: "citaSwal-height",
		showCloseButton: true,
		padding: "10px 10px",
		showConfirmButton: false,
		backdrop: "rgba(51,51,51,0.5)",
	});

	let textEmbed = document.getElementById("textEmbed");
	textEmbed.innerHTML =
		'<iframe src="../pages/frames/verElRuido/participacion.php" style="width: 100%; height: 800px;"></iframe>';
	hideMenu(a);
}

function copyToClipBoard(a) {
	let imgCopy = document.getElementById("imgCopy");

	switch (a) {
		case 0:
			var textCita = document.getElementById("textCita");
			textCita.select();
			document.execCommand("copy");
			break;
		case 1:
			var textEmbed = document.getElementById("textEmbed");
			textEmbed.select();
			document.execCommand("copy");
			break;
	}
	window.getSelection().removeAllRanges();
	imgCopy.src = "../../assets/vector/accesibilidad/copiarPortaAct.svg";
	setTimeout(function () {
		imgCopy.src = "../../assets/vector/accesibilidad/copiarPortaIna.svg";
	}, 2000);
}