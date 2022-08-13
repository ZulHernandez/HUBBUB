<html>

<head>
    <!--//import Bootstrap como framework de diseño-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <!--//import Dom2Image para generar imagenes de objetos DOM-->
    <script src="../../../../node_modules/dom-to-image/src/dom-to-image.js" type="text/javascript"></script>
    <!--//import P5.js para animaciones base canva-->
    <script src="../../../../src/dist/p5.js" type="text/javascript"></script>
    <!--//import SweetAlert para alerts estilizadas-->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!--//import  Estilos aplicados al proyecto en general-->
    <link href="../../../scss/general.css" rel="stylesheet">
    <!--//import  Estilos aplicados a la p[agina de ver el ruido-->
    <link href="../../../scss/verElRuido.css" rel="stylesheet">
    <!--//import JSon para el chart-->
    <script type="text/javascript" src="../../../json/VARemisores.js"></script>
    <script type="text/javascript" src="../../../js/JSverElRuido.js"></script>

    <title>
        HUBBUB | Emisores
    </title>
</head>

<!--//funcion muestra la primer vista del chart-->
<!--//param 1 = vista anual-->

<body style="background-image: url(''); background-color: rgba(0,0,0,0);">
    <div id="emisores">
        <div class="row container-fluid">
            <div class="columna col-5">
                <div>
                    <!--//* Canva para la gráfica de word map emisores-->
                    <center>
                        <div id="canvaEmi">
                        </div>
                    </center>
                </div>
            </div>
            <div class="columna col-1">
                <div class="verticalLineEmi"></div>
            </div>
            <div class="col-6">
                <div id="descpEmisor" class="row container-fluid textCorrido" style="padding: 0; margin:0; font-size: 18px; height: 180px;"></div>
                <div class="row container-fluid" style="padding: 0; margin:0; padding-top: 25px;">
                    <div class="columna col">
                        <p class="subEmisor">Molestia</p>
                        <p id="nivelM" class="textCorrido" style="text-align: center;">Poco</p>
                        <center>
                            <img id="nivelMimg" style="width: 50px;" src="../../../../assets/vector/variables/poco.svg">
                        </center>
                    </div>
                    <div class="columna col-1">
                        <div class="verticalLineEmi"></div>
                    </div>
                    <div class="columna col">
                        <p class="subEmisor">Reportes</p>
                        <p id="numRep" class="textCorrido" style="text-align: center;">17 reportes</p>
                        <p id="picoR" class="subtitle" style="text-align: center; line-height: 1; text-transform: none;">74 dBA</p>
                        <p class="refe" style="text-align: center; line-height: 0;">pico de ruido</p>
                    </div>
                </div>
                <div id="descpEmisor" class="row container-fluid" style="padding: 0; margin:0; padding-top: 50px;">
                    <div class="columna col">
                        <p class="subEmisor">Horarios</p>
                        <p id="horarioText" class="textCorrido" style="text-align: center;">Noche</p>
                        <center>
                            <img id="horarioImg" style="width: 45px;" src="../../../../assets/vector/variables/noche.svg">
                        </center>
                    </div>
                    <div class="columna col-1">
                        <div class="verticalLineEmi"></div>
                    </div>
                    <div class="columna col">
                        <p class="subEmisor">Alcaldía</p>
                        <p id="nombreAl" class="textCorrido" style="text-align: center;">Miguel Hidalgo</p>
                        <center>
                            <svg id="alcaldiaFrame" width="45" height="45" viewBox="0 0 99 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="alcaldiaImg" d="" fill="#FF7C7C" />
                            </svg>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<!--//import CHART para la gráfica de clasificación-->
<script type="text/javascript" src="../../../js/P5emisores.js"></script>

</html>