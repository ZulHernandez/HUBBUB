//Obtenemos el alto y ancho de la ventana
let w = window.innerWidth;
let h = window.innerHeight;
//Variables para imagenes
let oido, cOE, cOM, cOI
//variable para color segun posición
let colorMouse;
//varaibe para fuente
let MontserratM;
//colores 
let oidoE = "#7ce0ff";
let oidoM = "#92ff9b";
let oidoI = "#d0e546";
//contador de posiciones
var posOido = 0;

//precargamos fuente a usar en el esquema
function preload() {
	MontserratM = loadFont("../../assets/fonts/Montserrat-Medium.ttf");
}

//seteamos canva
function setup() {
	//declaramos canva y seteamos el alto y ancho
	var myCanva;
	myCanva = createCanvas(747, 440);
	//indicamos posición en el HTML
	myCanva.parent("canvaOido");
	//framerate
	frameRate(60);
	//alineación estandar del texto
	textAlign(CENTER);
	//modo de color esatndar
	colorMode(RGB, 255, 255, 255, 1);
	//cargamos imagenes
	oido = loadImage("../../assets/imgs/oido.png");
	cOE = loadImage("../../assets/imgs/cOE.png");
	cOM = loadImage("../../assets/imgs/cOM.png");
	cOI = loadImage("../../assets/imgs/cOI.png");
}

function draw() {
	//limpiamos canvas cada vez que se redibuja
	clear();
	//transladamos el dibujo
	translate(100, 0);
	//color de fondo
	background(0, 0, 0, 0);
	//evaluamos la posición del carrusel en el esquema
	switch (posOido) {
		//posición en el oído externo
		case 0:
			tint(255, 255, 255, 1);
			image(cOE, 2, 0);
			tint(255, 255, 255, 0.01);
			image(cOM, 270.1, 111);
			image(cOI, 308, 50);
			break;
		//posición en el oído medio
		case 1:
			tint(255, 255, 255, 0.01);
			image(cOE, 2, 0);
			image(cOI, 308, 50);
			tint(255, 255, 255, 1);
			image(cOM, 270.1, 111);
			break;
		//posición en el oído interno
		case 2:
			tint(255, 255, 255, 0.01);
			image(cOE, 2, 0);
			image(cOM, 270.1, 111);
			tint(255, 255, 255, 1);
			image(cOI, 308, 50);
			break;
	}
	//obtenemos el color de la posición del mouse
	colorMouse = get(mouseX, mouseY);
	//dibujamos esquema de oído
	tint(255, 255, 255, 1);
	image(oido, 0, 0);
	//cambiamos modo de fusión para las áreas del oído
	blendMode(MULTIPLY);
	//evaluamos color de la posición del mouse
	//dibujamos las áreas del oído
	//dibujamos etiqueta de acuerdo a posición del mouse
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

//función para determinar la posición del carrusel
function mouseClicked() {
	//obtenemos el color de la posición del mouse
	colorMouse = get(mouseX, mouseY);
	//evaluamos el color de la posición del mouse
	//deternminamos la posición del carrusel
	if (colorMouse[0] == 123 && colorMouse[3] == 129) {
		posOido = 0;
	} else if (colorMouse[0] == 146 && colorMouse[3] == 129) {
		posOido = 1;
	} else if (colorMouse[0] == 208 && colorMouse[3] == 129) {
		posOido = 2;
	}
	//movemos el carrusel
	mueve(posOido);
}

//función para mover el carrusel
function carruOido(i) {
	//evaluamos si avanzamos o retrocedemos
	if (i == 0) {
		//retrocedemos
		posOido--;
		//evaluamos si la posición del carrusel es menor a 0 y si es así, lo posicionamos en el último elemento
		if (posOido < 0) {
			posOido = 2;
		}
	} else {
		//avanzamos
		posOido++;
		//evaluamos si la posición del carrusel es mayor a 2 y si es así, lo posicionamos en el primer elemento
		if (posOido > 2) {
			posOido = 0;
		}
	}
	//pintamos la posición del carrusel en el esquema
	mueve(posOido);
}

//función para setear los valores de la posición del carrusel
function mueve(a) {
	//obtenemos los elementos del HTML
	let subTitle = document.getElementById("subOido");
	let textTitle = document.getElementById("textSubOido");
	let textOido = document.getElementById("textOido");

	//evaluamos la posición del carrusel en el esquema
	//pintamos los elementos del HTML
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

//fucnión para dibujar etiquetas
//recibe la posición del mouse y el texto a dibujar
function drawLabel(x, y, texto) {
	//dibujamos la etiqueta 1px debajo del mouse
	y++;
	//compensamos la posición del mouse
	translate(-100, 0);
	//cambiamos modo de fusión
	blendMode(BLEND);
	//dibujamos la etiqueta
	noStroke();
	fill(51, 51, 51, 0.9);
	triangle(x, y, x + 10, y + 10, x - 10, y + 10);
	rect(x - 25, y + 9.5, 110, 28, 5);
	fill(255, 255, 255, 1);
	textAlign(LEFT);
	textFont(MontserratM);
	textSize(15);
	text(texto, x - 20, y + 30);
}