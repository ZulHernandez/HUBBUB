let w = window.innerWidth;
let h = window.innerHeight;
let oido, cOE, cOM, cOI, colorMouse, MontserratM;
let yPos = 0;
let oidoE = "#7ce0ff";
let oidoM = "#92ff9b";
let oidoI = "#d0e546";
var posOido = 0;

function preload() {
	MontserratM = loadFont("assets/fonts/Montserrat-Medium.ttf");
}

function setup() {
	var myCanva;
	myCanva = createCanvas(747, 440);
	myCanva.parent("canvaOido");
	frameRate(60);
	textAlign(CENTER);
	colorMode(RGB, 255, 255, 255, 1);
	oido = loadImage("assets/imgs/oido.png");
	cOE = loadImage("assets/imgs/cOE.png");
	cOM = loadImage("assets/imgs/cOM.png");
	cOI = loadImage("assets/imgs/cOI.png");
	const ctx = document.getElementById("canvaClasRuido");
	const canvaClasRuido = new Chart(ctx, options);
}

function draw() {
	clear();
	translate(100, 0);
	background(0, 0, 0, 0);
	switch (posOido) {
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
	tint(255, 255, 255, 1);
	image(oido, 0, 0);
	blendMode(MULTIPLY);
	if (colorMouse[0] == 85 && colorMouse[2] == 255) {
		tint(255, 255, 255, 0.5);
		image(cOE, 2, 0);
		drawLabel(mouseX, mouseY, "Oído externo");
	}

	if (colorMouse[0] == 170 && colorMouse[2] == 170) {
		tint(255, 255, 255, 0.5);
		image(cOM, 270.1, 111);
		drawLabel(mouseX, mouseY, "Oído medio");
	}

	if (colorMouse[0] == 170 && colorMouse[2] == 85) {
		tint(255, 255, 255, 0.5);
		image(cOI, 308, 50);
		drawLabel(mouseX, mouseY, "Oído interno");
	}
	cursor("pointer");
}

function mouseClicked() {
	colorMouse = get(mouseX, mouseY);
	//alert(colorMouse);
	if (colorMouse[0] == 123 && colorMouse[3] == 129) {
		posOido = 0;
	} else if (colorMouse[0] == 146 && colorMouse[3] == 129) {
		posOido = 1;
	} else if (colorMouse[0] == 208 && colorMouse[3] == 129) {
		posOido = 2;
	}
	mueve(posOido);
}

function carruOido(i) {
	if (i == 0) {
		posOido--;
		if (posOido < 0) {
			posOido = 2;
		}
	} else {
		posOido++;
		if (posOido > 2) {
			posOido = 0;
		}
	}
	mueve(posOido);
}

function mueve(a) {
	let subTitle = document.getElementById("subOido");
	let textTitle = document.getElementById("textSubOido");
	let textOido = document.getElementById("textOido");

	if (posOido == 0) {
		textTitle.innerHTML = "Oído externo";
		subTitle.style.textAlign = "left";
		textTitle.style.backgroundColor = oidoE;
		textTitle.style.borderColor = oidoE;
		textOido.innerHTML =
			"Formado por el pabellón auditivo el cual, a manera de embudo, <b>permite" +
			"la recolección de las ondas sonoras del ambiente</b> para, finalmente, <b>" +
			"dirigirlas al canal auditivo</b>. Este	también <b>compensa la presión</b> " +
			"existente entre el exterior y el interior del oído (la cual es mayor al ser" +
			" aire comprimido) y termina en el tímpano.";
		textOido.style.textAlignLast = "left";
	} else if (posOido == 1) {
		textTitle.innerHTML = "Oído medio";
		subTitle.style.textAlign = "center";
		textTitle.style.backgroundColor = oidoM;
		textTitle.style.borderColor = oidoM;
		textOido.innerHTML =
			"Este está delimitado entre una membrana delgada llamada tímpano y la ventana" +
			" oval. Le componen 3 pequeños huesos: el martillo, el yunque y el estribo; " +
			"los cuales se encargan de <b>transmitir las vibraciones del tímpano a la ventana" +
			" oval</b> la cual es otra membrana que cubre la entrada a la cóclea, es decir, el oído interno.";
		textOido.style.textAlignLast = "center";
	} else {
		textTitle.innerHTML = "Oído interno";
		subTitle.style.textAlign = "right";
		textTitle.style.backgroundColor = oidoI;
		textTitle.style.borderColor = oidoI;
		textOido.innerHTML =
			"Dentro de la cóclea se lleva a cabo la <b>transformación	de las" +
			" ondas sonoras a impulsos eléctricos</b> que son enviados directamente al cerebro." +
			" Estas señales eléctricas se conducen a través del nervio auditivo. La transformación" +
			"de vibraciones mecánicas a impulsos eléctricos se realiza <b>gracias a las células" +
			" ciliadas</b> las cuales mandan estas señales y funcionan como filtros	moduladores dentro del oído.";
		textOido.style.textAlignLast = "right";
	}
}

function drawLabel(x, y, texto) {
	y++;
	translate(-100, 0);
	blendMode(BLEND);
	noStroke();
	fill(51, 51, 51, 0.9);
	triangle(x, y, x + 10, y + 10, x - 10, y + 10);
	rect(x - 25, y + 10, 110, 28, 5);
	fill(255, 255, 255, 1);
	textAlign(LEFT);
	textFont(MontserratM);
	textSize(15);
	text(texto, x - 20, y + 30);
}
