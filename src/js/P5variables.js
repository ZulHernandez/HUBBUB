//main Variables
//* Ancho y alto de la ventana
let w = window.innerWidth;
let h = window.innerHeight;
//let easing = 0.05;
//* Color
let white = "#FFFFFF";
let black = "#333333";
let blackT = "#3333338B";
let blueLink = "#0075ff";
let redWater = "#ff7c7c";
let rose = "#ef5da8";
let purple = "#E1A0EA";
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
let horarioC = ["#88C9F98B", "#2266998B", "#88C9F9", "#226699"];

//* variables transitorias
let anchoC, sumaArray, puntoVal, contadorCir, colorFinal, labelTexto, hoverOut;

//* variables Tipo de gráfico
let grafica = 0;

//* Matriz de puntos
let matriz = [];

//* Arreglo de colores
let pintaCol = [];

//* Recogemos los elemnentos del HTML
let reportCircle = document.getElementById("reportCircle");
let btnMolestia = document.getElementById("btnMolestia");
let btnEspacio = document.getElementById("btnEspacio");
let btnEmisor = document.getElementById("btnEmisor");
let btnHorario = document.getElementById("btnHorario");
let bracketParti = document.getElementById("bracketParti");
let totalReportes = document.getElementById("totalReportes");
let leyenda = document.getElementById("leyenda");

//funcion Precargamos fuentes e imagenes
function preload() {
	MontserratM = loadFont("../../../../assets/fonts/Montserrat-Medium.ttf");
	MontserratSB = loadFont("../../../../assets/fonts/Montserrat-SemiBold.ttf");
	MontserratB = loadFont("../../../../assets/fonts/Montserrat-Bold.ttf");
	poco = loadImage("../../../../assets/imgs/variables/poco.png");
	mucho = loadImage("../../../../assets/imgs/variables/mucho.png");
	bastante = loadImage("../../../../assets/imgs/variables/bastante.png");
	exterior = loadImage("../../../../assets/imgs/variables/exterior.png");
	interior = loadImage("../../../../assets/imgs/variables/interior.png");
	aereo = loadImage("../../../../assets/imgs/variables/aereo.png");
	animal = loadImage("../../../../assets/imgs/variables/animal.png");
	bocinas = loadImage("../../../../assets/imgs/variables/bocinas.png");
	fiesta = loadImage("../../../../assets/imgs/variables/fiesta.png");
	maquinaria = loadImage("../../../../assets/imgs/variables/maquinaria.png");
	otros = loadImage("../../../../assets/imgs/variables/otros.png");
	servicios = loadImage("../../../../assets/imgs/variables/servicios.png");
	trafico = loadImage("../../../../assets/imgs/variables/trafico.png");
	noche = loadImage("../../../../assets/imgs/variables/noche.png");
	dia = loadImage("../../../../assets/imgs/variables/dia.png");
}

//funcion Seteamos el canvas
function setup() {
	//* Seteamos el canvas y su alto y ancho
	var myCanva;
	myCanva = createCanvas(1060, 650);
	//* Posición del canvas en el HTML
	myCanva.parent("canvaVar");
	//* Frame rate del canvas
	frameRate(60);
	//* Modo de color estandar
	colorMode(RGB, 255, 255, 255, 1);
	//* Alineación estandar del texto
	textAlign(CENTER);
}

//funcion Determina el gráfico a dibujar
//param a :  Tipo de datos a alimentar
function setChart(a) {
	grafica = a;
}

