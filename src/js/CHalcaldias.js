const jsonO = sortJSON(alca, "tReportes", "desc");
let datos = [, , , , , , ,];
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
	"#be7a9d80",
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

function mapClick(a) {
	if (a == jsonO[0].alc) {
		setChart(0);
	} else if (a == jsonO[1].alc) {
		setChart(1);
	} else if (a == jsonO[2].alc) {
		setChart(2);
	} else if (a == jsonO[3].alc) {
		setChart(3);
	} else if (a == jsonO[4].alc) {
		setChart(4);
	} else if (a == jsonO[5].alc) {
		setChart(5);
	} else if (a == jsonO[6].alc) {
		setChart(6);
	} else if (a == jsonO[7].alc) {
		setChart(7);
	} else if (a == jsonO[8].alc) {
		setChart(8);
	} else if (a == jsonO[9].alc) {
		setChart(9);
	} else if (a == jsonO[10].alc) {
		setChart(10);
	} else if (a == jsonO[11].alc) {
		setChart(11);
	} else if (a == jsonO[12].alc) {
		setChart(12);
	} else if (a == jsonO[13].alc) {
		setChart(13);
	} else if (a == jsonO[14].alc) {
		setChart(14);
	} else if (a == jsonO[15].alc) {
		setChart(15);
	}
}

//funcion Seteamos el tipo de visualización del gráfico
//param a = 1 para anual, 2 para mensual
function setChart(a) {
	//datos = [];

	indice = a;
	//* Declaramos sumador para el total de reportes
	let suma = 0;

	for (let i = 0; i < 8; i++) {
		switch (i) {
			case 0:
				datos[0] = jsonO[a].trafico.length;
				break;
			case 1:
				datos[1] = jsonO[a].aereo.length;
				break;
			case 2:
				datos[2] = jsonO[a].maquinaria.length;
				break;
			case 3:
				datos[3] = jsonO[a].fiesta.length;
				break;
			case 4:
				datos[4] = jsonO[a].bocina.length;
				break;
			case 5:
				datos[5] = jsonO[a].animal.length;
				break;
			case 6:
				datos[6] = jsonO[a].servicios.length;
				break;
			case 7:
				datos[7] = jsonO[a].otros.length;
				break;
		}
	}
	console.log(datos);

	for (let i = 0; i < 16; i++) {
		document.getElementById("draw" + jsonO[i].alc).style.fill = degr[i].slice(
			0,
			-2
		);
		document.getElementById("vini" + i).style.fill = degr[i].slice(0, -2);
		document.getElementById("alc" + i).innerHTML = tradAlc(i);
		document.getElementById(jsonO[i].alc).style.opacity = "0.5";
		document.getElementById("parr" + i).style.cursor = "pointer";
		document.getElementById("parr" + i).classList.add("alcLink");
	}

	document.getElementById("draw" + jsonO[a].alc).style.fill = degr[a].slice(
		0,
		-2
	);
	document.getElementById(jsonO[a].alc).style.opacity = "1";
	document.getElementById("alc" + a).innerHTML = "<b>" + tradAlc(a) + "</b>";
	document.getElementById("parr" + a).classList.remove("alcLink");
	document.getElementById("parr" + a).style.cursor = "context-menu";
	document.getElementById("vini" + a).style.fill = degr[a].slice(0, -2);

	for (let i = 0; i < 8; i++) {
		suma += datos[i];
	}

	alcCir.style.fill = degr[a].slice(0, -2);
	//* Seteamos el valor máximo del eje y deacuerdo al mayor valor del array
	maxY = Math.max(...[].concat.apply([], datos));
	//* Pintamos los reportes totales de la fecha
	totalReportes.innerHTML = "Total de " + suma + " reportes";
	//* Pintamos el nombre de la alcaldía
	alcaldiaName.innerHTML = "&nbsp;&nbsp;&nbsp;" + tradAlc(a);
	//* Cargamos la data a mostrar en el gráfico
	canvaAlcaldia.data.datasets.data = datos;
	//* Cargamos el valor máximo del eje y
	canvaAlcaldia.options.scales.r.max = maxY + 1;
	//* Actualizamos el gráfico
	canvaAlcaldia.update();
}

function mueveChart(a) {
	if (a == 0) {
		if (indice == 0) {
			setChart(15);
		} else {
			setChart(indice - 1);
		}
	} else if (a == 1) {
		if (indice == 15) {
			setChart(0);
		} else {
			setChart(indice + 1);
		}
	}
}

//* Dibujamos el gráfico
var ctx = document.getElementById("canvaAlcaldia").getContext("2d");

//* Quitamos el título del los tooltips
const titleTooltip = (tooltipItems) => {
	return "";
};

function tradAlc(a) {
	var alcaldiaN;
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
	return alcaldiaN;
}

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
				data: datos,
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
					//* dB promedio del objeto
					label: (context) => {
						if (context.raw == 1) {
							return `${context.raw} reporte`;
						} else if (context.raw == 0) {
							return "";
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
