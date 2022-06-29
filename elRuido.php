<html>

<head>
    <!--//import Implementación de librerias se incluyen: Chart, Bootstrap, Sweetalert, p5 y sketchFabViewer-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.css" integrity="sha512-/zs32ZEJh+/EO2N1b0PEdoA10JkdC3zJ8L5FTiQu82LR9S/rOQNfQN7U59U9BC12swNeRAz3HSzIL2vpp4fv3w==" crossorigin="anonymous" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="src/dist/p5.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js"></script>
    <!--//import  Estilos aplicados al sitio en general-->
    <link href="src/scss/general.css" rel="stylesheet">
    <!--//import  Estilos aplicados a la página El ruido-->
    <link href="src/scss/elRuido.css" rel="stylesheet">
    <!--//import  Js para el manejo del sitio en general-->
    <script src="src/js/JSgeneral.js"></script>
    <!--//import  Js para el manejo del sitio en general-->
    <script src="src/js/JSelRuido.js"></script>
    <!--//import  Js para el esquema del oído-->
    <script type="text/javascript" src="src/js/P5esquemaOido.js"></script>
    <!--//main Icono de la página-->
    <link rel="icon" href="assets/vector/HUBBUByellow.svg" type="image/x-icon">
    <title>
        HUBBUB | El ruido
    </title>
</head>

<!--//funcion Inicia el visualizador de sketchfab al cargar-->

