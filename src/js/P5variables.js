//main Variables
//* Ancho y alto de la ventana
let w = window.innerWidth;
let h = window.innerHeight;
//* Color
let white = "#FFFFFF";
let black = "#333333";
let molestiaC = [
	"#FFCB008B",
	"#FF91008B",
	"#FF3D008B",
	"#FFCB00",
	"#FF9100",
	"#FF3D00",
];
let espacioC = ["#3E721D8B", "#C1694F8B", "#3E721D", "#C1694F"];
let emisorC = [
	"#55ACEE8B",
	"#FF7C7C8B",
	"#8899A68B",
	"#DD2E448B",
	"#66757F8B",
	"#0075FF8B",
	"#CCD6DD8B",
	"#77B2558B",
	"#55ACEE",
	"#FF7C7C",
	"#8899A6",
	"#DD2E44",
	"#66757F",
	"#0075FF",
	"#CCD6DD",
	"#77B255",
];

//* variables transitorias
let anchoC, sumaArray, puntoVal, contadorCir, colorFinal, labelTexto;
let poco, mucho, bastante, grafica;
let matriz = [];
let pintaCol = [];

let reportCircle = document.getElementById("reportCircle");

//funcion Precargamos fuentes
function preload() {
	MontserratM = loadFont("../../../../assets/fonts/Montserrat-Medium.ttf");
	MontserratSB = loadFont("../../../../assets/fonts/Montserrat-SemiBold.ttf");
	MontserratB = loadFont("../../../../assets/fonts/Montserrat-Bold.ttf");
	poco = loadImage("../../../../assets/imgs/variables/poco.png");
	mucho = loadImage("../../../../assets/imgs/variables/mucho.png");
	bastante = loadImage("../../../../assets/imgs/variables/bastante.png");
	exterior = loadImage("../../../../assets/imgs/variables/exterior.png");
	interior = loadImage("../../../../assets/imgs/variables/interior.png");
}

//funcion Seteamos el canvas
function setup() {
	//* Seteamos el canvas y su alto y ancho
	var myCanva;
	myCanva = createCanvas(1060, 600);
	//* Posición del canvas en el HTML
	myCanva.parent("canvaVar");
	//* Frame rate del canvas
	frameRate(60);
	//* Modo de color estandar
	colorMode(RGB, 255, 255, 255, 1);
	//* Alineación estandar del texto
	textAlign(CENTER);
}

function setChart(a) {
	grafica = a;
}

