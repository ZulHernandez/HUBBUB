//main Variables
//* Cargamos imagenes por cada punto de la gráfica
const pointImage1 = new Image(40, 40);
pointImage1.src = "../../../../assets/vector/puntosClasi/v1.svg";
const pointImage2 = new Image(40, 40);
pointImage2.src = "../../../../assets/vector/puntosClasi/v2.svg";
const pointImage3 = new Image(40, 40);
pointImage3.src = "../../../../assets/vector/puntosClasi/v3.svg";
const pointImage4 = new Image(40, 40);
pointImage4.src = "../../../../assets/vector/puntosClasi/v4.svg";
const pointImage5 = new Image(40, 40);
pointImage5.src = "../../../../assets/vector/puntosClasi/v5.svg";
const pointImage6 = new Image(40, 40);
pointImage6.src = "../../../../assets/vector/puntosClasi/v6.svg";
const pointImage7 = new Image(40, 40);
pointImage7.src = "../../../../assets/vector/puntosClasi/v7.svg";
const pointImage8 = new Image(40, 40);
pointImage8.src = "../../../../assets/vector/puntosClasi/v8.svg";
const pointImage9 = new Image(40, 40);
pointImage9.src = "../../../../assets/vector/puntosClasi/v9.svg";
//* Guardamos las imagenes en un array
const pointImage = [
	,
	,
	,
	pointImage1,
	pointImage2,
	pointImage3,
	pointImage4,
	pointImage5,
	pointImage6,
	pointImage7,
	pointImage8,
	pointImage9,
];
//* Variable para audio
var audio = new Audio();
//* Quitamos el título del los tooltips
const titleTooltip = (tooltipItems) => {
	return "";
};

//* Opciones para la gráfica
const options = {
	//* Datos a gráficar
	data: {
		datasets: [
			//* Gráfica de tipo linea
			{
				type: "line",
				label: "sounds",
				//* Puntos de la gráfica
				data: [
					[],
					[],
					[],
					[30, 1, "Grifo Goteando"],
					[40, 2, "Alarma de reloj"],
					[51, 4, "Río"],
					[61, 7, "Trinar de un ave"],
					[71, 23, "Conversación promedio"],
					[80, 37, "Tren de pasajeros"],
					[86, 63, "Taladro eléctrico"],
					[93, 106, "Motocicleta"],
					[100, 116, "Martillo demoledor"],
				],
				//* Estilos de los puntos
				backgroundColor: ["#ffffff"],
				hoverBackgroundColor: ["#ffffff"],
				borderColor: ["#333333"],
				borderWidth: 2,
				showLine: false,
				order: 0,
				pointHitRadius: 40,
			},
			//* Gráfica de área para ruido muy bajo
			{
				type: "line",
				label: "back",
				data: [
					[0, -10],
					[30, -10],
				],
				backgroundColor: ["rgba(255,250,124,0.5)"],
				borderWidth: 0,
				showLine: false,
				fill: { value: 130 },
				radius: 0,
			},
			//* Gráfica de área para ruido bajo
			{
				type: "line",
				label: "back",
				data: [
					[30, -10],
					[55, -10],
				],
				backgroundColor: ["rgba(255,195,124,0.5)"],
				borderWidth: 0,
				showLine: false,
				fill: { value: 130 },
				radius: 0,
			},
			//* Gráfica de área para ruido ruidoso
			{
				type: "line",
				label: "back",
				data: [
					[55, -10],
					[110, -10],
				],
				backgroundColor: ["rgba(255,124,124,0.5)"],
				borderWidth: 0,
				showLine: false,
				fill: { value: 130 },
				radius: 0,
			},
		],
	},
	options: {
		plugins: {
			//* Ocultamos leyenda
			legend: {
				display: false,
			},
			//* Titulo del eje y
			title: {
				display: true,
				text: "SONORIDAD (sones)",
				align: "start",
				font: {
					size: 14,
					family: "Montserrat-B",
				},
			},
			//* Estilos del tootltip
			tooltip: {
				//* posicion del tooltip
				yAlign: "bottom",
				xAlign: "right",
				//* Ocultamos el color del dato
				displayColors: false,
				//* Modo de interacción
				mode: "point",
				position: "average",
				//* Color del tooltip
				backgroundColor: "rgba(51,51,51,0.9)",
				//* Estructura del texto del tooltip
				callbacks: {
					//* Quitamos el título del los tooltips
					title: titleTooltip,
					//* Nombre del objeto
					beforeLabel: (context) => {
						return `${context.raw[2]}`;
					},
					//* dB promedio del objeto
					label: (context) => {
						return `~ ${context.raw[0]} dBA`;
					},
					//* Sones promedio del objeto
					afterLabel: (context) => {
						return `~ ${context.raw[1]} sones`;
					},
					//* Llamada a la acción
					footer: (context) => {
						return "¡Dame click!";
					},
				},
				//* Fuente del tooltip
				bodyFont: {
					size: 15,
					family: "Montserrat-M",
				},
				padding: 10,
			},
		},
		elements: {
			//* Ponemos imagenes en los puntos
			point: {
				pointStyle: pointImage,
			},
		},
		scales: {
			//* Eje y
			y: {
				//* Rango del eje
				max: 130,
				min: -10,
				//* Estilo de las lineas del eje
				grid: {
					lineWidth: 3,
					color: "rgba(51,51,51,0.15)",
					drawBorder: true,
					borderColor: "#333333",
					borderWidth: 3,
					//Dibujamos lineas de rangos
					drawTicks: true,
					tickLength: 15,
					//Determinamos lineas primarias y secundarias
					tickColor: (ctx) =>
						ctx.index == 0
							? "rgba(0,0,0,0)"
							: ctx.index == 14
							? "rgba(0,0,0,0)"
							: "#333333",
					offset: 0,
				},
				//* Estilo de las ticks del eje
				ticks: {
					display: true,
					padding: 10,
					//* Espacio entre ticks
					stepSize: 10,
					//* Determinamos lineas primarias y secundarias
					color: (ctx) =>
						ctx.index == 0
							? "rgba(0,0,0,0)"
							: ctx.index == 14
							? "rgba(0,0,0,0)"
							: "#333333",
					//* Fuente de las ticks
					font: {
						size: 14,
						family: "Montserrat-M",
					},
				},
			},
			//* Eje x
			x: {
				//* Rango del eje
				max: 105,
				min: 20,
				//* Título del eje X
				title: {
					display: true,
					text: "NIVEL DE PRESIÓN SONORA (Decibeles)",
					align: "center",
					padding: {
						top: 30,
					},
					font: {
						size: 14,
						family: "Montserrat-B",
					},
				},
				//* Estilo de las lineas del eje
				grid: {
					lineWidth: 3,
					//* Definimos el color de las lineas
					color: [
						"rgba(51,51,51,0.15)",
						"rgba(51,51,51,0.15)",
						"rgba(51,51,51,0.15)",
						"rgba(51,51,51,0.15)",
						"rgba(51,51,51,0.15)",
						"rgba(51,51,51,0.15)",
						"rgba(51,51,51,1)",
						"rgba(51,51,51,0.15)",
						"rgba(51,51,51,0.15)",
						"rgba(51,51,51,0.15)",
						"rgba(51,51,51,0.15)",
						"rgba(51,51,51,0.15)",
					],
					drawBorder: true,
					borderColor: "#333333",
					borderWidth: 3,
					lineWidth: (ctx) =>
						ctx.index == 10 ? 3 : ctx.index % 2 == 0 ? 3 : 1.5,
					drawTicks: true,
					tickLength: 15,
					tickWidth: 3,
					//* Determinamos lineas primarias y secundarias
					tickColor: (ctx) =>
						ctx.index == 10
							? "#333333"
							: ctx.index == 0
							? "rgba(0,0,0,0)"
							: ctx.index == 22
							? "rgba(0,0,0,0)"
							: ctx.index % 2 == 0
							? "#333333"
							: "rgba(0,0,0,0)",
					offset: 0,
				},
				type: "linear",
				ticks: {
					display: true,
					padding: 10,
					stepSize: 5,
					//* Determinamos ticks primarias y secundarias
					color: (ctx) =>
						ctx.index == 10
							? "#333333"
							: ctx.index == 0
							? "rgba(0,0,0,0)"
							: ctx.index == 22
							? "rgba(0,0,0,0)"
							: ctx.index % 2 == 0
							? "#333333"
							: "rgba(0,0,0,0)",
					font: {
						size: 14,
						family: "Montserrat-M",
					},
					//* Determinamos formato de las ticks
					callback: function (value, index, ticks) {
						return value + " dB";
					},
				},
			},
		},
	},
};

