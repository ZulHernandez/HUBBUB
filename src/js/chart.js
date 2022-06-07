//Variables
const pointImage1 = new Image(40, 40);
pointImage1.src = "../../assets/vector/v1.svg";
const pointImage2 = new Image(40, 40);
pointImage2.src = "../../assets/vector/v2.svg";
const pointImage3 = new Image(40, 40);
pointImage3.src = "../../assets/vector/v3.svg";
const pointImage4 = new Image(40, 40);
pointImage4.src = "../../assets/vector/v4.svg";
const pointImage5 = new Image(40, 40);
pointImage5.src = "../../assets/vector/v5.svg";
const pointImage6 = new Image(40, 40);
pointImage6.src = "../../assets/vector/v6.svg";
const pointImage7 = new Image(40, 40);
pointImage7.src = "../../assets/vector/v7.svg";
const pointImage8 = new Image(40, 40);
pointImage8.src = "../../assets/vector/v8.svg";
const pointImage9 = new Image(40, 40);
pointImage9.src = "../../assets/vector/v9.svg";
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

var audio = new Audio();

//Opciones para DECIBELES-SONES
const titleTooltip = (tooltipItems) => {
	return "";
};

const options = {
	data: {
		datasets: [
			{
				type: "line",
				label: "sounds",
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
				/*backgroundColor: ["#ffffff"],
				hoverBackgroundColor: ["#ffffff"],
				borderColor: ["#333333"],
				borderWidth: 2,*/
				showLine: false,
				order: 0,
				pointHitRadius: 40,
			},
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
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: "SONORIDAD (sones)",
				align: "start",
				font: {
					size: 14,
					family: "Montserrat-B",
				},
			},
			tooltip: {
				yAlign: "bottom",
				xAlign: "right",

				displayColors: false,
				mode: "point",
				position: "average",
				backgroundColor: "rgba(51,51,51,0.9)",
				callbacks: {
					//beforeTitle:
					title: titleTooltip,
					beforeLabel: (context) => {
						return `${context.raw[2]}`;
					},
					label: (context) => {
						return `~ ${context.raw[0]} dBA`;
					},
					afterLabel: (context) => {
						return `~ ${context.raw[1]} sones`;
					},
					footer: (context) => {
						return "¡Dame click!";
					},
				},
				bodyFont: {
					size: 15,
					family: "Montserrat-M",
				},
				padding: 10,
			},
		},
		elements: {
			point: {
				//radius: 10,
				//hoverRadius: 60,
				//hoverBorderWidth: 4,
				pointStyle: pointImage,
			},
		},
		scales: {
			y: {
				max: 130,
				min: -10,
				grid: {
					lineWidth: 3,
					color: "rgba(51,51,51,0.15)",

					drawBorder: true,
					borderColor: "#333333",
					borderWidth: 3,

					drawTicks: true,
					tickLength: 15,
					tickColor: (ctx) =>
						ctx.index == 0
							? "rgba(0,0,0,0)"
							: ctx.index == 14
							? "rgba(0,0,0,0)"
							: "#333333",
					offset: 0,
				},
				ticks: {
					display: true,
					padding: 10,
					stepSize: 10,
					color: (ctx) =>
						ctx.index == 0
							? "rgba(0,0,0,0)"
							: ctx.index == 14
							? "rgba(0,0,0,0)"
							: "#333333",
					font: {
						size: 14,
						family: "Montserrat-M",
					},
				},
			},
			x: {
				max: 105,
				min: 20,
				grid: {
					lineWidth: 3,
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
					callback: function (value, index, ticks) {
						return value + " dB";
					},
				},
			},
		},
	},
};
const ctx = document.getElementById("canvaClasRuido");
const canvaClasRuido = new Chart(ctx, options);

//Funciones
canvaClasRuido.canvas.onclick = clickEvent;
function clickEvent(click) {
	//console.log(click);
	const point = canvaClasRuido.getElementsAtEventForMode(
		click,
		"nearest",
		{ intersect: true },
		true
	);
	if (point[0]) {
		let indicador = point[0].index;
		switch (indicador) {
			case 3:
				audio.pause();
				audio.src = "../../assets/audio/grifo.mp3";
				audio.play();
				break;
			case 4:
				audio.pause();
				audio.src = "../../assets/audio/alarma.mp3";
				audio.play();
				break;
			case 5:
				audio.pause();
				audio.src = "../../assets/audio/rio.mp3";
				audio.play();
				break;
			case 6:
				audio.pause();
				audio.src = "../../assets/audio/pajaro.mp3";
				audio.play();
				break;
			case 7:
				audio.pause();
				audio.src = "../../assets/audio/chat.mp3";
				audio.play();
				break;
			case 8:
				audio.pause();
				audio.src = "../../assets/audio/tren.mp3";
				audio.play();
				break;
			case 9:
				audio.pause();
				audio.src = "../../assets/audio/taladro.mp3";
				audio.play();
				break;
			case 10:
				audio.pause();
				audio.src = "../../assets/audio/moto.mp3";
				audio.play();
				break;
			case 11:
				audio.pause();
				audio.src = "../../assets/audio/martillo.mp3";
				audio.play();
				break;
		}
	}
}

/*canvaClasRuido.canvas.addEventListener("mouseclick", (e) => {
	crosshair(canvaClasRuido, e);
});

function crosshair(chart, mousemove) {
	chart.update('none');
	const x = mousemove.offsetX;
	const y = mousemove.offsetY;

	const {
		ctx,
		chartArea: { top, bottom, left, right, width, height },
	} = chart;

	ctx.save();

	ctx.strokeStyle = '#333333';
	ctx.lineWidth = 3;

	if(mousemove.offsetX >= left && mousemove.offsetX <= right && mousemove.offsetY >= top && mousemove.offsetY <= bottom )
	{
		ctx.beginPath();
		ctx.moveTo(left,mousemove.offsetY);
		ctx.lineTo(right,mousemove.offsetY);
		ctx.stroke();
		ctx.closePath();
	
		ctx.beginPath();
		ctx.moveTo(mousemove.offsetX,top);
		ctx.lineTo(mousemove.offsetX,bottom);
		ctx.stroke();
		ctx.closePath();
	}

}*/
