let w = window.innerWidth;
let h = window.innerHeight;
let white = "#FFFFFF";
let black = "#333333";
let eventoDrag = 0;
let eventoDragY = 0;
let posIX = -1;
let posIY = -1;
let posY = 50;
let posX = 75;
let dibuja = 0;
let vLabel = 0;
let hLabel = 6930;
let rataX, rataY, mil, frecuencia;
const translada = 30;
const tamanio = 1000 / 300;
var i = 50;
var upDown = 0;
let amplitud = 0;
let repro = 0;

function preload() {
	MontserratM = loadFont("../../assets/fonts/Montserrat-Medium.ttf");
	MontserratB = loadFont("../../assets/fonts/Montserrat-Bold.ttf");
}

function setup() {
	frecuencia = (posX / 65) * 100;
	var myCanva;
	myCanva = createCanvas(1140, 800);
	myCanva.parent("canvaOnda");
	frameRate(60);
	textAlign(CENTER, CENTER);
	colorMode(RGB, 255, 255, 255, 1);
	setTimeout(cambia(), frecuencia);
}

function draw() {
	clear();
	translate(translada, 0);
	rataX = mouseX - translada;
	rataY = mouseY;
	colorMode(RGB, 255, 255, 255);
	background(255, 0, 0, 0);
	cursor(ARROW);
	escribe("INTENSIDAD", 50, 7, 0);
	escribe("(dB)", 50, 22, 0);
	fill(51, 51, 51, 0.25);
	rect(45, 50, 10, 600, 5);
	rect(65, 670, 1000, 10, 5);
	/*vLabel = ((posY - 650) / 60) * -1;
	vLabel = vLabel.toFixed();
	hLabel = (posX - 1065) * 7 * -1;
	if (hLabel < 1) {
		hLabel = 1;
	}
	hLabel = hLabel.toFixed();*/
	fill("#0075FF");
	switch (eventoDrag) {
		case 0:
			rect(45, 50, 10, 600, 5);
			fill(255, 124, 124, vLabel / 10);
			rect(45, 50, 10, 600, 5);
			drawCircle(50, posY, 20, white);
			drawLabel(40, 50, "v", vLabel + " dB");
			break;
		case 1:
			rect(45, posY, 10, 650 - posY, 5);
			fill(255, 124, 124, vLabel / 10);
			rect(45, posY, 10, 600 + 50 - posY, 5);
			drawCircle(50, posY, 20, white);
			drawLabel(40, posY, "v", vLabel + " dB");
			break;
		case 2:
			rect(45, posY, 10, 650 - posY, 5);
			fill(255, 124, 124, vLabel / 10);
			rect(45, posY, 10, 600 + 50 - posY, 5);
			drawCircle(50, posY, 20, white);
			drawLabel(40, posY, "v", vLabel + " dB");
			break;
	}
	switch (eventoDragY) {
		case 0:
			//rect(45, 50, 10, 600, 5);
			//fill(255,124,124,hLabel/10);
			rect(65, 670, -65 + posX, 10, 5);
			drawCircle(posX, 675, 20, white);
			drawLabel(posX, 685, "h", hLabel + " Hz");
			break;
		case 1:
			//rect(45, posY, 10, 600 + 50 - posY, 5);
			//fill(255,124,124,1);
			colorMode(HSB, 360, 100, 100);
			fill(hLabel / 23.3, 51, 100);
			rect(65, 670, -65 + posX, 10, 5);
			//fill(239,93,168,hLabel/7000);
			//rect(65, 670, -65+posX, 10, 5);
			drawCircle(posX, 675, 20, white);
			colorMode(RGB, 255, 255, 255);
			drawLabel(posX, 685, "h", hLabel + " Hz");
			break;
		case 2:
			//rect(45, posY, 10, 600 + 50 - posY, 5);
			//fill(255,124,124,1);
			colorMode(HSB, 360, 100, 100);
			fill(hLabel / 23.3, 51, 100);
			rect(65, 670, -65 + posX, 10, 5);
			//fill(239,93,168,hLabel/7000);
			//rect(65, 670, -65+posX, 10, 5);
			drawCircle(posX, 675, 20, white);
			colorMode(RGB, 255, 255, 255);
			drawLabel(posX, 685, "h", hLabel + " Hz");
			break;
	}
	if (rataX > 39 && rataX < 61 && rataY > posY - 10 && rataY < posY + 10) {
		drawCircle(50, posY, 22.5, white);
	} else {
		drawCircle(50, posY, 20, white);
	}
	if (rataX > 39 && rataX < 61 && rataY > 39 && rataY < 661) {
		cursor(HAND);
	}
	if (rataX > posX - 10 && rataX < posX + 10 && rataY > 664 && rataY < 686) {
		drawCircle(posX, 675, 22.5, white);
	} else {
		drawCircle(posX, 675, 20, white);
	}
	if (rataX > 54 && rataX < 1076 && rataY > 664 && rataY < 686) {
		cursor(HAND);
	}
	dibujaLinea();
	fill(black);
	rect(1065 - tamanio * 300, 750 - 8, 3, 25);
	rect(1065 - tamanio * 214.3, 750 - 8, 3, 25);
	rect(1065 - tamanio * 10.7, 750 - 8, 3, 25);
	rect(1065 - tamanio * 0, 750 - 8, 3, 25);
	escribe("7000 Hz", 1065 - tamanio * 300, 730, 1);
	escribe("5000 Hz", 1065 - tamanio * 214.3, 730, 1);
	escribe("250 Hz", 1065 - tamanio * 10.7, 730, 1);
	escribe("1 Hz", 1065 - tamanio * 0, 730, 1);
	colorMode(RGB, 255, 255, 255);
	if (hLabel<=7000 && hLabel>=5000) {
		drawLabel(posX, 760, "h", "AGUDO");
	}
	if (hLabel<=5001 && hLabel>=250) {
		drawLabel(posX, 760, "h", "MEDIO");
	}
	if (hLabel<=251 && hLabel>=1) {
		drawLabel(posX, 760, "h", "GRAVE");
	}
	//console.log(upDown);
	//translate(0, i);
	amplitud = posX - 65;
	fill(0, 0, 0, 0);
	colorMode(HSB, 360, 100, 100);
	stroke(hLabel / 23.3, 51, 100);
	strokeWeight(5);
	curveTightness(65 / posX - 0.25);
	beginShape();
	curveVertex(65, i);
	curveVertex(65, i);
	curveVertex(posX, (i - 650) * -1 + posY);
	for (var j = 1; j < 99; j++) {
		if (j % 2 == 0) {
			curveVertex(posX + amplitud * j, (i - 650) * -1 + posY);
		} else {
			curveVertex(posX + amplitud * j, i);
		}
	}
	curveVertex(posX + amplitud * 99, i);
	curveVertex(posX + amplitud * 99, i);
	endShape();
	fill(white);
	noStroke();
	rect(1070, 0, 200, 655);
	
	//playpause();
}

