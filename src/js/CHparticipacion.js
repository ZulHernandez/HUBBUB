//main Variables
//* Color
const rose = "#ef5da8BF";
const blue = "#0075ffBF";

var fechaMainText = "2022";
var tipoGraph = 1;
var contAnual = 1;
var datos, arraySelect, lastPos, keysAnual, valuesAnual, keysMensual, valuesMensual, maxY, colorFill;

function setChart(a) {
	let fechaMain = document.getElementById("fechaMain");
	let totalReportes = document.getElementById("totalReportes");
	let suma = 0;
	tipoGraph = a;
	switch (tipoGraph) {
		case 1:
			keysAnual = Object.keys(anual);
			valuesAnual = Object.values(anual);
			maxY = Math.max(...[].concat.apply([], valuesAnual));
			colorFill = rose;

			lastPos = keysAnual.length;
			fechaMainText = keysAnual[lastPos - 1];
			fechaMain.innerHTML = fechaMainText;
			suma = 0;
			for (let i = 0; i < valuesAnual[lastPos - 1].length; i++) {
				suma += valuesAnual[lastPos - 1][i];
			}
			totalReportes.innerHTML = "Total de " + suma + " reportes";
			datos = valuesAnual[lastPos - 1];
			break;
		case 2:
			keysMensual = Object.keys(mensual);
			valuesMensual = Object.values(mensual);
			maxY = Math.max(...[].concat.apply([], valuesMensual));
			colorFill = blue;

			lastPos = keysMensual.length;
			fechaMainText = keysMensual[0].replace("_", " ");
			fechaMain.innerHTML = fechaMainText;
			suma = 0;
			for (let i = 0; i < valuesMensual[0].length; i++) {
				suma += valuesMensual[0][i];
			}
			totalReportes.innerHTML = "Total de " + suma + " reportes";
			datos = valuesMensual[0];
			break;
	}
	canvaClasRuido.data.datasets[0].data = datos;
	canvaClasRuido.options.scales.y.max =  maxY;
	canvaClasRuido.data.datasets[0].fill.above = colorFill;
	canvaClasRuido.update();
}

function mueveChart(a) {
	let suma;
	if (tipoGraph == 1) {
		if (a == 1) {
			contAnual++;
			if (contAnual > keysAnual.length) {
				contAnual = 0;
			}
		}
		if (a == 0) {
			contAnual--;
			if (contAnual < 0) {
				contAnual = keysAnual.length;
			}
		}
		// switch (contAnual) {
		// 	case 0:
		// 		fechaMainText = "2021";
		// 		fechaMain.innerHTML = fechaMainText;
		// 		suma = 0;
		// 		for (let i = 0; i < anual[0].dosuno.length; i++) {
		// 			suma += anual[0].dosuno[i];
		// 		}
		// 		totalReportes.innerHTML = "Total de " + suma + " reportes";
		// 		datos = anual[0].dosuno;
		// 		break;
		// 	case 1:
		// 		fechaMainText = "2022";
		// 		fechaMain.innerHTML = fechaMainText;
		// 		suma = 0;
		// 		for (let i = 0; i < anual[0].dosdos.length; i++) {
		// 			suma += anual[0].dosdos[i];
		// 		}
		// 		totalReportes.innerHTML = "Total de " + suma + " reportes";
		// 		datos = anual[0].dosdos;
		// 		break;

		// }
		canvaClasRuido.data.datasets[0].data = datos;
		canvaClasRuido.update();
	}
}

//* Quitamos el título del los tooltips
const titleTooltip = (tooltipItems) => {
	return "";
};

//* Opciones para la gráfica
const options = {
	//* Datos a gráficar
	data: {
		labels: anualLabel,
		datasets: [
			//* Gráfica de área para ruido muy bajo
			{
				type: "line",
				label: "Reportes",
				data: datos,
				fill: {
					target: "origin",
					above: rose,
				},
				borderWidth: 0,
				showLine: false,
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
							return `${context.raw} reporte`;
						} else {
							return `${context.raw} reportes`;
						}
					},
					//* dB promedio del objeto
					label: (context) => {
						return `${context.label}` + " " + fechaMainText;
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
			point: {
				pointBackgroundColor: "white",
				pointBorderColor: "black",
				pointBorderWidth: 2,
				pointHitRadius: 15,
				pointHoverRadius: 7.5,
				pointHoverBorderWidth: 3,
				pointHoverBackgroundColor: "white",
				pointRadius: 5,
			},
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
			x: {
				//* Estilo de las lineas del eje
				grid: {
					lineWidth: 3,
					//* Definimos el color de las lineas
					drawBorder: true,
					borderColor: "#333333",
					tickColor: "#333333",
					borderWidth: 3,
					drawTicks: true,
					tickLength: 15,
					tickWidth: 3,
					//* Determinamos lineas primarias y secundarias
					offset: 0,
				},

				ticks: {
					color: "#333333",
					display: true,
					padding: 10,
					font: {
						size: 14,
						family: "Montserrat-M",
					},
				},
			},
		},
	},
};

//* Dibujamos el gráfico
const ctx = document.getElementById("canvaParticipacion");
const canvaClasRuido = new Chart(ctx, options);
