//main Variables
//* Ancho y alto de la ventana
let w = window.innerWidth;
let h = window.innerHeight;
//* Color
let white = "#FFFFFF";
let black = "#333333";
let deg = ["#7CE0FF", "#89D0FF", "#B4BAFF", "#E1A0EA", "#FE87B8", "#FF7C7C"];
let degT = [
	"#7CE0FF60",
	"#89D0FF60",
	"#B4BAFF60",
	"#E1A0EA60",
	"#FE87B860",
	"#FF7C7C60",
];
//* Guardamos la información de los rectangulos
let rectangulo = [];
//* variables transitorias
let ancho, alto, sumaArray, posicionX, posicionY, areaPorc, oJSON;

//funcion Precargamos fuentes
function preload() {
	MontserratM = loadFont("../../../../assets/fonts/Montserrat-Medium.ttf");
	MontserratSB = loadFont("../../../../assets/fonts/Montserrat-SemiBold.ttf");
	MontserratB = loadFont("../../../../assets/fonts/Montserrat-Bold.ttf");
}

//funcion Seteamos el canvas
function setup() {
	//* Seteamos el canvas y su alto y ancho
	var myCanva;
	myCanva = createCanvas(1060, 700);
	//* Posición del canvas en el HTML
	myCanva.parent("canvaPresionSonora");
	//* Frame rate del canvas
	frameRate(60);
	//* Modo de color estandar
	colorMode(RGB, 255, 255, 255, 1);
}

