<html>

<head>
    <!--//import Chart.js para gráficas-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.css" integrity="sha512-/zs32ZEJh+/EO2N1b0PEdoA10JkdC3zJ8L5FTiQu82LR9S/rOQNfQN7U59U9BC12swNeRAz3HSzIL2vpp4fv3w==" crossorigin="anonymous" />
    <!--//import  Estilos aplicados al proyecto en general-->
    <link href="../../../scss/general.css" rel="stylesheet">
    <title>
        HUBBUB | Esquema Oido
    </title>
</head>
<!-- //funcion changeCh() cambia el tamaño de la imagenes dentro de la gráfica -->
<body onload="changeCh();" onresize="changeCh();" style="overflow: hidden;">
    <!--//* Canva para la gráfica de clasificación de ruidos-->
    <canvas id="canvaClasRuido"></canvas>
</body>
<!--//import CHART para la gráfica de clasificación-->
<script type="text/javascript" src="../../../js/CHclasiRuido.js"></script>

</html>