//funcion Dibujamos el canvas
function draw() {
	contadorCir = -1;
	sumaArray = 0;
	anchoC = 1060 / 39.5;
	clear();

	for (let j = 0; j < 20; j++) {
		for (let i = 0; i < 10; i++) {
			contadorCir++;
			matriz[contadorCir] = {
				x: anchoC / 2 + j * anchoC * 2,
				y: 120 + anchoC / 2 + i * anchoC * 2,
				color: "",
			};
		}
	}

	grafica = 2;

	switch (grafica) {
		case 0:
			for (let i = 0; i < molestia.length; i++) {
				sumaArray = sumaArray + molestia[i];
			}
			puntoVal = Number((200 / sumaArray).toFixed(1));
			for (let k = 0; k < molestia.length; k++) {
				pintaCol[k] = Number((molestia[k] * puntoVal).toFixed(0));
				switch (k) {
					case 0:
						if (mouseX > 2 && mouseX < matriz[pintaCol[0]].x - anchoC * 1.5) {
							colorFinal = molestiaC[k + 3];
							drawLabel(
								2,
								matriz[pintaCol[0]].x - anchoC * 1.5,
								"Poco",
								molestia[k],
								poco
							);
						} else {
							colorFinal = molestiaC[k];
						}
						for (let i = 0; i < pintaCol[k]; i++) {
							matriz[i].color = colorFinal;
						}
						break;
					case 1:
						if (
							mouseX > matriz[pintaCol[0] + 1].x - anchoC * 0.5 &&
							mouseX < matriz[pintaCol[0] + pintaCol[1]].x - anchoC * 0.5
						) {
							colorFinal = molestiaC[k + 3];
							drawLabel(
								matriz[pintaCol[0] + 1].x - anchoC * 0.5,
								matriz[pintaCol[0] + pintaCol[1]].x + anchoC * 0.5,
								"Mucho",
								molestia[k],
								mucho
							);
						} else {
							colorFinal = molestiaC[k];
						}
						for (let i = 0; i < pintaCol[k]; i++) {
							matriz[i + pintaCol[0]].color = colorFinal;
						}
						break;
					case 2:
						if (
							mouseX > matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 1.5 &&
							mouseX < matriz[199].x - anchoC
						) {
							colorFinal = molestiaC[k + 3];
							drawLabel(
								matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 0.5,
								matriz[199].x + anchoC * 0.5,
								"Bastante",
								molestia[k],
								bastante
							);
						} else {
							colorFinal = molestiaC[k];
						}
						for (let i = 0; i < 200 - pintaCol[0] - pintaCol[1]; i++) {
							matriz[i + pintaCol[0] + pintaCol[1]].color = colorFinal;
						}
						break;
				}
			}
			break;
		case 1:
			for (let i = 0; i < espacio.length; i++) {
				sumaArray = sumaArray + espacio[i];
			}
			puntoVal = Number((200 / sumaArray).toFixed(1));
			for (let k = 0; k < espacio.length; k++) {
				pintaCol[k] = Number((espacio[k] * puntoVal).toFixed(0));
				switch (k) {
					case 0:
						if (mouseX > 2 && mouseX < matriz[pintaCol[0]].x - anchoC * 1.5) {
							colorFinal = espacioC[k + 2];
							drawLabel(
								2,
								matriz[pintaCol[0]].x - anchoC * 1.5,
								"Exterior",
								espacio[k],
								exterior
							);
						} else {
							colorFinal = espacioC[k];
						}
						for (let i = 0; i < pintaCol[k]; i++) {
							matriz[i].color = colorFinal;
						}
						break;
					case 1:
						if (
							mouseX > matriz[pintaCol[0] + 1].x - anchoC * 0.5 &&
							mouseX < matriz[199].x + anchoC * 0.5
						) {
							colorFinal = espacioC[k + 2];
							drawLabel(
								matriz[pintaCol[0] + 1].x - anchoC * 0.5,
								matriz[199].x + anchoC * 0.5,
								"Interior",
								espacio[k],
								interior
							);
						} else {
							colorFinal = espacioC[k];
						}
						for (let i = 0; i < 200 - pintaCol[0]; i++) {
							matriz[i + pintaCol[0]].color = colorFinal;
						}
						break;
				}
			}
			break;
		case 2:
			for (let i = 0; i < emisor.length; i++) {
				sumaArray = sumaArray + emisor[i];
			}
			puntoVal = Number((200 / sumaArray).toFixed(1));
			for (let k = 0; k < emisor.length; k++) {
				pintaCol[k] = Number((emisor[k] * puntoVal).toFixed(0));
				switch (k) {
					case 0:
						if (mouseX > 2 && mouseX < matriz[pintaCol[0]].x - anchoC * 1.5) {
							colorFinal = emisorC[k + 8];
							drawLabel(
								2,
								matriz[pintaCol[0]].x - anchoC * 1.5,
								"Poco",
								emisor[k],
								poco
							);
						} else {
							colorFinal = emisorC[k];
						}
						for (let i = 0; i < pintaCol[k]; i++) {
							matriz[i].color = colorFinal;
						}
						break;
					case 1:
						if (
							mouseX > matriz[pintaCol[0] + 1].x - anchoC * 0.5 &&
							mouseX < matriz[pintaCol[0] + pintaCol[1]].x - anchoC * 0.5
						) {
							colorFinal = emisorC[k + 8];
							drawLabel(
								matriz[pintaCol[0] + 1].x - anchoC * 0.5,
								matriz[pintaCol[0] + pintaCol[1]].x + anchoC * 0.5,
								"Mucho",
								emisor[k],
								mucho
							);
						} else {
							colorFinal = emisorC[k];
						}
						for (let i = 0; i < pintaCol[k]; i++) {
							matriz[i + pintaCol[0]].color = colorFinal;
						}
						break;
					case 2:
						if (
							mouseX > matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 1.5 &&
							mouseX < matriz[pintaCol[0]+pintaCol[1]+pintaCol[2]].x - anchoC
						) {
							colorFinal = emisorC[k + 8];
							drawLabel(
								matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 0.5,
								matriz[199].x + anchoC * 0.5,
								"Bastante",
								emisor[k],
								bastante
							);
						} else {
							colorFinal = emisorC[k];
						}
						for (let i = 0; i < 200 - pintaCol[0] - pintaCol[1]; i++) {
							matriz[i + pintaCol[0] + pintaCol[1]].color = colorFinal;
						}
						break;
					case 3:
						if (
							mouseX > matriz[pintaCol[0]+pintaCol[1]+pintaCol[2] + 1].x - anchoC * 1.5 &&
							mouseX < matriz[pintaCol[0]+pintaCol[1]+pintaCol[2]+pintaCol[3]].x - anchoC
						) {
							colorFinal = emisorC[k + 8];
							drawLabel(
								matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 0.5,
								matriz[199].x + anchoC * 0.5,
								"Bastante",
								emisor[k],
								bastante
							);
						} else {
							colorFinal = emisorC[k];
						}
						for (let i = 0; i < 200 - pintaCol[0] - pintaCol[1]; i++) {
							matriz[i + pintaCol[0] + pintaCol[1]].color = colorFinal;
						}
						break;
					case 4:
						if (
							mouseX > matriz[pintaCol[0]+pintaCol[1]+pintaCol[2]+pintaCol[3]+ 1].x - anchoC * 1.5 &&
							mouseX < matriz[pintaCol[0]+pintaCol[1]+pintaCol[2]+pintaCol[3]+pintaCol[4]].x - anchoC
						) {
							colorFinal = emisorC[k + 8];
							drawLabel(
								matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 0.5,
								matriz[199].x + anchoC * 0.5,
								"Bastante",
								emisor[k],
								bastante
							);
						} else {
							colorFinal = emisorC[k];
						}
						for (let i = 0; i < 200 - pintaCol[0] - pintaCol[1]; i++) {
							matriz[i + pintaCol[0] + pintaCol[1]].color = colorFinal;
						}
						break;
					case 5:
						if (
							mouseX > matriz[pintaCol[0]+pintaCol[1]+pintaCol[2]+pintaCol[3]+pintaCol[4] + 1].x - anchoC * 1.5 &&
							mouseX < matriz[pintaCol[0]+pintaCol[1]+pintaCol[2]+pintaCol[3]+pintaCol[4]+pintaCol[5]].x - anchoC
						) {
							colorFinal = emisorC[k + 8];
							drawLabel(
								matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 0.5,
								matriz[199].x + anchoC * 0.5,
								"Bastante",
								emisor[k],
								bastante
							);
						} else {
							colorFinal = emisorC[k];
						}
						for (let i = 0; i < 200 - pintaCol[0] - pintaCol[1]; i++) {
							matriz[i + pintaCol[0] + pintaCol[1]].color = colorFinal;
						}
						break;
					case 6:
						if (
							mouseX > matriz[pintaCol[0]+pintaCol[1]+pintaCol[2]+pintaCol[3]+pintaCol[4]+pintaCol[5] + 1].x - anchoC * 1.5 &&
							mouseX < matriz[pintaCol[0]+pintaCol[1]+pintaCol[2]+pintaCol[3]+pintaCol[4]+pintaCol[5]+pintaCol[6]].x - anchoC
						) {
							colorFinal = emisorC[k + 8];
							drawLabel(
								matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 0.5,
								matriz[199].x + anchoC * 0.5,
								"Bastante",
								emisor[k],
								bastante
							);
						} else {
							colorFinal = emisorC[k];
						}
						for (let i = 0; i < 200 - pintaCol[0] - pintaCol[1]; i++) {
							matriz[i + pintaCol[0] + pintaCol[1]].color = colorFinal;
						}
						break;
					case 7:
						if (
							mouseX > matriz[pintaCol[0]+pintaCol[1]+pintaCol[2]+pintaCol[3]+pintaCol[4]+pintaCol[5]+pintaCol[6] + 1].x - anchoC * 1.5 &&
							mouseX < matriz[pintaCol[0]+pintaCol[1]+pintaCol[2]+pintaCol[3]+pintaCol[4]+pintaCol[5]+pintaCol[6]+pintaCol[7]].x - anchoC
						) {
							colorFinal = emisorC[k + 8];
							drawLabel(
								matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 0.5,
								matriz[199].x + anchoC * 0.5,
								"Bastante",
								emisor[k],
								bastante
							);
						} else {
							colorFinal = emisorC[k];
						}
						for (let i = 0; i < 200 - pintaCol[0] - pintaCol[1]; i++) {
							matriz[i + pintaCol[0] + pintaCol[1]].color = colorFinal;
						}
						break;
				}
			}
			break;
	}
	for (let i = 0; i < 200; i++) {
		drawCircle(matriz[i].x, matriz[i].y, matriz[i].color);
	}

	reportCircle.innerHTML = "1 reporte ≈ " + puntoVal;
}