<body onload="skfbStart();">
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
                <div id="opcionCero" class="textoDivNavIna" onclick="scrollMe(0);">
                    <span><img class="navIzqIcon" src="assets/vector/subtitles/home.svg"></span>
                    <span class="textNavIzq">Inicio</span>
                </div>
                <!--//* Icono y texto de El oido-->
                <div id="opcionUno" class="textoDivNavIna" onclick="scrollMe(1);">
                    <span><img class="navIzqIcon" src="assets/vector/subtitles/elOido.svg"></span>
                    <span class="textNavIzq">El oído</span>
                </div>
                <!--//* Icono y texto de Clasificacion del ruido-->
                <div id="opcionDos" class="textoDivNavIna" onclick="scrollMe(2);">
                    <span><img class="navIzqIcon" src="assets/vector/subtitles/clasRuido.svg"></span>
                    <span class="textNavIzq">Clasificación</span>
                </div>
                <!--//* Icono y texto de Legislación del ruido-->
                <div id="opcionTres" class="textoDivNavIna" onclick="scrollMe(3);">
                    <span><img class="navIzqIcon" src="assets/vector/subtitles/legRuido.svg"></span>
                    <span class="textNavIzq">Legislación</span>
                </div>
                <!--//* Icono y texto de Componentes del ruido-->
                <div id="opcionCuatro" class="textoDivNavIna" onclick="scrollMe(4);">
                    <span><img class="navIzqIcon" src="assets/vector/subtitles/compRuido.svg"></span>
                    <span class="textNavIzq">Componentes</span>
                </div>
                <!--//* Icono y texto de Efectos en la salud-->
                <div id="opcionCinco" class="textoDivNavIna" onclick="scrollMe(5);">
                    <span><img class="navIzqIcon" src="assets/vector/subtitles/efectSalud.svg"></span>
                    <span class="textNavIzq">Salud</span>
                </div>
                <!--//* Icono y texto de Como se mide el ruido-->
                <div id="opcionSeis" class="textoDivNavIna" onclick="scrollMe(6);">
                    <span><img class="navIzqIcon" src="assets/vector/subtitles/comoMide.svg"></span>
                    <span class="textNavIzq">Medir</span>
                </div>
                <!--//* Icono y texto de Áreas de estudio-->
                <div id="opcionSiete" class="textoDivNavIna" onclick="scrollMe(7);">
                    <span><img class="navIzqIcon" src="assets/vector/subtitles/areaEstudio.svg"></span>
                    <span class="textNavIzq">Estudio</span>
                </div>
                <!--//* Icono y texto de Artículos de HUBBUB-->
                <div id="opcionOcho" class="textoDivNavIna" onclick="scrollMe(8);">
                    <span><img class="navIzqIcon" src="assets/vector/subtitles/artHubbub.svg"></span>
                    <span class="textNavIzq">Art. HUBBUB</span>
                </div>
                <!--//* Icono y texto de Referencias y artículos-->
                <div id="opcionNueve" class="textoDivNavIna" onclick="scrollMe(9);">
                    <span><img class="navIzqIcon" src="assets/vector/subtitles/artRef.svg"></span>
                    <span class="textNavIzq">Referencias</span>
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
                    <p class="linkNavDerAct">El ruido</p>
                    <a href="src/pages/verElRuido.php">
                        <p class="linkNavDerIna">Ver el ruido</p>
                    </a>
                    <p class="linkNavDerIna" onclick="nosotros()">Sobre nosotros</p>
                    <p class="linkNavDerIna" onclick="scrollMe(10)">Descarga la app</p>
                </div>
                <!--//* Legales del nav derecho-->
                <div id="legNav" style="padding-top: 500; display: none;">
                    <center>
                        <a href="https://www.facebook.com/HUBBUBALERTA/" target="_blank">
                            <img class="iconNavDer" src="assets/vector/redes/facebookW.svg" style="margin-left: 0px;">
                        </a>
                        <a href="https://www.facebook.com/messages/t/194832804678795" target="_blank">
                            <img class="iconNavDer" src="assets/vector/redes/messengerW.svg">
                        </a>
                        <a href="https://twitter.com/AlertaRuido?fbclid=IwAR1o5xnyzozS5nXn8jPbySq0Tjvoh5iggQhPWgzvESj-PUYkhOp-7qQ-RgM" target="_blank">
                            <img class="iconNavDer" src="assets/vector/redes/twitterW.svg">
                        </a>
                        <a href="mailto:hubbub@azc.uam.mx" target="_blank">
                            <img class="iconNavDer" src="assets/vector/redes/mailW.svg">
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
    <div class="container-fluid hero">
        <div class="imagenHero">
            <!--//* Función nosotros dispara Swal de información sobre HUBBUB-->
            <!--//funcion nosotros() dispara el swal sobre la información de HUBBUB-->
            <img class="logoHero" onclick="nosotros();" src="assets/gif/HUBBUBIcon.gif">
        </div>
        <div class="row container-fluid divHero paddingNormal">
            <div class="columna col-4"></div>
            <div class="columna col-1">
                <div class="verticalLine"></div>
                <div id="elOido"></div>
            </div>
            <!--//* Resumen de la página-->
            <div class="columna col-5">
                <div class="divResume">
                    <h1 class="pageTitle">El ruido</h1>
                    <br />
                    <p class="textCorrido">Este es uno de los fenómenos más interesantes de la modernidad pues
                        es producto de la cultura, el crecimiento y la evolución del ser humano y lo que lo rodea.
                        Comprender como funciona, de qué manera se integra a nuestra vida, cuáles son sus
                        efectos y como hemos actuado ante el mismo nos puede ayudar a tener una visión más compleja
                        sobre este particular fenómeno invisible y perceptible.</p>
                </div>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//main Sección de esquema del oído-->
    <div class="row container-fluid divBody">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/elOido.svg"></span>
                            <span>El oído</span>
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
                <p>El oído , como sentido, es fundamental para la orientación del individuo, mantenerlo alerta ante
                    posibles peligros, permitir el entendimiento eficiente con otros seres, el aprendizaje del idioma
                    (parte fundamental de la integración del humano a la sociedad) y la comunicación constante con su exterior.</p>
                <p>El órgano al que se le atribuye este sentido posee el mismo nombre siendo un complejo sistema de
                    tejidos, huesos y cavernas que funcionan de forma mecánica y que ayudan a la percepción de ondas
                    acústicas que finalmente serán interpretadas por el cerebro. El oído, al igual que todos los
                    sentidos, son canales que simplemente captan señales; pero la capacidad de interpretación de
                    dichas señales se realiza exclusivamente en el cerebro.</p>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//* Esquema del oído-->
    <div class="row container-fluid" style="padding-top: 100px;">
        <center>
            <!--//*Canva del esquema del oído (P5esquemaOido.js)-->
            <div id="canvaOido"></div>
        </center>
    </div>
    <!--//* Sección texto para el esquema del oído-->
    <div class="row container-fluid divBody" style="padding-top: 100px;">
        <div class="columna col-2"></div>
        <!--//*Botón de retrosceso en el carrusel-->
        <!--//funcion carruOido() navega entre carrussel-->
        <!--//param 0 = retrocede-->
        <div class="columna col-1 flechaOido" onclick="carruOido(0)">
            <center>
                <img src="assets/vector/flecha.svg">
            </center>
        </div>
        <!--//*Texto del carrusel-->
        <div class="columna col">
            <div id="subOido" class="subOido"><text id="textSubOido" class="textSubOido">Oido externo</text></div>
            <p id="textOido" class="textCorrido" style="padding-top:40px">Formado por el pabellón auditivo el cual, a manera de embudo, <b>permite
                    la recolección de las ondas sonoras del ambiente</b> para, finalmente, <b>dirigirlas al canal auditivo</b>. Este
                también <b>compensa la presión</b> existente entre el exterior y el interior del oído (la cual es mayor al ser aire
                comprimido) y termina en el tímpano.</p>
            <p class="link" style="text-align: right; padding-top: 40px;">
                <a href="https://www.auralcentrosauditivos.es/perdida-auditiva/como-funciona-el-oido" target="_blank">
                    Puedes ver más acerca del oído en WIDEX
                </a>
            </p>
        </div>
        <!--//*Botón de retrosceso en el carrusel-->
        <!--//funcion carruOido() navega entre carrussel-->
        <!--//param 1 = avanza-->
        <div class="columna col-1 flechaOido" onclick="carruOido(1)">
            <center>
                <img src="assets/vector/flecha.svg" style="transform: rotate(180deg);">
            </center>
        </div>
        <div class="columna col-2"></div>
    </div>
    <!--//main Sección de clasificación del ruido-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/clasRuido.svg"></span>
                            <span>Clasificación del ruido</span>
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
                <p>La Organización Mundial de la Salud define al ruido como: cualquier tipo de onda acústica que se encuentre
                    en el ambiente y establece una clasificación de “Niveles de ruido” donde, a través de la medición con instrumentos
                    de las ondas acústicas, específicamente hablando de los decibeles (dB), se construyen 3 niveles:</p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//*Tabla de clasificación del ruido-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <!--//*Columna de ruido muy bajo-->
            <div class="columna col textCorrido">
                <div style="text-align: center;">
                    <span class="textSubOido subOido" style="background-color: #fffa7c; border-color: #fffa7c ;">
                        Muy bajo
                    </span>
                </div>
                <p class="textClasf">Se hayan todos los ruidos que se midan entre los 10 a 30 dB.</p>
            </div>
            <!--//*Columna de ruido bajo-->
            <div class="columna col textCorrido">
                <div style="text-align: center;">
                    <span class="textSubOido subOido" style="background-color: #ffc37c; border-color: #ffc37c ;">
                        Bajo
                    </span>
                </div>
                <p class="textClasf">Se encuentran sonidos de entre 30-55 dB, sin embargo, la OMS considera los 50 dB como el límite superior deseable.</p>
            </div>
            <!--//*Columna de ruido ruidoso-->
            <div class="columna col textCorrido" style="letter-spacing: -1">
                <div style="text-align: center;">
                    <span class="textSubOido subOido" style="background-color: #ff7c7c; border-color: #ff7c7c ;">
                        Ruidoso
                    </span>
                </div>
                <p class="textClasf">Todo aquel sonido con mediciones superiores a los 65 dB.</p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//*Grafica de clasificación de ruidos-->
        <div class="row" style="padding-top: 50px;">
            <div class="columna col-2"></div>
            <!--//*Frame de la grafica, clasiRuido.php es la página que aloja la gráfica-->
            <div class="columna col">
                <iframe src="src/pages/frames/elRuido/clasiRuido.php" style="width: 100%; height: 550px;"></iframe>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//*Texto final de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>Aún con el límite que la OMS establece para aquello que es un “ruido sano”, la institución advierte que para qué un ruido pueda ser
                    perjudicial para el ser humano debe sumársele a la presión sonora el tiempo, la frecuencia y la sonoridad. Este punto es relevante
                    por que el oído tiene la capacidad de adaptarse “rápidamente” cuando esta expuesto a sonidos ruidosos pero si el evento se repite
                    o es constante, las afectaciones se notarán con el tiempo.</p>
                <p>Por ejemplo, para ruido laboral se permite una exposición de 90 dB durante 8 hrs, pero si se aumenta la dosis a 93 dB el tiempo de
                    exposición permitido son 4 hrs y así disminuyendo el tiempo a la mitad cada 3 dbA.</p>
                <p>Otra situación es que se este expuesto a un sonido intenso por encima del umbral del dolor por ejemplo 120 dB y ahí la pérdida sería inmediata.</p>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//main Sección de legislación del ruido-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//* Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/legRuido.svg"></span>
                            <span>Legislación del ruido</span>
                        </titulo>
                    </h2>
                </center>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//* Texto de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>
                    México en su <a class="link" target="_blank" href="http://dof.gob.mx/nota_detalle.php?codigo=4706988&fecha=22/06/1994#:~:text=DOF%3A%2022%2F06%2F1994,%2D%20Secretar%C3%ADa%20de%20Desarrollo%20Social.">
                        NOM-081-SEMARNAT-1994</a> publicada en el Diario Oficial de la Federación el gobierno federal establece los límites
                    máximos permisibles para emisión de ruido de fuentes fijas, además de determinar los métodos bajo los cuales se miden.
                </p>
                <p>
                    El entonces Distrito Federal de México genera la
                    <a class="link" target="_blank" href="https://paot.org.mx/centro/normas_a/2014/GODF_29_12_2014.pdf">NADF-005-AMBT-2013</a>;
                    un documento cuyo objetivo es el de “[…] fortalecer el marco jurídico para realizar acciones de prevención, regulación y
                    mitigación de emisiones sonoras ubicadas en el territorio del Distrito Federal.” (Administración pública del Distrito Federal, 2014).
                </p>
                <p>
                    En 2017 la secretaria de Medio Ambiente y Recursos Naturales (SEMARNAT)
                    <a class="link" target="_blank" href="https://www.gob.mx/semarnat/articulos/ssshhh-es-dia-mundial-de-la-descontaminacion-acustica?idiom=es">publica en su blog</a>
                    oficial una entrada donde nos hablan de la posición en la que se encuentra México además de una declaración de intenciones por parte del
                    Estado mexicano; la SEMARNAT declara que la contaminación acústica debe ser considerada un problema ambiental de alta relevancia y que
                    últimamente ha aumentado gracias al desarrollo industrial, comerciales y servicios.
                </p>
                <p>
                    Por otro lado, se hace presente los diferentes esfuerzos que México ha realizado en materia legal sobre el tema de ruido, hablando,
                    por ejemplo, de la norma oficial mexicana
                    <a class="link" target="_blank" href="https://paot.org.mx/centro/normas_a/2014/GODF_29_12_2014.pdf">NOM-081-SEMARNAT-1994</a>
                    con su actualización del 29 de abril del 2013 misma que deviene, precisamente, de la posición que adquiere México como uno de los
                    países con amplias incidencias perjudiciales en los seres humanos. Esta modificación integra los horarios y zonas recomendadas por la OMS.
                </p>
                <p>
                    Otro documento relevante para el entendimiento del marco jurídico que envuelve al ruido en México son las normativas
                    <a class="link" target="_blank" href="http://www.ordenjuridico.gob.mx/Documentos/Federal/wo69214.pdf">NOM-082-SEMARNAT-1994</a>,
                    <a class="link" target="_blank" href="http://www.ordenjuridico.gob.mx/Documentos/Federal/wo68960.pdf">NOM-080-SEMARNAT-1994</a>
                    y el último de estos que sería la
                    <a class="link" target="_blank" href="http://www.ordenjuridico.gob.mx/Documentos/Federal/wo69219.pdf">NOM-079-SEMARNAT-1994</a>
                    donde el foco de las fuentes de ruido se lleva a los móviles, es decir, vehículos automotores y sus formas de medición.
                </p>
                <p>
                    Siguiendo en el marco legal institucional de México, la secretaria de Trabajo y Previsión Social dispone en la
                    <a class="link" target="_blank" href="http://asinom.stps.gob.mx:8145/upload/noms/Nom-011.pdf">NOM-011-STPS-2001</a>
                    donde se habla de los cuidados al personal y la responsabilidad que tienen las empresas sobre el cuidado del ruido.
                </p>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//main Sección de Componentes del ruido-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/compRuido.svg"></span>
                            <span>Componentes del ruido</span>
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
                <p>
                    La exposición al ruido puede perjudicar parcial o totalmente el sentido del oído. Esta exposición está determinada por tres factores principales:
                </p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <!--//*Columna sobre la intensidad-->
            <div class="columna col textCorrido">
                <div style="text-align: center;">
                    <span class="subOido">
                        Intensidad
                    </span>
                </div>
                <p class="textClasf">
                    Determinada por el nivel de presión sonora y se mide en decibeles (dB). El decibelio puede medir otras magnitudes físicas,
                    pero coloquialmente se le dice así a una unidad más específica llamada decibelio del nivel de presión sonora (dB SPL).</p>
            </div>
            <!--//*Columna sobre el tono-->
            <div class="columna col textCorrido">
                <div style="text-align: center;">
                    <span class="subOido">
                        Tono
                    </span>
                </div>
                <p class="textClasf">
                    Se mide a través de la frecuencia en hercios (Hz) determinando los <letter style="color: #fe7cff;">agudos</letter> arriba de
                    5kHz, <letter style="color: #7db7ff;">medios</letter> entre 250 Hz y 5kHz, y <letter style="color: #ff937d;">graves</letter>
                    debajo de 250 Hz. Sonidos entre 2-4kHz son más molestos debido al notorio cambio de nivel. La voz se encuentra en 250hz y 4kHz.</p>
            </div>
            <!--//*Columna sobre el tiempo-->
            <div class="columna col textCorrido" style="letter-spacing: -1">
                <div style="text-align: center;">
                    <span class="subOido">
                        Tiempo
                    </span>
                </div>
                <p class="textClasf">
                    Este último elemento se mide en segundos, minutos u horas. Es importante puesto que la exposición prolongada a sonidos que no
                    necesariamente sean considerados peligrosos por su intensidad pueden tornarse como un problema.</p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//*Gráfica de onda con sliders-->
        <div class="row" style="padding-top: 50px;">
            <div class="columna col-2"></div>
            <!--//*Frame de la gráfica, ondaSlides.php posee la gráfica-->
            <div class="col">
                <center>
                    <iframe src="src/pages/frames/elRuido/ondaSlides.php" style="width: 110%; height: 800px;"></iframe>
                </center>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//*Texto final de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>
                    Es importante tomar en cuenta que estas tres variables siempre se encuentran funcionando simultáneamente y son codependientes para
                    determinar la peligrosidad y repercusiones que pueden tener en la salud. En
                    <a class="link" target="_blank" href="https://apps.who.int/iris/handle/10665/66217">Guidelines for Community Noise</a>
                    la OMS establece una serie de afectaciones a la salud a diferentes niveles en el cuerpo y actividad humana.
                </p>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//main Sección de efectos en la salud-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/efectSalud.svg"></span>
                            <span>Efectos en la salud</span>
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
                <p>
                    De acuerdo al
                    <a class="link" target="_blank" href="https://apps.who.int/iris/bitstream/handle/10665/175580/WHA45_16_eng.pdf?sequence=1">
                        International Programme on Chemical Safety </a> publicado
                    en 1992 por la OMS se puede advertir de un efecto negativo del ruido cuando morfológicamente y psicológicamente algún organismo
                    queda inhabilitado en algunas de sus capacidades, es incapaz de compensar estrés adicional o si aumenta su sensibilidad a efectos
                    nocivos de su entorno; así se toman en cuenta todos estos efectos en un corto o largo plazo lo que termina por disminuir sus capacidades
                    físicas, psicológicas o sociales ya sea del humano o alguno de sus órganos.
                </p>
                <p>
                    Esta es la clasificación de enfermedades y afecciones producidas por la contaminación acústica y el ruido:
                </p>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//* Carrusel de imagenes-->
    <div class="row container-fluid divBody" style="padding-top: 100px;">
        <div class="columna col-2"></div>
        <!--//*Botón de retrosceso en el carrusel-->
        <!--//funcion carruSalud() navega entre carrussel-->
        <!--//param 0 = retrocede-->
        <div class="columna col-1 flechaOido" onclick="carruSalud(0)">
            <center>
                <img src="assets/vector/flecha.svg" style="margin-top: 100px;">
            </center>
        </div>
        <!--//*Texto del carrusel-->
        <div class="columna col">
            <img id="img1" class="img1 imgCh" src="assets/vector/salud/suenio.svg">
            <img id="img3" class="img3 imgGr" src="assets/vector/salud/mental.svg">
            <img id="img2" class="img2 imgCh" src="assets/vector/salud/cardio.svg">
            <img id="img4" class="img4 imgCh" src="assets/vector/salud/discapacidad.svg">
            <img id="img5" class="img5 imgCh" src="assets/vector/salud/comunicacion.svg">
        </div>
        <!--//*Botón de retrosceso en el carrusel-->
        <!--//funcion carruSalud() navega entre carrussel-->
        <!--//param 1 = avanza-->
        <div class="columna col-1 flechaOido" onclick="carruSalud(1)">
            <center>
                <img src="assets/vector/flecha.svg" style="transform: rotate(180deg); margin-top: 100px;">
            </center>
        </div>
        <div class="columna col-2"></div>
    </div>
    <!--//* Texto del carrusel-->
    <div class="row container-fluid divBody" style="padding-top: 150px;">
        <div class="columna col-2"></div>
        <!--//*Texto del carrusel-->
        <div class="columna col">
            <div id="subSalud" class="subOido">
                <center>
                    Discapacidad auditiva inducida por ruido
                </center>
            </div>
            <div id="textoCarruSalud" class="textCorrido" style="padding-top: 40px;">
                <p>
                    Hace referencia al aumento en el umbral auditivo. Este es medido a través de la audiometría del umbral y
                    provoca desventajas para llevar a cabo actividades diarias pues atiende a la dificultad, por ejemplo, de
                    mantener conversaciones con otros sujetos a un nivel de ruido de fondo estándares
                    <a class="link" target="_blank" href="https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0064811">
                        (Descritos en la UNE-ISO 19962:2020)</a>.
                </p>
                <p>
                    Estos efectos en el oído son realmente preocupantes puesto que son irreversibles en la mayoría de los casos y
                    se calcula que 120 millones de personas en el mundo los padecen.
                </p>
                <p>
                    Otros elementos que pueden provocarlos como químicos, medicamentos para los oídos, vientos fuertes en el área
                    de la cabeza, accidentes como golpes o problemas hereditarios, también se considera como parte de la degradación
                    del órgano por la edad, sin embargo, estos no son causas que interesen en el estudio del ruido, aunque pueden ser
                    relevantes para conocer sus efectos en la salud humana.
                </p>
                <ul>
                    <li>
                        Los niños son más propensos a contraer este tipo de discapacidad que los adultos.
                    </li>
                    <li>
                        A niveles de presión altos en un tiempo de exposición instantáneo provoca daño mecánico en el aparto auditivo.
                        Comúnmente este límite se ubica en los 140 dB con exposición instantánea. Para niños, 120 dB se vuelve el tope máximo.
                    </li>
                    <li>
                        Para sonidos de armas de fuego que superen los 80 dB y cuyo tiempo de exposición sea de 24 horas puede producir efectos
                        nocivos en el oído.
                    </li>
                    <li>
                        El riesgo de adquirir alguna discapacidad auditiva aumenta cuando el sujeto se expone al ruido mientras se combina con
                        vibraciones, uso de medicina ototóxica u otros químicos.
                    </li>
                </ul>
            </div>
        </div>
        <div class="columna col-2"></div>
    </div>
    <!--//main Sección como se mide el ruido-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//* Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/comoMide.svg"></span>
                            <span>Como se mide el ruido</span>
                        </titulo>
                    </h2>
                </center>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//* Texto de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>
                    En la República Mexicana se cuenta con la
                    <a class="link" target="_blank" href="http://legismex.mty.itesm.mx/normas/aa/aa062.pdf">
                        “Norma Oficial Mexicana. Acústica - Determinación de los niveles de ruido ambiental” o NOM-AA-62-1979
                    </a>
                    donde se establecen, entre muchas otras cosas, los procedimientos de medición de ruido que se deben llevar
                    a cabo en pro de la realización de ejercicio de medición correctos. Este documento encuentra su origen en
                    otra serie de normas que la complementan donde se tratan temas como la terminología para electroacústica,
                    materiales aislantes, clasificación de ruidos, determinación de ruidos por fuente fija e instrumentos como
                    los sonómetros.
                </p>
                <p>
                    De forma muy sintética, el ruido medido de forma normalizada de acuerdo a la ley mexicana debe pasar por un
                    proceso meticuloso que involucra destreza técnica e instrumentos de precisión. Los pasos de forma general
                    serían los siguientes:
                </p>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//* Carrusel de imagenes-->
    <div class="row container-fluid divBody" style="padding-top: 100px;">
        <div class="columna col-3"></div>
        <!--//* Botón de retrosceso en el carrusel-->
        <!--//funcion carruPasos(a,b) navega entre carrussel-->
        <!--//param a = 0 = retrocede-->
        <div class="columna col-1 flechaOido" onclick="carruPasos(0)" style="padding-top: 200px;">
            <center>
                <img src="assets/vector/flecha.svg">
            </center>
        </div>
        <!--//* Texto del carrusel-->
        <div class="columna col">
            <center>
                <img id="gifPaso" src="assets/gif/pasos/Paso1.gif">
            </center>
        </div>
        <!--//* Botón de retrosceso en el carrusel-->
        <!--//funcion carruPasos navega entre carrussel-->
        <!--//param a = 1 = avanza-->
        <div class="columna col-1 flechaOido" onclick="carruPasos(1)" style="padding-top: 200px;">
            <center>
                <img src="assets/vector/flecha.svg" style="transform: rotate(180deg);">
            </center>
        </div>
        <div class="columna col-3"></div>
    </div>
    <!--//* Posición del carrusel-->
    <div class="row container-fluid divBody" style="padding-top: 40px;">
        <div class="columna col-4"></div>
        <!--//* Barra de posición-->
        <div class="columna col">
            <center>
                <div style="background-color: rgba(51,51,51,0.25); width: 532px; height: 10px; border-radius: 5px; position: absolute; z-index: 1;"></div>
                <div id="barraCrece" class="barraCrece1" style="background-color: #FF7C7C; height: 10px; border-radius: 5px; position: absolute; z-index: 2;"></div>
            </center>
            <!--//funcion carruPasos(a,b) pinta el avance entre los pasos de medición-->
            <!--//param a = 2 = indica el avance en la barra-->
            <!--//param b = pinta el avance en la barra-->
            <button onclick="carruPasos(2,1)" id="paso1" class="actButton" style="margin-left: -5px;"></button>
            <button onclick="carruPasos(2,2)" id="paso2" class="inaButton" style="margin-left: 61.5px;"></button>
            <button onclick="carruPasos(2,3)" id="paso3" class="inaButton" style="margin-left: 128px;"></button>
            <button onclick="carruPasos(2,4)" id="paso4" class="inaButton" style="margin-left: 194.5px;"></button>
            <button onclick="carruPasos(2,5)" id="paso5" class="inaButton" style="margin-left: 261px;"></button>
            <button onclick="carruPasos(2,6)" id="paso6" class="inaButton" style="margin-left: 327.5px;"></button>
            <button onclick="carruPasos(2,7)" id="paso7" class="inaButton" style="margin-left: 394px;"></button>
            <button onclick="carruPasos(2,8)" id="paso8" class="inaButton" style="margin-left: 460.5px;"></button>
            <button onclick="carruPasos(2,9)" id="paso9" class="inaButton" style="margin-left: 527px;"></button>
        </div>
        <div class="columna col-4"></div>
    </div>
    <!--//* Texto del carrusel-->
    <div class="row container-fluid divBody" style="padding-top: 50px;">
        <div class="columna col-3"></div>
        <!--//* Título del carrusel-->
        <div class="columna col">
            <div id="subMide" class="subOido">
                <center>
                    Paso 1: Croquis
                </center>
            </div>
            <div id="textoCarruMide" class="textCorrido" style="padding-top: 30px; text-align: center;">
                Levantar un croquis de la zona de forma tal que se pueda conocer el terreno donde se realiza la medición,
                así como sus particularidades.
            </div>
        </div>
        <div class="columna col-3"></div>
    </div>
    <!--//* Texto final de la sección-->
    <div class="row container-fluid divBody" style="padding-top: 50px;">
        <div class="columna col-2"></div>
        <!--Texto del carrusel-->
        <div class="columna col textCorrido">
            De esta forma oficialmente la norma determina que se realiza una toma de ruido correcta, lo que seguiría serían
            una seria de cálculos y la elaboración de un reporte que, de igual forma, se encuentran normalizados y que servirán
            como testimonio de la realización correcta de la medición.
        </div>
        <div class="columna col-2"></div>
    </div>
    <!--//main Sección áreas de estudio-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//* Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/areaEstudio.svg"></span>
                            <span>Áreas de estudio</span>
                        </titulo>
                    </h2>
                </center>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//* Texto de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>
                    La acústica es la rama de la ciencia (derivada de la física) que se dedica el estudio de “[…]
                    fenómenos sonores perceptibles por el oído humano.”
                    <a class="link" target="_blank" href="https://acustival.com/el-ruido-y-la-ergonomia/">
                        (Acustival, 2021)
                    </a>
                    es decir, es la disciplina primaria que se ve interesada en el ruido y cuyo propósito como ciencia
                    natural es la medición, descripción y explicación de fenómenos acústicos. Esta ciencia primaria que
                    abre el conocimiento para el entendimiento del ruido después se puede ver consultada por diversas
                    disciplinas cuyo trabajo se ve involucrado de forma directa o indirecta con la acústica. Algunas de
                    estas disciplinas satelitales serían los siguientes.
                </p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Línea de imagenes-->
        <div class="row" style="padding-top: 50px;">
            <div class="columna col-2"></div>
            <!--//funcion areaEstudio(a) pinta la información del área-->
            <!--//param a indica que información pintar-->
            <div id="fArea1" class="columna col-1 imagenArea" onclick="areaEstudio(1)">
                <center>
                    <div id="area1" class="titleAreaAct"></div>
                </center>
            </div>
            <di id="fArea2" class="columna col-1 imagenArea" onclick="areaEstudio(2)">
                <center>
                    <div id="area2" class="titleArea"></div>
                </center>
            </di>
            <div id="fArea3" class="columna col-1 imagenArea" onclick="areaEstudio(3)">
                <center>
                    <div id="area3" class="titleArea"></div>
                </center>
            </div>
            <div id="fArea4" class="columna col-1 imagenArea" onclick="areaEstudio(4)">
                <center>
                    <div id="area4" class="titleArea"></div>
                </center>
            </div>
            <div id="fArea5" class="columna col-1 imagenArea" onclick="areaEstudio(5)">
                <center>
                    <div id="area5" class="titleArea"></div>
                </center>
            </div>
            <div id="fArea6" class="columna col-1 imagenArea" onclick="areaEstudio(6)">
                <center>
                    <div id="area6" class="titleArea"></div>
                </center>
            </div>
            <div id="fArea7" class="columna col-1 imagenArea" onclick="areaEstudio(7)">
                <center>
                    <div id="area7" class="titleArea"></div>
                </center>
            </div>
            <div id="fArea8" class="columna col-1 imagenArea" onclick="areaEstudio(8)">
                <center>
                    <div id="area8" class="titleArea"></div>
                </center>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//* Texto de la sección-->
        <div class="row" style="padding-top: 50px;">
            <div class="columna col-2"></div>
            <div class="columna col">
                <div id="subArea" class="subOido">
                    Área de la salud
                </div>
                <div id="textoArea" class="textCorrido" style="padding-top: 30px;">
                    Médicos, psiquiatras y psicólogos cuyas preocupaciones van más enfocadas al entendimiento de
                    las repercusiones que tiene el ruido en la salud fisiológica, psíquica y psiquiátrica del sujeto.
                    Los datos sobre ruido ayudan a estas disciplinas a identificar puntos de estrés para los órganos
                    y para la psique de las personas para, de esta forma, atenderlos de manera adecuada y en el mejor
                    de los casos, prevenir que los sujetos interaccionen con estos ruidos nocivos para la salud.
                </div>
            </div>
            <div class="columna col-2"></div>
        </div>
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>
                    Un ejemplo de una de estas áreas de estudio aplicando sus conocimientos y enfoques sobre el ruido en
                    un objetivo concreto es el parque Paley en Central Park. Este es un pequeño espacio dentro de la ajetreada
                    ciudad de Manhantan donde una casada artificial es utilizada para el diseño de ruido, en este caso, la
                    cancelación o reducción del ruido del tráfico dentro de un espacio de relajación. El video abajo explica mucho mejor el fenómeno del parque Paley.
                </p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <div class="row" style="padding-top: 50px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <!--//* Modelo 3D-->
                <div class="container">
                    <!--//funcion playSound(a) reproduce o para el sonido-->
                    <!--//param a = 1 permite reproducir sonidos-->
                    <!--//param a = 0 para todos los sonidos-->
                    <div onmouseover="playSound(1);" onmouseout="playSound(0)">
                        <iframe id="modelPark"></iframe>
                    </div>
                </div>
                <!--//* Audios para el modelo-->
                <audio id="audio1" loop=true preload>
                    <source src="assets/audio/PaleyParkFuera.mp3" id="srcMP3" type="audio/mp3">
                </audio>
                <audio id="audio2" loop=true preload>
                    <source src="assets/audio/PaleyParkDentro.mp3" id="srcMP3" type="audio/mp3">
                </audio>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//main Sección artículos HUBBUB-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//* Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/artHubbub.svg"></span>
                            <span>Articulos HUBBUB</span>
                        </titulo>
                    </h2>
                </center>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//* Texto de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col-4 refe">
                <p>
                    Acustival. (28 de Enero de 2021).
                    El ruido y la ergonomia.
                    https://acustival.com/el-ruido-y-la-ergonomia/
                </p>
                <p>
                    admin. (6 de octubre de 2018).
                    Acústica: alcances de la ciencia del sonido.
                    https://www.itba.edu.ar/blog/2018/10/06/acustica-alcances-de-la-ciencia-del-sonido/
                </p>
                <p>
                    Administración pública del Distrito Federal. (29 de Diciembre de 2014).
                    Gaceta oficial del Distrito Federal(2016).
                    http://www.paot.org.mx/centro/normas_a/2014/GODF_29_12_2014.pdf
                </p>
                <p>
                    Agencia de Medioambiente Europea. (2002).
                    The NOISE Observation & Information Service for Europe.
                    https://noise.eea.europa.eu/index.html
                </p>
                <p>
                    Audifón. (s.f.).
                    ¿Qué son las células ciliadas?
                    https://audifon.es/que-es/c/celulas-ciliadas/
                </p>
                <p>
                    Casals, C. R. (2016).
                    El problema de la contaminación. (U. d. Zaragoza, Ed.) 2016, Zaragoza.
                    https://zaguan.unizar.es/record/48395/files/TESIS-2016-141.pdf
                </p>
            </div>
            <div class="columna col-4 refe">
                <p>
                    Olague Caballero, C. O., Wenglas Lara, G., & Duarte Rodríguez, J. G. (2016).
                    Contaminación por ruido en carreteras de acceso a la ciudad de Chihuahua. CienciaUAT, 11(1), 101-115.
                    http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2007-78582016000200101&lang=es
                </p>
                <p>
                    Oliva, Y. D. (2009).
                    El ruido como problema en el aprendizaje. Santiago de Chile: Universidad de Chile.
                    https://repositorio.uchile.cl/tesis/uchile/2009/aq-lucic_y/pdfAmont/aq-lucic_y.pdf
                </p>
                <p>
                    Organización Mundial de la Salud. (1992).
                    International Programme on Chemical Safety. Geneva.
                    https://apps.who.int/iris/bitstream/handle/10665/175842/WHA45_R32_eng.pdf?sequence=1&isAllowed=y
                </p>
                <p>
                    Organización Mundial de la Salud. (1999).
                    Guidelines for Community Noise. Geneva.
                </p>
                <p>
                    Organización Mundial de la Salud. (2015).
                    Escuchar sin riesgos. Geneva: WHO Document Production Services.
                    https://www.who.int/pbd/deafness/activities/MLS_Brochure_Spanish_lowres_for_web.pdf
                </p>
            </div>
            <div class="columna col-2"></div>
        </div>
    </div>
    <!--//main Sección referencias y articulos-->
    <div class="row container-fluid divBody" style="padding-top: 200px;">
        <!--//* Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <center>
                    <h2 class="linea">
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/artRef.svg"></span>
                            <span>Referencias y artículos</span>
                        </titulo>
                    </h2>
                </center>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//* Texto de la sección-->
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col-4 refe">
                <p>
                    Acustival. (28 de Enero de 2021).
                    El ruido y la ergonomia.
                    https://acustival.com/el-ruido-y-la-ergonomia/
                </p>
                <p>
                    admin. (6 de octubre de 2018).
                    Acústica: alcances de la ciencia del sonido.
                    https://www.itba.edu.ar/blog/2018/10/06/acustica-alcances-de-la-ciencia-del-sonido/
                </p>
                <p>
                    Administración pública del Distrito Federal. (29 de Diciembre de 2014).
                    Gaceta oficial del Distrito Federal(2016).
                    http://www.paot.org.mx/centro/normas_a/2014/GODF_29_12_2014.pdf
                </p>
                <p>
                    Agencia de Medioambiente Europea. (2002).
                    The NOISE Observation & Information Service for Europe.
                    https://noise.eea.europa.eu/index.html
                </p>
                <p>
                    Audifón. (s.f.).
                    ¿Qué son las células ciliadas?
                    https://audifon.es/que-es/c/celulas-ciliadas/
                </p>
                <p>
                    Casals, C. R. (2016).
                    El problema de la contaminación. (U. d. Zaragoza, Ed.) 2016, Zaragoza.
                    https://zaguan.unizar.es/record/48395/files/TESIS-2016-141.pdf
                </p>
                <p>
                    Díaz, R. E. (2007).
                    Acondicionamiento Acústico- Temas Teóricos. Monte Video: Facultad de Arquitectura, Universidad de la República.
                    https://www.fadu.edu.uy/acondicionamiento-acustico/wp-content/blogs.dir/27/files/2012/02/01-ACUSTICA-FISICA-1.pdf
                </p>
                <p>
                    Enciclopedia de Ejemplos. (2019).
                    Sonidos graves y sonidos agudos.
                    https://www.ejemplos.co/ejemplos-de-sonidos-graves-y-sonidos-agudos/
                </p>
                <p>
                    Gortari, J. d. (2010).
                    La revalorización de los sonidos y la calidad sonora. Barcelona: Departamento de Construccions Arquitectòniques I ETSAB-UPC.
                    https://www.arauacustica.com/files/publicaciones_relacionados/pdf_esp_229.pdf
                </p>
                <p>
                    GreenFacts. (s.f.).
                    Decibelio.
                    https://www.greenfacts.org/es/glosario/def/decibelio.html
                </p>
                <p>
                    Montano Rodriguez, W. A., & Pascal, M. C. (2014).
                    El ruido hace a la modernidad, o la modernidad hace el ruido. Rosario.
                </p>
                <p>
                    MX, U. (12 de septiembre de 2018).
                    Ingeniería Acústica: la importancia del sonido en nuestra vida.
                    https://www.universia.net/mx/actualidad/orientacion-academica/ingenieria-acustica-importancia-sonido-nuestra-vida-1161430.html
                </p>
                <p>
                    National Institute on Deafness and Other Communication Disorders. (2 de julio de 2019).
                    Pérdida de audición inducida por el ruido.
                    https://www.nidcd.nih.gov/es/espanol/perdida-de-audicion-inducida-por-el-ruido
                </p>
            </div>
            <div class="columna col-4 refe">
                <p>
                    Olague Caballero, C. O., Wenglas Lara, G., & Duarte Rodríguez, J. G. (2016).
                    Contaminación por ruido en carreteras de acceso a la ciudad de Chihuahua. CienciaUAT, 11(1), 101-115.
                    http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2007-78582016000200101&lang=es
                </p>
                <p>
                    Oliva, Y. D. (2009).
                    El ruido como problema en el aprendizaje. Santiago de Chile: Universidad de Chile.
                    https://repositorio.uchile.cl/tesis/uchile/2009/aq-lucic_y/pdfAmont/aq-lucic_y.pdf
                </p>
                <p>
                    Organización Mundial de la Salud. (1992).
                    International Programme on Chemical Safety. Geneva.
                    https://apps.who.int/iris/bitstream/handle/10665/175842/WHA45_R32_eng.pdf?sequence=1&isAllowed=y
                </p>
                <p>
                    Organización Mundial de la Salud. (1999).
                    Guidelines for Community Noise. Geneva.
                </p>
                <p>
                    Organización Mundial de la Salud. (2015).
                    Escuchar sin riesgos. Geneva: WHO Document Production Services.
                    https://www.who.int/pbd/deafness/activities/MLS_Brochure_Spanish_lowres_for_web.pdf
                </p>
                <p>
                    Ormaechea, E. (3 de Noviembre de 2016).
                    El ruido en la salud: ¿Qué es la contaminación acústica?
                    https://www.salud.mapfre.es/cuerpo-y-mente/habitos-saludables/ruido-y-salud/
                </p>
                <p>
                    Real Academia Española. (s.f.).
                    ruido.
                    https://dle.rae.es/ruido
                </p>
                <p>
                    Rodríguez Manzo, F. E., & Garay Vargas, E. (abril de 2012).
                    El mapa de ruido de la ciudad de México.
                    http://zaloamati.azc.uam.mx/handle/11191/456
                </p>
                <p>
                    Secretaría de Gobernación. (2 de Agosto de 1979).
                    NORMA Oficial Mexicana. Acústica- Determinación de los niveles de ruido ambiental.
                    http://dof.gob.mx/nota_detalle.php?codigo=4828986&fecha=02/08/1979
                </p>
                <p>
                    Secretaría de Medio Ambiente y Recursos Naturales. (11 de Junio de 2017).
                    Es Día Mundial de la Descontaminación Acústica.
                    https://www.gob.mx/semarnat/articulos/ssshhh-es-dia-mundial-de-la-descontaminacion-acustica?idiom=es
                </p>
                <p>
                    UNE-ISO. (2020).
                    UNE-ISO 1996-2:2020 Acústica. Descripción, medición y evaluación del ruido ambiental. Parte 2: Determinación de los niveles de presión sonora
                </p>
                <p>
                    WIDEX. (s.f.).
                    ¿Cómo funciona el oído?
                    https://www.widex.es/perdida-auditiva/como-funciona-el-oido
                </p>
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
                    <img class="logoFoot" src="assets/vector/HUBBUBIconWhite.svg">
                </div>
                <div class="columna col-3"></div>
                <!--//* Columna de descargas-->
                <div class="columna col">
                    <p class="tituloFooter">Descargas</p>
                    <a href="https://play.google.com/store/apps/details?id=com.UAM.Noise&hl=es" target="_blank">
                        <img class="iconNosotros" src="assets/vector/redes/playStoreW.svg">
                    </a>
                    <!--//todo Agregar aplicación para iOS //-->
                    <img class="iconNosotros" src="assets/vector/redes/appleStoreW.svg">
                </div>
                <!--//* Columna de mapa del sitio-->
                <div class="columna col">
                    <p class="tituloFooter">Sitio</p>
                    <p class="linkFooterAct" style="margin-top:20px">El ruido</p>
                    <a href="src/pages/verElRuido.php">
                        <p class="linkFooter">Ver el ruido</p>
                    </a>
                    <!--//funcion nosotros() abre una ventana con la información de nosotros-->
                    <p class="linkFooter" onclick="nosotros();">Sobre nosotros</p>
                </div>
                <!--//* Columna de contacto-->
                <div class="columna col">
                    <p class="tituloFooter">Contacto</p>
                    <a href="https://www.facebook.com/HUBBUBALERTA/" target="_blank">
                        <img class="iconNosotros" src="assets/vector/redes/facebookW.svg">
                    </a>
                    <a href="https://www.facebook.com/messages/t/194832804678795" target="_blank">
                        <img class="iconNosotros" src="assets/vector/redes/messengerW.svg">
                    </a>
                    <a href="https://twitter.com/AlertaRuido?fbclid=IwAR1o5xnyzozS5nXn8jPbySq0Tjvoh5iggQhPWgzvESj-PUYkhOp-7qQ-RgM" target="_blank">
                        <img class="iconNosotros" src="assets/vector/redes/twitterW.svg">
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
                        <img class="logoHUBBUB" src="assets/vector/HUBBUBLogo.svg">
                        <br />
                        <a href="https://www.facebook.com/HUBBUBALERTA/" target="_blank">
                            <img class="iconNosotros" src="assets/vector/redes/facebook.svg">
                        </a>
                        <a href="https://www.facebook.com/messages/t/194832804678795" target="_blank">
                            <img class="iconNosotros" src="assets/vector/redes/messenger.svg">
                        </a>
                        <a href="https://twitter.com/AlertaRuido?fbclid=IwAR1o5xnyzozS5nXn8jPbySq0Tjvoh5iggQhPWgzvESj-PUYkhOp-7qQ-RgM" target="_blank">
                            <img class="iconNosotros" src="assets/vector/redes/twitter.svg">
                        </a>
                        <a href="mailto:hubbub@azc.uam.mx" target="_blank">
                            <img class="iconNosotros" src="assets/vector/redes/mail.svg">
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
</body>
<!--//import Js para el embed de Sketchfab-->
<script type="text/javascript" src="src/js/JSsketch.js"></script>

</html>