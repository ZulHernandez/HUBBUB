//main Variables
//* Ancho y alto de la ventana
let w = window.innerWidth;
let h = window.innerHeight;
//let easing = 0.05;
//* Color
let white = "#FFFFFF";
let black = "#333333";

//funcion Precargamos fuentes e imagenes
function preload() {
	MontserratM = loadFont("../../../../assets/fonts/Montserrat-Medium.ttf");
	MontserratSB = loadFont("../../../../assets/fonts/Montserrat-SemiBold.ttf");
	MontserratB = loadFont("../../../../assets/fonts/Montserrat-Bold.ttf");
}

//funcion Seteamos el canvas
function setup() {
	//* Seteamos el canvas y su alto y ancho
	var myCanva;
	myCanva = createCanvas(1060, 650);
	//* Posición del canvas en el HTML
	myCanva.parent("canvaEmi");
	//* Frame rate del canvas
	frameRate(60);
	//* Modo de color estandar
	colorMode(RGB, 255, 255, 255, 1);
	//* Alineación estandar del texto
	textAlign(CENTER);
}

//funcion Dibujamos el canvas
function draw() {
	//* Limpiamos el canva
	clear();
	//funcion Ordenamos los datos de json
	//param presion: array de datos
	//param valor: key desde el cual se ordenará
	//param desc: ordenamiento descendente
	console.log(emisor);
	oJSON = sortJSON(emisor, "reportes", "desc");
	console.log(oJSON);
}

function escribe(texto, x, y) {
	textSize(18);
	textFont(MontserratSB);
	text(texto, x, y);
}

//funcion Dibujar circulos
//param x: posicion en x
//param y: posicion en y
//param color: color del circulo
function drawCircle(x, y, color) {
	fill(color);
	noStroke();
	ellipse(x, y, anchoC, anchoC);
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
