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
    <script type="text/javascript" src="../../../json/VARvariables.js"></script>
    <script type="text/javascript" src="../../../js/JSverElRuido.js"></script>

    <title>
        HUBBUB | Esquema Oido
    </title>
</head>

<!--//funcion muestra la primer vista del chart-->
<!--//param 1 = vista anual-->

<body style="background-image: url(''); background-color: rgba(0,0,0,0);">
    <!--//*Botones para tipo de visualización-->
    <div class="row container-fluid" style="padding-top: 0px;">
        <div class="columna col-2">
            <div class="btnMolestiaAct" id="btnMolestia" onclick="setChart(0)">Molestia</div>
        </div>
        <div class="columna col-2">
            <div class="btnEspacioIna" id="btnEspacio" onclick="setChart(1)">Espacio</div>
        </div>
        <div class="columna col-2">
            <div class="btnEmisorIna" id="btnEmisor" onclick="setChart(2)">Emisor</div>
        </div>
        <div class="columna col-2">
            <div class="btnHorarioIna" id="btnHorario" onclick="setChart(3)">Horario</div>
        </div>
        <div class="columna col-4"></div>
    </div>
    <div class="row container-fluid" style="padding: 0px; padding-left: 12px;">
        <div class="col-12" id="bracketParti"></div>
    </div>
    <div id="variables">
        <div>
            <!--//* Canva para la gráfica de clasificación de ruidos-->
            <center>
                <br />
                <div id="canvaVar">
                </div>
            </center>
            <!--//*Control de fechas-->
        </div>
        <div class="row container-fluid" style="padding-top: 20px;">
            <div class="columna col-6 textCorrido">
                <span id="totalReportes">Total de 50 reportes</span>
                <br /><br />
                <span id="reportCircle">1 reporte = 4 </span>
                <span><img src="../../../../assets/vector/circles/circle.svg" style="width: 20px; margin-top: -5px; margin-left: 10px;"></span>
            </div>
            <div id="leyenda" class="columna col-6 textCita" style="text-align: left;">
            </div>
        </div>
        <br/><br/>
    </div>
</body>
<!--//import CHART para la gráfica de clasificación-->
<script type="text/javascript" src="../../../js/P5variables.js"></script>

</html>