//* Dibujamos el gráfico
const ctx = document.getElementById("canvaClasRuido");
const canvaClasRuido = new Chart(ctx, options);

//* Listener para clicks
canvaClasRuido.canvas.onclick = ruido;

//funcion Reproducimos el audio
function ruido(click) {
	//* Evaluamos si se dio click en algun punto
	const point = canvaClasRuido.getElementsAtEventForMode(
		click,
		"nearest",
		{ intersect: true },
		true
	);
	//* Evaluamos que punto se dio click y reproducimos el audio correspondiente
	if (point[0]) {
		let indicador = point[0].index;
		switch (indicador) {
			case 3:
				audio.pause();
				audio.src = "../../../../assets/audio/grifo.mp3";
				audio.play();
				break;
			case 4:
				audio.pause();
				audio.src = "../../../../assets/audio/alarma.mp3";
				audio.play();
				break;
			case 5:
				audio.pause();
				audio.src = "../../../../assets/audio/rio.mp3";
				audio.play();
				break;
			case 6:
				audio.pause();
				audio.src = "../../../../assets/audio/pajaro.mp3";
				audio.play();
				break;
			case 7:
				audio.pause();
				audio.src = "../../../../assets/audio/chat.mp3";
				audio.play();
				break;
			case 8:
				audio.pause();
				audio.src = "../../../../assets/audio/tren.mp3";
				audio.play();
				break;
			case 9:
				audio.pause();
				audio.src = "../../../../assets/audio/taladro.mp3";
				audio.play();
				break;
			case 10:
				audio.pause();
				audio.src = "../../../../assets/audio/moto.mp3";
				audio.play();
				break;
			case 11:
				audio.pause();
				audio.src = "../../../../assets/audio/martillo.mp3";
				audio.play();
				break;
		}
	}
}