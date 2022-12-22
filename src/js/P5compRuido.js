//main Variables
//* Ancho y alto de la ventana
let w, h, vw;
//* Color
let white = "#FFFFFF";
let black = "#333333";
let red = "#FF0000";
//* Movimiento drag en x y drag en y
let eventoDrag = 0;
let eventoDragX = 0;
//* Posición inicial en x y en y
let posIX, posIY;
//* Posición en x y en y de los sliders
let posY, posX;
//* Brinda permisos para dibujar los circulos del slider
let dibuja = 0;
//* Etiquetas de los sliders
let vLabel = 10;
let hLabel = 6932;
//* Posición en x y en y del ratón
let rataX, rataY;
//* Frecuencia con la que oscila la onda
let frecuencia;
//* Desplazamiento del canva en x
let translada;
//* Espacio entre hertz para linea arcoíris
let tamanio;
//* Contador de movimiento
var i = 50;
//* Dibujo para arriba o abajo
var upDown = 0;
//* Espacio entre crestas y valles
let amplitud = 0;
//* Determina posición del slider respecto a una unidad de ancho de linea entre 7000
let despPixel, despPixelvsPosX;

//funcion Reiniciamos valor de la onda en resize
function reiniciaPos() {
	hLabel = 6932;
}

//funcion Llamamos al reinicio de posición de onda y seteamos una vez más el canvas
function cambiaTam() {
	reiniciaPos();
	setup();
}

//funcion Llamamos funciones al modificar tamaño de la ventana
window.onresize = cambiaTam;

//funcion Precargamos fuentes
function preload() {
	MontserratM = loadFont("../../../../assets/fonts/Montserrat-Medium.ttf");
	MontserratB = loadFont("../../../../assets/fonts/Montserrat-Bold.ttf");
}

//funcion Seteamos el canvas
function setup() {
	w = window.innerWidth;
	h = window.innerHeight;
	vw = w / 100;
	posIX = vw * -0.1;
	posIY = -1;
	posY = 50;
	posX = vw * 6.1;
	translada = vw * 2.4;
	tamanio = (vw * 81.4) / 300;
	//* Calculamos la frecuencia de la onda de acuerdo a la posicion del slider x
	frecuencia = (posX / 300) * 300;
	//* Seteamos el canvas y su alto y ancho
	var myCanva;
	myCanva = createCanvas(vw * 92.8, 800);
	//* Posición del canvas en el HTML
	myCanva.parent("canvaOnda");
	//* Frame rate del canvas
	frameRate(60);
	//* Posicion estandar del texto
	textAlign(CENTER, CENTER);
	//* Modo de color estandar
	colorMode(RGB, 255, 255, 255, 1);
	//* Cambiamos la posición de los nodos de la onda cada cierto tiempo de delay
	setTimeout(cambia(), frecuencia);
}

