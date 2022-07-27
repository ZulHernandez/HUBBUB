//main Variables
//* Ancho y alto de la ventana
let w = window.innerWidth;
let h = window.innerHeight;
//let easing = 0.05;
//* Color
let white = "#FFFFFF";
let black = "#33333300";
let colorD = [
	"#ef5da88B",
	"#e55bb68B",
	"#d75cc48B",
	"#c65fd38B",
	"#af64e08B",
	"#9169ec8B",
	"#686ff78B",
	"#0075ff8B",
	"#ef5da8",
	"#e55bb6",
	"#d75cc4",
	"#c65fd3",
	"#af64e0",
	"#9169ec",
	"#686ff7",
	"#0075ff",
];

let suma;

//funcion Precargamos fuentes e imagenes
function preload() {
	MontserratEL = loadFont("../../../../assets/fonts/Montserrat-ExtraLight.ttf");
	MontserratL = loadFont("../../../../assets/fonts/Montserrat-Light.ttf");
	MontserratR = loadFont("../../../../assets/fonts/Montserrat-Regular.ttf");
	MontserratM = loadFont("../../../../assets/fonts/Montserrat-Medium.ttf");
	MontserratSB = loadFont("../../../../assets/fonts/Montserrat-SemiBold.ttf");
	MontserratB = loadFont("../../../../assets/fonts/Montserrat-Bold.ttf");
	MontserratEB = loadFont("../../../../assets/fonts/Montserrat-ExtraBold.ttf");
	MontserratBlack = loadFont("../../../../assets/fonts/Montserrat-Black.ttf");
}

//funcion Seteamos el canvas
function setup() {
	//* Seteamos el canvas y su alto y ancho
	var myCanva;
	myCanva = createCanvas(410, 550);
	//* Posición del canvas en el HTML
	myCanva.parent("canvaEmi");
	//* Frame rate del canvas
	frameRate(60);
	//* Modo de color estandarz
	colorMode(RGB, 255, 255, 255, 1);
	//* Alineación estandar del texto
	textAlign(CENTER, TOP);	
}

//funcion Dibujamos el canvas
function draw() {
	//* Limpiamos el canva
	clear();
	background(255, 0, 0, 0);
	//funcion Ordenamos los datos de json
	//param presion: array de datos
	//param valor: key desde el cual se ordenará
	//param desc: ordenamiento descendente
	oJSON = sortJSON(emisor, "reportes", "desc");

	suma = 0;

	for (let i = 0; i < oJSON.length; i++) {
		suma = suma + oJSON[i].reportes;
	}

	/* if (mouseX > 400 - 57 * oJSON[0].prop && mouseX < 400 && mouseY > 0 && mouseY < 57) {
		//* Dibujamos el texto
		escribe(oJSON[0].emisor, 0, 1, colorD[8]);
	}

	if (mouseX > 400 - 57 * oJSON[1].prop && mouseX < 400 && mouseY > 57 + 10 && mouseY < 57 * 2 + 10) {
		//* Dibujamos el texto
		escribe(oJSON[1].emisor, 57 + 10, 2, colorD[9]);
	}

	if (mouseX > 400 - 57 * oJSON[2].prop && mouseX < 400 && mouseY > 57 * 2 + 20 && mouseY < 57 * 3 + 20) {
		//* Dibujamos el texto
		escribe(oJSON[2].emisor, 57 * 2 + 20, 3, colorD[10]);
	}

	if (mouseX > 400 - 57 * oJSON[3].prop && mouseX < 400 && mouseY > 57 * 3 + 30 && mouseY < 57 * 4 + 30) {
		//* Dibujamos el texto
		escribe(oJSON[3].emisor, 57 * 3 + 30, 4, colorD[11]);
	}

	if (mouseX > 400 - 57 * oJSON[4].prop && mouseX < 400 && mouseY > 57 * 4 + 40 && mouseY < 57 * 5 + 40) {
		//* Dibujamos el texto
		escribe(oJSON[4].emisor, 57 * 4 + 40, 5, colorD[12]);
	}

	if (mouseX > 400 - 57 * oJSON[5].prop && mouseX < 400 && mouseY > 57 * 5 + 50 && mouseY < 57 * 6 + 50) {
		//* Dibujamos el texto
		escribe(oJSON[5].emisor, 57 * 5 + 50, 6, colorD[13]);
	}

	if (mouseX > 400 - 57 * oJSON[6].prop && mouseX < 400 && mouseY > 57 * 6 + 60 && mouseY < 57 * 7 + 60) {
		//* Dibujamos el texto
		escribe(oJSON[6].emisor, 57 * 6 + 60, 7, colorD[14]);
	}

	if (mouseX > 400 - 57 * oJSON[7].prop && mouseX < 400 && mouseY > 57 * 7 + 70 && mouseY < 57 * 8 + 70) {
		//* Dibujamos el texto
		escribe(oJSON[7].emisor, 57 * 7 + 70, 8, colorD[15]);
	} */
}

