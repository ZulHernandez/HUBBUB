//main Variables
//* Imagenes de carrusel avanzando
let img1, img2, img3, img4, img5;
//* Imagenes de carrusel retrocediendo
let img1b, img2b, img3b, img4b, img5b;
//* Posición del carruselSalud
let contSalud = 1;
//* Posición del carruselPasos
let contPasos = 1;

let opcCero,
	opcUno,
	opcDos,
	opcTres,
	opcCuatro,
	opcCinco,
	opcSeis,
	opcSiete,
	opcOcho,
	opcNueve;

let textOpcCero,
	textOpcUno,
	textOpcDos,
	textOpcTres,
	textOpcCuatro,
	textOpcCinco,
	textOpcSeis,
	textOpcSiete,
	textOpcOcho,
	textOpcNueve;

let tituloCero,
	tituloUno,
	tituloDos,
	tituloTres,
	tituloCuatro,
	tituloCinco,
	tituloSeis,
	tituloSiete,
	tituloOcho,
	tituloNueve;

//funcion Movemos el carruselSalud
//param a = posición dada por flechas
function carruSalud(a) {
	//* Obtenemos los elementos del HTML
	img1 = document.getElementById("img1");
	img2 = document.getElementById("img2");
	img3 = document.getElementById("img3");
	img4 = document.getElementById("img4");
	img5 = document.getElementById("img5");
	let text = document.getElementById("textoCarruSalud");
	let title = document.getElementById("subSalud");

	//* Evaluamos si avanzamos o retrocedemos
	if (a == 1) {
		contSalud++;
	}
	if (a == 0) {
		contSalud--;
	}

	//* Evaluamos si llegamos al final o al inicio
	if (contSalud > 5) {
		contSalud = 1;
	}
	if (contSalud < 1) {
		contSalud = 5;
	}

	//* Seteamos clases para animación de los elementos para avanzar
	if (a == 1) {
		switch (contSalud) {
			case 1:
				img1.className = "img1";
				img2.className = "img2";
				img3.className = "img3";
				img4.className = "img4";
				img5.className = "img5";
				break;
			case 2:
				img1.className = "img5";
				img2.className = "img1";
				img3.className = "img2";
				img4.className = "img3";
				img5.className = "img4";
				break;
			case 3:
				img1.className = "img4";
				img2.className = "img5";
				img3.className = "img1";
				img4.className = "img2";
				img5.className = "img3";
				break;
			case 4:
				img1.className = "img3";
				img2.className = "img4";
				img3.className = "img5";
				img4.className = "img1";
				img5.className = "img2";
				break;
			case 5:
				img1.className = "img2";
				img2.className = "img3";
				img3.className = "img4";
				img4.className = "img5";
				img5.className = "img1";
				break;
		}
	}
	//* Seteamos clases para animación de los elementos para retroceder
	if (a == 0) {
		switch (contSalud) {
			case 1:
				img1.className = "img5b";
				img2.className = "img1b";
				img3.className = "img2b";
				img4.className = "img3b";
				img5.className = "img4b";
				break;
			case 2:
				img1.className = "img4b";
				img2.className = "img5b";
				img3.className = "img1b";
				img4.className = "img2b";
				img5.className = "img3b";
				break;
			case 3:
				img1.className = "img3b";
				img2.className = "img4b";
				img3.className = "img5b";
				img4.className = "img1b";
				img5.className = "img2b";
				break;
			case 4:
				img1.className = "img2b";
				img2.className = "img3b";
				img3.className = "img4b";
				img4.className = "img5b";
				img5.className = "img1b";
				break;
			case 5:
				img1.className = "img1b";
				img2.className = "img2b";
				img3.className = "img3b";
				img4.className = "img4b";
				img5.className = "img5b";
				break;
		}
	}
	//* Escribimos el texto del carrusel dependiendo de la posición
	switch (contSalud) {
		//* Discapacidad auditiva
		case 1:
			title.innerHTML =
				"<center>Discapacidad auditiva inducida por ruido</center>";
			text.innerHTML =
				"<p>Hace referencia al aumento en el umbral auditivo. Este es medido a través de la audiometr" +
				"ía del umbral y provoca desventajas para llevar a cabo actividades diarias pues atiende a la dificultad, por e" +
				'jemplo, de mantener conversaciones con otros sujetos a un nivel de ruido de fondo estándares <a class="link" t' +
				'arget="_blank" href="https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0064811">(Descritos en la ' +
				"UNE-ISO 19962:2020)</a>.</p><p>Estos efectos en el oído son realmente preocupantes puesto que son irreversible" +
				"s en la mayoría de los casos y se calcula que 120 millones de personas en el mundo los padecen.</p><p>Otros el" +
				"ementos que pueden provocarlos como químicos, medicamentos para los oídos, vientos fuertes en el área de la ca" +
				"beza, accidentes como golpes o problemas hereditarios, también se considera como parte de la degradación del ó" +
				"rgano por la edad, sin embargo, estos no son causas que interesen en el estudio del ruido, aunque pueden ser r" +
				"elevantes para conocer sus efectos en la salud humana.</p><ul><li>Los niños son más propensos a contraer este " +
				"tipo de discapacidad que los adultos.</li><li>A niveles de presión altos en un tiempo de exposición instantáne" +
				"o provoca daño mecánico en el aparto auditivo. Comúnmente este límite se ubica en los 140 dB con exposición in" +
				"stantánea. Para niños, 120 dB se vuelve el tope máximo.</li><li>Para sonidos de armas de fuego que superen los" +
				" 80 dB y cuyo tiempo de exposición sea de 24 horas puede producir efectos nocivos en el oído.</li><li>El riesg" +
				"o de adquirir alguna discapacidad auditiva aumenta cuando el sujeto se expone al ruido mientras se combina con" +
				" vibraciones, uso de medicina ototóxica u otros químicos.</li></ul>";
			break;
		//* Interferencia con la comunicación
		case 2:
			title.innerHTML =
				"<center>Interferencia con la comunicación oral</center>";
			text.innerHTML =
				"<p>El ruido interrumpe el proceso comunicativo entre individuos pues puede provocar problemas" +
				" de concentración, fatiga, incertidumbre, irritación, malos entendidos, decremento en la capacidad productiva," +
				" problemas con las relaciones humanas y reacciones al estrés. Estos efectos vulneran principalmente a personas" +
				" con discapacidad auditiva, niños en proceso de aprendizaje para leer y escribir e individuos que no estén fam" +
				"iliarizados con el lenguaje del emisor del mensaje.</p><p>Para lograr una buena comunicación los 300-3000 Hz e" +
				"n la voz son lo mejor por lo que la intrusión de ruido con niveles de energía parecidos interrumpe considerabl" +
				"emente la capacidad de captar dichos estímulos por el oído receptor enmascarando el sonido y volviéndolo poco " +
				"reconocible.</p><p>Los individuos suelen alzar la voz para lograr escucharse lo que, contradictoriamente, aume" +
				"nta el daño en el oído pues recibe mayor cantidad de ruido, requiere un esfuerzo por parte del órgano para con" +
				"centrarse en los sonidos en los que desea enfocarse y, al mismo tiempo, las palabras gritadas son difíciles de" +
				" comprender comparativamente con un tono de voz constante y modulado.</p><p>Definir cuando una voz es inteligi" +
				"ble es algo que posee un determinado nivel de subjetividad en los individuos que se involucran dentro del proc" +
				"eso, sin embargo, se ha identificado que voces encontradas entre los 55–65 dB son completamente reconocibles y" +
				" sus mensajes pueden ser escuchados de forma clara.</p>";
			break;
		//* Irrupción del sueño
		case 3:
			title.innerHTML = "<center>Irrupción del sueño</center>";
			text.innerHTML =
				"<p>Los efectos de la irrupción del sueño son variados; se han identificado la dificultad para" +
				" dormir (insomnio), despertarse súbitamente y alteraciones en los ciclos de sueño, especialmente en el sueño p" +
				"rofundo con una reducción del tiempo en sueño REM (Rapid Eye Movement). Estos efectos en el sueño recaen en ot" +
				"ros espacios fisiológicos donde podemos encontrar un aumento en presión arterial, aumento del ritmo cardiaco, " +
				"encogimiento de los vasos sanguíneos, cambios en la respiración arritmia e incremento en los movimientos corpo" +
				"rales del sujeto durante su periodo de sueño. A la larga la exposición a ruidos durante el sueño pude generar " +
				"diferentes efectos secundarios en el sujeto durante su periodo activo (comúnmente el día) y pude traer repercu" +
				"siones graves. Las personas que se ven expuestas a este tipo de ruido suelen expresar en su día una sensibilid" +
				"ad mayor al resto de sonidos en su ambiente, también, se destaca que aquellos que viven en áreas con este tipo" +
				" de contaminación suelen consumir sedantes o medicamentos para conciliar el sueño.</p><p>Los eventos de ruido " +
				"en la noche dentro de los cuartos no deben pasar de los 45 dB en un espacio de tiempo de no más de 10-15 minut" +
				"os por noche para mantener un sueño correcto; sin embargo, la latencia con la que estos sonidos se presenta es" +
				" un factor importante para determinar si este interrumpe o no el sueño. La OMS menciona que hay tres puntos de" +
				" suma importancia para medir estas interrupciones:</p><ol><li>Fuentes de ruido en el ambiente acompañadas de u" +
				"n ruido de fondo bajo.</li><li>Ambientes en que la combinación de vibraciones y ruidos se producen.</li><li>Fu" +
				"entes con componentes de frecuencia baja.</li></ol>";
			break;
		//* Efectos cardiovasculares
		case 4:
			title.innerHTML = "<center>Efectos cardiovasculares</center>";
			text.innerHTML =
				"<p>Estudios epidemiológicos y de laboratorio revelaron que todas estas personas expuestas con" +
				"stantemente a ambientes con rudo continuo pueden generar problemas psicológicos temporales o permanentes puest" +
				"o que, finalmente, el ruido es un agente estresante el medio ambiente. Uno de estos efectos es dado por la exp" +
				"osición a ruidos agudos de forma constante, lo que puede provocar cambios en la presión sanguínea, una dilatac" +
				"ión de los vasos sanguíneos y, por consecuente, aumento en el ritmo cardiaco. Si la exposición continua estos " +
				"problemas puede agravarse hasta la hipertensión y problemas isquémicos del corazón.</p><p>Gracias a los difere" +
				"ntes estudios que se han realizado a lo largo de las décadas tomando en cuenta factores como la vida cotidiana" +
				" del sujeto, su actividad física y sus ocupaciones más el ajuste en sus condiciones de vida (vivienda), la OMS" +
				" determina que a la exposición a estos ruidos en periodos constantes en un rango de 65 a 70 dB ya sea en espac" +
				"ios abiertos o en el tráfico, pueden desarrollar estos problemas cardiovasculares. Sin embargo, también se com" +
				"prende que esta asociación causa-efecto es bastante débil para hipertensión comparativamente con aquellas isqu" +
				"émicas.</p><p>Este punto de las enfermedades cardiovasculares se encuentra poco argumentado y, debido a esto, " +
				"se suele acompañar y considerar exclusivamente para aquellos grupos que son considerados sensibles y vulnerabl" +
				"es a todo esto. De dichos grupos se hablará al final de este apartado de la salud.</p>";
			break;
		//* Enfermedades mentales
		case 5:
			title.innerHTML = "<center>Enfermedades mentales</center>";
			text.innerHTML =
				"<p>Se tiene que aclarar que de ninguna forma se ha comprobado que la exposición de un individuo a" +
				" un ruido constante en condiciones naturales genera alguna clase de trastorno psicológico en el sujeto, sin embarg" +
				"o, se entiende que esto pude aumentar y acelerar el desarrollo de desórdenes mentales latentes. Entre los padecimi" +
				"entos que se agravan con el ruido encontramos: la ansiedad, estrés emocional, problemas de nervios, náuseas, dolor" +
				"es de cabeza, inestabilidad, irritabilidad, impotencia sexual, cambios de humor, incremento de conflictos sociales" +
				" y otros padecimientos neuróticos como la neurosis, psicosis y la histeria (Organización Mundial de la Salud, 1999" +
				").</p><p>Estos estudios no han sido concluyentes en su totalidad y, en muchas ocasiones se habla más de la sensibi" +
				"lidad que tenga el sujeto ante determinados ruidos para el desarrollo de los problemas mencionados antes que la me" +
				"ra exposición al ruido. Independientemente de esto, las posibilidades de afectaciones mentales venidas del ruido p" +
				"ueden verse respaldadas en parte por otro resultado que se correlacionan cuando se habla sobre el aumento en el co" +
				"nsumo de medicamentos, tranquilizantes y pastillas para dormir en las personas que han ingresado a los psiquiátric" +
				"os o que presentan síntomas psiquiátricos.</p></p>";
			break;
	}
}