function cambia() {
	if (i == posY) {
		i = 650;
	} else if (i <= 650) {
		i = posY;
	}
	setTimeout(cambia, frecuencia);
}

function dibujaLinea() {
	colorMode(HSB, 360, 100, 100);
	noStroke();
	for (var i = 1; i < 301; i++) {
		fill(i, 51, 100);
		rect(1065 - tamanio * i, 750, tamanio + 1, 10, 0);
	}
}

function mousePressed() {
	posIX = rataX;
	posIY = rataY;
	if (posIX > 39 && posIX < 61 && posIY > 39 && posIY < 661) {
		dibuja = 1;
	} else if (posIX > 54 && posIX < 1086 && posIY > 664 && posIY < 686) {
		dibuja = 2;
	} else {
		dibuja = 0;
	}
	//console.log(dibuja);
}

function mouseDragged() {
	if (dibuja == 1) {
		eventoDrag = 1;
		posY = rataY;
	} else if (dibuja == 2) {
		eventoDragY = 1;
		posX = rataX;
	}
	if (posY > 640) {
		posY = 640;
	}
	if (posY < 50) {
		posY = 50;
	}
	if (posX > 1065) {
		posX = 1065;
	}
	if (posX < 75) {
		posX = 75;
	}

	vLabel = ((posY - 650) / 60) * -1;
	vLabel = vLabel.toFixed();
	hLabel = (posX - 1065) * 7 * -1;
	if (hLabel < 1) {
		hLabel = 1;
	}
	hLabel = hLabel.toFixed();

	//console.log("drag= " + eventoDragY);
}

function mouseReleased() {
	if (dibuja == 1) {
		eventoDrag = 2;
		posY = rataY;
	} else if (dibuja == 2) {
		eventoDragY = 2;
		posX = rataX;
	}
	if (posY > 640) {
		posY = 640;
	}
	if (posY < 50) {
		posY = 50;
	}
	if (posX > 1065) {
		posX = 1065;
	}
	if (posX < 75) {
		posX = 75;
	}

	vLabel = ((posY - 650) / 60) * -1;
	vLabel = vLabel.toFixed();
	hLabel = (posX - 1065) * 7 * -1;
	if (hLabel < 1) {
		hLabel = 1;
	}
	hLabel = hLabel.toFixed();

	playpause()
}

function escribe(texto, x, y, tipo) {
	textSize(14);
	noStroke();
	fill(black);
	textAlign(CENTER);
	if (tipo == 0) {
		textFont(MontserratB);
	} else {
		textSize(12);
		textFont(MontserratM);
	}
	text(texto, x, y);
}

function drawCircle(x, y, r, color) {
	stroke(black);
	strokeWeight(3);
	fill(color);
	ellipse(x, y, r, r);
}

function drawLabel(x, y, o, texto) {
	//translate(-100, 0);
	noStroke();
	fill(51, 51, 51, 0.9);
	if (o == "h") {
		triangle(x, y, x + 10, y + 10, x - 10, y + 10);
		rect(x - 38, y + 9.5, 76, 28, 5);
		fill(white);
		textAlign(CENTER);
		textFont(MontserratM);
		textSize(15);
		text(texto, x, y + 22.5);
	} else {
		triangle(x, y, x - 10, y - 8, x - 10, y + 8);
		rect(x - 67, y - 14, 57, 28, 5);
		fill(white);
		textAlign(RIGHT, CENTER);
		textFont(MontserratM);
		textSize(16);
		text(texto, x - 15, y - 2);
	}
}

function playpause() {
	const osc = new Tone.Oscillator().toDestination();
	osc.frequency.value = hLabel;
	osc.volume.value = vLabel-30;
	//osc.stop();
	osc.start().stop("+3");
	console.log(hLabel);
	console.log(vLabel);
}
