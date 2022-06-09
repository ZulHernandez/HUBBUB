<html>

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.css" integrity="sha512-/zs32ZEJh+/EO2N1b0PEdoA10JkdC3zJ8L5FTiQu82LR9S/rOQNfQN7U59U9BC12swNeRAz3HSzIL2vpp4fv3w==" crossorigin="anonymous" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="src/dist/p5.js" type="text/javascript"></script>
    <script src="src/js/general.js"></script>
    <link href="src/scss/general.css" rel="stylesheet">
    <link href="src/scss/VerElRuido.css" rel="stylesheet">
    <script type="text/javascript" src="src/js/elRuidoP5.js"></script>
    <link rel="shortcut icon" href="assets/vector/HUBBUBIcon.svg" type="image/x-icon">
    <title>
        HUBBUB | El ruido
    </title>

</head>

<body>
    <div class="container-fluid hero">
        <div class="imagenHero">
            <img class="logoHero" onclick="nosotros();" src="assets/gif/HUBBUBIcon.gif">
        </div>
        <div class="row container-fluid divHero paddingNormal">
            <div class="columna col-2"></div>
            <div class="columna col-2"></div>
            <div class="columna col-1">
                <div class="verticalLine"></div>
            </div>
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
    <div class="row container-fluid divBody">
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
    <div class="row container-fluid" style="padding-top: 100px;">
        <center>
            <div id="canvaOido"></div>
        </center>
    </div>
    <div class="row container-fluid divBody" style="padding-top: 100px;">
        <div class="columna col-2"></div>
        <div class="columna col-1 flechaOido" onclick="carruOido(0)">
            <center>
                <img src="assets/vector/flecha.svg">
            </center>
        </div>
        <div class="columna col">
            <div id="subOido" class="subOido"><text id="textSubOido" class="textSubOido">Oido externo</text></div>
            <p id="textOido" class="textSobreN" style="padding-top:40px">Formado por el pabellón auditivo el cual, a manera de embudo, <b>permite
                    la recolección de las ondas sonoras del ambiente</b> para, finalmente, <b>dirigirlas al canal auditivo</b>. Este
                también <b>compensa la presión</b> existente entre el exterior y el interior del oído (la cual es mayor al ser aire
                comprimido) y termina en el tímpano.</p>
            <p class="link" style="text-align: right; padding-top: 40px;">
                <a href="https://www.auralcentrosauditivos.es/perdida-auditiva/como-funciona-el-oido" target="_blank">
                    Puedes ver más acerca del oíio en WIDEX
                </a>
            </p>
        </div>
        <div class="columna col-1 flechaOido" onclick="carruOido(1)">
            <center>
                <img src="assets/vector/flecha.svg" style="transform: rotate(180deg);">
            </center>
        </div>
        <div class="columna col-2"></div>
    </div>
    <div class="row container-fluid divBody" style="padding-top: 200px;">
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
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>La Organización Mundial de la Salud define al ruido como: cualquier tipo de onda acústica que se encuentre
                    en el ambiente y establece una clasificación de “Niveles de ruido” donde, a través de la medición con instrumentos
                    de las ondas acústicas, específicamente hablando de los decibeles (dB), se construyen 3 niveles:</p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <div class="row" style="padding-top: 100px;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <div style="text-align: center;">
                    <span class="textSubOido subOido" style="background-color: #fffa7c; border-color: #fffa7c ;">
                        Muy bajo
                    </span>
                </div>
                <p class="textClasf">Se hayan todos los ruidos que se midan entre los 10 a 30 dB.</p>
            </div>
            <div class="columna col textCorrido">
                <div style="text-align: center;">
                    <span class="textSubOido subOido" style="background-color: #ffc37c; border-color: #ffc37c ;">
                        Bajo
                    </span>
                </div>
                <p class="textClasf">Se encuentran sonidos de entre 30-55 dB, sin embargo, la OMS considera los 50 dB como el límite superior deseable.</p>
            </div>
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
        <div class="row" style="padding-top: 50px;">
            <div class="columna col-2"></div>
            <div class="columna col">
                <iframe src="src/pages/esquemaOido.php" style="width: 100%; height: 550px;"></iframe>
            </div>
            <div class="columna col-2"></div>
        </div>
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
    <div class="row container-fluid divBody" style="padding-top: 200px;">
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
    </div>
    <!--SWAL TEMPLATE-->
    <template id="nosotrosSwal">
        <swal-html>
            <div class="row" style="width: 100%;">
                <div class="columna col-4">
                    <div class="divIzqNos">
                        <img class="logoHUBBUB" src="assets/vector/HUBBUBLogo.svg">
                        <br />
                        <a href="https://www.facebook.com/HUBBUBALERTA/" target="_blank"><img class="iconNosotros" src="assets/vector/facebook.svg"></a>
                        <a href="https://www.facebook.com/messages/t/194832804678795" target="_blank"><img class="iconNosotros" src="assets/vector/messenger.svg"></a>
                        <a href="https://twitter.com/AlertaRuido?fbclid=IwAR1o5xnyzozS5nXn8jPbySq0Tjvoh5iggQhPWgzvESj-PUYkhOp-7qQ-RgM" target="_blank"><img class="iconNosotros" src="assets/vector/twitter.svg"></a>
                        <a href="mailto:hubbub@azc.uam.mx" target="_blank"><img class="iconNosotros" src="assets/vector/mail.svg"></a>
                        <center>
                            <hr class="hrSwal" />
                            <p class="textHUBBUBC">HUBBUB&copy;</p>
                            <p class="textAvisoN">Aviso de privacidad</p>
                            <p class="textDerechosN">Todos los derechos reservados</p>
                        </center>
                    </div>
                </div>
                <div class="columna col-1">
                    <div class="verticalLineNos"></div>
                </div>
                <div class="columna col-7">
                    <div class="divDerNos">
                        <p class="subtitle subNos">Sobre nosotros</p><br />
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

</html>