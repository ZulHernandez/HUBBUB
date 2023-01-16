//main Datos por tipo de visualización

//param ESTRUCTURA DE DATOS:
	//*rango: rango de valores en dB
		//*VALORES: "30-39", "40-49", "50-59", "60-69", "70-79", "80-89". NO SE MODIFICAN
	//*color: color de la barra alpha 1. NO SE MODIFICAN
	//*colorT: color de la barra alpha 0.8. NO SE MODIFICAN
	//*valor: Numero de reportes en ese rango
	//*data: Array de valores en dB en ese rango
		//param si se repite un mismo valor se debe repetir en el array
//* Array divide los datos por rango
var presion = [
	{
		rango: "30_39",
		color: "#7CE0FF",
		colorT: "#7CE0FF80",
		valor: 2,
		data: [36, 37],
	},
	{
		rango: "40_49",
		color: "#89D0FF",
		colorT: "#89D0FF80",
		valor: 14,
		data: [40, 41, 41, 42, 42, 42, 42, 44, 45, 46, 46, 47, 47, 48],
	},
	{
		rango: "50_59",
		color: "#B4BAFF",
		colorT: "#B4BAFF80",
		valor: 11,
		data: [52, 53, 53, 53, 54, 54, 56, 58, 58, 58, 59],
	},
	{
		rango: "60_69",
		color: "#E1A0EA",
		colorT: "#E1A0EA80",
		valor: 7,
		data: [62, 63, 63, 65, 66, 67, 68],
	},
	{
		rango: "70_79",
		color: "#FE87B8",
		colorT: "#FE87B880",
		valor: 15,
		data: [70, 72, 73, 73, 73, 74, 74, 74, 74, 74, 74, 74, 75, 77, 79],
	},
	{
		rango: "80_89",
		color: "#FF7C7C",
		colorT: "#FF7C7C80",
		valor: 1,
		data: [83],
	},
];