function drawLabel(x1, x2, texto, valor, img) {
	image(img, (x2 - x1) / 2 + x1 - 12.5, 0);
	escribe(texto, (x2 - x1) / 2 + x1, 30, 20);
	if (valor == 1) {
		escribe(valor + " reporte", (x2 - x1) / 2 + x1, 55, 12);
	} else {
		escribe(valor + " reportes", (x2 - x1) / 2 + x1, 55, 12);
	}
	stroke(0);
	strokeWeight(2);
	line(x1, 80, x2, 80);
	line(x1, 70, x1, 90);
	line(x2, 70, x2, 90);
}

//funcion Escribir textos
//param texto: texto a escribir
//param x: posicion en x
//param y: posicion en y
//param tipo: titulo/texto normal
function escribe(texto, x, y, size) {
	fill(51, 51, 51);
	noStroke();
	//* Posicion estandar del texto
	textAlign(CENTER, TOP);
	textSize(size);
	textFont(MontserratSB);
	text(texto, x, y);
}

function drawCircle(x, y, color) {
	fill(color);
	noStroke();
	ellipse(x, y, anchoC, anchoC);
}

//funcion para dibujar rectangulos
function drawRect(x, y, w, h, color, colorStroke) {
	//* Seteamos el color del rectangulo
	fill(color);
	//* Seteamos el color del borde
	if (colorStroke == 1) {
		strokeWeight(4);
		stroke(white);
	} else {
		noStroke();
	}
	//* Dibujamos el rectangulo
	rect(x, y, w, h);
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
