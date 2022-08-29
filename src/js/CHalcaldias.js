const jsonO = sortJSON(alca, "tReportes", "desc");
let datos = [];
let datosAmp = [];
let indice = 0;
const degr = [
	"#EF5DA880",
	"#F161A380",
	"#F3659D80",
	"#F5699880",
	"#F76D9280",
	"#F9708D80",
	"#FB748780",
	"#FD788280",
	"#DF7B8C80",
	"#807A9D80",
	"#9F79AD80",
	"#8079BE80",
	"#6078CE80",
	"#4077DE80",
	"#2076EF80",
	"#0075FF80",
];

let totalReportes = document.getElementById("totalReportes");
let alcaldiaName = document.getElementById("alcaldiaName");
let alcCir = document.getElementById("alcCir");

//funcion Seteamos el tipo de visualización del gráfico
//param a = 1 para anual, 2 para mensual
function setChart(a) {
	indice = a;
	//* Declaramos sumador para el total de reportes
	let suma = 0;

	for (let i = 0; i < 8; i++) {
		switch (i) {
			case 0:
				datos.push(jsonO[a].trafico.length);
				datosAmp[i] = [
					datos[i],
					"" + Math.max(...[].concat.apply([], jsonO[a].trafico)),
				];
				break;
			case 1:
				datos.push(jsonO[a].aereo.length);
				datosAmp[i] = [
					datos[i],
					"" + Math.max(...[].concat.apply([], jsonO[a].aereo)),
				];
				break;
			case 2:
				datos.push(jsonO[a].maquinaria.length);
				datosAmp[i] = [
					datos[i],
					"" + Math.max(...[].concat.apply([], jsonO[a].maquinaria)),
				];
				break;
			case 3:
				datos.push(jsonO[a].fiesta.length);
				datosAmp[i] = [
					datos[i],
					"" + Math.max(...[].concat.apply([], jsonO[a].fiesta)),
				];
				break;
			case 4:
				datos.push(jsonO[a].bocina.length);
				datosAmp[i] = [
					datos[i],
					"" + Math.max(...[].concat.apply([], jsonO[a].bocina)),
				];
				break;
			case 5:
				datos.push(jsonO[a].animal.length);
				datosAmp[i] = [
					datos[i],
					"" + Math.max(...[].concat.apply([], jsonO[a].animal)),
				];
				break;
			case 6:
				datos.push(jsonO[a].servicios.length);
				datosAmp[i] = [
					datos[i],
					"" + Math.max(...[].concat.apply([], jsonO[a].servicios)),
				];
				break;
			case 7:
				datos.push(jsonO[a].otros.length);
				datosAmp[i] = [
					datos[i],
					"" + Math.max(...[].concat.apply([], jsonO[a].otros)),
				];
				break;
		}
	}
	console.log(datos);
	console.log(datosAmp);

	/* for (let i = 0; i < 8; i++) {
		datosAmp[i] = [datos[i], i];
	}
 */
	for (let i = 0; i < 8; i++) {
		suma += datos[i];
	}

	let alcaldiaN = "";
	switch (jsonO[a].alc) {
		case "GusA":
			alcaldiaN = "Gustavo A. Madero";
			break;
		case "Azca":
			alcaldiaN = "Azcapotzalco";
			break;
		case "MigH":
			alcaldiaN = "Miguel Hidalgo";
			break;
		case "Cuau":
			alcaldiaN = "Cuauhtémoc";
			break;
		case "VenC":
			alcaldiaN = "Venustiano Carranza";
			break;
		case "CuaM":
			alcaldiaN = "Cuajimalpa de Morelos";
			break;
		case "AlvO":
			alcaldiaN = "Alvaro Obregon";
			break;
		case "BenJ":
			alcaldiaN = "Benito Juarez";
			break;
		case "Izta":
			alcaldiaN = "Iztacalco";
			break;
		case "Coyo":
			alcaldiaN = "Coyoacán";
			break;
		case "Iztp":
			alcaldiaN = "Iztapalapa";
			break;
		case "MagC":
			alcaldiaN = "Magdalena Contreras";
			break;
		case "Tlal":
			alcaldiaN = "Tlalpan";
			break;
		case "Xoch":
			alcaldiaN = "Xochimilco";
			break;
		case "Tlah":
			alcaldiaN = "Tláhuac";
			break;
		case "Milp":
			alcaldiaN = "Milpa Alta";
			break;
	}

	alcCir.style.fill = degr[a].slice(0, -2);
	//* Seteamos el valor máximo del eje y deacuerdo al mayor valor del array
	maxY = Math.max(...[].concat.apply([], datos));
	//* Pintamos los reportes totales de la fecha
	totalReportes.innerHTML = "Total de " + suma + " reportes";
	//* Pintamos el nombre de la alcaldía
	alcaldiaName.innerHTML = "&nbsp;&nbsp;&nbsp;" + alcaldiaN;
	//* Cargamos la data a mostrar en el gráfico
	canvaAlcaldia.data.datasets.data = datosAmp;
	//* Cargamos el valor máximo del eje y
	canvaAlcaldia.options.scales.r.max = maxY + 1;
	//* Actualizamos el gráfico
	canvaAlcaldia.update();
}

//* Dibujamos el gráfico
var ctx = document.getElementById("canvaAlcaldia").getContext("2d");

//* Quitamos el título del los tooltips
const titleTooltip = (tooltipItems) => {
	return "";
};

//* Opciones para la gráfica
const options = {
	//* Datos a gráficar
	data: {
		labels: [
			"Tráfico",
			"Aéreo",
			"Maquinaria",
			"Fiesta",
			"Bocina",
			"Animal",
			"Servicios",
			"Otros",
		],
		datasets: [
			{
				type: "radar",
				data: datosAmp,
				borderWidth: 5,
				borderColor: degr[indice],
				backgroundColor: degr[indice],
				pointBackgroundColor: "white",
				pointBorderColor: "black",
				pointBorderWidth: 2,
				pointHitRadius: 15,
				pointHoverRadius: (context) => {
					if (context.raw == 0) {
						return 0;
					} else {
						console.log(context);
						return 7.5;
					}
				},
				pointHoverBorderWidth: 3,
				pointHoverBackgroundColor: "white",
				pointRadius: (context) => {
					if (context.raw == 0) {
						return 0;
					} else {
						return 5;
					}
				},
			},
		],
	},
	options: {
		plugins: {
			//* Ocultamos leyenda
			legend: {
				display: false,
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
						if (context.raw == 1) {
							return `${context.raw} reporte`;
						} else {
							return `${context.raw} reportes`;
						}
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
		scales: {
			r: {
				angleLines: {
					display: false,
				},
				min: 0,
				max: 8,
			},
		},
	},
};

const canvaAlcaldia = new Chart(ctx, options);

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

//funcion para ordenar los datos del JSON
//param data: JSON
//param key: Key desde la que se ordenará
//param orden: ascendente o descendente
function sortJSON(data, key, orden) {
	//* Ordenamos el JSON
	return data.sort(function (a, b) {
		var x = a[key],
			y = b[key];
		//* Ordenamos ascendentemente
		if (orden === "asc") {
			return x < y ? -1 : x > y ? 1 : 0;
		}
		//* Ordenamos descendentemente
		if (orden === "desc") {
			return x > y ? -1 : x < y ? 1 : 0;
		}
	});
}
