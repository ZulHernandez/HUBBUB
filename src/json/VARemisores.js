//main Datos por tipo de visualización

//* Array divide los datos por meses
var emisor = [
	{
		emisor: "TRÁFICO",
        molestia: "Poco",
        reportes: 17,
        pico: 74,
        prop: 4.7,
		horario: "Noche",
        alcaldia: "Miguel Hidalgo",
        texto: "Se considera tráfico a todo ruido que provenga de un vehículo automotor terrestre que produzca ruido mientras circula dentro de las calles o avenidas de la ciudad. Estos vehículos no tendrían que estar siendo utilizados para la construcción o estacionarios"
    },
    {
		emisor: "FIESTA",
        molestia: "Poco",
        reportes: 4,
        pico: 79,
        prop: 3.7,
		horario: "Día",
        alcaldia: "Cuajimalpa",
        texto: "Se considera fiesta a todo ruido que provenga de una celebración o evento donde se junten a muchas personas en un mismo lugar. Suelen ser fuentes donde la música, ruido de fuegos artificiales o gritos son lo que genera la molestia sonora."
	},
    {
		emisor: "MAQUINARIA",
        molestia: "Bastante",
        reportes: 4,
        pico: 74,
        prop: 7.1,
		horario: "Día",
        alcaldia: "Azcapotzalco",
        texto: "Se considera maquinaria a todo ruido que provenga de un aparato mecánico, hidráulico, eléctrico, etc. que los cuales generalmente se encuentran junto a obras u empresas, por lo que suelen ser emisores de ruido fijos o que por lo menos son constantes en un amplio espacio de tiempo."
	},
    {
		emisor: "BOCINA",
        molestia: "Poco",
        reportes: 4,
        pico: 83,
        prop: 4.3,
		horario: "Día",
        alcaldia: "Benito Juárez",
        texto: "Se considera ruido de bocina a todo ruido generado por aquellos aparatos que amplifiquen la intensidad del sonido. Es decir, la mayor parte de los sonidos procedentes de ellos será la música, el canto, el habla o en casos más específicos ruido de alguna multimedia."
	},
    {
		emisor: "OTRO",
        molestia: "Poco",
        reportes: 20,
        pico: 42,
        prop: 3,
		horario: "Día",
        alcaldia: "Benito Juárez",
        texto: 'Se considera dentro de otros a todo ruido que no puede entrar de las otras categorías que se plantean con clasificación específica, esto pueden ser ruidos como voces humanas o llantos de bebé, instrumentos musicales o cualquier otro que no entre en las clasificaciones anteriores.'
	},
    {
		emisor: "AÉREO",
        molestia: "Mucho",
        reportes: 9,
        pico: 73,
        prop: 3.7,
		horario: "Día",
        alcaldia: "Benito Juárez",
        texto: "Se considera ruido aéreo a todo ruido que provenga de alguno vehículo aéreo. Estos reportes pueden ubicarse en diferentes momentos ya sea en el despeje, durante el vuelo o en el aterrizaje de las aeronaves por lo cual suelen reportarse helicópteros, aviones o avionetas."
	},
    {
		emisor: "ANIMAL",
        molestia: "Mucho",
        reportes: 3,
        pico: 66,
        prop: 4.3,
		horario: "Noche",
        alcaldia: "Azcapotzalco",
        texto: "Se considera ruido animal a todo ruido que provenga de un ser vivo. Comúnmente estos reportes son sobre mascotas por lo cual entran principalmente ladridos de perros o gatos corriendo en los techos de las personas. También pueden entrar otro tipo de animales, aunque son menos comunes."
	},
    {
		emisor: "SERVICIO",
        molestia: "Mucho",
        reportes: 1,
        pico: 75,
        prop: 5,
		horario: "Día",
        alcaldia: "Azcapotzalco",
        texto: "Se considera ruido de servicio a todo ruido que devenga de una actividad realizada por el préstamo de algún servicio, estos pueden ser variados, aunque se pueden ubicar estos en casos como pipas de agua o camiones de gas que rellenan los gases estacionarios."
	},
];



