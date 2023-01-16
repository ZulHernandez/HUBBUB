//main Datos por tipo de visualización

//* Array divide los datos por categoría
//param ESTRUCTURA DE DATOS:
    //*Array número de reportes por tipo de molestia
        //*VALORES:[0] = molestía "Poco"
                //*[1] = molestía "Mucho"
                //*[2] = molestía "Bastante"
        //param Si no hay reportes en ese tipo, se debe poner un 0
var molestia = [5,18,5];

//param ESTRUCTURA DE DATOS:
    //*Array número de reportes por tipo de espacio
        //*VALORES:[0] = espacio "Éxterior"
                //*[1] = espacio "Interior
        //param Si no hay reportes en ese tipo, se debe poner un 0
var espacio = [25,25];

//param ESTRUCTURA DE DATOS:
    //*Array número de reportes por tipo de emisor
        //*VALORES:[0] = emisor "Aéreo"
                //*[1] = emisor "Animal"
                //*[2] = emisor "Bocinas"
                //*[3] = emisor "Fiesta"
                //*[4] = emisor "Maquinaria"
                //*[5] = emisor "Otros"
                //*[6] = emisor "Servicios"
                //*[7] = emisor "Tráfico"
        //param Si no hay reportes en ese tipo, se debe poner un 0
var emisor = [6,6,6,6,6,6,7,7];

//param ESTRUCTURA DE DATOS:
    //*Array número de reportes por tipo de horario
        //*VALORES:[0] = horario "Día"
                //*[1] = horario "Noche"
        //param Si no hay reportes en ese tipo, se debe poner un 0
var horario = [41,9]