//funcion Movemos el carruselPasos
//param a = posicion dada por las flechas
//param b = posicion dada por el botón
function carruPasos(a, b) {
	//*obtenemos los elementos del HTML
	gifPaso = document.getElementById("gifPaso");
	boton1 = document.getElementById("paso1");
	boton2 = document.getElementById("paso2");
	boton3 = document.getElementById("paso3");
	boton4 = document.getElementById("paso4");
	boton5 = document.getElementById("paso5");
	boton6 = document.getElementById("paso6");
	boton7 = document.getElementById("paso7");
	boton8 = document.getElementById("paso8");
	boton9 = document.getElementById("paso9");
	barraCrece = document.getElementById("barraCrece");
	subMide = document.getElementById("subMide");
	textoCarruMide = document.getElementById("textoCarruMide");

	//*evaluamos si avanzamos o retrocedemos
	if (a == 1) {
		contPasos++;
	}
	if (a == 0) {
		contPasos--;
	}

	//*evaluamos si estamos en el primer paso
	if (contPasos > 9) {
		contPasos = 1;
	}
	//*evaluamos si estamos en el último paso
	if (contPasos < 1) {
		contPasos = 9;
	}
	//*evaluamos si se dio click en la barra
	if (a == 2) {
		contPasos = b;
	}

	//*se cambia el texto del carrusel
	switch (contPasos) {
		//* Paso 1
		case 1:
			gifPaso.src = "../../assets/gif/pasos/Paso1.gif";
			boton1.className = "actButton";
			boton2.className = "inaButton";
			boton3.className = "inaButton";
			boton4.className = "inaButton";
			boton5.className = "inaButton";
			boton6.className = "inaButton";
			boton7.className = "inaButton";
			boton8.className = "inaButton";
			boton9.className = "inaButton";
			barraCrece.style.width = "0px";
			subMide.innerHTML = "<center>Paso 1: Croquis</center>";
			textoCarruMide.innerHTML =
				"Levantar un croquis de la zona de forma tal que se pueda conocer el terreno" +
				" donde se realiza la medición, así como sus particularidades.";
			break;
		//* Paso 2
		case 2:
			gifPaso.src = "../../assets/gif/pasos/Paso2.gif";
			boton1.className = "inaButton";
			boton2.className = "actButton";
			boton3.className = "inaButton";
			boton4.className = "inaButton";
			boton5.className = "inaButton";
			boton6.className = "inaButton";
			boton7.className = "inaButton";
			boton8.className = "inaButton";
			boton9.className = "inaButton";
			barraCrece.style.width = "3.5vw";
			subMide.innerHTML = "<center>Paso 2: Zonas</center>";
			textoCarruMide.innerHTML =
				'Dividir la zona general en <b style="color: #ff7c7c;">zonas ' +
				"unitarias</b> con tal de identificar ubicación de elementos y emisores de ruido.";
			break;
		//* Paso 3
		case 3:
			gifPaso.src = "../../assets/gif/pasos/Paso3.gif";
			boton1.className = "inaButton";
			boton2.className = "inaButton";
			boton3.className = "actButton";
			boton4.className = "inaButton";
			boton5.className = "inaButton";
			boton6.className = "inaButton";
			boton7.className = "inaButton";
			boton8.className = "inaButton";
			boton9.className = "inaButton";
			barraCrece.style.width = "7vw";
			subMide.innerHTML = "<center>Paso 3: Centros</center>";
			textoCarruMide.innerHTML =
				'Ubicar los <b style="color: #0176ff;">centros acústicos</b> dentro de las zonas antes trazadas.';
			break;
		//* Paso 4
		case 4:
			gifPaso.src = "../../assets/gif/pasos/Paso4.gif";
			boton1.className = "inaButton";
			boton2.className = "inaButton";
			boton3.className = "inaButton";
			boton4.className = "actButton";
			boton5.className = "inaButton";
			boton6.className = "inaButton";
			boton7.className = "inaButton";
			boton8.className = "inaButton";
			boton9.className = "inaButton";
			barraCrece.style.width = "10.5vw";
			subMide.innerHTML = "<center>Paso 4: Periodos</center>";
			textoCarruMide.innerHTML =
				"Elegir los periodos de integración de medición también establecidos dent" +
				'ro de la norma (hacen referencia a la <b style="color: #ff7c7c;">cantidad de tiempo</b> en que ' +
				"se hicieron las mediciones).";
			break;
		//* Paso 5
		case 5:
			gifPaso.src = "../../assets/gif/pasos/Paso5.gif";
			boton1.className = "inaButton";
			boton2.className = "inaButton";
			boton3.className = "inaButton";
			boton4.className = "inaButton";
			boton5.className = "actButton";
			boton6.className = "inaButton";
			boton7.className = "inaButton";
			boton8.className = "inaButton";
			boton9.className = "inaButton";
			barraCrece.style.width = "14vw";
			subMide.innerHTML = "<center>Paso 5: Lapsos</center>";
			textoCarruMide.innerHTML =
				'Dividir el periodo de integración en <b style="color: #0176ff;">lapsos ig' +
				"uales</b> para cada centro acústico.";
			break;
		//* Paso 6
		case 6:
			gifPaso.src = "../../assets/gif/pasos/Paso6.gif";
			boton1.className = "inaButton";
			boton2.className = "inaButton";
			boton3.className = "inaButton";
			boton4.className = "inaButton";
			boton5.className = "inaButton";
			boton6.className = "actButton";
			boton7.className = "inaButton";
			boton8.className = "inaButton";
			boton9.className = "inaButton";
			barraCrece.style.width = "17.5vw";
			subMide.innerHTML = "<center>Paso 6: Medición</center>";
			textoCarruMide.innerHTML =
				'Decidir entre hacer una medición <b style="color: #ff7c7c;">continua</b>' +
				' o <b style="color: #0176ff;">semicontinua</b>, con sus implicaciones.';
			break;
		//* Paso 7
		case 7:
			gifPaso.src = "../../assets/gif/pasos/Paso7.gif";
			boton1.className = "inaButton";
			boton2.className = "inaButton";
			boton3.className = "inaButton";
			boton4.className = "inaButton";
			boton5.className = "inaButton";
			boton6.className = "inaButton";
			boton7.className = "actButton";
			boton8.className = "inaButton";
			boton9.className = "inaButton";
			barraCrece.style.width = "21vw";
			subMide.innerHTML = "<center>Paso 7: Micrófono</center>";
			textoCarruMide.innerHTML =
				"Se coloca un <b>micrófono</b> en el centro acústico a no " +
				"<b style='color: #0176ff;'>menos de un metro</b> del piso" +
				", dirigido hacia el  <b style='color: #ff7c7c;'>fenómeno<" +
				"/b> y tomando en cuenta las protecciones contra aire y otros artefactos que puedan ensuciar la muestra.";
			break;
		//* Paso 8
		case 8:
			gifPaso.src = "../../assets/gif/pasos/Paso8.gif";
			boton1.className = "inaButton";
			boton2.className = "inaButton";
			boton3.className = "inaButton";
			boton4.className = "inaButton";
			boton5.className = "inaButton";
			boton6.className = "inaButton";
			boton7.className = "inaButton";
			boton8.className = "actButton";
			boton9.className = "inaButton";
			barraCrece.style.width = "24.5vw";
			subMide.innerHTML = "<center>Paso 8: Ponderación</center>";
			textoCarruMide.innerHTML =
				"Ajustar el sonómetro en <b>ponderación A o C</b> según el caso y en integración lenta.";
			break;
		//* Paso 9
		case 9:
			gifPaso.src = "../../assets/gif/pasos/Paso9.gif";
			boton1.className = "inaButton";
			boton2.className = "inaButton";
			boton3.className = "inaButton";
			boton4.className = "inaButton";
			boton5.className = "inaButton";
			boton6.className = "inaButton";
			boton7.className = "inaButton";
			boton8.className = "inaButton";
			boton9.className = "actButton";
			barraCrece.style.width = "28vw";
			subMide.innerHTML = "<center>Paso 9: Notas</center>";
			textoCarruMide.innerHTML =
				"De acuerdo al tipo de medición los pasos pueden cambiar, pero, de forma general, esto " +
				"cambiara la calibración de los instrumentos, los periodos en que operaran y el constante mantenimiento de los mis" +
				"mo en relación con los periféricos que los acompañen.";
			break;
	}
}

