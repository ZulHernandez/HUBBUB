//main Datos por tipo de visualización
//param ESTRUCTURA DE DATOS:
	//*alc = "Nombre de la alcaldía" 
		//*GusA = Gustavo A. Madero
		//*Azca = Azcapotzalco
		//*MigH = Miguel Hidalgo
		//*Cuau = Cuauhtémoc
		//*VenC = Venustiano Carranza
		//*CuaM = Cuajimalpa de Morelos
		//*AlvO = Álvaro Obregón
		//*BenJ = Benito Juárez
		//*Izta = Iztacalco
		//*Coyo = Coyoacán
		//*Iztp = Iztapalapa
		//*MagC = Magdalena Contreras
		//*Tlal = Tlalpan
		//*Xoch = Xochimilco
		//*Tlah = Tlahuac
		//*Milp = Milpa Alta
	//*Tráfico = Se escriben todos los niveles de ruido reportados para tráfico separados por comas.
				//*Cada número representa una alerta y se escribe el valor de db reportados
	//*Aéreo = Se escriben todos los niveles de ruido reportados para aéreo separados por comas.
				//*Cada número representa una alerta y se escribe el valor de db reportados
	//*Maquinaria = Se escriben todos los niveles de ruido reportados para maquinaria separados por comas.
				//*Cada número representa una alerta y se escribe el valor de db reportados
	//*Fiesta = Se escriben todos los niveles de ruido reportados para fiesta separados por comas.
				//*Cada número representa una alerta y se escribe el valor de db reportados
	//*Bocina = Se escriben todos los niveles de ruido reportados para bocina separados por comas.
				//*Cada número representa una alerta y se escribe el valor de db reportados
	//*Animal = Se escriben todos los niveles de ruido reportados para animal separados por comas.
				//*Cada número representa una alerta y se escribe el valor de db reportados
	//*Servicios = Se escriben todos los niveles de ruido reportados para servicios separados por comas.
				//*Cada número representa una alerta y se escribe el valor de db reportados
	//*Otros = Se escriben todos los niveles de ruido reportados para otros separados por comas.
				//*Cada número representa una alerta y se escribe el valor de db reportados
	//*tReportes = Total de reportes por alcaldía. Conteo de todos los reportes de la alcaldía

	//*Ejemplo de datos:
		//*{
		//*	alc: "Azca",
		//*	trafico: [1, 2, 3, 4, 70],
		//*	aereo: [1, 2, 3, 4, 5, 6, 7, 8],
		//*	maquinaria: [1, 2, 3],
		//*	fiesta: [1, 2, 3, 4],
		//*	bocina: [],
		//*	animal: [1, 2, 3, 4, 5, 6],
		//*	servicios: [1],
		//*	otros: [],
		//*	tReportes: 27,
		//*},
	//param Si el valor es 0 escribir "0", no dejar vacío

//* Array divide los datos por alcaldía
var alca = [
	{
		alc: "GusA",
		trafico: [],
		aereo: [],
		maquinaria: [],
		fiesta: [],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 0,
	},
	{
		alc: "Azca",
		trafico: [1, 2, 3, 4, 70],
		aereo: [1, 2, 3, 4, 5, 6, 7, 8],
		maquinaria: [1, 2, 3],
		fiesta: [1, 2, 3, 4],
		bocina: [],
		animal: [1, 2, 3, 4, 5, 6],
		servicios: [1],
		otros: [],
		tReportes: 27,
	},
	{
		alc: "MigH",
		trafico: [1, 2, 3, 4, 5, 6],
		aereo: [],
		maquinaria: [],
		fiesta: [],
		bocina: [1],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 7,
	},
	{
		alc: "Cuau",
		trafico: [],
		aereo: [],
		maquinaria: [],
		fiesta: [],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 0,
	},
	{
		alc: "VenC",
		trafico: [],
		aereo: [],
		maquinaria: [],
		fiesta: [],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 0,
	},
	{
		alc: "CuaM",
		trafico: [],
		aereo: [],
		maquinaria: [],
		fiesta: [1, 2],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 2,
	},
	{
		alc: "AlvO",
		trafico: [1, 2],
		aereo: [],
		maquinaria: [1],
		fiesta: [],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 3,
	},
	{
		alc: "BenJ",
		trafico: [1, 2, 3, 4],
		aereo: [1],
		maquinaria: [],
		fiesta: [1, 2],
		bocina: [1, 2, 3],
		animal: [],
		servicios: [],
		otros: [1, 2, 3],
		tReportes: 13,
	},
	{
		alc: "Izta",
		trafico: [],
		aereo: [],
		maquinaria: [],
		fiesta: [],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 0,
	},
	{
		alc: "Coyo",
		trafico: [],
		aereo: [],
		maquinaria: [],
		fiesta: [1],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 1,
	},
	{
		alc: "Iztp",
		trafico: [],
		aereo: [],
		maquinaria: [],
		fiesta: [],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 0,
	},
	{
		alc: "MagC",
		trafico: [],
		aereo: [],
		maquinaria: [],
		fiesta: [],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 0,
	},
	{
		alc: "Tlal",
		trafico: [],
		aereo: [],
		maquinaria: [],
		fiesta: [],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 0,
	},
	{
		alc: "Xoch",
		trafico: [],
		aereo: [],
		maquinaria: [],
		fiesta: [],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 0,
	},
	{
		alc: "Tlah",
		trafico: [],
		aereo: [],
		maquinaria: [],
		fiesta: [],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 0,
	},
	{
		alc: "Milp",
		trafico: [],
		aereo: [],
		maquinaria: [],
		fiesta: [],
		bocina: [],
		animal: [],
		servicios: [],
		otros: [],
		tReportes: 0,
	},
]