//funcion Dibujamos el canvas
function draw() {
	//* Iniciamos contador de la matriz de puntos
	contadorCir = -1;
	//* Reiniciamos el array que suma los reportes
	sumaArray = 0;
	//* Diametro del circulo
	anchoC = 1060 / 39.5;
	//* Limpiamos el canva
	clear();

	//* Creamos la matriz de puntos guardadno su posición en x, y y el color en vacio
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

	//* Evaluamos el tipo de gráfico a dibujar
	switch (grafica) {
		//* Dibujamos la gráfica de molestia
		case 0:
			//* Modificamos la vista del bracket de selección
			btnMolestia.className = "btnMolestiaAct";
			btnEspacio.className = "btnEspacioIna";
			btnEmisor.className = "btnEmisorIna";
			btnHorario.className = "btnHorarioIna";
			bracketParti.style.borderColor = rose;
			btnMolestia.style.borderColor = rose;

			//* Sumamos todos los reportes del array
			for (let i = 0; i < molestia.length; i++) {
				sumaArray = sumaArray + molestia[i];
			}
			//* Calculamos a cuanto equivale cada punto
			puntoVal = Number((200 / sumaArray).toFixed(1));
			//* Dibujamos la matríz
			for (let k = 0; k < molestia.length; k++) {
				//* Determinamos la cantidad de puntos a colorear por variable de la gráfica
				pintaCol[k] = Number((molestia[k] * puntoVal).toFixed(0));
				//* Evaluamos la posición de la variable
				switch (k) {
					//* Pintamos la primer variable
					case 0:
						//* Evaluamos si estamos en hover o en out
						if (mouseX > 2 && mouseX < matriz[pintaCol[0]].x + anchoC) {
							//* Pintamos el color en hover
							colorFinal = molestiaC[k + 3];
							//* Estamos en out
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = molestiaC[k];
							//* Estamos en hover
							hoverOut = 0
						}
						//* Puntamos la matriz
						for (let i = 0; i < pintaCol[k]; i++) {
							matriz[i].color = colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							2,
							matriz[pintaCol[0]].x + anchoC,
							"Poco",
							molestia[k],
							poco,
							hoverOut
						);
						break;
					//* Pintamos la segunda variable
					case 1:
						//* Evaluamos si estamos en hover o en out
						if (
							mouseX > matriz[pintaCol[0] + 1].x - anchoC * 0.5 &&
							mouseX < matriz[pintaCol[0] + pintaCol[1]].x - anchoC * 0.5
						) {
							//* Pintamos el color en hover
							colorFinal = molestiaC[k + 3];
							//* Estamos en out
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = molestiaC[k];
							//* Estamos en hover
							hoverOut = 0;							
						}
						//* Puntamos la matriz
						for (let i = 0; i < pintaCol[k]; i++) {
							matriz[i + pintaCol[0]].color = colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							matriz[pintaCol[0] + 1].x - anchoC * 0.5,
							matriz[pintaCol[0] + pintaCol[1]].x + anchoC * 0.5,
							"Mucho",
							molestia[k],
							mucho,
							hoverOut
						);
						break;
					//* Pintamos la tercera variable
					case 2:
						//* Evaluamos si estamos en hover o en out
						if (
							mouseX > matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 1.5 &&
							mouseX < matriz[199].x - anchoC
						) {
							//* Pintamos el color en hover
							colorFinal = molestiaC[k + 3];
							//* Estamos en out
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = molestiaC[k];
							//* Estamos en hover
							hoverOut = 0;
						}
						//* Puntamos la matriz
						for (let i = 0; i < 200 - pintaCol[0] - pintaCol[1]; i++) {
							matriz[i + pintaCol[0] + pintaCol[1]].color = colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 0.5,
							matriz[199].x + anchoC * 0.5,
							"Bastante",
							molestia[k],
							bastante,
							hoverOut
						);
						break;
				}
			}
			//* Pintamos la leyenda correspondiente
			leyenda.innerHTML =
				'<div class="row">' +
				'<div class="col-6"></div>' +
				'<div class="col-6">' +
				'<span><img src="../../../../assets/vector/circles/poco.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Poco</b> = " +
				molestia[0] +
				(molestia[0] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				'<span><img src="../../../../assets/vector/circles/mucho.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Mucho</b> = " +
				molestia[1] +
				(molestia[1] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				'<span><img src="../../../../assets/vector/circles/bastante.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Bastante</b> = " +
				molestia[2] +
				(molestia[2] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				"</div>";
			break;
		//* Pintamos la gráfica de espacio
		case 1:
			//* Modificamos los elementos del bracket
			btnMolestia.className = "btnMolestiaIna";
			btnEspacio.className = "btnEspacioAct";
			btnEmisor.className = "btnEmisorIna";
			btnHorario.className = "btnHorarioIna";
			bracketParti.style.borderColor = blueLink;
			btnEspacio.style.borderColor = blueLink;
			//* Sumamos los reportes de la variable
			for (let i = 0; i < espacio.length; i++) {
				sumaArray = sumaArray + espacio[i];
			}
			//* Calculamos el valor del punto por reporte
			puntoVal = Number((200 / sumaArray).toFixed(1));
			//* Pintamos la matriz
			for (let k = 0; k < espacio.length; k++) {
				//* Determimnamos el color por cantidad de reportes
				pintaCol[k] = Number((espacio[k] * puntoVal).toFixed(0));
				//* Evaluamos si estamos en hover o en out
				switch (k) {
					//* Pintamos la primera variable
					case 0:
						//* Evaluamos si estamos en hover o en out
						if (mouseX > 2 && mouseX < matriz[pintaCol[0]].x - anchoC * 1.5) {
							//* Pintamos el color en hover
							colorFinal = espacioC[k + 2];
							//* Estamos en out
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = espacioC[k];
							//* Estamos en hover
							hoverOut = 0;
						}
						//* Pintamos la matriz
						for (let i = 0; i < pintaCol[k]; i++) {
							matriz[i].color = colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							2,
							matriz[pintaCol[0]].x - anchoC * 1.5,
							"Exterior",
							espacio[k],
							exterior,
							hoverOut
						);
						break;
					//* Pintamos la segunda variable
					case 1:
						if (
							mouseX > matriz[pintaCol[0] + 1].x - anchoC * 0.5 &&
							mouseX < matriz[199].x + anchoC * 0.5
						) {
							//* Pintamos el color en hover
							colorFinal = espacioC[k + 2];
							//* Estamos en out
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = espacioC[k];
							//* Estamos en hover
							hoverOut = 0;
						}
						//* Pintamos la matriz
						for (let i = 0; i < 200 - pintaCol[0]; i++) {
							matriz[i + pintaCol[0]].color = colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							matriz[pintaCol[0] + 1].x - anchoC * 0.5,
							matriz[199].x + anchoC * 0.5,
							"Interior",
							espacio[k],
							interior,
							hoverOut
						);
						break;
				}
			}
			//* Pintamos la grafica
			leyenda.innerHTML =
				'<div class="row">' +
				'<div class="col-6"></div>' +
				'<div class="col-6">' +
				'<span><img src="../../../../assets/vector/circles/exterior.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Exterior</b> = " +
				espacio[0] +
				(espacio[0] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				'<span><img src="../../../../assets/vector/circles/interior.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Interior</b> = " +
				espacio[1] +
				(espacio[1] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				"</div>";
			break;
		//* Pintamos la grafica del emisor
		case 2:
			//* Definimos el estilo del bracket
			btnMolestia.className = "btnMolestiaIna";
			btnEspacio.className = "btnEspacioIna";
			btnEmisor.className = "btnEmisorAct";
			btnHorario.className = "btnHorarioIna";
			bracketParti.style.borderColor = redWater;
			btnEmisor.style.borderColor = redWater;
			//* Sumamos los reportes
			for (let i = 0; i < emisor.length; i++) {
				sumaArray = sumaArray + emisor[i];
			}
			//* Deterrminamos el valor de reportes por punto
			puntoVal = Number((200 / sumaArray).toFixed(1));
			//* Pintamos la grafica
			for (let k = 0; k < emisor.length; k++) {
				//* Deteminamos cantidad de puntos por color
				pintaCol[k] = Number((emisor[k] * puntoVal).toFixed(0));
				//* Evaluamos la posicion de la variable
				switch (k) {
					//* Pintamos la primera variable
					case 0:
						if (mouseX > 2 && mouseX < matriz[pintaCol[0]].x + anchoC) {
							//* Pintamos el color en hover
							colorFinal = emisorC[k + 8];
							//* Estamos en out
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = emisorC[k];
							//* Estamos en hover
							hoverOut = 0;
						}
						//* Pintamos la matriz
						for (let i = 0; i < pintaCol[k]; i++) {
							matriz[i].color = colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							2,
							matriz[pintaCol[0]].x + anchoC,
							"Aéreo",
							emisor[k],
							aereo,
							hoverOut
						);
						break;
					//* Pintamos la segunda variable
					case 1:
						if (
							mouseX > matriz[pintaCol[0] + 1].x - anchoC * 0.5 &&
							mouseX < matriz[pintaCol[0] + pintaCol[1]].x - anchoC * 0.5
						) {
							//* Pintamos el color en hover
							colorFinal = emisorC[k + 8];
							//* Estamos en out
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = emisorC[k];
							//* Estamos en hover
							hoverOut = 0;							
						}
						//* Pintamos la matriz
						for (let i = 0; i < pintaCol[k]; i++) {
							matriz[i + pintaCol[0]].color = colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							matriz[pintaCol[0] + 1].x - anchoC * 0.5,
							matriz[pintaCol[0] + pintaCol[1]].x + anchoC * 0.5,
							"Animal",
							"",
							animal,
							hoverOut
						);
						break;
					//* Pintamos la tercera variable
					case 2:
						if (
							mouseX > matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 1.5 &&
							mouseX <
								matriz[pintaCol[0] + pintaCol[1] + pintaCol[2]].x - anchoC
						) {
							//* Pintamos el color en hover
							colorFinal = emisorC[k + 8];
							//* Estamos en out
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = emisorC[k];
							//* Estamos en hover
							hoverOut = 0;
						}
						//* Pintamos la matriz
						for (let i = 0; i < 200 - pintaCol[0] - pintaCol[1]; i++) {
							matriz[i + pintaCol[0] + pintaCol[1]].color = colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							matriz[pintaCol[0] + pintaCol[1] + 1].x - anchoC * 0.5,
							matriz[pintaCol[0] + pintaCol[1] + pintaCol[2]].x +
								anchoC * 0.5,
							"Bocinas",
							emisor[k],
							bocinas,
							hoverOut
						);
						break;
					//* Pintamos la cuarta variable
					case 3:
						if (
							mouseX >
								matriz[pintaCol[0] + pintaCol[1] + pintaCol[2] + 1].x -
									anchoC * 1.5 &&
							mouseX <
								matriz[pintaCol[0] + pintaCol[1] + pintaCol[2] + pintaCol[3]]
									.x -
									anchoC
						) {
							//* Pintamos el color en hover
							colorFinal = emisorC[k + 8];
							//* Estamos en out
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = emisorC[k];
							//* Estamos en hover
							hoverOut = 0;
						}
						//* Pintamos la matriz
						for (
							let i = 0;
							i < 200 - pintaCol[0] - pintaCol[1] - pintaCol[2];
							i++
						) {
							matriz[i + pintaCol[0] + pintaCol[1] + pintaCol[2]].color =
								colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							matriz[pintaCol[0] + pintaCol[1] + pintaCol[2] + 1].x -
								anchoC * 0.5,
							matriz[pintaCol[0] + pintaCol[1] + pintaCol[2] + pintaCol[3]]
								.x +
								anchoC * 0.5,
							"Fiesta",
							emisor[k],
							fiesta,
							hoverOut
						);
						break;
					//* Pintamos la quinta variable
					case 4:
						if (
							mouseX >
								matriz[
									pintaCol[0] + pintaCol[1] + pintaCol[2] + pintaCol[3] + 1
								].x -
									anchoC * 1.5 &&
							mouseX <
								matriz[
									pintaCol[0] +
										pintaCol[1] +
										pintaCol[2] +
										pintaCol[3] +
										pintaCol[4]
								].x -
									anchoC
						) {
							//* Pintamos el color en hover
							colorFinal = emisorC[k + 8];
							//* Estamos en out
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = emisorC[k];
							//* Estamos en hover
							hoverOut = 0;
						}
						//* Pintamos la matriz
						for (
							let i = 0;
							i < 200 - pintaCol[0] - pintaCol[1] - pintaCol[2] - pintaCol[3];
							i++
						) {
							matriz[
								i + pintaCol[0] + pintaCol[1] + pintaCol[2] + pintaCol[3]
							].color = colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							matriz[
								pintaCol[0] + pintaCol[1] + pintaCol[2] + pintaCol[3] + 1
							].x -
								anchoC * 0.5,
							matriz[
								pintaCol[0] +
									pintaCol[1] +
									pintaCol[2] +
									pintaCol[3] +
									pintaCol[4]
							].x +
								anchoC * 0.5,
							"Maquinaria",
							emisor[k],
							maquinaria,
							hoverOut
						);
						break;
					//* Pintamos la sexta variable
					case 5:
						if (
							mouseX >
								matriz[
									pintaCol[0] +
										pintaCol[1] +
										pintaCol[2] +
										pintaCol[3] +
										pintaCol[4] +
										1
								].x -
									anchoC * 1.5 &&
							mouseX <
								matriz[
									pintaCol[0] +
										pintaCol[1] +
										pintaCol[2] +
										pintaCol[3] +
										pintaCol[4] +
										pintaCol[5]
								].x -
									anchoC
						) {
							//* Pintamos el color en hover
							colorFinal = emisorC[k + 8];
							//* Estamos en out
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = emisorC[k];
							//* Estamos en hover
							hoverOut = 0;
						}
						//* Pintamos la matriz
						for (
							let i = 0;
							i <
							200 -
								pintaCol[0] -
								pintaCol[1] -
								pintaCol[2] -
								pintaCol[3] -
								pintaCol[4];
							i++
						) {
							matriz[
								i +
									pintaCol[0] +
									pintaCol[1] +
									pintaCol[2] +
									pintaCol[3] +
									pintaCol[4]
							].color = colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							matriz[
								pintaCol[0] +
									pintaCol[1] +
									pintaCol[2] +
									pintaCol[3] +
									pintaCol[4] +
									1
							].x -
								anchoC * 0.5,
							matriz[
								pintaCol[0] +
									pintaCol[1] +
									pintaCol[2] +
									pintaCol[3] +
									pintaCol[4] +
									pintaCol[5]
							].x +
								anchoC * 0.5,
							"Otros",
							emisor[k],
							otros,
							hoverOut
						);
						break;
					//* Pintamos la septima variable
					case 6:
						if (
							mouseX >
								matriz[
									pintaCol[0] +
										pintaCol[1] +
										pintaCol[2] +
										pintaCol[3] +
										pintaCol[4] +
										pintaCol[5] +
										1
								].x -
									anchoC * 1.5 &&
							mouseX <
								matriz[
									pintaCol[0] +
										pintaCol[1] +
										pintaCol[2] +
										pintaCol[3] +
										pintaCol[4] +
										pintaCol[5] +
										pintaCol[6]
								].x -
									anchoC
						) {
							//* Pintamos el color en out
							colorFinal = emisorC[k + 8];
							//* Estamos en hover
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = emisorC[k];
							//* Estamos en hover
							hoverOut = 0;
						}
						//* Dibujamos la matriz
						for (
							let i = 0;
							i <
							200 -
								pintaCol[0] -
								pintaCol[1] -
								pintaCol[2] -
								pintaCol[3] -
								pintaCol[4] -
								pintaCol[5];
							i++
						) {
							matriz[
								i +
									pintaCol[0] +
									pintaCol[1] +
									pintaCol[2] +
									pintaCol[3] +
									pintaCol[4] +
									pintaCol[5]
							].color = colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							matriz[
								pintaCol[0] +
									pintaCol[1] +
									pintaCol[2] +
									pintaCol[3] +
									pintaCol[4] +
									pintaCol[5] +
									1
							].x -
								anchoC * 0.5,
							matriz[
								pintaCol[0] +
									pintaCol[1] +
									pintaCol[2] +
									pintaCol[3] +
									pintaCol[4] +
									pintaCol[5] +
									pintaCol[6]
							].x +
								anchoC * 0.5,
							"Servicios",
							emisor[k],
							servicios,
							hoverOut
						);
						break;
					//* Pintamos la octava variable
					case 7:
						if (
							mouseX >
								matriz[
									pintaCol[0] +
										pintaCol[1] +
										pintaCol[2] +
										pintaCol[3] +
										pintaCol[4] +
										pintaCol[5] +
										pintaCol[6] +
										1
								].x -
									anchoC * 1.5 &&
							mouseX < matriz[199].x - anchoC
						) {
							//* Pintamos el color en hover
							colorFinal = emisorC[k + 8];
							//* Estamos en hover
							hoverOut = 1;
						} else {
							//* Pintamos el color en out
							colorFinal = emisorC[k];
							//* Estamos en hover
							hoverOut = 0;
						}
						//* Dibujamos la matriz
						for (
							let i = 0;
							i <
							200 -
								pintaCol[0] -
								pintaCol[1] -
								pintaCol[2] -
								pintaCol[3] -
								pintaCol[4] -
								pintaCol[5] -
								pintaCol[6];
							i++
						) {
							matriz[
								i +
									pintaCol[0] +
									pintaCol[1] +
									pintaCol[2] +
									pintaCol[3] +
									pintaCol[4] +
									pintaCol[5] +
									pintaCol[6]
							].color = colorFinal;
						}
						//* Dibujamos la label
						drawLabel(
							matriz[
								pintaCol[0] +
									pintaCol[1] +
									pintaCol[2] +
									pintaCol[3] +
									pintaCol[4] +
									pintaCol[5] +
									pintaCol[6] +
									1
							].x -
								anchoC * 0.5,
							matriz[199].x + anchoC * 0.5,
							"Tráfico",
							emisor[k],
							trafico,
							hoverOut
						);
						break;
				}
			}
			//* Pintamos la leyenda
			leyenda.innerHTML =
				'<div class="row">' +
				'<div class="col-6">' +
				'<span><img src="../../../../assets/vector/circles/aereo.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Aéreo</b> = " +
				emisor[0] +
				(emisor[0] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				'<span><img src="../../../../assets/vector/circles/animal.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Animal</b> = " +
				emisor[1] +
				(emisor[1] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				'<span><img src="../../../../assets/vector/circles/bocinas.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Bocinas</b> = " +
				emisor[2] +
				(emisor[2] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				'<span><img src="../../../../assets/vector/circles/fiesta.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Fiesta</b> = " +
				emisor[3] +
				(emisor[3] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				"</div>" +
				'<div class="col-6">' +
				'<span><img src="../../../../assets/vector/circles/maquinaria.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Maquinaria</b> = " +
				emisor[4] +
				(emisor[4] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				'<span><img src="../../../../assets/vector/circles/otros.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Otros</b> = " +
				emisor[5] +
				(emisor[5] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				'<span><img src="../../../../assets/vector/circles/servicios.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Servicios</b> = " +
				emisor[6] +
				(emisor[6] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				'<span><img src="../../../../assets/vector/circles/trafico.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Tráfico</b> = " +
				emisor[7] +
				(emisor[7] == 1 ? " reporte" : " reportes") +
				"</span><br/>";
			break;
		//* Dibujamos la gráfica de horarios
		case 3:
			//* Cambiamos el estilo del bracket
			btnMolestia.className = "btnMolestiaIna";
			btnEspacio.className = "btnEspacioIna";
			btnEmisor.className = "btnEmisorIna";
			btnHorario.className = "btnHorarioAct";
			bracketParti.style.borderColor = purple;
			btnHorario.style.borderColor = purple;
			//* Sumamos los valores de los reportes
			for (let i = 0; i < horario.length; i++) {
				sumaArray = sumaArray + horario[i];
			}
			//* alculamos el valor de reportes por puntos
			puntoVal = Number((200 / sumaArray).toFixed(1));
			//* Pintamos la gráfica
			for (let k = 0; k < horario.length; k++) {
				//* Calculamos el color por cantidad de puntos
				pintaCol[k] = Number((horario[k] * puntoVal).toFixed(0));
				//* Evaluamos la posicion de la variable
				switch (k) {
					//* Dibujamos la primera variable
					case 0:
						if (mouseX > 2 && mouseX < matriz[pintaCol[0]].x + anchoC) {
							//* Pintamos el color en hover
							colorFinal = horarioC[k + 2];
							//* Estamos en out
							hoverOut = 1
						} else {
							//* Pintamos el color en out
							colorFinal = horarioC[k];
							//* Estamos en out
							hoverOut = 0
						}
						//* Dibujamos la matriz
						for (let i = 0; i < pintaCol[k]; i++) {
							matriz[i].color = colorFinal;
						}
						//* Pintamos el texto en hover
						drawLabel(
							2,
							matriz[pintaCol[0]].x + anchoC,
							"Día",
							horario[k],
							dia,
							hoverOut
						);
						break;
					//* Dibujamos la segunda variable
					case 1:
						if (
							mouseX > matriz[pintaCol[0] + 1].x - anchoC * 0.5 &&
							mouseX < matriz[199].x + anchoC * 0.5
						) {
							//* Pintamos el color en hover
							colorFinal = horarioC[k + 2];
							//* Estamos en out
							hoverOut = 1
						} else {
							//* Pintamos el texto en out
							colorFinal = horarioC[k];
							//* Estamos en hover
							hoverOut = 0
						}
						
						for (let i = 0; i < 200 - pintaCol[0]; i++) {
							matriz[i + pintaCol[0]].color = colorFinal;
						}
						//* Pintamos el texto en hover
						drawLabel(
							matriz[pintaCol[0] + 1].x - anchoC * 0.5,
							matriz[199].x + anchoC * 0.5,
							"Noche",
							horario[k],
							noche,
							hoverOut
						);
						break;
				}
			}
			//* Pintamos la leyenda
			leyenda.innerHTML =
				'<div class="row">' +
				'<div class="col-6"></div>' +
				'<div class="col-6">' +
				'<span><img src="../../../../assets/vector/circles/dia.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Día</b> = " +
				horario[0] +
				(horario[0] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				'<span><img src="../../../../assets/vector/circles/noche.svg" style="width: 10px; margin-top: 0px; margin-right: 10px;"></span>' +
				"<span><b>Noche</b> = " +
				horario[1] +
				(horario[1] == 1 ? " reporte" : " reportes") +
				"</span><br/>" +
				"</div>";
			break;
	}
	//* Pintamos la matriz de puntos
	for (let i = 0; i < 200; i++) {
		drawCircle(matriz[i].x, matriz[i].y, matriz[i].color);
	}
	//* Escribimos la equivalencia entre reportes y puntos
	reportCircle.innerHTML = "<b>1 reporte ≈ </b>" + puntoVal;
	//* Escribimos la cantidad de reportes totales
	totalReportes.innerHTML = "Total de <b>" + sumaArray + " reportes </b>";
}

//funcion Escribimos las labels de cada sección
//param x1: posicion x inicial del label
//param x2: posicion x final del label
//param text: texto del label
//param valor: valor de reportes del label
//param img: imagen de la variable
//param tipo: mouse over o mouse out
function drawLabel(x1, x2, texto, valor, img, tipo) {
	//* Distinguimos entre la gráfica de variables y las demas
	if (grafica == 2) {
		//* Si estamos en mouse over
		if (tipo == 1) {
			//* Dibujamos imagen al 100 de opacidad
			tint(255, 255, 255, 1);
			image(img, (x2 - x1) / 2 + x1 - 12.5, tipo);
			//* Escribimos la cantidad de reportes
			if (valor == 1) {
				escribe(valor + " reporte", (x2 - x1) / 2 + x1, 50, 9, tipo);
			} else {
				escribe(valor + " reportes", (x2 - x1) / 2 + x1, 50, 9, tipo);
			}
			//* Dibujamos la línea de medición
			stroke(0);
			strokeWeight(2);
			line(x1, 80, x2, 80);
			line(x1, 70, x1, 90);
			line(x2, 70, x2, 90);
		//* Si estamos en mouse out
		} else {
			//* Dibujamos imagen al 50 de opacidad
			tint(255, 255, 255, 0.5);
			image(img, (x2 - x1) / 2 + x1 - 12.5, tipo);
		}
		//* Escribimos el texto
		escribe(texto, (x2 - x1) / 2 + x1, 30, 15, tipo);
	} else {
		//* Si estamos en mouse over
		if (tipo == 1) {
			//* Dibujamos imagen al 100 de opacidad
			tint(255, 255, 255, 1);
			image(img, (x2 - x1) / 2 + x1 - 12.5, tipo);
			//* Escribimos la cantidad de reportes
			if (valor == 1) {
				escribe(valor + " reporte", (x2 - x1) / 2 + x1, 55, 12, tipo);
			} else {
				escribe(valor + " reportes", (x2 - x1) / 2 + x1, 55, 12, tipo);
			}
			//* Dibujamos la línea de medición
			stroke(0);
			strokeWeight(2);
			line(x1, 80, x2, 80);
			line(x1, 70, x1, 90);
			line(x2, 70, x2, 90);
		//* Si estamos en mouse out
		} else {
			//* Dibujamos imagen al 50 de opacidad
			tint(255, 255, 255, 0.5);
			image(img, (x2 - x1) / 2 + x1 - 12.5, tipo);
		}
		//* Escribimos el texto
		escribe(texto, (x2 - x1) / 2 + x1, 30, 20, tipo);
	}
}

//funcion Escribir textos
//param texto: texto a escribir
//param x: posicion en x
//param y: posicion en y
//param tipo: titulo/texto normal
function escribe(texto, x, y, size, tipo) {
	if (tipo == 1) {
		fill(51, 51, 51);
	} else {
		fill(51, 51, 51, 0.5);
	}
	noStroke();
	//* Posicion estandar del texto
	textAlign(CENTER, TOP);
	textSize(size);
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
