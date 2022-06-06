<html>

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.css" integrity="sha512-/zs32ZEJh+/EO2N1b0PEdoA10JkdC3zJ8L5FTiQu82LR9S/rOQNfQN7U59U9BC12swNeRAz3HSzIL2vpp4fv3w==" crossorigin="anonymous" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <title>
        HUBBUB | El ruido
    </title>

</head>

<body>
    <div class="container-fluid hero">
        <div class="prueba"></div>
        <div class="imagen" style="position: absolute; z-index: 1;">
            <img class="logoHero" src="assets/gif/HUBBUBIcon.gif">
        </div>
        <div class="row container-fluid" class="divAnima" style="height:100vh; padding: 0px 85px; position: absolute; z-index: 2;">
            <div class="columna col-2" style="background-color: rgba(255,255,0,0.5);"></div>
            <div class="columna col-2" style="background-color: rgba(255,0,0,0.5);"></div>
            <div class="columna col-1" style="background-color: rgba(255,255,0,0.5);;"></div>
            <div class="columna col-5" style="background-color: rgba(255,0,0,0.5);;"></div>
            <div class="columna col-2" style="background-color: rgba(255,255,0,0.5);;"></div>
        </div>
    </div>
    <div class="canvaClasRuido">
        <canvas id="canvaClasRuido"></canvas>
    </div>
</body>
<script src="src/js/chart.js" type="text/javascript"></script>
<link href="src/scss/general.css" rel="stylesheet">
<link href="src/scss/VerElRuido.css" rel="stylesheet">

</html>