//funcion Dibujamos el canvas
function draw() {
	//* Limpiamos el canvas
	clear();
	//* Movemos el canvas en x
	translate(translada, 0);
	//* Obtenemos la posicion del raton y compensamos el desplazamiento
	rataX = mouseX - translada;
	rataY = mouseY;
	//* Calculamos el valor de la amplitud de acuerdo a la posicion del slider en x
	amplitud = posX - vw * 5.3;
	//* Dibujamos la onda
	fill(0, 0, 0, 0);
	colorMode(HSB, 360, 100, 100);
	stroke(hLabel / 23.3, 51, 100);
	strokeWeight(vw * 0.4);
	curveTightness((vw * 5.3) / posX - 0.25);
	//* Empezamos la forma de la onda
	beginShape();
	//* Dibujamos los primeros dos vertices de la onda
	curveVertex(vw * 5.3, i);
	curveVertex(vw * 5.3, i);
	curveVertex(posX, (i - 650) * -1 + posY);
	//* Dibujamos los vertices del tercero hasta el penultimo
	for (var j = 1; j < 99; j++) {
		if (j % 2 == 0) {
			curveVertex(posX + amplitud * j, (i - 650) * -1 + posY);
		} else {
			curveVertex(posX + amplitud * j, i);
		}
	}
	//* Dibujamos el ultimo vertice
	curveVertex(posX + amplitud * 99, i);
	curveVertex(posX + amplitud * 99, i);
	endShape();
	//* Modo de color RGB
	colorMode(RGB, 255, 255, 255);
	//* Fondo transparente
	background(255, 0, 0, 0);
	//* Modo del cursor
	cursor(ARROW);
	//* Escribimos el titulo del eje y
	escribe("INTENSIDAD", 50, 7, 0);
	escribe("(dB)", 50, 22, 0);
	//* Dibujamos ejes sin relleno
	fill(51, 51, 51, 0.25);
	rect(vw * 3.7, 50, vw * 0.8, 600, (vw * 0.8) / 2);
	rect(vw * 5.3, 670, vw * 81.4, 10, 5);
	//* Definimos el color de la linea y dibujamos el eje y
	fill("#0075FF");
	//* Evaluamos el drag en y
	switch (eventoDrag) {
		//* Estado inicial del slider y
		//* Dibujamos recta de eje y
		//* Dibujamos el color fusionado del slider
		//* Dibujamos el circulo del slider
		//* Escribimos el valor del slider
		case 0:
			rect(vw * 3.7, 50, 0.8 * vw, 600, (0.8 * vw) / 2);
			fill(255, 124, 124, vLabel / 10);
			rect(vw * 3.7, 50, 0.8 * vw, 600, (0.8 * vw) / 2);
			drawCircle(vw * 4.1, posY, vw * 1.6, white);
			drawLabel(vw * 3.3, 50, "v", vLabel + " dB");
			break;
		//* Estado del slider en movimiento en y
		case 1:
			rect(vw * 3.7, posY, vw * 0.8, 650 - posY, 5);
			fill(255, 124, 124, vLabel / 10);
			rect(vw * 3.7, posY, vw * 0.8, 600 + 50 - posY, 5);
			drawCircle(vw * 4.1, posY, vw * 1.6, white);
			drawLabel(vw * 3.3, posY, "v", vLabel + " dB");
			break;
		//* Estado del slider al finalizar el movimiento en y
		case 2:
			rect(vw * 3.7, posY, vw * 0.8, 650 - posY, 5);
			fill(255, 124, 124, vLabel / 10);
			rect(vw * 3.7, posY, vw * 0.8, 600 + 50 - posY, 5);
			drawCircle(vw * 4.1, posY, vw * 1.6, white);
			drawLabel(vw * 3.3, posY, "v", vLabel + " dB");
			break;
	}

	//* Evaluamos el drag en X
	switch (eventoDragX) {
		//* Dibujamos recta de eje x
		//* Dibujamos el circulo del slider
		//* Escribimos el valor del slider
		case 0:
			rect(vw * 5.3, 670, vw * -5.3 + posX, 10, 5);
			drawCircle(posX, 675, vw * 1.6, white);
			drawLabel(posX, 685, "h", hLabel + " Hz");
			break;
		case 1:
			//* Modo de color HSB
			colorMode(HSB, 360, 100, 100);
			fill(hLabel / 23.3, 51, 100);
			rect(vw * 5.3, 670, vw * -5.3 + posX, 10, 5);
			drawCircle(posX, 675, vw * 1.6, white);
			//* Cambiamos el modo de color a RGB
			colorMode(RGB, 255, 255, 255);
			drawLabel(posX, 685, "h", hLabel + " Hz");
			break;
		case 2:
			//* Modo de color HSB
			colorMode(HSB, 360, 100, 100);
			fill(hLabel / 23.3, 51, 100);
			rect(vw * 5.3, 670, vw * -5.3 + posX, 10, 5);
			drawCircle(posX, 675, vw * 1.6, white);
			//* Cambiamos el modo de color a RGB
			colorMode(RGB, 255, 255, 255);
			drawLabel(posX, 685, "h", hLabel + " Hz");
			break;
	}

	//* Hover en el circulo del slider en y
	if (
		rataX > vw * 3.2 &&
		rataX < vw * 5 &&
		rataY > posY - 10 &&
		rataY < posY + 10
	) {
		drawCircle(vw * 4.1, posY, vw * 1.8, white);
	} else {
		drawCircle(vw * 4.1, posY, vw * 1.6, white);
	}
	//* Cambiamos el puntero del raton a una mano dentro del slider y
	if (rataX > vw * 3.2 && rataX < vw * 5 && rataY > 39 && rataY < 661) {
		cursor(HAND);
	}
	//* Hover en el circulo del slider en x
	if (
		rataX > posX - vw * 0.8 &&
		rataX < posX + vw * 0.8 &&
		rataY > 664 &&
		rataY < 686
	) {
		drawCircle(posX, 675, vw * 1.8, white);
	} else {
		drawCircle(posX, 675, vw * 1.6, white);
	}
	//* Cambiamos el puntero del raton a una mano dentro del slider x
	if (rataX > vw * 4.4 && rataX < vw * 87.6 && rataY > 664 && rataY < 686) {
		cursor(HAND);
	}
	//funcion Dibujamos la linea arcoíris inferior
	dibujaLinea();
	//* Dibujamos las lineas de sección en la linea arcoíris
	fill(black);
	rect(vw * 86.7 - tamanio * 300, 750 - 8, 3, 25);
	rect(vw * 86.7 - tamanio * 214.3, 750 - 8, 3, 25);
	rect(vw * 86.7 - tamanio * 10.7, 750 - 8, 3, 25);
	//* Escribimos los valores de cada sección
	escribe("7000 Hz", vw * 86.7 - tamanio * 300, 730, 1);
	escribe("5000 Hz", vw * 86.7 - tamanio * 214.3, 730, 1);
	escribe("250 Hz", vw * 86.7 - tamanio * 10.7, 730, 1);
	//* Cambiamos modo de color a RGB
	colorMode(RGB, 255, 255, 255);
	//* Evaluamos posicion del slider en x para saber el tipo de sonido y pintarlo en la linea arcoíris
	if (hLabel <= 7000 && hLabel >= 5000) {
		drawLabel(posX, 760, "h", "AGUDO");
	}
	if (hLabel <= 5001 && hLabel >= 250) {
		drawLabel(posX, 760, "h", "MEDIO");
	}
	if (hLabel <= 251 && hLabel >= 1) {
		drawLabel(posX, 760, "h", "GRAVE");
	}
	//* Dibujamos un rectangulo para ocultar la onda fuera del gráfico
	fill(white);
	noStroke();
	rect(vw * 86, 0, 200, 655);
}

