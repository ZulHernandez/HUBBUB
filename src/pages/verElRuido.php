<html>

<head>
    <!--//import Chart.js para gráficas-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.css" integrity="sha512-/zs32ZEJh+/EO2N1b0PEdoA10JkdC3zJ8L5FTiQu82LR9S/rOQNfQN7U59U9BC12swNeRAz3HSzIL2vpp4fv3w==" crossorigin="anonymous" />
    <!--//import Bootstrap como framework de diseño-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <!--//import SweetAlert para alerts estilizadas-->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!--//import P5.js para animaciones base canva-->
    <script src="../dist/p5.js" type="text/javascript"></script>
    <!--//import Dom2Image para generar imagenes de objetos DOM-->
    <script src="../../node_modules/dom-to-image/src/dom-to-image.js" type="text/javascript"></script>
    <!--//import  Estilos aplicados al sitio en general-->
    <link type="text/css" href="../scss/general.css" rel="stylesheet">
    <!--//import  Estilos aplicados a la página Ver el ruido-->
    <link href="../scss/verElRuido.css" rel="stylesheet">
    <!--//import  Js para el manejo del sitio en general-->
    <script src="../js/JSgeneral.js"></script>
    <!--//import  Js para el manejo de la página Ver el ruido-->
    <script src="../js/JSverElRuido.js"></script>

    <!--//main Icono de la página-->
    <link rel="icon" href="../../assets/vector/HUBBUByellow.svg" type="image/x-icon">
    <title>
        HUBBUB | Ver el ruido
    </title>
</head>

<!--//funcion getDate() para obtener la fecha actual-->

