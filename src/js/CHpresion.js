//main Variables
//* Color
let deg = [
	"#7CE0FFBF",
	"#89D0FFBF",
	"#B4BAFFBF",
	"#E1A0EABF",
	"#FE87B8BF",
	"#FF7C7CBF",
];

//* Variables de seteo de los gráficos
var maxY;
let promedio;
let promedioData = [];
let promedioDB = [];
let valuesArray = [];

//* Obtenemos los elementos del HTML
let totalReportes = document.getElementById("totalReportes");
let promRep = document.getElementById("promRep");
let promDB = document.getElementById("promDB");

//* Dibujamos el gráfico
var ctx = document.getElementById("canvaPresionCH").getContext("2d");
//* Creamos el gradiante de colores
const gradiante = ctx.createLinearGradient(0, 0, 1100, 0);
gradiante.addColorStop(1 / 6, deg[0]);
gradiante.addColorStop(2 / 6, deg[1]);
gradiante.addColorStop(3 / 6, deg[2]);
gradiante.addColorStop(4 / 6, deg[3]);
gradiante.addColorStop(5 / 6, deg[4]);
gradiante.addColorStop(6 / 6, deg[5]);

//funcion Seteamos el gráfico
function setChart() {
	//* Declaramos sumador para el total de reportes y de DB
	let suma = 0;
	let suma1 = 0;
	//* Seteamos el valor máximo del eje y
	valuesArray = [];
	for (let i = 0; i < reportes.length; i++) {
		valuesArray.push(reportes[i][1]);
	}
	maxY = Math.max(...valuesArray);
	//* Pintamos los reportes totales
	for (let j = 0; j < reportes.length; j++) {
		suma = suma + reportes[j][1];
	}
	totalReportes.innerHTML = "Total de <b>" + suma + " reportes</b>";
	//* Cargamos el valor máximo del eje y
	canvaClasRuido.options.scales.y.max = maxY + 1;
	//* Calculamos el promedio de los reportes
	promedio = 0;
	promedio = suma / valuesArray.length;
	promedioData = [
		[30, promedio],
		[90, promedio],
	];

	for (let j = 0; j < reportes.length; j++) {
		suma1 = suma1 + reportes[j][1]*reportes[j][0];
	}
	//* Pintamos el promedio de los reportes
	promRep.innerHTML = promedio.toFixed(1) + " reportes";
	//* Calculamos el promedio de los DB
	promedio = 0;
	promedio = suma1 / suma;
	promedioDB = [
		[promedio, maxY+1],
		[promedio, 0],
	];
	//* Pintamos el promedio de los DB
	promDB.innerHTML = promedio.toFixed(1) + " decibelios";
	//* Cargamos la data a mostrar en el gráfico
	canvaClasRuido.data.datasets[0].data = promedioDB;
	canvaClasRuido.data.datasets[1].data = promedioData;
	canvaClasRuido.data.datasets[2].data = reportes;
	//* Actualizamos el gráfico
	canvaClasRuido.update();
}

//* Quitamos el título del los tooltips
const titleTooltip = (tooltipItems) => {
	return "";
};

//* Opciones para la gráfica
const options = {
	//* Datos a gráficar
	data: {
		datasets: [
			//* Promedio
			{
				type: "line",
				label: "prom1",
				data: promedioDB,
				borderColor: "#333333",
				borderWidth: 3,
				showLine: true,
				radius: 0,
				borderDash: [10, 10],
				fill: true,
				backgroundColor: "#33333320",
			},
			//* Promedio
			{
				type: "line",
				label: "prom2",
				data: promedio,
				borderColor: "#333333",
				borderWidth: 3,
				showLine: true,
				radius: 0,
				borderDash: [10, 10],
				fill: false,
			},
			//* Gráfica de área para ruido muy bajo
			{
				type: "line",
				label: "Reportes",
				data: [0],
				fill: true,
				backgroundColor: gradiante,
				borderWidth: 0,
				showLine: false,
				pointBackgroundColor: "white",
				pointBorderColor: "black",
				pointBorderWidth: 2,
				pointHitRadius: 10,
				pointHoverRadius: 5,
				pointHoverBorderWidth: 1,
				pointHoverBackgroundColor: "white",
				pointRadius: 0,
				tension: 0.4,
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
				text: "No. de reportes",
				align: "start",
				font: {
					size: 14,
					family: "Montserrat-B",
				},
				padding: 20,
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
					//* Número de reportes
					beforeLabel: (context) => {
						if (context.raw == 1) {
							return `${context.raw[1]} reporte`;
						} else {
							return `${context.raw[1]} reportes`;
						}
					},
					//* dB promedio del objeto
					label: (context) => {
						return `${context.raw[0]}` + " decibeles";
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
			point: {},
		},
		scales: {
			y: {
				min: 0,
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
					tickColor: "#333333",
					offset: 0,
				},
				//* Estilo de las ticks del eje
				ticks: {
					display: true,
					padding: 10,
					//* Espacio entre ticks
					stepSize: 1,
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
				max: 90,
				min: 30,
				//* Título del eje X
				title: {
					display: false,
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
					color: "rgba(51,51,51,0.15)",
					drawBorder: true,
					borderColor: "#333333",
					borderWidth: 3,
					lineWidth: (ctx) => (ctx.index % 5 == 0 ? 3 : 1.5),
					drawTicks: true,
					tickLength: 15,
					tickWidth: 3,
					//* Determinamos lineas primarias y secundarias
					tickColor: (ctx) =>
						ctx.index % 5 == 0 ? "#333333" : "rgba(0,0,0,0)",
					offset: 0,
				},
				type: "linear",
				ticks: {
					display: true,
					padding: 10,
					stepSize: 1,
					//* Determinamos ticks primarias y secundarias
					color: (ctx) => (ctx.index % 5 == 0 ? "#333333" : "rgba(0,0,0,0)"),
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

const canvaClasRuido = new Chart(ctx, options);

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