//funcion Evaluamos el press del mouse para saber si se ha pulsado en algún slider
function mousePressed() {
	//* Obtenemos la posición inicial del raton al ser presionado
	posIX = rataX;
	posIY = rataY;
	//* Evaluamos si se ha pulsado en el slider en x
	if (posIX > vw * 3.2 && posIX < vw * 5 && posIY > 39 && posIY < 661) {
		dibuja = 1;
		//* Evaluamos si se ha pulsado en el slider en y
	} else if (
		posIX > vw * 4.4 &&
		posIX < vw * 88.4 &&
		posIY > 664 &&
		posIY < 686
	) {
		dibuja = 2;
		//* No damos permiso de dibujar
	} else {
		dibuja = 0;
	}
}

//funcion Evaluamos el drag del mouse para saber si se esta moviendo algún slider
function mouseDragged() {
	//* Evaluamos si se esta moviendo en el slider en y
	if (dibuja == 1) {
		eventoDrag = 1;
		posY = rataY;
		//* Evaluamos si se esta moviendo en el slider en x
	} else if (dibuja == 2) {
		eventoDragX = 1;
		posX = rataX;
	}
	//* Regresamoa la posición del slider en y si supera los límites de movimiento
	if (posY > 640) {
		posY = 640;
	}
	if (posY < 50) {
		posY = 50;
	}
	//* Regresamos la posición del slider en x si supera los límites de movimiento
	if (posX > vw * 85.54) {
		posX = vw * 85.54;
	}
	if (posX < vw * 6.09) {
		posX = vw * 6.09;
	}
	//* Determinamos el valor de la etiqueta en y
	vLabel = ((posY - 650) / 60) * -1;
	vLabel = vLabel.toFixed();
	//* Determinamos el valor de la etiqueta en x
	//* Encontramos la unidad de movimiento para sumar o restar valores
	despPixel = (vw * 81.4) / 7000;
	//* Evaluamos la posición del slider en x para saber el valor de la etiqueta
	despPixelvsPosX = (posX - vw * 5.3) / despPixel;
	//* Ajustamos el valor de la etiqueta
	hLabel = Math.abs(despPixelvsPosX.toFixed() - 7000);

	//* Evitamos el valor 0 en la etiqueta en x
	if (hLabel < 120) {
		hLabel = 120;
	}
	//* Evitamos el valor 0 en la etiqueta en x
	if (hLabel > 6932) {
		hLabel = 6932;
	}
}

//funcion Evaluamos el release del mouse para saber si se ha soltado algún slider
function mouseReleased() {
	//* Dibujamos slider en y
	if (dibuja == 1) {
		eventoDrag = 2;
		posY = rataY;
		//* Dibujamos slider en x
	} else if (dibuja == 2) {
		eventoDragX = 2;
		posX = rataX;
	}
	//* Regresamos la posición del slider en y si supera los límites de movimiento
	if (posY > 640) {
		posY = 640;
	}
	if (posY < 50) {
		posY = 50;
	}
	//* Regresamoa la posición del slider en x si supera los límites de movimiento
	if (posX > vw * 85.54) {
		posX = vw * 85.54;
	}
	if (posX < vw * 6.09) {
		posX = vw * 6.09;
	}
	//* Determinamos el valor de la etiqueta en y
	vLabel = ((posY - 650) / 60) * -1;
	vLabel = vLabel.toFixed();
	//* Determinamos el valor de la etiqueta en x
	//* Encontramos la unidad de movimiento para sumar o restar valores
	despPixel = (vw * 81.4) / 7000;
	//* Evaluamos la posición del slider en x para saber el valor de la etiqueta
	despPixelvsPosX = (posX - vw * 5.3) / despPixel;
	//* Ajustamos el valor de la etiqueta
	hLabel = Math.abs(despPixelvsPosX.toFixed() - 7000);

	//* Evitamos el valor 0 en la etiqueta en x
	if (hLabel < 120) {
		hLabel = 120;
	}
	//* Evitamos el valor 0 en la etiqueta en x
	if (hLabel > 6932) {
		hLabel = 6932;
	}

	//funcion Reproducimos el sonido de la onda
	playpause();
}

