//main Datos por tipo de visualización
//* Array divide los datos por años
var anual = {
	2022: [14, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	2021: [0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 0, 13],
};

//* Array divide los datos por meses
var mensual = {
	Septiembre_2021: [0, 2, 1, 3, 5, 0],
	Octubre_2021: [10, 1, 0, 0, 0, 0],
	Noviembre_2021: [0, 0, 0, 0, 0, 0],
	Diciembre_2021: [4, 2, 6, 1, 0, 0],
	Enero_2022: [6, 4, 0, 0, 0, 4],
	Febrero_2022: [0, 0, 0, 1, 0, 0],
	Marzo_2022: [1, 0, 0, 0, 0, 0],
};

//main Labels por tipo de visualización
//* Labels para la gráfica anual
var anualLabel = [
	"Ene",
	"Feb",
	"Mar",
	"Abr",
	"May",
	"Jun",
	"Jul",
	"Ago",
	"Sep",
	"Oct",
	"Nov",
	"Dic",
];

//* Labels para la gráfica mensual (Distinta por mes)
var mensualLabel = [
	{
		tresuno: ["01-05", "06-10", "11-15", "16-20", "21-25", "26-31"],
		trescero: ["01-05", "06-10", "11-15", "16-20", "21-25", "26-30"],
		dosnueve: ["01-05", "06-10", "11-15", "16-20", "21-25", "26-29"],
		dosocho: ["01-05", "06-10", "11-15", "16-20", "21-25", "26-28"],
	},
];
