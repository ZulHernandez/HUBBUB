//main Variables
//* Obtenemos el alto y ancho de la ventana
let w, h;
//* Variables para imagenes
let oido, cOE, cOM, cOI;
//*variable para color segun posición
let colorMouse;
//*varaibe para fuente
let MontserratM;
//*colores
let oidoE = "#7ce0ff";
let oidoM = "#92ff9b";
let oidoI = "#d0e546";
//*contador de posiciones
var posOido = 0;

//funcion Precargamos fuente a usar en el esquema
function preload() {
	MontserratM = loadFont("../../assets/fonts/Montserrat-Medium.ttf");
}

//funcion Seteamos canva
function setup() {
	//* Declaramos canva y seteamos el alto y ancho
	var myCanva;
	//* Obtenemos el alto y ancho de la ventana
	w = window.innerWidth;
	h = window.innerHeight;
	myCanva = createCanvas((w / 100) * 39.3, (w / 100) * 23.2);
	//* Indicamos posición en el HTML
	myCanva.parent("canvaOido");
	//* Framerate
	frameRate(60);
	//* Alineación estandar del texto
	textAlign(CENTER);
	//* Modo de color esatndar
	colorMode(RGB, 255, 255, 255, 1);
	//* Cargamos imagenes
	oido = loadImage("../../assets/imgs/oido.png");
	cOE = loadImage("../../assets/imgs/cOE.png");
	cOM = loadImage("../../assets/imgs/cOM.png");
	cOI = loadImage("../../assets/imgs/cOI.png");
}

//funcion Para dibujar el esquema
function draw() {
	//* Limpiamos canvas cada vez que se redibuja
	clear();
	//* Transladamos el dibujo
	translate((w / 100) * 5.3, 0);
	//* Color de fondo
	background(255, 0, 0, 0);
	//* Evaluamos la posición del carrusel en el esquema
	switch (posOido) {
		//* Posición en el oído externo
		case 0:
			tint(255, 255, 255, 1);
			image(cOE, w /100 * 0.1, 0,w /100 * 17.3,w /100 * 20.5);
			tint(255, 255, 255, 0.01);
			image(cOM, w /100 * 14.2, w /100 * 5.8,w /100 * 7.6,w /100 * 10.5);
			image(cOI, w /100 * 16.2, w /100 * 2.6,w /100 * 12.8,w /100 * 20.5);
			break;
		//* Posición en el oído medio
		case 1:
			tint(255, 255, 255, 0.01);
			image(cOE, w /100 * 0.1, 0,w /100 * 17.3,w /100 * 20.5);
			image(cOI, w /100 * 16.2, w /100 * 2.6,w /100 * 12.8,w /100 * 20.5);
			tint(255, 255, 255, 1);
			image(cOM, w /100 * 14.2, w /100 * 5.8,w /100 * 7.6,w /100 * 10.5);
			break;
		//* Posición en el oído interno
		case 2:
			tint(255, 255, 255, 0.01);
			image(cOE, w /100 * 0.1, 0,w /100 * 17.3,w /100 * 20.5);
			image(cOM, w /100 * 14.2, w /100 * 5.8,w /100 * 7.6,w /100 * 10.5);
			tint(255, 255, 255, 1);
			image(cOI, w /100 * 16.2, w /100 * 2.6,w /100 * 12.8,w /100 * 20.5);
			break;
	}
	//* Obtenemos el color de la posición del mouse
	colorMouse = get(mouseX, mouseY);
	//* Dibujamos esquema de oído
	tint(255, 255, 255, 1);
	image(oido, 0, 0,w /100 * 29,w /100 * 23.2);
	//* Cambiamos modo de fusión para las áreas del oído
	blendMode(MULTIPLY);
	//* Evaluamos color de la posición del mouse
	//* Dibujamos las áreas del oído
	//* Dibujamos etiqueta de acuerdo a posición del mouse
	if (colorMouse[0] == 85 && colorMouse[2] == 255) {
		tint(255, 255, 255, 0.5);
		image(cOE, w /100 * 0.1, 0,w /100 * 17.3,w /100 * 20.5);
		drawLabel(mouseX, mouseY, "Oído externo");
	}
	if (colorMouse[0] == 170 && colorMouse[2] == 170) {
		tint(255, 255, 255, 0.5);
		image(cOM, w /100 * 14.2, w /100 * 5.8,w /100 * 7.6,w /100 * 10.5);
		drawLabel(mouseX, mouseY, "Oído medio");
	}
	if (colorMouse[0] == 170 && colorMouse[2] == 85) {
		tint(255, 255, 255, 0.5);
		image(cOI, w /100 * 16.2, w /100 * 2.6,w /100 * 12.8,w /100 * 20.5);
		drawLabel(mouseX, mouseY, "Oído interno");
	}
	cursor("pointer");
}

//funcion Determinar la posición del carrusel
function mouseClicked() {
	//* Obtenemos el color de la posición del mouse
	colorMouse = get(mouseX, mouseY);

	//* Evaluamos el color de la posición del mouse
	//* Determinamos la posición del carrusel
	if (colorMouse[0] == 123 && colorMouse[3] == 129) {
		posOido = 0;
	} else if (colorMouse[0] == 146 && colorMouse[3] == 129) {
		posOido = 1;
	} else if (colorMouse[0] == 208 && colorMouse[3] == 129) {
		posOido = 2;
	}
	//* Movemos el carrusel
	mueve(posOido);
}

//funcion Mover el carrusel
function carruOido(i) {
	//* Evaluamos si avanzamos o retrocedemos
	if (i == 0) {
		//* Retrocedemos
		posOido--;
		//* Evaluamos si la posición del carrusel es menor a 0 y si es así, lo posicionamos en el último elemento
		if (posOido < 0) {
			posOido = 2;
		}
	} else {
		//* Avanzamos
		posOido++;
		//* Evaluamos si la posición del carrusel es mayor a 2 y si es así, lo posicionamos en el primer elemento
		if (posOido > 2) {
			posOido = 0;
		}
	}
	//* Pintamos la posición del carrusel en el esquema
	mueve();
}

//funcion Seteamos los valores de la posición del carrusel
function mueve() {
	//* Obtenemos los elementos del HTML
	let subTitle = document.getElementById("subOido");
	let textTitle = document.getElementById("textSubOido");
	let textOido = document.getElementById("textOido");

	//* Evaluamos la posición del carrusel en el esquema
	//* Pintamos los elementos del HTML
	//* Textos para sección del oído externo
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
	//* Textos para sección del oído medio
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
	//* Textos para sección del oído interno
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

//funcion Dibujar etiquetas
//param x: posición x del mouse
//param y: posición y del mouse
//param text: texto a dibujar
function drawLabel(x, y, texto) {
	//* Dibujamos la etiqueta 1px debajo del mouse
	y--;
	//* Compensamos la posición del mouse
	translate(-100, 0);
	//* Cambiamos modo de fusión
	blendMode(BLEND);
	//* Dibujamos la etiqueta
	noStroke();
	fill(51, 51, 51, 0.9);
	triangle(x, y, x + 10, y - 10, x - 10, y - 10);
	rect(x - 25, y - 37, 110, 28, 5);
	fill(255, 255, 255, 1);
	textAlign(LEFT);
	textFont(MontserratM);
	textSize(15);
	text(texto, x - 20, y - 17);
}
