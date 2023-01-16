//main Datos por tipo de visualización
//param ESTRUCTURA DE DATOS:
	//*Año = Año, se debe agregar un año nuevo cada año
		//*VALORES: número de reportes totales por meses. Siempre son 12 valores
		//param Si no hay reportes en ese mes, se debe poner un 0
//* Array divide los datos por años
var anual = {
	2022: [14, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	2021: [0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 0, 13],
};

//param ESTRUCTURA DE DATOS:
	//*Mes_Año = Mes y año, se debe agregar un mes nuevo cada mes y año
		//*VALORES: número de reportes totales por periodo de días
			//*Periodos por posición:  [0] = 01-05
									//*[1] = 06-10
									//*[2] = 11-15
									//*[3] = 16-20
									//*[4] = 21-25
									//*[5] = 26-31
		//param Si no hay reportes en ese periodo, se debe poner un 0
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