<body onload="getDate();">
    <!--//main Se incluye el navegador lateral izquierdo-->
    <!--//funcion navIzq() Colapasa o expande el navegador lateral izquierdo-->
    <!--//param 0 = navegador colapsado-->
    <!--//param 1 = navegador expandido-->
    <div class="navIzq" onmouseout="navIzq(0)" onmouseover="navIzq(1)">
        <div class="row container-fluid" style="margin: 0; padding: 70px 0px;">
            <div class="columnaCh col-1"></div>
            <!--//* Indicador de sección-->
            <div class="columnaCh col-1">
                <div id="divScroll" style="background-color: #FF7C7C; height: 15px; width: 15px; margin-top:25px; border-radius: 50%;"></div>
            </div>
            <div class="columnaCh col-10">
                <!--//* Icono y texto de Home-->
                <!--//funcion scrollMe(a) scrollea la página a una posición determinada-->
                <!--//param a = posiciópn a la cual scrollear-->
                <!--//TODO Falta crear la función scrollMe para esta página-->
                <div id="opcionCero" class="textoDivNavIna" onclick="scrollMe(0);">
                    <span><img class="navIzqIcon" src="../../../../assets/vector/subtitles/home.svg"></span>
                    <span class="textNavIzq">Inicio</span>
                </div>
                <!--//* Icono y texto de la introducción-->
                <div id="opcionUno" class="textoDivNavIna" onclick="scrollMe(1);">
                    <span><img class="navIzqIcon" src="../../../../assets/vector/subtitles/intro.svg"></span>
                    <span class="textNavIzq">Introducción</span>
                </div>
                <!--//* Icono y texto de la participación-->
                <div id="opcionDos" class="textoDivNavIna" onclick="scrollMe(2);">
                    <span><img class="navIzqIcon" src="../../../../assets/vector/subtitles/participa.svg"></span>
                    <span class="textNavIzq">Participación</span>
                </div>
                <!--//* Icono y texto de la presión-->
                <div id="opcionTres" class="textoDivNavIna" onclick="scrollMe(3);">
                    <span><img class="navIzqIcon" src="../../../../assets/vector/subtitles/presion.svg"></span>
                    <span class="textNavIzq">Presión</span>
                </div>
                <!--//* Icono y texto de las variables-->
                <div id="opcionCuatro" class="textoDivNavIna" onclick="scrollMe(4);">
                    <span><img class="navIzqIcon" src="../../../../assets/vector/subtitles/variables.svg"></span>
                    <span class="textNavIzq">Variables</span>
                </div>
                <!--//* Icono y texto de los emisores-->
                <div id="opcionCinco" class="textoDivNavIna" onclick="scrollMe(5);">
                    <span><img class="navIzqIcon" src="../../../../assets/vector/subtitles/emisores.svg"></span>
                    <span class="textNavIzq">Emisores</span>
                </div>
                <!--//* Icono y texto de las alcaldías-->
                <div id="opcionSeis" class="textoDivNavIna" onclick="scrollMe(6);">
                    <span><img class="navIzqIcon" src="../../../../assets/vector/subtitles/alcaldias.svg"></span>
                    <span class="textNavIzq">Alcaldias</span>
                </div>
                <!--//* Icono y texto del mapa-->
                <div id="opcionSiete" class="textoDivNavIna" onclick="scrollMe(7);">
                    <span><img class="navIzqIcon" src="../../../../assets/vector/subtitles/mapa.svg"></span>
                    <span class="textNavIzq">Mapa</span>
                </div>
            </div>
        </div>
    </div>
    <!--//main Se incluye el navegador lateral derecho-->
    <div class="navDer" id="navDer">
        <div class="row container-fluid" style="margin: 0; padding: 85px 0px;">
            <div class="columnaCh col-1">
            </div>
            <div class="columnaCh col-10">
                <!--//* Boton disparador del navDer-->
                <center>
                    <!--//funcion navDer() Colapsa o expande el navegador lateral derecho-->
                    <div onclick="navDer()" style="cursor: pointer; background-blend-mode: screen;">
                        <svg version="1.1" width="40" height="40" viewBox="0 0 40 40" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                            <path id="topLine" d="M6.625 9.95801H33.2917" stroke="#333333" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                            <path id="midLine" d="M6.625 19.958H33.2917" stroke="#333333" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                            <path id="botLine" d="M6.625 29.958H33.2917" stroke="#333333" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </center>
                <!--//* Links del nav derecho-->
                <div id="linksNav" style="padding-top: 50px; display: none;">
                    <a href="../../elRuido.php">
                        <p class="linkNavDerIna">El ruido</p>
                    </a>
                    <p class="linkNavDerAct">Ver el ruido</p>
                    <p class="linkNavDerIna" onclick="nosotros()">Sobre nosotros</p>
                    <p class="linkNavDerIna" onclick="scrollMe(10)">Descarga la app</p>
                </div>
                <!--//* Legales del nav derecho-->
                <div id="legNav" style="padding-top: 500; display: none;">
                    <center>
                        <a href="https://www.facebook.com/HUBBUBALERTA/" target="_blank">
                            <img class="iconNavDer" src="../../assets/vector/redes/facebookW.svg" style="margin-left: 0px;">
                        </a>
                        <a href="https://www.facebook.com/messages/t/194832804678795" target="_blank">
                            <img class="iconNavDer" src="../../assets/vector/redes/messengerW.svg">
                        </a>
                        <a href="https://twitter.com/AlertaRuido?fbclid=IwAR1o5xnyzozS5nXn8jPbySq0Tjvoh5iggQhPWgzvESj-PUYkhOp-7qQ-RgM" target="_blank">
                            <img class="iconNavDer" src="../../assets/vector/redes/twitterW.svg">
                        </a>
                        <a href="mailto:hubbub@azc.uam.mx" target="_blank">
                            <img class="iconNavDer" src="../../assets/vector/redes/mailW.svg">
                        </a>
                        <hr class="hrNavDer">
                        <p class="textCorrido" style="text-align: center; color: white;">HUBBUB<sup style="font-size: 12px;">&copy;</sup></p>
                        <p class="textAvisoN" style="color: white;">Aviso de privacidad</p>
                        <p class="textDerechosN" style="color: white;">Todos los derechos reservados</p>
                    </center>
                </div>
            </div>
            <div class="columnaCh col-1"></div>
        </div>
    </div>
    </div>
    <!--//main Se incluye el hero Image y resumen de la página-->
    <div id="screenParticiapcion" class="container-fluid hero">
        <div class="imagenHero">
            <!--//* Función nosotros dispara Swal de información sobre HUBBUB-->
            <!--//funcion nosotros() dispara el swal sobre la información de HUBBUB-->
            <img class="logoHero" onclick="nosotros();" src="../../assets/gif/HUBBUBIcon.gif">
        </div>
        <div class="row container-fluid divHero">
            <div class="columna col-2"></div>
            <!--//* Resumen de la página-->
            <div class="columna col-5">
                <div class="divResume">
                    <h1 class="pageTitle" style="text-align: right;">Ver el ruido</h1>
                    <br />
                    <p class="textCorrido" style="text-align-last: right;">HUBBUB es una aplicación móvil que permite generar alertas por molestias de ruido
                        que afectan a las personas en su día a día. Cada uno de los reportes ciudadanos creados a través de
                        HUBBUB es usado para generar mapas que evidencian las zonas ruidosas y la fuente de ruido que las genera,
                        así como, si este ruido se produce durante el día o la noche. De esta manera se hace palpable un estudio
                        práctico y colaborativo del fenómeno del ruido en la Ciudad de México.</p>
                </div>
            </div>
            <div class="columna col-1">
                <div class="verticalLine"></div>
                <div id="elOido"></div>
            </div>
            <div class="columna col-4"></div>
        </div>
    </div>
    <!--//main Sección de introducción-->
    <div class="row container-fluid divBody">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="../../assets/vector/subtitles/intro.svg"></span>
                            <span>Introducción</span>
                        </titulo>
                    </h2>
                </center>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//*Texto de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido" style="text-align-last: center;">
                <p>Las mediciones o alertas son hechas a partir de diversos tipos de dispositivos móviles, por lo cual actualmente existe una
                    incertidumbre importante en las mediciones. Es por ello que se sugiere al lector considerar a HUBBUB como una herramienta
                    de medición por molestia de ruido más no una de medición de ruido como lo es un sonómetro y tome los indicadores de este
                    apartado como informativos de la ubicación de zonas contaminadas por ruido. Además, se sugiere que para usos especializados
                    o problemáticas puntuales se consulte con especialistas.</p>
                <p>Todos los datos que se muestran a lo largo de las siguientes gráficas y visualizadores gráficos son obtenidos de los reportes
                    hechos a través de aplicación de HUBBUB Alerta Ruido gracias a la participación ciudadana. Los datos se actualizan cada vez
                    que la página es cargada por lo que los datos mostrados aqui están cargados hasta el día:</p>
                <center>
                    <br />
                    <span id="fechaActual" class="subOido" style="text-transform: lowercase;"></span>
                    <br />
                </center>
                <p style="margin-top: 50px;">
                    Se te invita a contribuir haciendo tus reportes desde la app oficial para que nos ayudes a Ver el Ruido.
                </p>
                <br /><br />
                <center>
                    <a href="https://play.google.com/store/apps/details?id=com.UAM.Noise&hl=es" target="_blank">
                        <img class="introIcon" src="../../assets/vector/redes/playStore.svg" style="margin-right: 0px;">
                    </a>
                    <!--//todo: agregar link de app store-->
                    <a href="" target="">
                        <img class="introIcon" src="../../assets/vector/redes/appleStore.svg">
                    </a>
                    <a href="https://www.facebook.com/HUBBUBALERTA/" target="_blank">
                        <img class="introIcon" src="../../assets/vector/redes/facebook.svg">
                    </a>
                    <a href="https://www.facebook.com/messages/t/194832804678795" target="_blank">
                        <img class="introIcon" src="../../assets/vector/redes/messenger.svg">
                    </a>
                    <a href="https://twitter.com/AlertaRuido?fbclid=IwAR1o5xnyzozS5nXn8jPbySq0Tjvoh5iggQhPWgzvESj-PUYkhOp-7qQ-RgM" target="_blank">
                        <img class="introIcon" src="../../assets/vector/redes/twitter.svg">
                    </a>
                    <a href="mailto:hubbub@azc.uam.mx" target="_blank">
                        <img class="introIcon" src="../../assets/vector/redes/mail.svg">
                    </a>
                </center>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//main Sección de Participación-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="../../assets/vector/subtitles/participa.svg"></span>
                            <span>Participación</span>
                        </titulo>
                    </h2>
                </center>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//*Texto de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>La participación es uno de los aspectos más relevantes dentro de HUBBUB pues es solo gracias a los
                    reportes realizados por los ciudadanos que se puden alimentar las gráficas para poder empezar a ver
                    qué sucede con este fenómeno dentro de la ciudad.</p>
                <p>En el siguiente visualizador se observan la cantidad de reportes que han existido a lo largo de la
                    historia de la aplicación y su comportamiento respecto al tiempo. Para brindar más comodidad en su
                    consulta disponemos de filtros en la parte superior que permite elegir una vista anual, mensual o
                    semanal de reportes; además, una barra de navegación en la parte inferior te permitira navegar al
                    periodo de tiempo que más te interese.</p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Grafica de clasificación de ruidos-->
        <div class="row" style="padding-top: 30px;">
            <div class="columna col-2"></div>
            <!--//* Frame de la grafica, clasiRuido.php es la página que aloja la gráfica-->
            <div class="columna col">
                <iframe id="frameParti" src="../pages/frames/verElRuido/participacion.php" style="width: 100%; height: 800px;"></iframe>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Herramientas de accesibilidad-->
        <div class="row">
            <div class="columna col-8"></div>
            <div id="CHparticipacion" class="columna col-2">
                <!--//* Botón para descargar informacion-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 0 = pinta label de descarga de información-->
                <!--//funcion hideLabel() Oculta las labels-->
                <img class="iconoAcce" onmouseover="appearLabel(0,1)" onmouseout="hideLabel(2,1)" src="../../assets/vector/accesibilidad/descargar.svg" style="margin-right: 15px; margin-left: 100px;">
                <span id="descargar1" class="descargar subFooterText hoverLabel">
                    Descargar<br />informacion
                </span>
                <!--//* Botón para descargar imagen de la gráfica-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 1 = pinta label de guardar la imagen-->
                <!--//funcion hideLabel() Oculta las labels-->
                <!--//funcion llamaShot(a) Comienza la captura de pantalla de la gráfica-->
                <!--//param 'CHparticipación' = indica a que objetoDOM tomara captura-->
                <img class="iconoAcce" onmouseover="appearLabel(1,1)" onmouseout="hideLabel(2,1)" onclick="llamaShot('frameParti','CHparticipacion')" src="../../assets/vector/accesibilidad/screens.svg" style="margin-right: 15px;">
                <span id="imagen1" class="imagen subFooterText hoverLabel">
                    Guardar<br />imagen
                </span>
                <!--//* Botón para citar o embear la gráfica-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 2 = pinta label para el embed y cita-->
                <!--//funcion hideLabel() Oculta las labels-->
                <!--//funcion appearMenu() Aparece el submenu de la opción de embed y cita-->
                <img class="iconoAcce" onmouseover="appearLabel(2,1)" onmouseout="hideLabel(2,1)" onclick="appearMenu(1)" src="../../assets/vector/accesibilidad/compartir.svg">
                <span id="embedar1" class="embedar subFooterText hoverLabel">
                    Embedar o<br />referenciar
                </span>
                <!--//*Submenu de opciones de embed y cita-->
                <span id="embedarMenu1" class="subFooterText hoverLabel embedarMenu">
                    <!--//* Opción para embedar la gráfica-->
                    <!--//funcion embedSwal() dispara Swal para embedar-->
                    <text class="menuEmbed" onclick="embedSwal(1)">Embedar &#60;&#47;&#62;</text>
                    <br />
                    <!--//* Opción para citar la gráfica-->
                    <!--//funcion citaSwal() dispara Swal para citar-->
                    <text class="menuEmbed" onclick="citaSwal(1)">Citar ""</text>
                </span>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//main Sección de Presión sonora-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="../../assets/vector/subtitles/presion.svg"></span>
                            <span>Presión sonora</span>
                        </titulo>
                    </h2>
                </center>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//*Texto de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>La presión sonora es medida en decibelios, estos posteriormente son ponderados con el objetivo de
                    compensar los posibbles errores deribados del hardware del celular y que pueda representar de
                    mejor forma la intesisdad de sonido de algún ruido, que es de lo que podría decirse que se engloba en esta unidad.</p>
                <p>A continuación se encuentra un gráfico que recoge todos los reportes hechos hasta el momento y los
                    divide de acuerdo a los rangos de dBA que han sido capturados. En un afán de mantener el orden se
                    adjunta una barra en la zona inferior que explica el orden creciente de la unidad mientras que, en
                    los recuadros, se pude observar el porcentaje en tamaño que representan respecto al total de reportes.</p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Grafica de presión sonora-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <!--//* Frame de la grafica, clasiRuido.php es la página que aloja la gráfica-->
            <div class="columna col">
                <iframe id="framePresion" src="../pages/frames/verElRuido/presionSonora.php" style="width: 100%; height: 700px;"></iframe>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Herramientas de accesibilidad-->
        <div class="row" style="padding-top: 30px;">
            <div class="columna col-8"></div>
            <div id="CHparticipacion" class="columna col-2">
                <!--//* Botón para descargar informacion-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 0 = pinta label de descarga de información-->
                <!--//funcion hideLabel() Oculta las labels-->
                <img class="iconoAcce" onmouseover="appearLabel(0,2)" onmouseout="hideLabel(2,2)" src="../../assets/vector/accesibilidad/descargar.svg" style="margin-right: 15px; margin-left: 100px;">
                <span id="descargar2" class="descargar subFooterText hoverLabel">
                    Descargar<br />informacion
                </span>
                <!--//* Botón para descargar imagen de la gráfica-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 1 = pinta label de guardar la imagen-->
                <!--//funcion hideLabel() Oculta las labels-->
                <!--//funcion llamaShot(a) Comienza la captura de pantalla de la gráfica-->
                <!--//param 'CHparticipación' = indica a que objetoDOM tomara captura-->
                <img class="iconoAcce" onmouseover="appearLabel(1,2)" onmouseout="hideLabel(2,2)" onclick="llamaShot('framePresion','presionSon')" src="../../assets/vector/accesibilidad/screens.svg" style="margin-right: 15px;">
                <span id="imagen2" class="imagen subFooterText hoverLabel">
                    Guardar<br />imagen
                </span>
                <!--//* Botón para citar o embear la gráfica-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 2 = pinta label para el embed y cita-->
                <!--//funcion hideLabel() Oculta las labels-->
                <!--//funcion appearMenu() Aparece el submenu de la opción de embed y cita-->
                <img class="iconoAcce" onmouseover="appearLabel(2,2)" onmouseout="hideLabel(2,2)" onclick="appearMenu(2)" src="../../assets/vector/accesibilidad/compartir.svg">
                <span id="embedar2" class="embedar subFooterText hoverLabel">
                    Embedar o<br />referenciar
                </span>
                <!--//*Submenu de opciones de embed y cita-->
                <span id="embedarMenu2" class="embedarMenu subFooterText hoverLabel">
                    <!--//* Opción para embedar la gráfica-->
                    <!--//funcion embedSwal() dispara Swal para embedar-->
                    <text class="menuEmbed" onclick="embedSwal(2)">Embedar &#60;&#47;&#62;</text>
                    <br />
                    <!--//* Opción para citar la gráfica-->
                    <!--//funcion citaSwal() dispara Swal para citar-->
                    <text class="menuEmbed" onclick="citaSwal(2)">Citar ""</text>
                </span>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//*Texto de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>El siguiene streamgraph visualiza con mayor prescición la cantidad de reportes, en este caso, se 
                    prioriza ver la cantidad de reportes y el comportamiento de estos olvidando rangos y tomando en 
                    cuenta las unidades entre las decenas.</p>
                <p>De igual forma puedes resaltar aquellos reportes que se encuentran por debajo el promedio de 
                    reportes y también aquellos que se encuentran por debajo del promedio de dBAs.</p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Grafica de clasificación de ruidos-->
        <div class="row" style="padding-top: 30px;">
            <div class="columna col-2"></div>
            <!--//* Frame de la grafica, clasiRuido.php es la página que aloja la gráfica-->
            <div class="columna col">
                <iframe id="framePresionCH" src="../pages/frames/verElRuido/presionCh.php" style="width: 100%; height: 700px;"></iframe>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Herramientas de accesibilidad-->
        <div class="row">
            <div class="columna col-8"></div>
            <div id="CHparticipacion" class="columna col-2">
                <!--//* Botón para descargar informacion-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 0 = pinta label de descarga de información-->
                <!--//funcion hideLabel() Oculta las labels-->
                <img class="iconoAcce" onmouseover="appearLabel(0,3)" onmouseout="hideLabel(2,3)" src="../../assets/vector/accesibilidad/descargar.svg" style="margin-right: 15px; margin-left: 100px;">
                <span id="descargar3" class="descargar subFooterText hoverLabel">
                    Descargar<br />informacion
                </span>
                <!--//* Botón para descargar imagen de la gráfica-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 1 = pinta label de guardar la imagen-->
                <!--//funcion hideLabel() Oculta las labels-->
                <!--//funcion llamaShot(a) Comienza la captura de pantalla de la gráfica-->
                <!--//param 'CHparticipación' = indica a que objetoDOM tomara captura-->
                <img class="iconoAcce" onmouseover="appearLabel(1,3)" onmouseout="hideLabel(2,3)" onclick="llamaShot('framePresionCH','CHpresion')" src="../../assets/vector/accesibilidad/screens.svg" style="margin-right: 15px;">
                <span id="imagen3" class="imagen subFooterText hoverLabel">
                    Guardar<br />imagen
                </span>
                <!--//* Botón para citar o embear la gráfica-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 2 = pinta label para el embed y cita-->
                <!--//funcion hideLabel() Oculta las labels-->
                <!--//funcion appearMenu() Aparece el submenu de la opción de embed y cita-->
                <img class="iconoAcce" onmouseover="appearLabel(2,3)" onmouseout="hideLabel(2,3)" onclick="appearMenu(3)" src="../../assets/vector/accesibilidad/compartir.svg">
                <span id="embedar3" class="embedar subFooterText hoverLabel">
                    Embedar o<br />referenciar
                </span>
                <!--//*Submenu de opciones de embed y cita-->
                <span id="embedarMenu3" class="embedarMenu subFooterText hoverLabel">
                    <!--//* Opción para embedar la gráfica-->
                    <!--//funcion embedSwal() dispara Swal para embedar-->
                    <text class="menuEmbed" onclick="embedSwal(3)">Embedar &#60;&#47;&#62;</text>
                    <br />
                    <!--//* Opción para citar la gráfica-->
                    <!--//funcion citaSwal() dispara Swal para citar-->
                    <text class="menuEmbed" onclick="citaSwal(3)">Citar ""</text>
                </span>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//main Sección de Variables-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="../../assets/vector/subtitles/variables.svg"></span>
                            <span>Variables</span>
                        </titulo>
                    </h2>
                </center>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//*Texto de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>Los reportes hechos desde la aplicación recogen diferentes variables que ayudan a conocer un poco 
                    más del cómo los habitantes de la Ciudad de México experimentan el ruido del lugar donde viven. 
                    También, podemos conocer con que aparato fue hecha la medición lo que nos habla del acercamiento 
                    a la realidad con lo que fue tomada.</p>
                <p>Lo siguiente es una matriz de puntos de 20x10 unidades que representan el 100% de los reportes 
                    totales que muestran las características de estos conociendo el espacio en que fueron tomados 
                    (exterior o interior), la fuente emisora del ruido, qué nivel de molestia generó en el usuario, 
                    en qué momento del día hizo el reporte (6:00-9:59 o 10:00-5:59) y el sistema operativo del dispositivo 
                    desde el que se ejecutó la aplicación.</p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Grafica de presión sonora-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <!--//* Frame de la grafica, clasiRuido.php es la página que aloja la gráfica-->
            <div class="columna col">
                <iframe id="frameVar" src="../pages/frames/verElRuido/variables.php" style="width: 100%; height: 910px;"></iframe>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Herramientas de accesibilidad-->
        <div class="row" style="padding-top: 0px;">
            <div class="columna col-8"></div>
            <div id="CHparticipacion" class="columna col-2">
                <!--//* Botón para descargar informacion-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 0 = pinta label de descarga de información-->
                <!--//funcion hideLabel() Oculta las labels-->
                <img class="iconoAcce" onmouseover="appearLabel(0,4)" onmouseout="hideLabel(2,4)" src="../../assets/vector/accesibilidad/descargar.svg" style="margin-right: 15px; margin-left: 100px;">
                <span id="descargar4" class="descargar subFooterText hoverLabel">
                    Descargar<br />informacion
                </span>
                <!--//* Botón para descargar imagen de la gráfica-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 1 = pinta label de guardar la imagen-->
                <!--//funcion hideLabel() Oculta las labels-->
                <!--//funcion llamaShot(a) Comienza la captura de pantalla de la gráfica-->
                <!--//param 'CHparticipación' = indica a que objetoDOM tomara captura-->
                <img class="iconoAcce" onmouseover="appearLabel(1,4)" onmouseout="hideLabel(2,4)" onclick="llamaShot('frameVar','variables')" src="../../assets/vector/accesibilidad/screens.svg" style="margin-right: 15px;">
                <span id="imagen4" class="imagen subFooterText hoverLabel">
                    Guardar<br />imagen
                </span>
                <!--//* Botón para citar o embear la gráfica-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 2 = pinta label para el embed y cita-->
                <!--//funcion hideLabel() Oculta las labels-->
                <!--//funcion appearMenu() Aparece el submenu de la opción de embed y cita-->
                <img class="iconoAcce" onmouseover="appearLabel(2,4)" onmouseout="hideLabel(2,4)" onclick="appearMenu(4)" src="../../assets/vector/accesibilidad/compartir.svg">
                <span id="embedar4" class="embedar subFooterText hoverLabel">
                    Embedar o<br />referenciar
                </span>
                <!--//*Submenu de opciones de embed y cita-->
                <span id="embedarMenu4" class="embedarMenu subFooterText hoverLabel">
                    <!--//* Opción para embedar la gráfica-->
                    <!--//funcion embedSwal() dispara Swal para embedar-->
                    <text class="menuEmbed" onclick="embedSwal(4)">Embedar &#60;&#47;&#62;</text>
                    <br />
                    <!--//* Opción para citar la gráfica-->
                    <!--//funcion citaSwal() dispara Swal para citar-->
                    <text class="menuEmbed" onclick="citaSwal(4)">Citar ""</text>
                </span>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//main Sección de Emisores-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="../../assets/vector/subtitles/emisores.svg"></span>
                            <span>Emisores</span>
                        </titulo>
                    </h2>
                </center>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//*Texto de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>HUBBUB requiere para sus reportes la identificación de la fuente emisora del ruido pues esto puede 
                    hablarnos de emisores estacionarios o móviles; también, advierte de cuáles son las fuentes de 
                    sonido que más molestan a la ciudadanía y puede ayudarnos a tomar acciones al respecto.</p>
                <p>El siguiente visualizador escribe con el mayor tamaño aquel emisor de los que se encuentran de la 
                    app que es el más reportado, siendo el <b>tráfico el emisor más reportado</b>. Para mayor 
                    comodidad se hace uso de un cambio en el grosor de letra y también en el color para poder 
                    identificar de forma más sencilla cuál es la posición en el ranking en la que se encuentra cada 
                    tipo de emisor.</p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Grafica de presión sonora-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <!--//* Frame de la grafica, clasiRuido.php es la página que aloja la gráfica-->
            <div class="columna col-8">
                <iframe id="frameEmi" src="../pages/frames/verElRuido/emisores.php" style="width: 100%; height: 600px;"></iframe>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Herramientas de accesibilidad-->
        <div class="row" style="padding-top: 0px;">
            <div class="columna col-8"></div>
            <div id="CHparticipacion" class="columna col-2">
                <!--//* Botón para descargar informacion-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 0 = pinta label de descarga de información-->
                <!--//funcion hideLabel() Oculta las labels-->
                <img class="iconoAcce" onmouseover="appearLabel(0,5)" onmouseout="hideLabel(2,5)" src="../../assets/vector/accesibilidad/descargar.svg" style="margin-right: 15px; margin-left: 100px;">
                <span id="descargar5" class="descargar subFooterText hoverLabel">
                    Descargar<br />informacion
                </span>
                <!--//* Botón para descargar imagen de la gráfica-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 1 = pinta label de guardar la imagen-->
                <!--//funcion hideLabel() Oculta las labels-->
                <!--//funcion llamaShot(a) Comienza la captura de pantalla de la gráfica-->
                <!--//param 'CHparticipación' = indica a que objetoDOM tomara captura-->
                <img class="iconoAcce" onmouseover="appearLabel(1,5)" onmouseout="hideLabel(2,5)" onclick="llamaShot('frameEmi','emisores')" src="../../assets/vector/accesibilidad/screens.svg" style="margin-right: 15px;">
                <span id="imagen5" class="imagen subFooterText hoverLabel">
                    Guardar<br />imagen
                </span>
                <!--//* Botón para citar o embear la gráfica-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 2 = pinta label para el embed y cita-->
                <!--//funcion hideLabel() Oculta las labels-->
                <!--//funcion appearMenu() Aparece el submenu de la opción de embed y cita-->
                <img class="iconoAcce" onmouseover="appearLabel(2,5)" onmouseout="hideLabel(2,5)" onclick="appearMenu(5)" src="../../assets/vector/accesibilidad/compartir.svg">
                <span id="embedar5" class="embedar subFooterText hoverLabel">
                    Embedar o<br />referenciar
                </span>
                <!--//*Submenu de opciones de embed y cita-->
                <span id="embedarMenu5" class="embedarMenu subFooterText hoverLabel">
                    <!--//* Opción para embedar la gráfica-->
                    <!--//funcion embedSwal() dispara Swal para embedar-->
                    <text class="menuEmbed" onclick="embedSwal(5)">Embedar &#60;&#47;&#62;</text>
                    <br />
                    <!--//* Opción para citar la gráfica-->
                    <!--//funcion citaSwal() dispara Swal para citar-->
                    <text class="menuEmbed" onclick="citaSwal(5)">Citar ""</text>
                </span>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//main Sección de Emisores-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="../../assets/vector/subtitles/alcaldias.svg"></span>
                            <span>Las alcaldías</span>
                        </titulo>
                    </h2>
                </center>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//*Texto de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>Ubicar los espacios donde se encuentra la mayor cantidad de ruido puede ser una oportunidad para 
                    emprender acciones realizadas al cuidado de su contaminación sonora; también nos puede ayudar a 
                    entender los fenómenos industriales o antropológicos que se dan por zonas y así generar un 
                    estudio mucho más enriquecido de lo que el ruido es.</p>
                <p>Este visualizador permite conocer la situación respecto al ruido que cada una de las alcaldías 
                    reporta desde la aplicación y denotando la cantidad de participación que existe dentro de las 
                    mismas. El ranking de alcaldías de la zona inferior proporciona una rápida ubicación de las 
                    alcaldías que realizan más reportes en conjunto con un mapa que muestra su ubicación, la 
                    cantidad de dBA promedio que se han reportado dentro de la zona adjunto a al nivel de molestia 
                    más reportado en la zona y una pequeña gráfica de araña que permite conocer en detalle el 
                    comportamiento por emisor dentro de la alcaldía.</p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Grafica de presión sonora-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <!--//* Frame de la grafica, clasiRuido.php es la página que aloja la gráfica-->
            <div class="columna col-8">
                <iframe id="frameAlc" src="../pages/frames/verElRuido/alcaldias.php" style="width: 100%; height: 600px;"></iframe>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Herramientas de accesibilidad-->
        <div class="row" style="padding-top: 0px;">
            <div class="columna col-8"></div>
            <div id="CHparticipacion" class="columna col-2">
                <!--//* Botón para descargar informacion-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 0 = pinta label de descarga de información-->
                <!--//funcion hideLabel() Oculta las labels-->
                <img class="iconoAcce" onmouseover="appearLabel(0,5)" onmouseout="hideLabel(2,5)" src="../../assets/vector/accesibilidad/descargar.svg" style="margin-right: 15px; margin-left: 100px;">
                <span id="descargar5" class="descargar subFooterText hoverLabel">
                    Descargar<br />informacion
                </span>
                <!--//* Botón para descargar imagen de la gráfica-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 1 = pinta label de guardar la imagen-->
                <!--//funcion hideLabel() Oculta las labels-->
                <!--//funcion llamaShot(a) Comienza la captura de pantalla de la gráfica-->
                <!--//param 'CHparticipación' = indica a que objetoDOM tomara captura-->
                <img class="iconoAcce" onmouseover="appearLabel(1,5)" onmouseout="hideLabel(2,5)" onclick="llamaShot('frameEmi','emisores')" src="../../assets/vector/accesibilidad/screens.svg" style="margin-right: 15px;">
                <span id="imagen5" class="imagen subFooterText hoverLabel">
                    Guardar<br />imagen
                </span>
                <!--//* Botón para citar o embear la gráfica-->
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 2 = pinta label para el embed y cita-->
                <!--//funcion hideLabel() Oculta las labels-->
                <!--//funcion appearMenu() Aparece el submenu de la opción de embed y cita-->
                <img class="iconoAcce" onmouseover="appearLabel(2,5)" onmouseout="hideLabel(2,5)" onclick="appearMenu(5)" src="../../assets/vector/accesibilidad/compartir.svg">
                <span id="embedar5" class="embedar subFooterText hoverLabel">
                    Embedar o<br />referenciar
                </span>
                <!--//*Submenu de opciones de embed y cita-->
                <span id="embedarMenu5" class="embedarMenu subFooterText hoverLabel">
                    <!--//* Opción para embedar la gráfica-->
                    <!--//funcion embedSwal() dispara Swal para embedar-->
                    <text class="menuEmbed" onclick="embedSwal(5)">Embedar &#60;&#47;&#62;</text>
                    <br />
                    <!--//* Opción para citar la gráfica-->
                    <!--//funcion citaSwal() dispara Swal para citar-->
                    <text class="menuEmbed" onclick="citaSwal(5)">Citar ""</text>
                </span>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//main Sección completa de foot-->
    <div style="z-index: 11; position: absolute; width: 100%;">
        <!--//main Footer-->
        <div class="row container-fluid divBody footer">
            <div class="row">
                <div class="columna col-1"></div>
                <!--//* Icono para regresar al hero-->
                <!--//funcion scrollMe(a) scrollea a cierta posición-->
                <!--//param 0 = scrollea al hero-->
                <div onclick="scrollMe(0)" class="columna col-1">
                    <img class="logoFoot" src="../../assets/vector/HUBBUBIconWhite.svg">
                </div>
                <div class="columna col-3"></div>
                <!--//* Columna de descargas-->
                <div class="columna col">
                    <p class="tituloFooter">Descargas</p>
                    <a href="https://play.google.com/store/apps/details?id=com.UAM.Noise&hl=es" target="_blank">
                        <img class="iconNosotros" src="../../assets/vector/redes/playStoreW.svg">
                    </a>
                    <!--//todo Agregar aplicación para iOS //-->
                    <img class="iconNosotros" src="../../assets/vector/redes/appleStoreW.svg">
                </div>
                <!--//* Columna de mapa del sitio-->
                <div class="columna col">
                    <p class="tituloFooter">Sitio</p>
                    <a href="../../elRuido.php">
                        <p class="linkFooter" style="margin-top:20px">El ruido</p>
                    </a>
                    <p class="linkFooterAct">Ver el ruido</p>
                    <!--//funcion nosotros() abre una ventana con la información de nosotros-->
                    <p class="linkFooter" onclick="nosotros();">Sobre nosotros</p>
                </div>
                <!--//* Columna de contacto-->
                <div class="columna col">
                    <p class="tituloFooter">Contacto</p>
                    <a href="https://www.facebook.com/HUBBUBALERTA/" target="_blank">
                        <img class="iconNosotros" src="../../assets/vector/redes/facebookW.svg">
                    </a>
                    <a href="https://www.facebook.com/messages/t/194832804678795" target="_blank">
                        <img class="iconNosotros" src="../../assets/vector/redes/messengerW.svg">
                    </a>
                    <a href="https://twitter.com/AlertaRuido?fbclid=IwAR1o5xnyzozS5nXn8jPbySq0Tjvoh5iggQhPWgzvESj-PUYkhOp-7qQ-RgM" target="_blank">
                        <img class="iconNosotros" src="../../assets/vector/redes/twitterW.svg">
                    </a>
                    <br /><br />
                    <a href="mailto:hubbub@azc.uam.mx" target="_blank">
                        <p class="linkFooter">hubbub@azc.uam.mx</p>
                    </a>
                </div>
                <div class="columna col-1"></div>
            </div>
        </div>
        <!--//main Sub Footer-->
        <div class="row container-fluid divBody subFooter" style="padding: 20px 0px; background-color: white; width: 100%;">
            <!--//*Textos de la sección-->
            <div class="row subFooterText">
                <div class="columna col-1"></div>
                <div class="columna col">
                    <center>
                        Aviso de privacidad
                    </center>
                </div>
                <div class="columna col">
                    <center>
                        Todos los derechos reservados
                    </center>
                </div>
                <div class="columna col">
                    <center>
                        HUBBUB (2022) ©
                    </center>
                </div>
                <div class="columna col-1"></div>
            </div>
        </div>
    </div>
    <!--//main Template para el Swal de información sobre HUBBUB-->
    <template id="nosotrosSwal">
        <swal-html>
            <div class="row" style="width: 100%;">
                <!--//* Imagen y legales del Swal-->
                <div class="columna col-4">
                    <div class="divIzqNos">
                        <img class="logoHUBBUB" src="../../assets/vector/HUBBUBLogo.svg">
                        <br />
                        <a href="https://www.facebook.com/HUBBUBALERTA/" target="_blank">
                            <img class="iconNosotros" src="../../assets/vector/redes/facebook.svg">
                        </a>
                        <a href="https://www.facebook.com/messages/t/194832804678795" target="_blank">
                            <img class="iconNosotros" src="../../assets/vector/redes/messenger.svg">
                        </a>
                        <a href="https://twitter.com/AlertaRuido?fbclid=IwAR1o5xnyzozS5nXn8jPbySq0Tjvoh5iggQhPWgzvESj-PUYkhOp-7qQ-RgM" target="_blank">
                            <img class="iconNosotros" src="../../assets/vector/redes/twitter.svg">
                        </a>
                        <a href="mailto:hubbub@azc.uam.mx" target="_blank">
                            <img class="iconNosotros" src="../../assets/vector/redes/mail.svg">
                        </a>
                        <center>
                            <hr class="hrSwal" />
                            <p class="textCorrido" style="text-align: center;">HUBBUB&copy;</p>
                            <p class="textAvisoN">Aviso de privacidad</p>
                            <p class="textDerechosN">Todos los derechos reservados</p>
                        </center>
                    </div>
                </div>
                <div class="columna col-1">
                    <div class="verticalLineNos"></div>
                </div>
                <!--//* Texto del Swal-->
                <div class="columna col-7">
                    <div class="divDerNos" style="text-align: justify;">
                        <p class="subtitle" style="text-transform: none">Sobre nosotros</p><br />
                        <p class="textSobreN">HUBBUB Alerta ruido es una iniciativa de la Mtra. Verónica Arroyo Pedroza de la Universidad Autónoma Metropolitana, CyAD Azcapotzalco, a partir del trabajo conjunto con el Laboratorio de Análisis y Diseño Acústico (LADAc) de la misma Universidad. Dicho laboratorio desarrolla el primer mapa de ruido de la Ciudad de México por medio de equipamiento de medición especializado, siendo su información y uso para fines académicos y de divulgación científica.</p>
                        <p class="textSobreN">Siendo la ciudadanía la principal afectada por el tema se planea, diseña y desarrolla una aplicación móvil que promueve la participación ciudadana en el tema de la contaminación ambiental por ruido, con el fin de mapear las áreas con más molestias y determinar las fuentes más comunes que generan dicha molestia.</p>
                        <p class="textSobreN">El objetivo de la aplicación HUBBUB® Alerta ruido, es concientizar y promover un medio ambiente más respetuoso en zonas urbanas, monitoreando por medio de la colaboración ciudadana las zonas caóticas contaminadas por ruido.</p>
                        <p class="textSobreN">Se plantea el análisis integral del ruido ambiental en la ciudad a partir de sistemas de colaboración abierta en las que el usuario comparta sus experiencia de molestia por ruido y consolide una base de datos.</p>
                        <p class="textSobreN">Los datos recabados por este monitoreo se emplean para desarrollar mapas de las zonas de mayor impacto por ruido que se visualizan tanto en la aplicación como en una página web en desarrollo.</p>
                        <p class="textSobreN">Lograr conciencia ciudadana sobre el tema del ruido y con ello impacto en las autoridades para generar legislación al respecto.</p>
                        <p class="textSobreN">Entendemos que el problema de ruido no se detendrá por el uso de una aplicación, pero sí con los productos que esta genere. A través de Hubbub podemos intermediar a que la ciudadanía canalice sus alertas y logremos un mapeo ciudadano por molestia de ruido que ayude a promover, ante las autoridades competentes, medidas legislativas que promuevan la prevención de este contaminante que tanto afecta la salud.</p>
                        <p class="textSobreN">En Latinoamérica México es uno de los países que cuenta con los peores niveles de participación ciudadana, por lo mismo no cuenta con una base social organizada ni una conciencia social sólida, según comenta Mauricio Merino Huerta investigador del CIDE y participante de la organización civil Nosotrxs, “La conciencia significa estar advertidos del lugar en que vivimos” cita.</p>
                        <p class="textSobreN">Esta advertencia estimula al equipo HUBBUB para seguir promoviendo nuestra aplicación. A la fecha somos ya un gran equipo de especialistas en el tema del ruido, desarrolladores, programadores y diseñadores que trabajamos en conjunto para actualizar constantemente nuestra aplicación y cada vez brindar más elementos a la ciudadanía para entender el gran problema que el RUIDO significa.</p>
                    </div>
                </div>
            </div>
        </swal-html>
    </template>
    <!--//main Template para el Swal de captura de pantalla-->
    <template id="shootSwal">
        <swal-html>
            <div class="row container-fluid">
                <!--//* Título del Swal-->
                <div class="columna col-12">
                    <p class="subOido">Descargar imagen</p>
                </div>
            </div>
            <div class="row container-fluid">
                <!--//* Imagen capturada y marcas de agua-->
                <div id="imgDown" class="columna col-9">
                    <img id="imgOut" src=""><br />
                    <span><img style="height: 10px;" src="../../assets/vector/accesibilidad/marcaUAM.svg"></span>
                    <span style="text-align: left;" class="textAvisoN"><i>Nota.</i> Tomada de "Veamos el ruido", por HUBBUB Alerta Ruido, 2022, https://hubbub.com/p/veamos-el-ruido. Derecho de autor 2022.</span>
                </div>
                <div class="columna col-2">
                    <center>
                        <div class="verticalLineNos"></div>
                    </center>
                </div>
                <!--//* Opciones de descarga de imagen-->
                <!--//funcion crearImg() genera una imagen de la previsualizaci[on y la descarga-->
                <!--//param 0 = imagen de tipo png-->
                <!--//param 1 = imagen de tipo jpg-->
                <!--//param 2 = imagen de tipo svg-->
                <div class="columna col-1">
                    <img onclick="createImagen(0)" class="descargaImg" src="../../assets/vector/descargaImg/png.svg">
                    <img onclick="createImagen(1)" class="descargaImg" src="../../assets/vector/descargaImg/jpg.svg">
                    <img onclick="createImagen(2)" class="descargaImg" src="../../assets/vector/descargaImg/svg.svg">
                </div>
            </div>
        </swal-html>
    </template>
    <!--//main Template para el Swal de cita-->
    <template id="citaSwal">
        <swal-html>
            <div class="row container-fluid">
                <!--//* Título del Swal-->
                <div class="columna col-12">
                    <p class="subOido">Citar ""</p>
                </div>
            </div>
            <div class="row container-fluid">
                <!--//* Texto de cita del Swal-->
                <div class="columna col-12">
                    <textarea id="textCita" class="textoSwal textCita">Nota. Tomada de "Veamos el ruido", por HUBBUB Alerta Ruido, 2022, https://hubbub.com/p/veamos-el-ruido. Derecho de autor 2022.</textarea>
                </div>
            </div>
            <div class="row container-fluid" style="padding-top: 20px;">
                <!--//* Botón para copiar al portapapeles-->
                <!--//funcion copyToClipBoard(a) indica que texto copiar directo al portapapeles-->
                <!--//param 0 = copia el texto de cita-->
                <div class="columna col-2 copiaPorta" onclick="copyToClipBoard(0)">
                    <img id="imgCopy" class="imgCopiaPorta" src="../../assets/vector/accesibilidad/copiarPortaIna.svg">
                </div>
                <div class="columna col-8">
                </div>
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 4 = pinta label de cita-->
                <!--//funcion hideLabel(a) indica que label ocultar-->
                <!--//param 0 = oculta label de cita-->
                <div class="columna col-2">
                    <img class="imgCopiaPorta copiaPorta" onmouseover="appearLabel(4)" onmouseout="hideLabel(0)" src="../../assets/vector/accesibilidad/info.svg" style="padding-left: 50px;">
                    <span id="citaInfo" class="citaInfo subFooterText hoverLabel">
                        Copia la cita de arriba y<br />referencía esta gráfica
                    </span>
                </div>
            </div>
        </swal-html>
    </template>
    <!--//main Template para el Swal de embed-->
    <template id="embedSwal">
        <swal-html>
            <div class="row container-fluid">
                <!--//* Título del Swal-->
                <div class="columna col-12">
                    <p class="subOido">Embedar &#60;&#47;&#62;</p>
                </div>
            </div>
            <div class="row container-fluid">
                <!--//* Texto del Swal-->
                <div class="columna col-12">
                    <!--//todo Obtener embedCode correcto-->
                    <textarea id="textEmbed" class="textoSwal textCita"></textarea>
                </div>
            </div>
            <div class="row container-fluid" style="padding-top: 20px;">
                <!--//* Botón para copiar al portapapeles-->
                <!--//funcion copyToClipBoard(a) indica que texto copiar directo al portapapeles-->
                <!--//param 1 = copia el texto de embed-->
                <div class="columna col-2 copiaPorta" onclick="copyToClipBoard(1)">
                    <img id="imgCopy" class="imgCopiaPorta" src="../../assets/vector/accesibilidad/copiarPortaIna.svg">
                </div>
                <div class="columna col-8">
                </div>
                <!--//funcion appearLabel(a) indica que label pintar-->
                <!--//param 5 = pinta label de embed-->
                <!--//funcion hideLabel(a) indica que label ocultar-->
                <!--//param 1 = oculta label de embed-->
                <div class="columna col-2">
                    <img class="imgCopiaPorta copiaPorta" onmouseover="appearLabel(5)" onmouseout="hideLabel(1)" src="../../assets/vector/accesibilidad/info.svg" style="padding-left: 50px;">
                    <span id="embedInfo" class="embedInfo subFooterText hoverLabel">
                        Copia el código de embed<br />y pegalo en tu página
                    </span>
                </div>
            </div>
        </swal-html>
    </template>
</body>

</html>