//funcion Escribir textos
//param texto: texto a escribir
//param x: posicion en x
//param y: posicion en y
//param tipo: titulo/texto normal
function escribe(texto, x, y, tipo) {
	//* Determinamos estética del texto
	textSize(14);
	noStroke();
	fill(black);
	textAlign(CENTER);
	//* El texto es un titulo
	if (tipo == 0) {
		textFont(MontserratB);
		//* El texto no es un titulo
	} else {
		textSize(12);
		textFont(MontserratM);
	}
	//* Escribimos el texto
	text(texto, x, y);
}

//funcion Dibujar circulos
//param x: posicion en x
//param y: posicion en y
//param r: radio
//param color: color del circulo
function drawCircle(x, y, r, color) {
	stroke(black);
	strokeWeight(3);
	fill(color);
	ellipse(x, y, r, r);
}

//funcion Dibujar etiquetas
//param x: posicion en x
//param y: posicion en y
//param o: orientacion de la etiqueta
//param texto: texto a escribir
function drawLabel(x, y, o, texto) {
	//* Definios estética de la etiqueta
	noStroke();
	fill(51, 51, 51, 0.9);
	//* Evaluamos la orientación
	//* Orientación horizontal
	if (o == "h") {
		if (hLabel < 500) {
			//* Dibujamos la etiqueta
			triangle(x, y, x + 10, y + 10, x - 10, y + 10);
			rect(x - 55, y + 9.5, 76, 28, 5);
			fill(white);
			textAlign(CENTER);
			textFont(MontserratM);
			textSize(15);
			text(texto, x-17, y + 22.5);
		} else {
			//* Dibujamos la etiqueta
			triangle(x, y, x + 10, y + 10, x - 10, y + 10);
			rect(x - 38, y + 9.5, 76, 28, 5);
			fill(white);
			textAlign(CENTER);
			textFont(MontserratM);
			textSize(15);
			text(texto, x, y + 22.5);
		}
		//* Orientación vertical
	} else {
		if (w < h) {
			//* Dibujamos la etiqueta
			triangle(
				x + vw * 1.6,
				y,
				x + vw * 1.6 + 10,
				y + 10,
				x + vw * 1.6 + 10,
				y - 10
			);
			rect(x + vw * 1.6 + 9, y - 14, 57, 28, 5);
			fill(white);
			textAlign(LEFT, CENTER);
			textFont(MontserratM);
			textSize(16);
			text(texto, x + vw * 1.6 + 15, y - 2);
		} else {
			//* Dibujamos la etiqueta
			triangle(x, y, x - 10, y - 8, x - 10, y + 8);
			rect(x - 66, y - 14, 57, 28, 5);
			fill(white);
			textAlign(RIGHT, CENTER);
			textFont(MontserratM);
			textSize(16);
			text(texto, x - 15, y - 2);
		}
	}
}

//funcion para reproducir el sonido de la onda
function playpause() {
	//* Declaramos un oscilador
	const osc = new Tone.Oscillator().toDestination();
	//* Definimos frecuencia del oscilador de acuerdo al slider en x
	osc.frequency.value = hLabel;
	//* Definimos volumen del oscilador de acuerdo al slider en y
	osc.volume.value = vLabel - 30;
	//* Reproducimos el oscilador y lo detenemos 3 segundos despues
	osc.start().stop("+3");
}

//funcion Cambia el alto de los vértices de la onda
function cambia() {
	//* Evaluamos si es cresta o valle y cambiamos su alto
	if (i == posY) {
		i = 650;
	} else if (i <= 650) {
		i = posY;
	}
	//* Volvemos a llamar a la función cada cierta frecuencia
	setTimeout(cambia, frecuencia);
}

//funcion Dibuja la linea arcoíris
function dibujaLinea() {
	//* Cambiamos el modo de color a HSB
	colorMode(HSB, 360, 100, 100);
	noStroke();
	//* Dibujamos la linea arcoíris
	for (var i = 0; i < 300; i++) {
		fill(i, 51, 100);
		rect(vw * 86.4 - i * tamanio, 750, tamanio + 0.5, 10, 0);
	}
}