//funcion Cambiamos información del área de estudio
//param a = área clickada
function areaEstudio(a) {
	//*Obtenemos los elementos del HTML
	let area1 = document.getElementById("area1");
	let area2 = document.getElementById("area2");
	let area3 = document.getElementById("area3");
	let area4 = document.getElementById("area4");
	let area5 = document.getElementById("area5");
	let area6 = document.getElementById("area6");
	let area7 = document.getElementById("area7");
	let area8 = document.getElementById("area8");
	let subArea = document.getElementById("subArea");
	let textoArea = document.getElementById("textoArea");

	//*Evaluamos el área seleccionada
	switch (a) {
		//* Salud
		case 1:
			area1.className = "titleAreaAct";
			area2.className = "titleArea";
			area3.className = "titleArea";
			area4.className = "titleArea";
			area5.className = "titleArea";
			area6.className = "titleArea";
			area7.className = "titleArea";
			area8.className = "titleArea";
			subArea.innerHTML = "Salud";
			textoArea.innerHTML =
				"Médicos, psiquiatras y psicólogos cuyas preocupaciones van más enfocadas" +
				" al entendimiento de las repercusiones que tiene el ruido en la salud fisiológica, psíquica y " +
				"psiquiátrica del sujeto. Los datos sobre ruido ayudan a estas disciplinasa identificar puntos " +
				"de estrés para los órganos y para la psique de las personas para, de esta forma, atenderlos de" +
				" manera adecuada y en el mejor de los casos, prevenir que los sujetos interaccionen con estos " +
				"ruidos nocivos para la salud.";
			break;
		//* Logística
		case 2:
			area1.className = "titleArea";
			area2.className = "titleAreaAct";
			area3.className = "titleArea";
			area4.className = "titleArea";
			area5.className = "titleArea";
			area6.className = "titleArea";
			area7.className = "titleArea";
			area8.className = "titleArea";
			subArea.innerHTML = "Logística";
			textoArea.innerHTML =
				"Administradores, ingenieros industriales, recursos humanos y otras áreas" +
				" dedicadas a la logística pueden estar interesadas en la identificación de puntos de ruido que" +
				" puedan afectar el rendimientode sus trabajadores con el fin de mejorar la productividad de es" +
				"tos y que se vea reflejada en la mejora de procesos y producción de la misma empresa por tanto" +
				" puede ser un tema de interés para las empresas el identificar donde sus trabajadores no se ve" +
				"rán expuestos a este estrés.";
			break;
		//* Pedagogía
		case 3:
			area1.className = "titleArea";
			area2.className = "titleArea";
			area3.className = "titleAreaAct";
			area4.className = "titleArea";
			area5.className = "titleArea";
			area6.className = "titleArea";
			area7.className = "titleArea";
			area8.className = "titleArea";
			subArea.innerHTML = "Pedagogía";
			textoArea.innerHTML =
				"Ciencias como la pedagogía también pueden verse interesadas en el entend" +
				"imiento del ruido como factor de distracción o impedidor del proceso educativo en una població" +
				"n determinada como se puede ver en el trabajo de Yerko Damián donde, además de buscar una solu" +
				"ción a través de la implementación de fractales en los muros, nos habla de las consecuencias d" +
				"el ruido en la educación.";
			break;
		//* Acústica
		case 4:
			area1.className = "titleArea";
			area2.className = "titleArea";
			area3.className = "titleArea";
			area4.className = "titleAreaAct";
			area5.className = "titleArea";
			area6.className = "titleArea";
			area7.className = "titleArea";
			area8.className = "titleArea";
			subArea.innerHTML = "Acústica";
			textoArea.innerHTML =
				"La ingeniería acústica está íntimamente relacionada con su hermana cientí" +
				"fica la acústica, sin embargo, sus objetivos están más orientados a la aplicación de dichos con" +
				"ocimientos para el “[…] desarrollo y control de todos los procesos que emiten, transmiten o rec" +
				"iben ondas sonoras” (MX, 2018) por lo que los estudios de ruido a nivel cuantitativo o cualitat" +
				"ivo son de suma importancia para identificar los problemas y posteriormente contenerlos.";
			break;
		//* Arquitectura
		case 5:
			area1.className = "titleArea";
			area2.className = "titleArea";
			area3.className = "titleArea";
			area4.className = "titleArea";
			area5.className = "titleAreaAct";
			area6.className = "titleArea";
			area7.className = "titleArea";
			area8.className = "titleArea";
			subArea.innerHTML = "Arquitectura";
			textoArea.innerHTML =
				"En la arquitectura y el diseño de interiores existe una clara correlación" +
				" entre la manipulación y el diseño del espacio como respuesta no solo a las necesidades del hab" +
				"itante sino, también, como adaptación al entorno en el que se hayan. Así, gracias a los mapas d" +
				"e ruido, se puede seleccionar una gama de materiales y herramientas que puedan ser útiles para " +
				"dar respuesta a esto, desde aspecto como la supresión del ruido, así como el aprovechamiento de este.";
			break;
		//* Arte
		case 6:
			area1.className = "titleArea";
			area2.className = "titleArea";
			area3.className = "titleArea";
			area4.className = "titleArea";
			area5.className = "titleArea";
			area6.className = "titleAreaAct";
			area7.className = "titleArea";
			area8.className = "titleArea";
			subArea.innerHTML = "Arte";
			textoArea.innerHTML =
				"Las artes encuentran en los “espacios ruidosos” lugares prometedores para " +
				"su expansión o, en otros casos, zonas donde propuestas artísticas relacionadas con el silencio p" +
				"ueden ser formas espectaculares de protesta e intervención. El ruido también puede ser interesan" +
				"te para el silencio y trabajos artísticos se vuelven clave para su demostración.";
			break;
		//* Socialogía
		case 7:
			area1.className = "titleArea";
			area2.className = "titleArea";
			area3.className = "titleArea";
			area4.className = "titleArea";
			area5.className = "titleArea";
			area6.className = "titleArea";
			area7.className = "titleAreaAct";
			area8.className = "titleArea";
			subArea.innerHTML = "Sociología";
			textoArea.innerHTML =
				"La sociología muestra un interés particular en el ruido como agente de cam" +
				"bio dentro de una sociedad además de dejar impreso el avance tecnológico humano. El trabajo real" +
				"izado en la Semana del Sonido (Montano Rodríguez & Pascal, 2014) nos habla de la relación existe" +
				"nte entre el ruido y el proceso de modernidad aplicando como ejemplo la expansión de la mancha d" +
				"e ruido que ya no solo se contiene dentro de la ciudad, sino que, ahora, se ve amplificada a los" +
				" espacios periurbanos.";
			break;
		//* Ergonomía
		case 8:
			area1.className = "titleArea";
			area2.className = "titleArea";
			area3.className = "titleArea";
			area4.className = "titleArea";
			area5.className = "titleArea";
			area6.className = "titleArea";
			area7.className = "titleArea";
			area8.className = "titleAreaAct";
			subArea.innerHTML = "Ergonomía";
			textoArea.innerHTML =
				"Se encarga de analizar la forma en que las personas se adaptan en los entor" +
				"nos en los que está dispuesto. Esta trabaja en conjunto con las áreas medicas pues su fin último " +
				"es evitar daños a la salud y la incomodidad de los sujetos. El ruido es uno de estos recursos que" +
				" puede ser diseñado y dispuesto de diferentes formas y la ergonomía se encarga de disponerlo.";
			break;
	}
}