//funcion Dibujamos el canvas
function draw() {
	//* Transladamos el canvas
	const translada = 30;
	//* Definimos el area e la suma de los rectangulos
	const area = 600000;
	//* Tomamos la posición del mouse y compensamos el translada
	const cursorX = mouseX - translada;
	//funcion Ordenamos los datos de json
	//param presion: array de datos
	//param valor: key desde el cual se ordenará
	//param desc: ordenamiento descendente
	oJSON = sortJSON(presion, "valor", "desc");
	//* Limpiamos el canvas
	clear();
	//* Movemos el canvas en x
	translate(translada, 0);
	//* Modo de color RGB
	colorMode(RGB, 255, 255, 255);
	//* Fondo transparente
	background(255, 0, 0, 0);

	//* Obtenemos la suma de los datos del json
	sumaArray =
		oJSON[0].valor +
		oJSON[1].valor +
		oJSON[2].valor +
		oJSON[3].valor +
		oJSON[4].valor +
		oJSON[5].valor;

	//* Primer rectángulo
	alto = 600;
	areaPorc = (oJSON[0].valor * area) / sumaArray;
	ancho = areaPorc / alto;
	//*Guardamos la información del rectángulo 1
	rectangulo[0] = {
		alto: alto,
		ancho: ancho,
		posX: 0,
		posY: 0,
		area: areaPorc,
		porcen: Number(((areaPorc * 100) / area).toFixed(1)),
	};

	//* Segundo rectángulo
	posicionX = ancho;
	ancho = 1000 - posicionX;
	areaPorc = (oJSON[1].valor * area) / sumaArray;
	alto = areaPorc / ancho;
	//*Guardamos la información del rectángulo 2
	rectangulo[1] = {
		alto: alto,
		ancho: ancho,
		posX: posicionX,
		posY: 0,
		area: areaPorc,
		porcen: Number(((areaPorc * 100) / area).toFixed(1)),
	};

	//* Tercer rectángulo
	posicionY = alto;
	alto = 600 - posicionY;
	areaPorc = (oJSON[2].valor * area) / sumaArray;
	ancho = areaPorc / alto;
	posicionX = 1000 - ancho;
	//*Guardamos la información del rectángulo 3
	rectangulo[2] = {
		alto: alto,
		ancho: ancho,
		posX: posicionX,
		posY: posicionY,
		area: areaPorc,
		porcen: Number(((areaPorc * 100) / area).toFixed(1)),
	};

	//* Cuarto rectángulo
	areaPorc = (oJSON[3].valor * area) / sumaArray;
	posicionX = rectangulo[0].ancho;
	ancho = 1000 - posicionX - ancho;
	alto = areaPorc / ancho;
	posicionY = 600 - alto;
	//*Guardamos la información del rectángulo 4
	rectangulo[3] = {
		alto: alto,
		ancho: ancho,
		posX: posicionX,
		posY: posicionY,
		area: areaPorc,
		porcen: Number(((areaPorc * 100) / area).toFixed(1)),
	};

	//* Quinto rectángulo
	areaPorc = (oJSON[4].valor * area) / sumaArray;
	posicionY = rectangulo[1].area / (1000 - posicionX);
	alto = 600 - alto - posicionY;
	ancho = areaPorc / alto;
	//*Guardamos la información del rectángulo 5
	rectangulo[4] = {
		alto: alto,
		ancho: ancho,
		posX: posicionX,
		posY: posicionY,
		area: areaPorc,
		porcen: Number(((areaPorc * 100) / area).toFixed(1)),
	};

	//* Sexto rectángulo
	areaPorc[5] = (oJSON[5].valor * area) / sumaArray;
	posicionX = posicionX + ancho;
	ancho =
		1000 -
		posicionX -
		rectangulo[2].area /
			(600 - rectangulo[1].area / (1000 - rectangulo[0].area / 600));
	//*Guardamos la información del rectángulo 6
	rectangulo[5] = {
		alto: alto,
		ancho: ancho,
		posX: posicionX,
		posY: posicionY,
		area: areaPorc,
		porcen: Number(((areaPorc * 100) / area).toFixed(1)),
	};

	//* Evaluamos la posición del mouse sobre la matriz de rectángulos
	//* Tocamos el rectángulo 1
	if (
		cursorX > rectangulo[0].posX &&
		cursorX < rectangulo[0].posX + rectangulo[0].ancho &&
		mouseY > rectangulo[0].posY &&
		mouseY < rectangulo[0].posY + rectangulo[0].alto
	) {
		//* Dibujamos el rectángulo 1 en estado Hover
		drawHoverRect(0, 1);
	} else {
		//* Dibujamos el rectángulo 1 en estado Normal
		drawRect(
			rectangulo[0].posX,
			rectangulo[0].posY,
			rectangulo[0].ancho,
			rectangulo[0].alto,
			oJSON[0].colorT,
			1
		);
		escribe(
			rectangulo[0].porcen,
			rectangulo[0].ancho / 2,
			rectangulo[0].alto / 2,
			rectangulo[0].area,
			"por"
		);
	}
	//* Tocamos el rectángulo 2
	if (
		cursorX > rectangulo[1].posX &&
		cursorX < rectangulo[1].posX + rectangulo[1].ancho &&
		mouseY > rectangulo[1].posY &&
		mouseY < rectangulo[1].posY + rectangulo[1].alto
	) {
		//* Dibujamos el rectángulo 2 en estado Hover
		drawHoverRect(1, 1);
	} else {
		//* Dibujamos el rectángulo 2 en estado Normal
		drawRect(
			rectangulo[1].posX,
			rectangulo[1].posY,
			rectangulo[1].ancho,
			rectangulo[1].alto,
			oJSON[1].colorT,
			1
		);
		escribe(
			rectangulo[1].porcen,
			rectangulo[1].ancho / 2 + rectangulo[0].ancho,
			rectangulo[1].alto / 2,
			rectangulo[1].area,
			"por"
		);
	}
	//* Tocamos el rectángulo 3
	if (
		cursorX > rectangulo[2].posX &&
		cursorX < rectangulo[2].posX + rectangulo[2].ancho &&
		mouseY > rectangulo[2].posY &&
		mouseY < rectangulo[2].posY + rectangulo[2].alto
	) {
		//* Dibujamos el rectángulo 3 en estado Hover
		drawHoverRect(2, 1);
	} else {
		//* Dibujamos el rectángulo 3 en estado Normal
		drawRect(
			rectangulo[2].posX,
			rectangulo[2].posY,
			rectangulo[2].ancho,
			rectangulo[2].alto,
			oJSON[2].colorT,
			1
		);
		escribe(
			rectangulo[2].porcen,
			rectangulo[2].ancho / 2 + rectangulo[0].ancho + rectangulo[3].ancho,
			rectangulo[1].alto + rectangulo[2].alto / 2,
			rectangulo[2].area,
			"por"
		);
	}
	//* Tocamos el rectángulo 4
	if (
		cursorX > rectangulo[3].posX &&
		cursorX < rectangulo[3].posX + rectangulo[3].ancho &&
		mouseY > rectangulo[3].posY &&
		mouseY < rectangulo[3].posY + rectangulo[3].alto
	) {
		//* Dibujamos el rectángulo 4 en estado Hover
		drawHoverRect(3, 1);
	} else {
		//* Dibujamos el rectángulo 4 en estado Normal
		drawRect(
			rectangulo[3].posX,
			rectangulo[3].posY,
			rectangulo[3].ancho,
			rectangulo[3].alto,
			oJSON[3].colorT,
			1
		);
		escribe(
			rectangulo[3].porcen,
			rectangulo[3].ancho / 2 + rectangulo[0].ancho,
			rectangulo[1].alto + rectangulo[4].alto + rectangulo[3].alto / 2,
			rectangulo[3].area,
			"por"
		);
	}
	//* Tocamos el rectángulo 5
	if (
		cursorX > rectangulo[4].posX &&
		cursorX < rectangulo[4].posX + rectangulo[4].ancho &&
		mouseY > rectangulo[4].posY &&
		mouseY < rectangulo[4].posY + rectangulo[4].alto
	) {
		//* Dibujamos el rectángulo 5 en estado Hover
		drawHoverRect(4, 1);
	} else {
		//* Dibujamos el rectángulo 5 en estado Normal
		drawRect(
			rectangulo[4].posX,
			rectangulo[4].posY,
			rectangulo[4].ancho,
			rectangulo[4].alto,
			oJSON[4].colorT,
			1
		);
		escribe(
			rectangulo[4].porcen,
			rectangulo[4].ancho / 2 + rectangulo[0].ancho,
			rectangulo[1].alto + rectangulo[4].alto / 2,
			rectangulo[4].area,
			"por"
		);
	}
	//* Tocamos el rectángulo 6
	if (
		cursorX > rectangulo[5].posX &&
		cursorX < rectangulo[5].posX + rectangulo[5].ancho &&
		mouseY > rectangulo[5].posY &&
		mouseY < rectangulo[5].posY + rectangulo[5].alto
	) {
		//* Dibujamos el rectángulo 6 en estado Hover
		drawHoverRect(5, 1);
	} else {
		//* Dibujamos el rectángulo 6 en estado Normal
		drawRect(
			rectangulo[5].posX,
			rectangulo[5].posY,
			rectangulo[5].ancho,
			rectangulo[5].alto,
			oJSON[5].colorT,
			1
		);
		escribe(
			rectangulo[5].porcen,
			rectangulo[5].ancho / 2 + rectangulo[0].ancho + rectangulo[4].ancho,
			rectangulo[1].alto + rectangulo[5].alto / 2,
			rectangulo[5].area,
			"por"
		);
	}

	//* Dibujamos la linea de rangos
	drawRect(0, 640, 1000 / 6, 10, degT[0], 0);
	drawRect(1000 / 6, 640, 1000 / 6, 10, degT[1], 0);
	drawRect(2000 / 6, 640, 1000 / 6, 10, degT[2], 0);
	drawRect(3000 / 6, 640, 1000 / 6, 10, degT[3], 0);
	drawRect(4000 / 6, 640, 1000 / 6, 10, degT[4], 0);
	drawRect(5000 / 6, 640, 1000 / 6, 10, degT[5], 0);

	//* Cambiamos estado de los rectángulos de acuerdo a la posición de la linea de rangos
	//* Tocamos el rango 1
	if (cursorX > 0 && cursorX < 1000 / 6 && mouseY > 640 && mouseY < 650) {
		drawRect(0, 640, 1000 / 6, 10, deg[0], 0);
		rectCHaG("30_39");
	}
	//* Tocamos el rango 2
	if (cursorX > 1000 / 6 && cursorX < 2000 / 6 && mouseY > 640 && mouseY < 650) {
		drawRect(1000 / 6, 640, 1000 / 6, 10, deg[1], 0);
		rectCHaG("40_49");
	}
	//* Tocamos el rango 3
	if (cursorX > 2000 / 6 && cursorX < 3000 / 6 && mouseY > 640 && mouseY < 650) {
		drawRect(2000 / 6, 640, 1000 / 6, 10, deg[2], 0);
		rectCHaG("50_59");
	}
	//* Tocamos el rango 4
	if (cursorX > 3000 / 6 && cursorX < 4000 / 6 && mouseY > 640 && mouseY < 650) {
		drawRect(3000 / 6, 640, 1000 / 6, 10, deg[3], 0);
		rectCHaG("60_69");
	}
	//* Tocamos el rango 5
	if (cursorX > 4000 / 6 && cursorX < 5000 / 6 && mouseY > 640 && mouseY < 650) {
		drawRect(4000 / 6, 640, 1000 / 6, 10, deg[4], 0);
		rectCHaG("70_79");
	}
	//* Tocamos el rango 6
	if (cursorX > 5000 / 6 && cursorX < 6000 / 6 && mouseY > 640 && mouseY < 650) {
		drawRect(5000 / 6, 640, 1000 / 6, 10, deg[5], 0);
		rectCHaG("80_89");
	}

	//* Dibujamos las lineas de sección en la línea de rangos
	drawRect(0, 633, 3, 25, black, 0);
	drawRect(1000 / 6, 633, 3, 25, black, 0);
	drawRect(2000 / 6, 633, 3, 25, black, 0);
	drawRect(3000 / 6, 633, 3, 25, black, 0);
	drawRect(4000 / 6, 633, 3, 25, black, 0);
	drawRect(5000 / 6, 633, 3, 25, black, 0);
	drawRect(1000, 633, 3, 25, black, 0);

	//* Escribimos las labels de las secciones
	escribe("30 dbA", 0, 674, 14);
	escribe("40 dbA", 1000 / 6, 674, 14);
	escribe("50 dbA", 2000 / 6, 674, 14);
	escribe("60 dbA", 3000 / 6, 674, 14);
	escribe("70 dbA", 4000 / 6, 674, 14);
	escribe("80 dbA", 5000 / 6, 674, 14);
	escribe("90 dbA", 1000, 674, 14);

	//* Escribimos los datos de los rectángulos
	escribe(
		oJSON[0].rango,
		rectangulo[0].ancho / 2,
		rectangulo[0].alto / 2,
		rectangulo[0].area,
		"rang"
	);
	escribe(
		oJSON[0].valor,
		rectangulo[0].ancho / 2,
		rectangulo[0].alto / 2,
		rectangulo[0].area,
		"val"
	);
	escribe(
		oJSON[1].rango,
		rectangulo[1].ancho / 2 + rectangulo[0].ancho,
		rectangulo[1].alto / 2,
		rectangulo[1].area,
		"rang"
	);
	escribe(
		oJSON[1].valor,
		rectangulo[1].ancho / 2 + rectangulo[0].ancho,
		rectangulo[1].alto / 2,
		rectangulo[1].area,
		"val"
	);
	escribe(
		oJSON[2].rango,
		rectangulo[2].ancho / 2 + rectangulo[0].ancho + rectangulo[3].ancho,
		rectangulo[1].alto + rectangulo[2].alto / 2,
		rectangulo[2].area,
		"rang"
	);
	escribe(
		oJSON[2].valor,
		rectangulo[2].ancho / 2 + rectangulo[0].ancho + rectangulo[3].ancho,
		rectangulo[1].alto + rectangulo[2].alto / 2,
		rectangulo[2].area,
		"val"
	);
	escribe(
		oJSON[3].rango,
		rectangulo[3].ancho / 2 + rectangulo[0].ancho,
		rectangulo[1].alto + rectangulo[4].alto + rectangulo[3].alto / 2,
		rectangulo[3].area,
		"rang"
	);
	escribe(
		oJSON[3].valor,
		rectangulo[3].ancho / 2 + rectangulo[0].ancho,
		rectangulo[1].alto + rectangulo[4].alto + rectangulo[3].alto / 2,
		rectangulo[3].area,
		"val"
	);
	escribe(
		oJSON[4].rango,
		rectangulo[4].ancho / 2 + rectangulo[0].ancho,
		rectangulo[1].alto + rectangulo[4].alto / 2,
		rectangulo[4].area,
		"rang"
	);
	escribe(
		oJSON[4].valor,
		rectangulo[4].ancho / 2 + rectangulo[0].ancho,
		rectangulo[1].alto + rectangulo[4].alto / 2,
		rectangulo[4].area,
		"val"
	);
	escribe(
		oJSON[5].rango,
		rectangulo[5].ancho / 2 + rectangulo[0].ancho + rectangulo[4].ancho,
		rectangulo[1].alto + rectangulo[5].alto / 2,
		rectangulo[5].area,
		"rang"
	);
	escribe(
		oJSON[5].valor,
		rectangulo[5].ancho / 2 + rectangulo[0].ancho + rectangulo[4].ancho,
		rectangulo[1].alto + rectangulo[5].alto / 2,
		rectangulo[5].area,
		"val"
	);
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

//funcion Dibujamos los estados hover de los elementos
//param a: posición dentro de los arrays
//param b: indicamos que estamos en hover
function drawHoverRect(a, b) {
	//* Dibujamos el rectangulo en Hover
	drawRect(
		rectangulo[a].posX,
		rectangulo[a].posY,
		rectangulo[a].ancho,
		rectangulo[a].alto,
		oJSON[a].color,
		1
	);
	
	//* Reflejamos el rectangulo en Hover sobre la línea de rangos
	switch (oJSON[a].rango) {
		case "30_39":
			drawRect(0, 640, 1000 / 6, 10, deg[0], 0);
			break;
		case "40_49":
			drawRect(1000 / 6, 640, 1000 / 6, 10, deg[1], 0);
			break;
		case "50_59":
			drawRect(2000 / 6, 640, 1000 / 6, 10, deg[2], 0);
			break;
		case "60_69":
			drawRect(3000 / 6, 640, 1000 / 6, 10, deg[3], 0);
			break;
		case "70_79":
			drawRect(4000 / 6, 640, 1000 / 6, 10, deg[4], 0);
			break;
		case "80_89":
			drawRect(5000 / 6, 640, 1000 / 6, 10, deg[5], 0);
			break;
	}

	//* Dibujamos el texto en Hover
	if (b == 1) {
		switch (a) {
			//* Texto del rectangulo 1
			case 0:
				escribe(
					Math.max(...oJSON[0].data),
					rectangulo[0].ancho / 2,
					rectangulo[0].alto / 2,
					rectangulo[0].area,
					"max"
				);
				escribe(
					Math.min(...oJSON[0].data),
					rectangulo[0].ancho / 2,
					rectangulo[0].alto / 2,
					rectangulo[0].area,
					"min"
				);
				break;
			//* Texto del rectangulo 2
			case 1:
				escribe(
					Math.max(...oJSON[1].data),
					rectangulo[1].ancho / 2 + rectangulo[0].ancho,
					rectangulo[1].alto / 2,
					rectangulo[1].area,
					"max"
				);
				escribe(
					Math.min(...oJSON[1].data),
					rectangulo[1].ancho / 2 + rectangulo[0].ancho,
					rectangulo[1].alto / 2,
					rectangulo[1].area,
					"min"
				);
				break;
			//* Texto del rectangulo 3
			case 2:
				escribe(
					Math.max(...oJSON[2].data),
					rectangulo[2].ancho / 2 + rectangulo[0].ancho + rectangulo[3].ancho,
					rectangulo[2].alto / 2 + rectangulo[1].alto,
					rectangulo[2].area,
					"max"
				);
				escribe(
					Math.min(...oJSON[2].data),
					rectangulo[2].ancho / 2 + rectangulo[0].ancho + rectangulo[3].ancho,
					rectangulo[2].alto / 2 + rectangulo[1].alto,
					rectangulo[2].area,
					"min"
				);
				break;
			//* Texto del rectangulo 4
			case 3:
				escribe(
					Math.max(...oJSON[3].data),
					rectangulo[3].ancho / 2 + rectangulo[0].ancho,
					rectangulo[3].alto / 2 + rectangulo[1].alto + rectangulo[4].alto,
					rectangulo[3].area,
					"max"
				);
				escribe(
					Math.min(...oJSON[3].data),
					rectangulo[3].ancho / 2 + rectangulo[0].ancho,
					rectangulo[3].alto / 2 + rectangulo[1].alto + rectangulo[4].alto,
					rectangulo[3].area,
					"min"
				);
				break;
			//* Texto del rectangulo 5
			case 4:
				escribe(
					Math.max(...oJSON[4].data),
					rectangulo[4].ancho / 2 + rectangulo[0].ancho,
					rectangulo[4].alto / 2 + rectangulo[1].alto,
					rectangulo[4].area,
					"max"
				);
				escribe(
					Math.min(...oJSON[4].data),
					rectangulo[4].ancho / 2 + rectangulo[0].ancho,
					rectangulo[4].alto / 2 + rectangulo[1].alto,
					rectangulo[4].area,
					"min"
				);
				break;
			//* Texto del rectangulo 6
			case 5:
				escribe(
					Math.max(...oJSON[5].data),
					rectangulo[5].ancho / 2 + rectangulo[0].ancho + rectangulo[4].ancho,
					rectangulo[5].alto / 2 + rectangulo[1].alto,
					rectangulo[5].area,
					"max"
				);
				escribe(
					Math.min(...oJSON[5].data),
					rectangulo[5].ancho / 2 + rectangulo[0].ancho + rectangulo[4].ancho,
					rectangulo[5].alto / 2 + rectangulo[1].alto,
					rectangulo[5].area,
					"min"
				);
				break;
		}
	}
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

//funcion Escribir textos
//param texto: texto a escribir
//param x: posicion en x
//param y: posicion en y
//param tipo: titulo/texto normal
function escribe(texto, x, y, size, tipo) {
	//* Posicion estandar del texto
	textAlign(CENTER, BASELINE);
	let tamanio;
	let posicionY = Math.pow(size, 0.5) / 15;
	//* Determinamos estética del texto
	noStroke();
	fill(black);
	//* Evaluamos el tipo de texto
	switch (tipo) {
		//* Rango
		case "rang":
			textFont(MontserratSB);
			tamanio = posicionY;
			textSize(tamanio);
			text(texto + " dbA", x, y - tamanio * 1.5);
			break;
		//*Cantidad de reportes
		case "val":
			textFont(MontserratSB);
			tamanio = Math.pow(size, 0.5) / 20;
			textSize(tamanio);
			text(texto + " reportes", x, y - posicionY * 0.5);
			break;
		//* Porcentaje
		case "por":
			textFont(MontserratB);
			tamanio = Math.pow(size, 0.5) / 8;
			textSize(tamanio);
			text(texto + "%", x, y + posicionY * 1.5);
			break;
		//* Dato máximo dentro del rango
		case "max":
			textFont(MontserratB);
			tamanio = Math.pow(size, 0.5) / 20;
			textSize(tamanio);
			text("Máximo de " + texto + " dbA", x, y + posicionY * 0.5);
			break;
		//* Dato mínimo dentro del rango
		case "min":
			textFont(MontserratB);
			tamanio = Math.pow(size, 0.5) / 20;
			textSize(tamanio);
			text("Mínimo de " + texto + " dbA", x, y + posicionY * 1.4);
			break;
		//* Resto de textos
		default:
			textFont(MontserratM);
			textSize(size);
			text(texto, x, y);
	}
}

//funcion Estado hover desde la barra de rangos
//param a: valor de la barra de rangos
function rectCHaG(a) {
	//* Hover para el rango 30-39
	if (a == oJSON[0].rango) {
		drawHoverRect(0, 1);
	}
	//* Hover para el rango 40-49
	if (a == oJSON[1].rango) {
		drawHoverRect(1, 1);
	}
	//* Hover para el rango 50-59
	if (a == oJSON[2].rango) {
		drawHoverRect(2, 1);
	}
	//* Hover para el rango 60-69
	if (a == oJSON[3].rango) {
		drawHoverRect(3, 1);
	}
	//* Hover para el rango 70-79
	if (a == oJSON[4].rango) {
		drawHoverRect(4, 1);
	}
	//* Hover para el rango 80-89
	if (a == oJSON[5].rango) {
		drawHoverRect(5, 1);
	}
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