function mouseClicked() {

	for (let i = 0; i < oJSON.length; i++) {
		//* Dibujamos el texto
		escribe(oJSON[i].emisor, i == 0 ? 0 : (57 + 10) * i, i + 1, colorD[i]);
	}


	if (mouseX > 400 - 57 * oJSON[0].prop && mouseX < 400 && mouseY > 0 && mouseY < 57) {
		//* Dibujamos el texto
		escribe(oJSON[0].emisor, 0, 1, colorD[8]);
		//* Dibujamos la línea de medición
		stroke(colorD[8]);
		strokeWeight(3);
		line(400 - 57 * oJSON[0].prop, 60, 400, 60);
	}

	if (mouseX > 400 - 57 * oJSON[1].prop && mouseX < 400 && mouseY > 57 + 10 && mouseY < 57 * 2 + 10) {
		//* Dibujamos el texto
		escribe(oJSON[1].emisor, 57 + 10, 2, colorD[9]);
		//* Dibujamos la línea de medición
		stroke(colorD[9]);
		strokeWeight(3);
		line(400 - 57 * oJSON[1].prop, 60 + 57 + 10, 400, 60 + 57 + 10);
	}

	if (mouseX > 400 - 57 * oJSON[2].prop && mouseX < 400 && mouseY > 57 * 2 + 20 && mouseY < 57 * 3 + 20) {
		//* Dibujamos el texto
		escribe(oJSON[2].emisor, 57 * 2 + 20, 3, colorD[10]);
		//* Dibujamos la línea de medición
		stroke(colorD[10]);
		strokeWeight(3);
		line(400 - 57 * oJSON[2].prop, 60 + 57 * 2 + 20, 400, 60 + 57 * 2 + 20);
	}

	if (mouseX > 400 - 57 * oJSON[3].prop && mouseX < 400 && mouseY > 57 * 3 + 30 && mouseY < 57 * 4 + 30) {
		//* Dibujamos el texto
		escribe(oJSON[3].emisor, 57 * 3 + 30, 4, colorD[11]);
		//* Dibujamos la línea de medición
		stroke(colorD[11]);
		strokeWeight(3);
		line(400 - 57 * oJSON[3].prop, 60 + 57 * 3 + 30, 400, 60 + 57 * 3 + 30);
	}

	if (mouseX > 400 - 57 * oJSON[4].prop && mouseX < 400 && mouseY > 57 * 4 + 40 && mouseY < 57 * 5 + 40) {
		//* Dibujamos el texto
		escribe(oJSON[4].emisor, 57 * 4 + 40, 5, colorD[12]);
		//* Dibujamos la línea de medición
		stroke(colorD[12]);
		strokeWeight(3);
		line(400 - 57 * oJSON[4].prop, 60 + 57 * 4 + 40, 400, 60 + 57 * 4 + 40);
	}

	if (mouseX > 400 - 57 * oJSON[5].prop && mouseX < 400 && mouseY > 57 * 5 + 50 && mouseY < 57 * 6 + 50) {
		//* Dibujamos el texto
		escribe(oJSON[5].emisor, 57 * 5 + 50, 6, colorD[13]);
		//* Dibujamos la línea de medición
		stroke(colorD[13]);
		strokeWeight(3);
		line(400 - 57 * oJSON[5].prop, 60 + 57 * 5 + 50, 400, 60 + 57 * 5 + 50);
	}

	if (mouseX > 400 - 57 * oJSON[6].prop && mouseX < 400 && mouseY > 57 * 6 + 60 && mouseY < 57 * 7 + 60) {
		//* Dibujamos el texto
		escribe(oJSON[6].emisor, 57 * 6 + 60, 7, colorD[14]);
		//* Dibujamos la línea de medición
		stroke(colorD[14]);
		strokeWeight(3);
		line(400 - 57 * oJSON[6].prop, 60 + 57 * 6 + 60, 400, 60 + 57 * 6 + 60);
	}

	if (mouseX > 400 - 57 * oJSON[7].prop && mouseX < 400 && mouseY > 57 * 7 + 70 && mouseY < 57 * 8 + 70) {
		//* Dibujamos el texto
		escribe(oJSON[7].emisor, 57 * 7 + 70, 8, colorD[15]);
		//* Dibujamos la línea de medición
		stroke(colorD[15]);
		strokeWeight(3);
		line(400 - 57 * oJSON[7].prop, 60 + 57 * 7 + 70, 400, 60 + 57 * 7 + 70);
	}
}


function escribe(texto, y, tipo,color) {
	switch (tipo) {
		case 1:
			textFont(MontserratBlack);
			break;
		case 2:
			textFont(MontserratEB);
			break;
		case 3:
			textFont(MontserratB);
			break;
		case 4:
			textFont(MontserratSB);
			break;
		case 5:
			textFont(MontserratM);
			break;
		case 6:
			textFont(MontserratR);
			break;
		case 7:
			textFont(MontserratL);
			break;
		case 8:
			textFont(MontserratEL);
			break;
	}
	noStroke();
	fill(color);
	textAlign(RIGHT, TOP);
	textSize(57);
	text(texto, 400, y);
}

//funcion para ordenar los datos del JSON
//param data: JSON
//param key: Key desde la que se ordenará
//param orden: ascendente o descendente
function sortJSON(data, key, orden) {
	//* Ordenamos el JSON
	return data.sort(function (a, b) {
		var x = a[key],
			y = b[key];
		//* Ordenamos ascendentemente
		if (orden === "asc") {
			return x < y ? -1 : x > y ? 1 : 0;
		}
		//* Ordenamos descendentemente
		if (orden === "desc") {
			return x > y ? -1 : x < y ? 1 : 0;
		}
	});
}

//main Variables
//* nodo de la imagen
var node;
//* Nuevo objeto imagen
var img = new Image();

//funcion Tomamos captura de la imagen
//param a = objeto DOM que se capturara
function takeShot(a) {
	//* Tomamos el nodo de la imagen
	node = document.getElementById(a);
	//* Creamos imagen tipo SVG
	domtoimage.toSvg(node).then(function (dataUrl) {
		//console.log(dataUrl);
		//var img = new Image();
		img.src = dataUrl;
	});
	//param regresamos la url de la imagen
	return img;
}
