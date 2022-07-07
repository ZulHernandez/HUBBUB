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
    <!--//import Dom2Image para generar imagenes de objetos DOM-->
    <script src="../../../../node_modules/dom-to-image/src/dom-to-image.js" type="text/javascript"></script>
    <!--//import  Estilos aplicados al proyecto en general-->
    <link href="../../../scss/general.css" rel="stylesheet">
    <!--//import  Estilos aplicados a la p[agina de ver el ruido-->
    <link href="../../../scss/verElRuido.css" rel="stylesheet">
    <!--//import JSon para el chart-->
    <script type="text/javascript" src="../../../json/VARpresionCH.js"></script>
    <script type="text/javascript" src="../../../js/JSverElRuido.js"></script>

    <title>
        HUBBUB | Esquema Oido
    </title>
</head>

<!--//funcion muestra la primer vista del chart-->
<!--//param 1 = vista anual-->

<body onload="setChart()" style="background-image: url(''); background-color: rgba(0,0,0,0);">
    <div id="CHpresion">
        <!--//* Canva para la gráfica de clasificación de ruidos-->
        <canvas id="canvaPresionCH"></canvas>
        <!--//*Control de fechas-->
        <div class="row container-fluid" style="padding-top: 40px;">
            <div class="columna col textCorrido">
                <span id="totalReportes"></span><br/><br/>
                <span><img src="../../../../assets/vector/promLeyenda.svg"></span>
                &nbsp;&nbsp;&nbsp;Promedio: 
                <b><span id="promRep">20 reportes</span></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span><img src="../../../../assets/vector/promLeyenda.svg" style="transform: rotate(90deg);"></span>
                &nbsp;&nbsp;&nbsp;Promedio: 
                <b><span id="promDB">20 decibelios</span></b>
            </div>
        </div>
        <br/>
    </div>
</body>
<!--//import CHART para la gráfica de clasificación-->
<script type="text/javascript" src="../../../js/CHpresion.js"></script>

</html>