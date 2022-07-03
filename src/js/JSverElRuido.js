//main Variables
//* Imagen a descargar
var nodo;
//* Nuevo objeto imagen
var imagen = new Image();
//* Contador para el manu de embed y cita
let contadorMenu = 0;

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
	//* Evaluamos el mes y lo convertimos a texto
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
	//* Organizamos el texto de la fecha
	today = dd + " de " + mm + " del " + yyyy;
	//* pintamos la fecha en el HTML
	fechaActual.innerHTML = today;
}

//funcion Creamos imagen de swal para descargar
//param a = extension de la imagen
function createImagen(a) {
	//* Creamos el nodo de la imagen
	nodo = document.getElementById("imgDown");
	//* Evaluamos el tipo de imagen
	switch (a) {
		//* Imagen png
		case 0:
			domtoimage.toPng(nodo).then(function (dataUrl) {
				imagen.src = dataUrl;
				//* Descargamos la imagen
				downloadImage(imagen.src, 0);
			});
			break;
		case 1:
			//* Imagen jpg
			nodo.style.backgroundColor = "white";
			domtoimage.toJpeg(nodo).then(function (dataUrl) {
				//console.log(dataUrl);
				//var img = new Image();
				imagen.src = dataUrl;
				//* Descargamos la imagen
				downloadImage(imagen.src, 1);
			});
			break;
		case 2:
			//* Imagen svg
			nodo.style.backgroundColor = "white";
			domtoimage.toSvg(nodo).then(function (dataUrl) {
				//console.log(dataUrl);
				//var img = new Image();
				imagen.src = dataUrl;
				//* Descargamos la imagen
				downloadImage(imagen.src, 2);
			});
			break;
	}
}

//funcion asincrona para descargar la imagen
//param imagenSrc = imagen a descargar
//param a = extension de la imagen
async function downloadImage(imageSrc, a) {
	//* Obtenemos la imagen
	const image = await fetch(imageSrc);
	//* Generamos objeto blob
	const imageBlog = await image.blob();
	//* Generamos la URL de la imagen
	const imageURL = URL.createObjectURL(imageBlog);
	//* Creamos etiqueta ancla
	const link = document.createElement("a");
	//* Seteamos el href de la etiqueta ancla
	link.href = imageURL;

	//* Evaluamos el tipo de imagen y determinamos el nombre
	switch (a) {
		case 1:
			link.download = "grafico.jpg";
			break;
		default:
			link.download = "grafico";
			break;
	}
	//* Añadimos la etiqueta ancla al documento
	document.body.appendChild(link);
	//* Le damos click
	link.click();
	//* Eliminamos la etiqueta ancla
	document.body.removeChild(link);
	//* Eliminamos el fondo de la imagen nodo
	nodo.style.backgroundColor = "transparent";
}

//funcion Llama la funcion takeShot de cada frame y la dibuja en un swal
//param a = coge el iframe de la página
//param b = indica el canva o frame dentro del iframe del que se quiere tomar captura
function llamaShot(a, b) {
	//* Obtenemos la url return de la funcion takeShot
	//funcion takeShot(b) toma la captura
	//param b = indica el canva o frame dentro del iframe del que se quiere tomar captura
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
		//* Pintamos la imagen en el Swal con un delay para cargar bien la imagen
		let urls = url.src;
		document.getElementById("imgOut").src = urls;
	}, 1000);
}

//funcion Pinta las labels de los botones de accesibilidad
//param a = indica el boton en hover
//param b = idetificador de la sección donde se encuentra el boton
function appearLabel(a, b) {
	//* Obtenemos los elementos del HTML
	var descargar = document.getElementById("descargar" + b);
	var imagen = document.getElementById("imagen" + b);
	var embedar = document.getElementById("embedar" + b);
	var embedarMenu = document.getElementById("embedarMenu" + b);
	var citaInfo = document.getElementById("citaInfo");
	var embedInfo = document.getElementById("embedInfo");
	//* Evaluamos el boton en hover
	//* Pintamos o escondemos las labels
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

//funcion Esconde las labels de los botones de accesibilidad
//param a = indica si el mouseover fue dentro de un boton de información
//param b = identificador de la sección donde se encuentra el boton
function hideLabel(a, b) {
	//* Obtenemos los elementos del HTML
	var descargar = document.getElementById("descargar" + b);
	var imagen = document.getElementById("imagen" + b);
	var embedar = document.getElementById("embedar" + b);
	//* Evaluamos el boton mouseover y ocultamos el infolabel correspondiente
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
	//* Ocultamos el resto de labels
	descargar.style.display = "none";
	imagen.style.display = "none";
	embedar.style.display = "none";
}

//funcion Muestra el menu de embed y cita en click
//param a = identificador de la sección donde se encuentra el boton
function appearMenu(a) {
	//* Obtenemos los elementos del HTML
	var embedar = document.getElementById("embedar" + a);
	var embedarMenu = document.getElementById("embedarMenu" + a);
	contadorMenu++;
	//* Mostramos u ocultamos el menu
	if (contadorMenu % 2 == 0) {
		embedar.style.display = "none";
		embedarMenu.style.display = "none";
	} else {
		embedar.style.display = "none";
		embedarMenu.style.display = "block";
	}
}

//funcion Ocultamos el menu onmouseover
//param a = identificador de la sección donde se encuentra el boton
function hideMenu(a) {
	//* Obtenemos los elementos del HTML
	var embedarMenu = document.getElementById("embedarMenu" + a);
	//* Ocultamos el menu
	embedarMenu.style.display = "none";
}

//funcion Disparamos swal de cita
//param a = identificador de la sección donde se encuentra el boton
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
	//* Ocultamos submenu de embed
	hideMenu(a);
}

//funcion Disparamos swal de embed
//param a = identificador de la sección donde se encuentra el boton
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
	//* Obtenemos los elementos del HTML
	let textEmbed = document.getElementById("textEmbed");
	//* escribimos el codigo de embed en el input
	textEmbed.innerHTML =
		'<iframe src="../pages/frames/verElRuido/participacion.php" style="width: 100%; height: 800px;"></iframe>';
	//* Ocultamos submenu de embed
	hideMenu(a);
}

//funcion Copiamos texto al portapapeles
//param a = identificador de que es aquello que se copia
function copyToClipBoard(a) {
	//* Obtenemos los elementos del HTML
	let imgCopy = document.getElementById("imgCopy");
	//* Evaluamos que es lo que se copia
	switch (a) {
		//* Copiamos la cita
		case 0:
			//* Obtenemos el text area
			var textCita = document.getElementById("textCita");
			//* Seleccionamos el texto
			textCita.select();
			//* Copiamos el texto
			document.execCommand("copy");
			break;
		//* Copiamos el codigo de embed
		case 1:
			//* Obtenemos el text area
			var textEmbed = document.getElementById("textEmbed");
			//* Seleccionamos el texto
			textEmbed.select();
			//* Copiamos el texto
			document.execCommand("copy");
			break;
	}
	//* Quitamos la selección
	window.getSelection().removeAllRanges();
	//* Mostramos imagen de copiado exitoso
	imgCopy.src = "../../assets/vector/accesibilidad/copiarPortaAct.svg";
	//* Esperamos 2 segundos y regresamos al otro icono
	setTimeout(function () {
		imgCopy.src = "../../assets/vector/accesibilidad/copiarPortaIna.svg";
	}, 2000);
}