//funcion Escuchamos el scroll de la ventana
window.onscroll = function () {
	funcionScroll();
};

//funcion Determinamos la posición del indicador de scroll en el nav izquierdo
function funcionScroll() {
	console.log("scroll");
	//tituloCero = document.getElementById("tituloCero").getBoundingClientRect().top;
	tituloUno = document.getElementById("tituloUno").getBoundingClientRect().top;
	tituloDos = document.getElementById("tituloDos").getBoundingClientRect().top;
	tituloTres = document
		.getElementById("tituloTres")
		.getBoundingClientRect().top;
	tituloCuatro = document
		.getElementById("tituloCuatro")
		.getBoundingClientRect().top;
	tituloCinco = document
		.getElementById("tituloCinco")
		.getBoundingClientRect().top;
	tituloSeis = document
		.getElementById("tituloSeis")
		.getBoundingClientRect().top;
	tituloSiete = document
		.getElementById("tituloSiete")
		.getBoundingClientRect().top;
	tituloOcho = document
		.getElementById("tituloOcho")
		.getBoundingClientRect().top;
	tituloNueve = document
		.getElementById("tituloNueve")
		.getBoundingClientRect().top;

	textOpcCero = document.getElementById("textOpcCero");
	textOpcUno = document.getElementById("textOpcUno");
	textOpcDos = document.getElementById("textOpcDos");
	textOpcTres = document.getElementById("textOpcTres");
	textOpcCuatro = document.getElementById("textOpcCuatro");
	textOpcCinco = document.getElementById("textOpcCinco");
	textOpcSeis = document.getElementById("textOpcSeis");
	textOpcSiete = document.getElementById("textOpcSiete");
	textOpcOcho = document.getElementById("textOpcOcho");
	textOpcNueve = document.getElementById("textOpcNueve");

	opcCero = document.getElementById("opcionCero");
	opcUno = document.getElementById("opcionUno");
	opcDos = document.getElementById("opcionDos");
	opcTres = document.getElementById("opcionTres");
	opcCuatro = document.getElementById("opcionCuatro");
	opcCinco = document.getElementById("opcionCinco");
	opcSeis = document.getElementById("opcionSeis");
	opcSiete = document.getElementById("opcionSiete");
	opcOcho = document.getElementById("opcionOcho");
	opcNueve = document.getElementById("opcionNueve");

	if (tituloNueve <= 100) {
		iconCero.style.fill = "#333333";
		textOpcCero.style.color = "#333333";
		iconUno.style.fill = "#333333";
		textOpcUno.style.color = "#333333";
		iconDos.style.stroke = "#333333";
		textOpcDos.style.color = "#333333";
		iconTres.style.fill = "#333333";
		textOpcTres.style.color = "#333333";
		iconCuatro.style.fill = "#333333";
		textOpcCuatro.style.color = "#333333";
		iconCinco.style.stroke = "#333333";
		textOpcCinco.style.color = "#333333";
		iconSeis.style.fill = "#333333";
		textOpcSeis.style.color = "#333333";
		iconSiete.style.stroke = "#333333";
		textOpcSiete.style.color = "#333333";
		iconOcho.style.fill = "#333333";
		textOpcOcho.style.color = "#333333";
		iconNueve.style.stroke = "#ff7c7c";
		textOpcNueve.style.color = "#ff7c7c";
		opcCero.style.opacity = "0.5";
		opcUno.style.opacity = "0.5";
		opcDos.style.opacity = "0.5";
		opcTres.style.opacity = "0.5";
		opcCuatro.style.opacity = "0.5";
		opcCinco.style.opacity = "0.5";
		opcSeis.style.opacity = "0.5";
		opcSiete.style.opacity = "0.5";
		opcOcho.style.opacity = "0.5";
		opcNueve.style.opacity = "1";
	} else if (tituloOcho <= 100) {
		iconCero.style.fill = "#333333";
		textOpcCero.style.color = "#333333";
		iconUno.style.fill = "#333333";
		textOpcUno.style.color = "#333333";
		iconDos.style.stroke = "#333333";
		textOpcDos.style.color = "#333333";
		iconTres.style.fill = "#333333";
		textOpcTres.style.color = "#333333";
		iconCuatro.style.fill = "#333333";
		textOpcCuatro.style.color = "#333333";
		iconCinco.style.stroke = "#333333";
		textOpcCinco.style.color = "#333333";
		iconSeis.style.fill = "#333333";
		textOpcSeis.style.color = "#333333";
		iconSiete.style.stroke = "#333333";
		textOpcSiete.style.color = "#333333";
		iconOcho.style.fill = "#ff7c7c";
		textOpcOcho.style.color = "#ff7c7c";
		iconNueve.style.stroke = "#333333";
		textOpcNueve.style.color = "#333333";
		opcCero.style.opacity = "0.5";
		opcUno.style.opacity = "0.5";
		opcDos.style.opacity = "0.5";
		opcTres.style.opacity = "0.5";
		opcCuatro.style.opacity = "0.5";
		opcCinco.style.opacity = "0.5";
		opcSeis.style.opacity = "0.5";
		opcSiete.style.opacity = "0.5";
		opcOcho.style.opacity = "1";
		opcNueve.style.opacity = "0.5";
	} else if (tituloSiete <= 100) {
		iconCero.style.fill = "#333333";
		textOpcCero.style.color = "#333333";
		iconUno.style.fill = "#333333";
		textOpcUno.style.color = "#333333";
		iconDos.style.stroke = "#333333";
		textOpcDos.style.color = "#333333";
		iconTres.style.fill = "#333333";
		textOpcTres.style.color = "#333333";
		iconCuatro.style.fill = "#333333";
		textOpcCuatro.style.color = "#333333";
		iconCinco.style.stroke = "#333333";
		textOpcCinco.style.color = "#333333";
		iconSeis.style.fill = "#333333";
		textOpcSeis.style.color = "#333333";
		iconSiete.style.stroke = "#ff7c7c";
		textOpcSiete.style.color = "#ff7c7c";
		iconOcho.style.fill = "#333333";
		textOpcOcho.style.color = "#333333";
		iconNueve.style.stroke = "#333333";
		textOpcNueve.style.color = "#333333";
		opcCero.style.opacity = "0.5";
		opcUno.style.opacity = "0.5";
		opcDos.style.opacity = "0.5";
		opcTres.style.opacity = "0.5";
		opcCuatro.style.opacity = "0.5";
		opcCinco.style.opacity = "0.5";
		opcSeis.style.opacity = "0.5";
		opcSiete.style.opacity = "1";
		opcOcho.style.opacity = "0.5";
		opcNueve.style.opacity = "0.5";
	} else if (tituloSeis <= 100) {
		iconCero.style.fill = "#333333";
		textOpcCero.style.color = "#333333";
		iconUno.style.fill = "#333333";
		textOpcUno.style.color = "#333333";
		iconDos.style.stroke = "#333333";
		textOpcDos.style.color = "#333333";
		iconTres.style.fill = "#333333";
		textOpcTres.style.color = "#333333";
		iconCuatro.style.fill = "#333333";
		textOpcCuatro.style.color = "#333333";
		iconCinco.style.stroke = "#333333";
		textOpcCinco.style.color = "#333333";
		iconSeis.style.fill = "#ff7c7c";
		textOpcSeis.style.color = "#ff7c7c";
		iconSiete.style.stroke = "#333333";
		textOpcSiete.style.color = "#333333";
		iconOcho.style.fill = "#333333";
		textOpcOcho.style.color = "#333333";
		iconNueve.style.stroke = "#333333";
		textOpcNueve.style.color = "#333333";
		opcCero.style.opacity = "0.5";
		opcUno.style.opacity = "0.5";
		opcDos.style.opacity = "0.5";
		opcTres.style.opacity = "0.5";
		opcCuatro.style.opacity = "0.5";
		opcCinco.style.opacity = "0.5";
		opcSeis.style.opacity = "1";
		opcSiete.style.opacity = "0.5";
		opcOcho.style.opacity = "0.5";
		opcNueve.style.opacity = "0.5";
	} else if (tituloCinco <= 100) {
		iconCero.style.fill = "#333333";
		textOpcCero.style.color = "#333333";
		iconUno.style.fill = "#333333";
		textOpcUno.style.color = "#333333";
		iconDos.style.stroke = "#333333";
		textOpcDos.style.color = "#333333";
		iconTres.style.fill = "#333333";
		textOpcTres.style.color = "#333333";
		iconCuatro.style.fill = "#333333";
		textOpcCuatro.style.color = "#333333";
		iconCinco.style.stroke = "#ff7c7c";
		textOpcCinco.style.color = "#ff7c7c";
		iconSeis.style.fill = "#333333";
		textOpcSeis.style.color = "#333333";
		iconSiete.style.stroke = "#333333";
		textOpcSiete.style.color = "#333333";
		iconOcho.style.fill = "#333333";
		textOpcOcho.style.color = "#333333";
		iconNueve.style.stroke = "#333333";
		textOpcNueve.style.color = "#333333";
		opcCero.style.opacity = "0.5";
		opcUno.style.opacity = "0.5";
		opcDos.style.opacity = "0.5";
		opcTres.style.opacity = "0.5";
		opcCuatro.style.opacity = "0.5";
		opcCinco.style.opacity = "1";
		opcSeis.style.opacity = "0.5";
		opcSiete.style.opacity = "0.5";
		opcOcho.style.opacity = "0.5";
		opcNueve.style.opacity = "0.5";
	} else if (tituloCuatro <= 100) {
		iconCero.style.fill = "#333333";
		textOpcCero.style.color = "#333333";
		iconUno.style.fill = "#333333";
		textOpcUno.style.color = "#333333";
		iconDos.style.stroke = "#333333";
		textOpcDos.style.color = "#333333";
		iconTres.style.fill = "#333333";
		textOpcTres.style.color = "#333333";
		iconCuatro.style.fill = "#ff7c7c";
		textOpcCuatro.style.color = "#ff7c7c";
		iconCinco.style.stroke = "#333333";
		textOpcCinco.style.color = "#333333";
		iconSeis.style.fill = "#333333";
		textOpcSeis.style.color = "#333333";
		iconSiete.style.stroke = "#333333";
		textOpcSiete.style.color = "#333333";
		iconOcho.style.fill = "#333333";
		textOpcOcho.style.color = "#333333";
		iconNueve.style.stroke = "#333333";
		textOpcNueve.style.color = "#333333";
		opcCero.style.opacity = "0.5";
		opcUno.style.opacity = "0.5";
		opcDos.style.opacity = "0.5";
		opcTres.style.opacity = "0.5";
		opcCuatro.style.opacity = "1";
		opcCinco.style.opacity = "0.5";
		opcSeis.style.opacity = "0.5";
		opcSiete.style.opacity = "0.5";
		opcOcho.style.opacity = "0.5";
		opcNueve.style.opacity = "0.5";
	} else if (tituloTres <= 100) {
		iconCero.style.fill = "#333333";
		textOpcCero.style.color = "#333333";
		iconUno.style.fill = "#333333";
		textOpcUno.style.color = "#333333";
		iconDos.style.stroke = "#333333";
		textOpcDos.style.color = "#333333";
		iconTres.style.fill = "#ff7c7c";
		textOpcTres.style.color = "#ff7c7c";
		iconCuatro.style.fill = "#333333";
		textOpcCuatro.style.color = "#333333";
		iconCinco.style.stroke = "#333333";
		textOpcCinco.style.color = "#333333";
		iconSeis.style.fill = "#333333";
		textOpcSeis.style.color = "#333333";
		iconSiete.style.stroke = "#333333";
		textOpcSiete.style.color = "#333333";
		iconOcho.style.fill = "#333333";
		textOpcOcho.style.color = "#333333";
		iconNueve.style.stroke = "#333333";
		textOpcNueve.style.color = "#333333";
		opcCero.style.opacity = "0.5";
		opcUno.style.opacity = "0.5";
		opcDos.style.opacity = "0.5";
		opcTres.style.opacity = "1";
		opcCuatro.style.opacity = "0.5";
		opcCinco.style.opacity = "0.5";
		opcSeis.style.opacity = "0.5";
		opcSiete.style.opacity = "0.5";
		opcOcho.style.opacity = "0.5";
		opcNueve.style.opacity = "0.5";
	} else if (tituloDos <= 100) {
		iconCero.style.fill = "#333333";
		textOpcCero.style.color = "#333333";
		iconUno.style.fill = "#333333";
		textOpcUno.style.color = "#333333";
		iconDos.style.stroke = "#ff7c7c";
		textOpcDos.style.color = "#ff7c7c";
		iconTres.style.fill = "#333333";
		textOpcTres.style.color = "#333333";
		iconCuatro.style.fill = "#333333";
		textOpcCuatro.style.color = "#333333";
		iconCinco.style.stroke = "#333333";
		textOpcCinco.style.color = "#333333";
		iconSeis.style.fill = "#333333";
		textOpcSeis.style.color = "#333333";
		iconSiete.style.stroke = "#333333";
		textOpcSiete.style.color = "#333333";
		iconOcho.style.fill = "#333333";
		textOpcOcho.style.color = "#333333";
		iconNueve.style.stroke = "#333333";
		textOpcNueve.style.color = "#333333";
		opcCero.style.opacity = "0.5";
		opcUno.style.opacity = "0.5";
		opcDos.style.opacity = "1";
		opcTres.style.opacity = "0.5";
		opcCuatro.style.opacity = "0.5";
		opcCinco.style.opacity = "0.5";
		opcSeis.style.opacity = "0.5";
		opcSiete.style.opacity = "0.5";
		opcOcho.style.opacity = "0.5";
		opcNueve.style.opacity = "0.5";
	} else if (tituloUno <= 100) {
		iconCero.style.fill = "#333333";
		textOpcCero.style.color = "#333333";
		iconUno.style.fill = "#ff7c7c";
		textOpcUno.style.color = "#ff7c7c";
		iconDos.style.stroke = "#333333";
		textOpcDos.style.color = "#333333";
		iconTres.style.fill = "#333333";
		textOpcTres.style.color = "#333333";
		iconCuatro.style.fill = "#333333";
		textOpcCuatro.style.color = "#333333";
		iconCinco.style.stroke = "#333333";
		textOpcCinco.style.color = "#333333";
		iconSeis.style.fill = "#333333";
		textOpcSeis.style.color = "#333333";
		iconSiete.style.stroke = "#333333";
		textOpcSiete.style.color = "#333333";
		iconOcho.style.fill = "#333333";
		textOpcOcho.style.color = "#333333";
		iconNueve.style.stroke = "#333333";
		textOpcNueve.style.color = "#333333";
		opcCero.style.opacity = "0.5";
		opcUno.style.opacity = "1";
		opcDos.style.opacity = "0.5";
		opcTres.style.opacity = "0.5";
		opcCuatro.style.opacity = "0.5";
		opcCinco.style.opacity = "0.5";
		opcSeis.style.opacity = "0.5";
		opcSiete.style.opacity = "0.5";
		opcOcho.style.opacity = "0.5";
		opcNueve.style.opacity = "0.5";
	} else {
		iconCero.style.fill = "#ff7c7c";
		textOpcCero.style.color = "#ff7c7c";
		iconUno.style.fill = "#333333";
		textOpcUno.style.color = "#333333";
		iconDos.style.stroke = "#333333";
		textOpcDos.style.color = "#333333";
		iconTres.style.fill = "#333333";
		textOpcTres.style.color = "#333333";
		iconCuatro.style.fill = "#333333";
		textOpcCuatro.style.color = "#333333";
		iconCinco.style.stroke = "#333333";
		textOpcCinco.style.color = "#333333";
		iconSeis.style.fill = "#333333";
		textOpcSeis.style.color = "#333333";
		iconSiete.style.stroke = "#333333";
		textOpcSiete.style.color = "#333333";
		iconOcho.style.fill = "#333333";
		textOpcOcho.style.color = "#333333";
		iconNueve.style.stroke = "#333333";
		textOpcNueve.style.color = "#333333";
		opcCero.style.opacity = "1";
		opcUno.style.opacity = "0.5";
		opcDos.style.opacity = "0.5";
		opcTres.style.opacity = "0.5";
		opcCuatro.style.opacity = "0.5";
		opcCinco.style.opacity = "0.5";
		opcSeis.style.opacity = "0.5";
		opcSiete.style.opacity = "0.5";
		opcOcho.style.opacity = "0.5";
		opcNueve.style.opacity = "0.5";
	}
}

