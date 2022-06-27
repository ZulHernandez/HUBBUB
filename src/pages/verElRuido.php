<html>

<head>
    <!--//import Implementación de librerias se incluyen: Chart, Bootstrap, Sweetalert, p5 y sketchFabViewer-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.css" integrity="sha512-/zs32ZEJh+/EO2N1b0PEdoA10JkdC3zJ8L5FTiQu82LR9S/rOQNfQN7U59U9BC12swNeRAz3HSzIL2vpp4fv3w==" crossorigin="anonymous" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="../dist/p5.js" type="text/javascript"></script>
    <script src="../../node_modules/dom-to-image/src/dom-to-image.js" type="text/javascript"></script>

    <!--//import  Estilos aplicados al sitio en general-->
    <link type="text/css" href="../scss/general.css" rel="stylesheet">
    <!--//import  Estilos aplicados a la página El ruido-->
    <link href="../scss/verElRuido.css" rel="stylesheet">
    <!--//import  Js para el manejo del sitio en general-->
    <script src="../js/JSgeneral.js"></script>
    <!--//import  Js para el manejo del sitio en general-->
    <script src="../js/JSverElRuido.js"></script>
    <!--//main Icono de la página-->
    <link rel="icon" href="../../assets/vector/HUBBUByellow.svg" type="image/x-icon">
    <title>
        HUBBUB | Ver el ruido
    </title>
</head>

<body onload="getDate()">
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
        <!--//*Grafica de clasificación de ruidos-->
        <div class="row" style="padding-top: 30px;">
            <div class="columna col-2"></div>
            <!--//*Frame de la grafica, clasiRuido.php es la página que aloja la gráfica-->
            <div class="columna col">
                <iframe id="frameParti" src="../pages/frames/verElRuido/participacion.php" style="width: 100%; height: 1000px;"></iframe>
            </div>
            <div class="columna col-2"></div>
        </div>
        <div class="row" style="padding-top: 30px;">
            <div class="columna col-9"></div>
            <div id="CHparticipacion" class="columna col-1">
                <button onclick="llamaShot()">SCREEN SHOT</button>
            </div>
            <div class="columna col-2"></div>
        </div>
        <div class="row" style="padding-top: 30px;">
            <div class="columna col-2"></div>
            <div class="columna col">
                <img id="imgOut" src="">
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
                    <img src="../../assets/vector/HUBBUBIconWhite.svg">
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
</body>
<script>
    function llamaShot() {
        let url = document.getElementById('frameParti').contentWindow.takeShot();
        
        setTimeout(function() {
            console.log(url.src);
            let urls = url.src;
            document.getElementById('imgOut').src = urls;
        }, 1000);
        
    }
</script>

</html>