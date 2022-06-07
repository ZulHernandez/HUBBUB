let w = window.innerWidth;
let h = window.innerHeight;
let oido, cOE, cOM, cOI, colorMouse;
let yPos = 0;
let yel = "#ffff00";
var posicion = 0;

function setup() {
	var myCanva;
	myCanva = createCanvas(547, 440);
	myCanva.parent("canvaOido");
	frameRate(60);
	textAlign(CENTER);
	colorMode(RGB, 255, 255, 255, 1);
	oido = loadImage("assets/imgs/oido.png");
	cOE = loadImage("assets/imgs/cOE.png");
	cOM = loadImage("assets/imgs/cOM.png");
	cOI = loadImage("assets/imgs/cOI.png");
}

function draw() {
	clear();
	background(0, 0, 0, 0);
	switch (posicion) {
		case 0:
			tint(255, 255, 255, 1);
			image(cOE, 2, 0);
			tint(255, 255, 255, 0.01);
			image(cOM, 270.1, 111);
			image(cOI, 308, 50);
			break;
		case 1:
			tint(255, 255, 255, 0.01);
			image(cOE, 2, 0);
			image(cOI, 308, 50);
			tint(255, 255, 255, 1);
			image(cOM, 270.1, 111);
			break;
		case 2:
			tint(255, 255, 255, 0.01);
			image(cOE, 2, 0);
			image(cOM, 270.1, 111);
			tint(255, 255, 255, 1);
			image(cOI, 308, 50);
			break;
	}
	colorMouse = get(mouseX, mouseY);

	if (colorMouse[0] == 85 && colorMouse[2] == 255) {
		tint(255, 255, 255, 0.5);
		image(cOE, 2, 0);
	}

	if (colorMouse[0] == 170 && colorMouse[2] == 170) {
		tint(255, 255, 255, 0.5);
		image(cOM, 270.1, 111);
	}

	if (colorMouse[0] == 170 && colorMouse[2] == 85) {
		tint(255, 255, 255, 0.5);
		image(cOI, 308, 50);
	}
    tint(255, 255, 255, 1);
    image(oido, 0, 0);
}

function mouseClicked() {
    colorMouse = get(mouseX, mouseY);
    //alert(colorMouse);
	if (colorMouse[0] == 123 && colorMouse[3] == 129) {
        posicion = 0;
    }else if (colorMouse[0] == 146 && colorMouse[3] == 129) {
        posicion = 1;
    }else if (colorMouse[0] == 208 && colorMouse[3] == 129) {
        posicion = 2;
    }
}

function mueve(a) {
	if (a == 1) {
		posicion++;
		if (posicion > 2) {
			posicion = 0;
		}
	} else {
		posicion--;
		if (posicion < 0) {
			posicion = 2;
		}
	}
}