//funcion Determinamos la posicion en la que se encuentra el scroll según la seccion al ser clickeada en el nav izquierdo
//param a = sección clickeada
function scrollMe(a) {
	//* Evaluamos la seccion clickeada y determinamos la posicion del scroll
	switch (a) {
		case 0:
			window.scrollTo(0, 0);
			break;
		case 1:
			document
				.getElementById("tituloUno")
				.scrollIntoView({ behavior: "smooth", inline: "nearest" });
			break;
		case 2:
			document
				.getElementById("tituloDos")
				.scrollIntoView({ behavior: "smooth", inline: "nearest" });
			break;
		case 3:
			document
				.getElementById("tituloTres")
				.scrollIntoView({ behavior: "smooth", inline: "nearest" });
			break;
		case 4:
			document
				.getElementById("tituloCuatro")
				.scrollIntoView({ behavior: "smooth", inline: "nearest" });
			break;
		case 5:
			document
				.getElementById("tituloCinco")
				.scrollIntoView({ behavior: "smooth", inline: "nearest" });
			break;
		case 6:
			document
				.getElementById("tituloSeis")
				.scrollIntoView({ behavior: "smooth", inline: "nearest" });
			break;
		case 7:
			document
				.getElementById("tituloSiete")
				.scrollIntoView({ behavior: "smooth", inline: "nearest" });
			break;
		case 8:
			document
				.getElementById("tituloOcho")
				.scrollIntoView({ behavior: "smooth", inline: "nearest" });
			break;
		case 9:
			document
				.getElementById("tituloNueve")
				.scrollIntoView({ behavior: "smooth", inline: "nearest" });
			break;
	}
	setTimeout(function () {
		window.scrollBy(0, -50);
	}, 750);

	funcionScroll();
}