/* var emisor = [
	{
		emisor: "MAQUINARIA",
        molestia: "Poco",
        reportes: 17,
        pico: 74,
		horario: "Noche",
        alcaldia: "Miguel Hidalgo",
        texto: "Se considera tráfico a todo ruido que provenga de un vehículo automotor terrestre que produzca ruido mientras circula dentro de las calles o avenidas de la ciudad. Estos vehículos no tendrían que estar siendo utilizados para la construcción o estacionarios"
	},
    {
		emisor: "MAQUINARIA",
        molestia: "Poco",
        reportes: 7,
        pico: 79,
		horario: "Día",
        alcaldia: "Cuajimalpa",
        texto: "Se considera fiesta a todo ruido que provenga de una celebración o evento donde se junten a muchas personas en un mismo lugar. Suelen ser fuentes donde la música, ruido de fuegos artificiales o gritos son lo que genera la molestia sonora."
	},
    {
		emisor: "MAQUINARIA",
        molestia: "Bastante",
        reportes: 4,
        pico: 74,
		horario: "Día",
        alcaldia: "Azcapotzalco",
        texto: "Se considera maquinaria a todo ruido que provenga de un aparato mecánico, hidráulico, eléctrico, etc. que los cuales generalmente se encuentran junto a obras u empresas, por lo que suelen ser emisores de ruido fijos o que por lo menos son constantes en un amplio espacio de tiempo."
	},
    {
		emisor: "MAQUINARIA",
        molestia: "Poco",
        reportes: 4,
        pico: 83,
		horario: "Día",
        alcaldia: "Benito Juárez",
        texto: "Se considera ruido de bocina a todo ruido generado por aquellos aparatos que amplifiquen la intensidad del sonido. Es decir, la mayor parte de los sonidos procedentes de ellos será la música, el canto, el habla o en casos más específicos ruido de alguna multimedia."
	},
    {
		emisor: "MAQUINARIA",
        molestia: "Poco",
        reportes: 3,
        pico: 42,
		horario: "Día",
        alcaldia: "Benito Juárez",
        texto: "Se considera dentro de otros a todo ruido que no puede entrar de las otras categorías que se plantean con clasificación específica, esto pueden ser ruidos como voces humanas o llantos de bebé, instrumentos musicales o cualquier otro que no entre en las clasificaciones anteriores."
	},
    {
		emisor: "MAQUINARIA",
        molestia: "Mucho",
        reportes: 9,
        pico: 73,
		horario: "Día",
        alcaldia: "Benito Juárez",
        texto: "Se considera ruido aéreo a todo ruido que provenga de alguno vehículo aéreo. Estos reportes pueden ubicarse en diferentes momentos ya sea en el despeje, durante el vuelo o en el aterrizaje de las aeronaves por lo cual suelen reportarse helicópteros, aviones o avionetas."
	},
    {
		emisor: "MAQUINARIA",
        molestia: "Mucho",
        reportes: 3,
        pico: 66,
		horario: "Noche",
        alcaldia: "Azcapotzalco",
        texto: "Se considera ruido animal a todo ruido que provenga de un ser vivo. Comúnmente estos reportes son sobre mascotas por lo cual entran principalmente ladridos de perros o gatos corriendo en los techos de las personas. También pueden entrar otro tipo de animales, aunque son menos comunes."
	},
    {
		emisor: "MAQUINARIA",
        molestia: "Mucho",
        reportes: 1,
        pico: 75,
		horario: "Dia",
        alcaldia: "Azcapotzalco",
        texto: "Se considera ruido de servicio a todo ruido que devenga de una actividad realizada por el préstamo de algún servicio, estos pueden ser variados, aunque se pueden ubicar estos en casos como pipas de agua o camiones de gas que rellenan los gases estacionarios."
	},
]; */
