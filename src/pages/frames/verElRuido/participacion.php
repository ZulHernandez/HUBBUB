<html>

<head>
    <!--//import Implementación de librerias se incluyen: Tone, p5, Sweetalert y p5-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.css" integrity="sha512-/zs32ZEJh+/EO2N1b0PEdoA10JkdC3zJ8L5FTiQu82LR9S/rOQNfQN7U59U9BC12swNeRAz3HSzIL2vpp4fv3w==" crossorigin="anonymous" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <!--//import  Estilos aplicados al proyecto en general-->
    <link href="../../../scss/general.css" rel="stylesheet">
    <!--//import JSon para el chart-->
    <script type="text/javascript" src="../../../json/VARparticipacion.js"></script>
    <title>
        HUBBUB | Esquema Oido
    </title>
</head>

<body onload="setChart()">
    <!--//* Canva para la gráfica de clasificación de ruidos-->
    <canvas id="canvaParticipacion"></canvas>
    <!--//*Control de fechas-->
    <div class="row container-fluid" style="padding-top: 40px;">
            <div class="columna col-7"></div>
            <div class="columna col-1 flechaOido" onclick="mueveChart(0)">
                <center>
                    <img src="../../../../assets/vector/flecha.svg">
                </center>
            </div>
            <div class="columna col-3">
                <p id="fechaMain" class="fechaMain">2020</p>
                <p id="totalReportes" class="textCorrido" style="text-align: right;">Total de 0 reportes</p>
            </div>
            <div class="columna col-1 flechaOido" onclick="mueveChart(1)">
                <center>
                    <img src="../../../../assets/vector/flecha.svg" style="transform: rotate(180deg);">
                </center>
            </div>
        </div>
    </div>
</body>
<!--//import CHART para la gráfica de clasificación-->
<script type="text/javascript" src="../../../js/CHparticipacion.js"></script>


</html>