//main Variables
//* Color
const rose = "#ef5da8BF";
const blue = "#0075ffBF";
//* Variables de seteo de los gráficos
var contaPasos,
	fechaMainText,
	datos,
	labels,
	tipoGraph,
	lastPos,
	maxY,
	colorFill,
	keysArray,
	valuesArray;
//* Obtenemos objetos del HTML
let btnAnual = document.getElementById("btnAnual");
let btnMensual = document.getElementById("btnMensual");
let bracketParti = document.getElementById("bracketParti");
let fechaMain = document.getElementById("fechaMain");
let totalReportes = document.getElementById("totalReportes");

//funcion Seteamos el tipo de visualización del gráfico
//param a = 1 para anual, 2 para mensual
function setChart(a) {
	//* Declaramso sumador para el total de reportes
	let suma;
	//* Declaramos el tipo de visualización del gráfico que esta en pantalla
	tipoGraph = a;
	//* Evaluamos el tipo de visualización del gráfico que esta en pantalla
	switch (tipoGraph) {
		//* Anual
		case 1:
			//* Obtenemos un array con los Key dentro del array anual
			keysArray = Object.keys(anual);
			//* Obtenemos un array con los valores dentro del array anual
			valuesArray = Object.values(anual);
			//* Seteamos el color del gráfico
			colorFill = rose;
			//* Seteamos las etiquetas en x del gráfico
			labels = anualLabel;
			//* Obtenemos el lugar donde se encuentra el último elemento del array
			lastPos = keysArray.length - 1;
			//* Setemos el nombre del último key del array
			fechaMainText = keysArray[lastPos];
			//* Reiniciamos sumador
			suma = 0;
			//* Sumamos todos los valores del array en la ultima posición
			for (let i = 0; i < valuesArray[lastPos].length; i++) {
				suma += valuesArray[lastPos][i];
			}
			//* Determinamos la vista de los botoes de visualización
			btnAnual.className = "btnAnualAct";
			btnAnual.style.borderColor = colorFill;
			bracketParti.style.borderColor = colorFill;
			btnMensual.className = "btnMensualIna";
			//* Indicamos posición inicial del carrusel
			contaPasos = lastPos;
			break;
		case 2:
			//* Obtenemos un array con los Key dentro del array mensual
			keysArray = Object.keys(mensual);
			//* Obtenemos un array con los valores dentro del array mensual
			valuesArray = Object.values(mensual);
			//* Seteamos el color del gráfico
			colorFill = blue;
			//* Obtenemos el lugar donde se encuentra el último elemento del array
			lastPos = keysArray.length - 1;
			//* Setemos el nombre del último key del array y remplazamos caracteres
			fechaMainText = keysArray[lastPos].replace("_", " ");
			//* Obtenemos el largo del string de la fecha
			let stringFL = fechaMainText.length;
			//* Evaluamos el año de la fecha
			//* Determinamos las labels de los meses de acuerdo al numero de su ultimo día
			switch (fechaMainText.substring(0, 3)) {
				case "Ene":
					labels = mensualLabel[0].tresuno;
					break;
				case "Feb":
					//* Evaluamos si el año es bisiesto
					if (fechaMainText.substring(stringFL - 2, stringFL) == "00") {
						if (fechaMainText.substring(stringFL - 4, stringFL) % 400 == 0) {
							labels = mensualLabel[0].dosnueve;
						} else {
							labels = mensualLabel[0].dosocho;
						}
					} else if (fechaMainText.substring(stringFL - 4, stringFL) % 4 == 0) {
						labels = mensualLabel[0].dosnueve;
					} else {
						labels = mensualLabel[0].dosocho;
					}
					break;
				case "Mar":
					labels = mensualLabel[0].tresuno;
					break;
				case "Abr":
					labels = mensualLabel[0].trescero;
					break;
				case "May":
					labels = mensualLabel[0].tresuno;
					break;
				case "Jun":
					labels = mensualLabel[0].trescero;
					break;
				case "Jul":
					labels = mensualLabel[0].tresuno;
					break;
				case "Ago":
					labels = mensualLabel[0].tresuno;
					break;
				case "Sep":
					labels = mensualLabel[0].trescero;
					break;
				case "Oct":
					labels = mensualLabel[0].tresuno;
					break;
				case "Nov":
					labels = mensualLabel[0].trescero;
					break;
				case "Dic":
					labels = mensualLabel[0].tresuno;
					break;
			}
			//* Reiniciamos sumador
			suma = 0;
			//* Sumamos todos los valores del array en la ultima posición
			for (let i = 0; i < valuesArray[lastPos].length; i++) {
				suma += valuesArray[lastPos][i];
			}
			//* Determinamos la vista de los botoes de visualización
			btnAnual.className = "btnAnualIna";
			btnMensual.className = "btnMensualAct";
			btnMensual.style.borderColor = colorFill;
			bracketParti.style.borderColor = colorFill;
			//* Indicamos posición inicial del carrusel
			contaPasos = 0;
			break;
	}
	//* Seteamos la data a mostrar en el gráfico
	datos = valuesArray[lastPos];
	//* Seteamos el valor máximo del eje y deacuerdo al mayor valor del array
	maxY = Math.max(...[].concat.apply([], valuesArray));
	//* Pintamos los reportes totales de la fecha
	totalReportes.innerHTML = "Total de " + suma + " reportes";
	//* Pintamos la fecha
	fechaMain.innerHTML = fechaMainText;
	//* Cargamos la data a mostrar en el gráfico
	canvaClasRuido.data.datasets[0].data = datos;
	//* Cargamos el valor máximo del eje y
	canvaClasRuido.options.scales.y.max = maxY;
	//* Cargamos el color del gráfico
	canvaClasRuido.data.datasets[0].fill.above = colorFill;
	//* Cargamos las labels del eje x
	canvaClasRuido.data.labels = labels;
	//* Actualizamos el gráfico
	canvaClasRuido.update();
}

