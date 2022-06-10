let w = window.innerWidth;
let h = window.innerHeight;
let white = "#FFFFFF";
let black = "#333333";
let eventoDrag = 0;
let posIX = -1;
let posIY = -1;
let posY = 50;
let dibuja = 0;
let vLabel = 0;
let rataX, rataY;
const translada = 30;

function preload() {
	MontserratM = loadFont("../../assets/fonts/Montserrat-Medium.ttf");
	MontserratB = loadFont("../../assets/fonts/Montserrat-Bold.ttf");
}

function setup() {
	var myCanva;

	myCanva = createCanvas(1200, 840);
	myCanva.parent("canvaOnda");
	frameRate(60);
	textAlign(CENTER, CENTER);
	colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
	clear();
	translate(translada, 0);
	rataX = mouseX - translada;
	rataY = mouseY;
	background(255, 0, 0, 0.1);
	escribeTitulo("INTENSIDAD", 50, 7);
	escribeTitulo("(dB)", 50, 22);
	fill(51, 51, 51, 0.25);
	rect(45, 50, 10, 600, 5);
	vLabel = ((posY - 650) / 60) * -1;
	vLabel = vLabel.toFixed();
	if (vLabel <= 10 && vLabel > 6) {
		fill("#FF7C7C");
	} else if (vLabel <= 6 && vLabel > 3) {
		fill("#FFB87C");
	} else if (vLabel <= 3 && vLabel >= 0) {
		fill("#FFF87C");
	}
	switch (eventoDrag) {
		case 0:
			fill("#FF7C7C");
			rect(45, 50, 10, 600, 5);
			drawCircle(50, posY, 20, white);
			drawLabel(40, 50, "v", vLabel + " dB");
			break;
		case 1:
			rect(45, posY, 10, 600+50-posY, 5);
			drawCircle(50, posY, 20, white);
			drawLabel(40, posY, "v", vLabel + " dB");
			break;
		case 2:
			rect(45, posY, 10, 600+50-posY, 5);
			drawCircle(50, posY, 20, white);
			drawLabel(40, posY, "v", vLabel + " dB");
			break;
	}
	if (rataX > 39 && rataX < 61 && rataY > posY - 10 && rataY < posY + 10) {
		drawCircle(50, posY, 22.5, "#ffffff");
	} else {
		drawCircle(50, posY, 20, white);
	}
	if (rataX > 39 && rataX < 61) {
		cursor(HAND);
	} else {
		cursor(ARROW);
	}
}

function mousePressed() {
	posIX = rataX;
	posIY = rataY;
	if (posIX > 39 && posIX < 61 && posIY > 39 && posIY < 661) {
		dibuja = 1;
	} else {
		dibuja = 0;
	}
	console.log(dibuja);
}

function mouseDragged() {
	if (dibuja == 1) {
		eventoDrag = 1;
		posY = rataY;
	}
	if (posY > 650) {
		posY = 650;
	}
	if (posY < 50) {
		posY = 50;
	}
}

function mouseReleased() {
	if (dibuja == 1) {
		eventoDrag = 2;
		posY = rataY;
	}
	if (posY > 650) {
		posY = 650;
	}
	if (posY < 50) {
		posY = 50;
	}
}

function escribeTitulo(texto, x, y) {
	noStroke();
	fill(black);
	textAlign(CENTER);
	textFont(MontserratB);
	textSize(14);
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
		rect(x - 25, y + 9.5, 110, 28, 5);
		fill(white);
		textAlign(LEFT);
		textFont(MontserratM);
		textSize(15);
		text(texto, x - 20, y + 30);
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