function navIzqOpa(a, b) {
	var cambia, cambiaText;

	switch (a) {
		case 0:
			cambia = opcCero;
			cambiaText = textOpcCero;
			break;
		case 1:
			cambia = opcUno;
			cambiaText = textOpcUno;
			break;
		case 2:
			cambia = opcDos;
			cambiaText = textOpcDos;
			break;
		case 3:
			cambia = opcTres;
			cambiaText = textOpcTres;
			break;
		case 4:
			cambia = opcCuatro;
			cambiaText = textOpcCuatro;
			break;
		case 5:
			cambia = opcCinco;
			cambiaText = textOpcCinco;
			break;
		case 6:
			cambia = opcSeis;
			cambiaText = textOpcSeis;
			break;
		case 7:
			cambia = opcSiete;
			cambiaText = textOpcSiete;
			break;
		case 8:
			cambia = opcOcho;
			cambiaText = textOpcOcho;
			break;
		case 9:
			cambia = opcNueve;
			cambiaText = textOpcNueve;
			break;
	}

	if (b == 0) {
		cambia.style.opacity = "50%";
		cambiaText.style.opacity = "0%";
	} else {
		cambia.style.opacity = "100%";
		cambiaText.style.opacity = "100%";
	}

	funcionScroll();
}

function checaPos() {
	console.log("checaPos");
	funcionScroll();
	skfbStart();
	if	(window.innerWidth > window.innerHeight) {
		hideShow("tituloCero",1);
		hideShow("tituloCeroCh",0);
		hideShow("clasi",2);
		hideShow("clasiCh",0);
	}else{
		hideShow("tituloCero",0);
		hideShow("tituloCeroCh",1);
		hideShow("clasi",0);
		hideShow("clasiCh",1);
	}
}