//funcion Mueve el carrusel del gráfico
//param a = 1 para mover hacia adelante y 0 para mover hacia atras
function mueveChart(a) {
	//* Iniciamos el sumador
	let suma;
	//* Evaluamos si avanzamos
	if (a == 1) {
		contaPasos++;
		//* Si el contador de pasos es mayor a la cantidad de pasos que se pueden hacer en el carrusel entonces se reinicia
		if (contaPasos > lastPos) {
			contaPasos = 0;
		}
	}
	//* Evaluamos si retrocedemos
	if (a == 0) {
		contaPasos--;
		//* Si el contador de pasos es menor a 0 entonces pintamos la ultima posición
		if (contaPasos < 0) {
			contaPasos = lastPos;
		}
	}

	//* Seteamos el formato de la fecha
	fechaMainText = keysArray[contaPasos].replace("_", " ");
	//* Obtenemos la longitud de la fecha
	let stringFL = fechaMainText.length;
	//* Evaluamos el tipo de visualización
	switch (tipoGraph) {
		//* Visualización anual
		case 1:
			labels = anualLabel;
			break;
		//* Visualización mensual
		case 2:
			//* Evaluamos el año de la fecha
			switch (fechaMainText.substring(0, 3)) {
				case "Ene":
					labels = mensualLabel[0].tresuno;
					break;
				case "Feb":
					//* Evaluamos si el año es bisiesto
					if (fechaMainText.substring(stringFL - 2, stringFL) == "00") {
						if (fechaMainText.substring(stringFL - 4, stringFL) % 400 == 0) {
							labels = mensualLabel[0].dosnueve;
						} else {
							labels = mensualLabel[0].dosocho;
						}
					} else if (fechaMainText.substring(stringFL - 4, stringFL) % 4 == 0) {
						labels = mensualLabel[0].dosnueve;
					} else {
						labels = mensualLabel[0].dosocho;
					}
					break;
				case "Mar":
					labels = mensualLabel[0].tresuno;
					break;
				case "Abr":
					labels = mensualLabel[0].trescero;
					break;
				case "May":
					labels = mensualLabel[0].tresuno;
					break;
				case "Jun":
					labels = mensualLabel[0].trescero;
					break;
				case "Jul":
					labels = mensualLabel[0].tresuno;
					break;
				case "Ago":
					labels = mensualLabel[0].tresuno;
					break;
				case "Sep":
					labels = mensualLabel[0].trescero;
					break;
				case "Oct":
					labels = mensualLabel[0].tresuno;
					break;
				case "Nov":
					labels = mensualLabel[0].trescero;
					break;
				case "Dic":
					labels = mensualLabel[0].tresuno;
					break;
			}
			break;
	}
	//* Reiniciamos el sumador
	suma = 0;
	//* Sumamos loa valores dentro del array en la posición correspondiente
	for (let i = 0; i < valuesArray[contaPasos].length; i++) {
		suma += valuesArray[contaPasos][i];
	}
	//* Seteamos la data a mostrar en el gráfico
	datos = valuesArray[contaPasos];
	//* Pintamos los reportes totales de la fecha
	totalReportes.innerHTML = "Total de " + suma + " reportes";
	//* Pintamos la fecha
	fechaMain.innerHTML = fechaMainText;
	//* Cargamos la data a mostrar en el gráfico
	canvaClasRuido.data.datasets[0].data = datos;
	//* Cargamos las labels del eje x
	canvaClasRuido.data.labels = labels;
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
		labels: labels,
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