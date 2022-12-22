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
    <script src="src/dist/p5.js" type="text/javascript"></script>
    <!--//import sketchfab-viewer para visualizaci[on del modelo 3d-->
    <script type="text/javascript" src="https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js"></script>
    <!--//import  Estilos aplicados al sitio en general-->
    <link href="src/scss/general.css" rel="stylesheet">
    <!--//import  Estilos aplicados a la página El ruido-->
    <link href="src/scss/elRuido.css" rel="stylesheet">
    <!--//import  Js para el manejo del sitio en general-->
    <script src="src/js/JSgeneral.js"></script>
    <!--//import  Js para el manejo de la página el Ruido-->
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

<!-- <body onload="skfbStart();" onresize="setup();"> -->

<body onload="checaPos();" onresize="setup();">
    <!--//main Se incluye el navegador lateral izquierdo-->
    <!--//funcion navIzq() Colapasa o expande el navegador lateral izquierdo-->
    <!--//param 0 = navegador colapsado-->
    <!--//param 1 = navegador expandido-->
    <div class="navIzq">
        <div class="row container-fluid" style="margin: 0;">
            <div class=" col-1"></div>
            <!--//* Indicador de sección en scroll-->
            <!-- <div class="columnaCh col-1">
                <div id="divScroll" style="background-color: #FF7C7C; height: 15px; width: 15px; margin-top:25px; border-radius: 50%;"></div>
            </div> -->
            <!--//funcion scrollMe(a) scrollea la página a una posición determinada-->
            <!--//param a = posición a la cual scrollear-->
            <div class="col-1" onclick="scrollMe(0);">
                <!--//* Icono y texto de Home-->
                <div id="opcionCero" class="textoDivNavIna navIcon" onmouseover="navIzqOpa(0, 1);" onmouseleave="navIzqOpa(0, 0);">
                    <svg class="navIzqIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="iconCero" d="M2.50015 10.8328H3.33348V16.6662C3.33348 17.5853 4.08098 18.3328 5.00015 18.3328H15.0001C15.9193 18.3328 16.6668 17.5853 16.6668 16.6662V10.8328H17.5001C17.6649 10.8328 17.826 10.7839 17.963 10.6923C18.1 10.6008 18.2068 10.4706 18.2699 10.3184C18.3329 10.1661 18.3494 9.99862 18.3173 9.83699C18.2852 9.67536 18.2058 9.52689 18.0893 9.41035L10.5893 1.91035C10.512 1.8329 10.4202 1.77145 10.3191 1.72952C10.218 1.6876 10.1096 1.66602 10.0001 1.66602C9.8907 1.66602 9.78233 1.6876 9.68124 1.72952C9.58014 1.77145 9.4883 1.8329 9.41098 1.91035L1.91098 9.41035C1.79447 9.52689 1.71513 9.67536 1.683 9.83699C1.65086 9.99862 1.66736 10.1661 1.73042 10.3184C1.79347 10.4706 1.90026 10.6008 2.03727 10.6923C2.17427 10.7839 2.33536 10.8328 2.50015 10.8328ZM8.33348 16.6662V12.4995H11.6668V16.6662H8.33348ZM10.0001 3.67785L15.0001 8.67785V12.4995L15.001 16.6662H13.3335V12.4995C13.3335 11.5803 12.586 10.8328 11.6668 10.8328H8.33348C7.41431 10.8328 6.66681 11.5803 6.66681 12.4995V16.6662H5.00015V8.67785L10.0001 3.67785Z" fill="#333333" />
                    </svg>
                    <div id="textOpcCero" class="textNavIzq" style="padding-top: 5px;">Home</div>
                </div>
            </div>
            <div class="col-1">
                <!--//* Icono y texto de El oído-->
                <div id="opcionUno" class="textoDivNavIna navIcon" onclick="scrollMe(1);" onmouseover="navIzqOpa(1, 1);" onmouseleave="navIzqOpa(1, 0);">
                    <svg class="navIzqIcon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="iconUno" d="M14.9997 1.625L15.0003 1.625C17.8006 1.62818 20.4853 2.742 22.4654 4.72211C24.4455 6.70222 25.5593 9.38692 25.5625 12.1872V12.1875C25.5625 14.1828 25.1899 15.5569 24.6553 16.5833C24.1277 17.5963 23.45 18.2536 22.8688 18.8173L22.8498 18.8357L22.8491 18.8365C22.3874 19.2804 22.0202 19.6364 21.7601 20.1011C21.5044 20.558 21.3438 21.1376 21.3438 22.0313C21.3436 23.3374 20.9403 24.6117 20.1889 25.68C19.4375 26.7484 18.3747 27.5587 17.1455 28.0005C15.9164 28.4422 14.5808 28.4938 13.3213 28.1482C12.0617 27.8025 10.9395 27.0765 10.108 26.0693L10.1063 26.0673C9.90875 25.8227 9.81512 25.5104 9.84558 25.1975C9.87604 24.8846 10.0282 24.5961 10.2692 24.3943L10.2696 24.3939C10.3893 24.2941 10.5277 24.2191 10.6767 24.1733C10.8256 24.1275 10.9822 24.1117 11.1373 24.1269C11.2925 24.1422 11.443 24.1881 11.5802 24.262C11.7171 24.3358 11.8379 24.4359 11.9358 24.5567C12.4555 25.188 13.1575 25.6434 13.9458 25.8606C14.7344 26.0779 15.5709 26.0462 16.3408 25.7699C17.1107 25.4935 17.7764 24.986 18.2468 24.3168C18.7172 23.6476 18.9694 22.8494 18.9688 22.0314V22.0313C18.9688 20.6679 19.2651 19.6873 19.7014 18.9169C20.126 18.1671 20.677 17.6291 21.1706 17.147L21.2003 17.118L21.2249 17.094C21.7225 16.6081 22.199 16.1428 22.5615 15.4327C22.9288 14.7133 23.1875 13.7234 23.1875 12.1875C23.1875 10.016 22.3249 7.93352 20.7894 6.39806C19.254 4.86261 17.1715 4 15 4C12.8285 4 10.746 4.86261 9.21056 6.39806C7.67511 7.93352 6.8125 10.016 6.8125 12.1875C6.8125 12.5024 6.68739 12.8045 6.46469 13.0272C6.24199 13.2499 5.93995 13.375 5.625 13.375C5.31005 13.375 5.00801 13.2499 4.78531 13.0272C4.56261 12.8045 4.4375 12.5024 4.4375 12.1875V12.1872C4.44068 9.38692 5.5545 6.70222 7.53461 4.72211C9.51472 2.742 12.1994 1.62818 14.9997 1.625ZM8.75303 20.3095C8.09079 19.6472 7.71875 18.749 7.71875 17.8125C7.71875 17.4976 7.84386 17.1955 8.06656 16.9728C8.28926 16.7501 8.59131 16.625 8.90625 16.625C9.22119 16.625 9.52324 16.7501 9.74594 16.9728C9.96864 17.1955 10.0938 17.4976 10.0938 17.8125C10.0938 18.1192 10.2156 18.4133 10.4324 18.6301C10.6492 18.8469 10.9433 18.9688 11.25 18.9688C11.5567 18.9688 11.8508 18.8469 12.0676 18.6301C12.2844 18.4133 12.4062 18.1192 12.4062 17.8125C12.4062 17.3963 12.3111 17.1099 12.1241 16.8402C11.9274 16.5564 11.6253 16.2837 11.1815 15.905L11.1806 15.9043C10.3015 15.1541 9.125 14.1502 9.125 12.1875C9.125 10.6294 9.74397 9.13503 10.8457 8.03325C11.9475 6.93147 13.4419 6.3125 15 6.3125C16.5581 6.3125 18.0525 6.93147 19.1543 8.03325C20.256 9.13502 20.875 10.6294 20.875 12.1875C20.875 12.5024 20.7499 12.8045 20.5272 13.0272C20.3045 13.2499 20.0024 13.375 19.6875 13.375C19.3726 13.375 19.0705 13.2499 18.8478 13.0272C18.6251 12.8045 18.5 12.5024 18.5 12.1875C18.5 11.2592 18.1313 10.369 17.4749 9.71263C16.8185 9.05625 15.9283 8.6875 15 8.6875C14.0717 8.6875 13.1815 9.05625 12.5251 9.71263C11.8687 10.369 11.5 11.2592 11.5 12.1875C11.5 12.6037 11.5952 12.8901 11.7821 13.1598C11.9788 13.4436 12.281 13.7163 12.7248 14.095L12.7256 14.0957C13.6047 14.8459 14.7812 15.8498 14.7812 17.8125C14.7812 18.749 14.4092 19.6472 13.747 20.3095C13.0847 20.9717 12.1865 21.3438 11.25 21.3438C10.3135 21.3438 9.41527 20.9717 8.75303 20.3095Z" fill="#333333" stroke="#333333" stroke-width="0.5" />
                    </svg>
                    <div id="textOpcUno" class="textNavIzq" style="padding-top: 5px;">El Oído</div>
                </div>
            </div>
            <div class="col-1">
                <!--//* Icono y texto de Clasificacion del ruido-->
                <div id="opcionDos" class="textoDivNavIna navIcon" onclick="scrollMe(2);" onmouseover="navIzqOpa(2, 1);" onmouseleave="navIzqOpa(2, 0);">
                    <svg class="navIzqIcon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="iconDos" d="M18.75 10.0003C19.5262 10.5824 20.1562 11.3373 20.5902 12.2052C21.0241 13.073 21.25 14.03 21.25 15.0003C21.25 15.9706 21.0241 16.9275 20.5902 17.7954C20.1562 18.6632 19.5262 19.4181 18.75 20.0003M22.125 6.25027C23.43 7.30483 24.4825 8.63793 25.2056 10.1519C25.9287 11.6659 26.3039 13.3225 26.3039 15.0003C26.3039 16.6781 25.9287 18.3346 25.2056 19.8486C24.4825 21.3626 23.43 22.6957 22.125 23.7503M7.5 18.7503H5C4.66848 18.7503 4.35054 18.6186 4.11612 18.3842C3.8817 18.1497 3.75 17.8318 3.75 17.5003V12.5003C3.75 12.1688 3.8817 11.8508 4.11612 11.6164C4.35054 11.382 4.66848 11.2503 5 11.2503H7.5L11.875 5.62527C11.9843 5.41306 12.1658 5.24692 12.3869 5.15689C12.6079 5.06685 12.8539 5.05885 13.0803 5.13432C13.3068 5.2098 13.4987 5.36379 13.6215 5.56845C13.7444 5.77311 13.7899 6.01495 13.75 6.25027V23.7503C13.7899 23.9856 13.7444 24.2274 13.6215 24.4321C13.4987 24.6368 13.3068 24.7907 13.0803 24.8662C12.8539 24.9417 12.6079 24.9337 12.3869 24.8437C12.1658 24.7536 11.9843 24.5875 11.875 24.3753L7.5 18.7503Z" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div id="textOpcDos" class="textNavIzq" style="padding-top: 5px;">Clasificación</div>
                </div>
            </div>
            <div class="col-1">
                <!--//* Icono y texto de Legislación del ruido-->
                <div id="opcionTres" class="textoDivNavIna navIcon" onclick="scrollMe(3);" onmouseover="navIzqOpa(3, 1);" onmouseleave="navIzqOpa(3, 0);">
                    <svg class="navIzqIcon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
                        <g>
                            <path id="iconTres" class="st0" d="M13.8,16.6c0-2.9,0-5.9,0-8.8c0-0.2-0.1-0.3-0.3-0.2c-0.6,0-1.2,0-1.8,0c-0.2,0-0.3,0-0.4,0.1
                                                    c-0.6,0.4-1.2,0.8-1.8,1.2C8.9,9.4,8.3,9.5,7.5,9.5c-0.4,0-0.4,0-0.3,0.4c1.3,3,2.6,6,3.9,9c0.3,0.7,0.2,1.3-0.5,1.7
                                                    C9.6,21.4,8.3,21.8,7,22c-1.8,0.2-3.5,0-5.2-0.8C1.4,21,1,20.8,0.6,20.5c-0.6-0.4-0.7-1-0.4-1.6c1.2-2.8,2.4-5.5,3.6-8.3
                                                    C3.9,10.3,4,10,4.2,9.7C4.3,9.5,4.3,9.5,4,9.5c-0.5,0-0.9,0-1.4,0C2,9.5,1.5,9,1.4,8.4C1.4,7.8,1.7,7.3,2.3,7.1
                                                    c0.1,0,0.3-0.1,0.5-0.1c1.7,0,3.3,0,5,0c0.2,0,0.3,0,0.4-0.1c0.7-0.5,1.3-0.9,2-1.4c0.4-0.3,0.9-0.4,1.4-0.4c0.7,0,1.4,0,2.1,0
                                                    c0.1,0,0.2,0,0.2-0.2c0-0.6,0-1.2,0-1.8c0-0.9,1-1.5,1.8-1c0.4,0.2,0.6,0.6,0.6,1c0,0.6,0,1.2,0,1.8c0,0.1,0,0.2,0.2,0.2
                                                    c0.7,0,1.4,0,2,0c0.6,0,1.1,0.2,1.5,0.5c0.7,0.5,1.3,0.9,2,1.4c0.1,0.1,0.2,0.1,0.3,0.1c1.7,0,3.3,0,5,0c0.7,0,1.2,0.5,1.3,1.1
                                                    c0.1,0.7-0.5,1.3-1.2,1.3c-0.5,0-0.9,0-1.4,0c-0.2,0-0.2,0-0.1,0.2c1.3,3.1,2.7,6.1,4,9.2c0.3,0.6,0.1,1.2-0.5,1.6
                                                    c-1.1,0.7-2.3,1.2-3.6,1.4c-2,0.3-4,0-5.8-0.9c-0.3-0.1-0.5-0.3-0.8-0.5c-0.6-0.4-0.7-1-0.5-1.6c0.7-1.7,1.5-3.4,2.2-5.1
                                                    c0.6-1.4,1.2-2.8,1.8-4.2c0.1-0.2,0-0.2-0.1-0.2c-0.6,0-1.1,0-1.6-0.2c-0.4-0.2-0.7-0.5-1-0.7c-0.4-0.3-0.9-0.6-1.3-0.9
                                                    c-0.1-0.1-0.2-0.1-0.3-0.1c-0.6,0-1.2,0-1.9,0c-0.2,0-0.3,0-0.3,0.3c0,3,0,6.1,0,9.1c0,2.8,0,5.7,0,8.5c0,0.3,0,0.3,0.3,0.3
                                                    c1.7,0,3.5,0,5.2,0c0.7,0,1.2,0.4,1.3,1.1c0.1,0.6-0.4,1.3-1.1,1.4c-0.1,0-0.1,0-0.2,0c-4.5,0-8.9,0-13.4,0c-0.5,0-0.9-0.2-1.1-0.7
                                                    C7,26.9,7,26.5,7.4,26.1c0.3-0.3,0.6-0.4,1-0.4c1.7,0,3.5,0,5.2,0c0.2,0,0.3,0,0.3-0.2C13.8,22.5,13.8,19.5,13.8,16.6z M5.7,12.3
                                                    c0,0.1-0.1,0.1-0.1,0.1c-0.9,2.1-1.9,4.3-2.8,6.4c-0.1,0.1,0,0.2,0.1,0.2c1.8,0.8,3.7,0.8,5.5,0C8.6,19,8.7,19,8.6,18.8
                                                    C8,17.4,7.4,16,6.8,14.6C6.4,13.9,6.1,13.1,5.7,12.3z M24.3,12.3c0,0.1-0.1,0.1-0.1,0.2c-0.9,2.1-1.9,4.2-2.8,6.4
                                                    c-0.1,0.2,0,0.2,0.1,0.3c1.8,0.7,3.7,0.7,5.5,0c0.2-0.1,0.2-0.1,0.1-0.3c-0.5-1.2-1.1-2.4-1.6-3.6C25.1,14.2,24.7,13.2,24.3,12.3z" />
                        </g>
                    </svg>
                    <div id="textOpcTres" class="textNavIzq" style="padding-top: 5px;">Legislación</div>
                </div>
            </div>
            <div class="col-1">
                <!--//* Icono y texto de Componentes del ruido-->
                <div id="opcionCuatro" class="textoDivNavIna navIcon" onclick="scrollMe(4);" onmouseover="navIzqOpa(4, 1);" onmouseleave="navIzqOpa(4, 0);">
                    <svg class="navIzqIcon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="iconCuatro" d="M13.6922 15.3838L13.6922 15.3838L13.6988 15.4075C14.4829 18.1952 15.2504 20.9242 16.2919 22.957C17.3355 24.9939 18.6771 26.375 20.625 26.375C24.1304 26.375 25.887 23.6036 26.7645 20.8362C27.6438 18.0628 27.6625 15.2347 27.6625 15C27.6625 14.931 27.6065 14.875 27.5375 14.875H25.0375C24.9685 14.875 24.9125 14.931 24.9125 15L24.9125 15.0007L24.9125 15.0025L24.9124 15.0087L24.9121 15.0305C24.9117 15.0491 24.9112 15.0755 24.9102 15.1093C24.9084 15.1767 24.9051 15.2735 24.8994 15.3953C24.888 15.6388 24.8669 15.9824 24.8283 16.3924C24.7509 17.2128 24.6033 18.2967 24.3228 19.3764C24.0418 20.4577 23.6298 21.5251 23.0288 22.3197C22.4304 23.111 21.6507 23.625 20.625 23.625C20.2173 23.625 19.8068 23.3383 19.3954 22.7945C18.9875 22.2553 18.6001 21.4912 18.2344 20.5994C17.5128 18.84 16.8873 16.6143 16.3538 14.7158L16.3329 14.6412C15.5464 11.8388 14.7713 9.09393 13.7205 7.05065C12.6707 5.00915 11.3229 3.625 9.375 3.625C5.88791 3.625 4.1409 6.39703 3.26829 9.16397C2.39365 11.9373 2.375 14.7653 2.375 15C2.375 15.069 2.43096 15.125 2.5 15.125H5C5.06904 15.125 5.125 15.069 5.125 15V15C5.125 14.9999 5.125 14.9992 5.12502 14.9977L5.1251 14.9916L5.1255 14.9698C5.12588 14.9512 5.12651 14.9248 5.12752 14.8911C5.12954 14.8236 5.13306 14.7268 5.13903 14.605C5.15099 14.3614 5.17278 14.0178 5.21212 13.6078C5.29085 12.7873 5.43962 11.7033 5.71944 10.6235C5.99971 9.54205 6.40906 8.47446 7.00379 7.67978C7.59617 6.88823 8.36565 6.375 9.375 6.375C9.78441 6.375 10.1927 6.65145 10.6005 7.17881C11.0055 7.70252 11.3899 8.44839 11.7548 9.32909C12.4842 11.0896 13.1228 13.3568 13.6922 15.3838Z" fill="#333333" stroke="#333333" stroke-width="0.25" stroke-linejoin="round" />
                    </svg>
                    <div id="textOpcCuatro" class="textNavIzq" style="padding-top: 5px;">Componentes</div>
                </div>
            </div>
            <div class="col-1">
                <!--//* Icono y texto de Efectos en la salud-->
                <div id="opcionCinco" class="textoDivNavIna navIcon" onclick="scrollMe(5);" onmouseover="navIzqOpa(5, 1);" onmouseleave="navIzqOpa(5, 0);">
                    <svg class="navIzqIcon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="iconCinco" d="M20 3.75C20 3.41848 19.8683 3.10054 19.6339 2.86612C19.3995 2.6317 19.0815 2.5 18.75 2.5H11.25C10.9185 2.5 10.6005 2.6317 10.3661 2.86612C10.1317 3.10054 10 3.41848 10 3.75V10H3.75C3.41848 10 3.10054 10.1317 2.86612 10.3661C2.6317 10.6005 2.5 10.9185 2.5 11.25V18.75C2.5 19.0815 2.6317 19.3995 2.86612 19.6339C3.10054 19.8683 3.41848 20 3.75 20H10V26.25C10 26.5815 10.1317 26.8995 10.3661 27.1339C10.6005 27.3683 10.9185 27.5 11.25 27.5H18.75C19.0815 27.5 19.3995 27.3683 19.6339 27.1339C19.8683 26.8995 20 26.5815 20 26.25V20H26.25C26.5815 20 26.8995 19.8683 27.1339 19.6339C27.3683 19.3995 27.5 19.0815 27.5 18.75V11.25C27.5 10.9185 27.3683 10.6005 27.1339 10.3661C26.8995 10.1317 26.5815 10 26.25 10H20V3.75Z" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div id="textOpcCinco" class="textNavIzq" style="padding-top: 5px;">Salud</div>
                </div>
            </div>
            <div class="col-1">
                <!--//* Icono y texto de Como se mide el ruido-->
                <div id="opcionSeis" class="textoDivNavIna navIcon" onclick="scrollMe(6);" onmouseover="navIzqOpa(6, 1);" onmouseleave="navIzqOpa(6, 0);">
                    <svg class="navIzqIcon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="iconSeis" d="M26.25 26.375H26.375V26.25V22.625H28.75H28.875V22.5V18.75V18.625H28.75H21.25H21.125V18.75V22.5V22.625H21.25H23.625V26.25V26.375H23.75H26.25ZM6.25 26.375H6.375V26.25V22.625H8.75H8.875V22.5V18.75V18.625H8.75H1.25H1.125V18.75V22.5V22.625H1.25H3.625V26.25V26.375H3.75H6.25ZM13.75 3.625H13.625V3.75V7.375H11.25H11.125V7.5V11.25V11.375H11.25H18.75H18.875V11.25V7.5V7.375H18.75H16.375V3.75V3.625H16.25H13.75ZM13.75 13.625H13.625V13.75V26.25V26.375H13.75H16.25H16.375V26.25V13.75V13.625H16.25H13.75ZM3.625 16.25V16.375H3.75H6.25H6.375V16.25V3.75V3.625H6.25H3.75H3.625V3.75V16.25ZM23.625 16.25V16.375H23.75H26.25H26.375V16.25V3.75V3.625H26.25H23.75H23.625V3.75V16.25Z" fill="#333333" stroke="#333333" stroke-width="0.25" />
                    </svg>
                    <div id="textOpcSeis" class="textNavIzq" style="padding-top: 5px;">Medición</div>
                </div>
            </div>
            <div class="col-1">
                <!--//* Icono y texto de Áreas de estudio-->
                <div id="opcionSiete" class="textoDivNavIna navIcon" onclick="scrollMe(7);" onmouseover="navIzqOpa(7, 1);" onmouseleave="navIzqOpa(7, 0);">
                    <svg class="navIzqIcon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="iconSiete" d="M4.375 8.75L9.375 11.875M9.6875 5.625L4.375 8.75V21.25L9.6875 24.375L15 27.5L20.3125 24.375L25.625 21.25V8.75L20.3125 5.625L15 2.5L9.6875 5.625ZM15 2.5V15V2.5ZM25.625 21.25L15 15L25.625 21.25ZM4.375 21.25L15 15L4.375 21.25ZM15 27.5V21.25V27.5ZM25.625 8.75L20.625 11.875L25.625 8.75Z" stroke="#333333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div id="textOpcSiete" class="textNavIzq" style="padding-top: 5px;">Estudio</div>
                </div>
            </div>
            <div class="col-1">
                <!--//* Icono y texto de Artículos de HUBBUB-->
                <div id="opcionOcho" class="textoDivNavIna navIcon" onclick="scrollMe(8);" onmouseover="navIzqOpa(8, 1);" onmouseleave="navIzqOpa(8, 0);">
                    <svg class="navIzqIcon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="iconOcho" d="M26.25 27.6377C26.319 27.6377 26.375 27.5817 26.375 27.5127V25.0127C26.375 24.9437 26.319 24.8877 26.25 24.8877H7.51665C7.24016 24.8803 6.95512 24.8216 6.74141 24.6598C6.534 24.5027 6.375 24.2341 6.375 23.7627C6.375 23.6443 6.38551 23.5396 6.40282 23.4447C6.46614 23.1205 6.62699 22.927 6.824 22.8096C7.02573 22.6894 7.27445 22.6438 7.51532 22.6377H25C25.0319 22.6377 25.0576 22.6294 25.0673 22.6264C25.0689 22.6259 25.0703 22.6255 25.0713 22.6252H26.25C26.319 22.6252 26.375 22.5692 26.375 22.5002V5.0127C26.375 3.56491 25.1978 2.3877 23.75 2.3877H7.5C6.72209 2.3877 5.75617 2.64456 4.98205 3.25801C4.20343 3.87503 3.625 4.84844 3.625 6.2627V23.7627C3.625 25.177 4.20343 26.1504 4.98205 26.7674C5.75617 27.3808 6.72209 27.6377 7.5 27.6377H26.25ZM7.50169 5.1377H16.125V13.7627C16.125 13.806 16.1474 13.8463 16.1843 13.869C16.2211 13.8918 16.2672 13.8939 16.3059 13.8745L18.75 12.6525L21.1941 13.8745C21.2328 13.8939 21.2789 13.8918 21.3157 13.869C21.3526 13.8463 21.375 13.806 21.375 13.7627V5.1377H23.625V19.8877H6.375V6.2627C6.375 5.79062 6.53407 5.52184 6.73986 5.36491C6.95177 5.2033 7.23304 5.14507 7.50169 5.1377Z" fill="#333333" stroke="#333333" stroke-width="0.25" stroke-linejoin="round" />
                    </svg>
                    <div id="textOpcOcho" class="textNavIzq" style="padding-top: 5px;">Artículos</div>
                </div>
            </div>
            <div class="col-1">
                <!--//* Icono y texto de Referencias y artículos-->
                <div id="opcionNueve" class="textoDivNavIna navIcon" onclick="scrollMe(9);" onmouseover="navIzqOpa(9, 1);" onmouseleave="navIzqOpa(9, 0);">
                    <svg class="navIzqIcon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="iconNueve" d="M18.9649 8.75008L10.7324 16.9826C10.4936 17.2132 10.3032 17.4891 10.1721 17.7941C10.0411 18.0991 9.97216 18.4271 9.96928 18.7591C9.96639 19.091 10.0296 19.4202 10.1553 19.7275C10.2811 20.0347 10.4667 20.3138 10.7014 20.5486C10.9361 20.7833 11.2153 20.9689 11.5225 21.0946C11.8298 21.2203 12.159 21.2836 12.4909 21.2807C12.8229 21.2778 13.1509 21.2089 13.4559 21.0778C13.7609 20.9468 14.0368 20.7564 14.2674 20.5176L22.2849 12.2851C23.1957 11.3421 23.6997 10.0791 23.6883 8.76808C23.6769 7.45709 23.151 6.20303 22.224 5.27599C21.297 4.34895 20.0429 3.8231 18.7319 3.81171C17.4209 3.80032 16.1579 4.30429 15.2149 5.21508L7.19615 13.4463C5.78951 14.853 4.99927 16.7608 4.99927 18.7501C4.99927 20.7394 5.78951 22.6472 7.19615 24.0538C8.60279 25.4605 10.5106 26.2507 12.4999 26.2507C14.4892 26.2507 16.397 25.4605 17.8037 24.0538L25.6249 16.2501" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div id="textOpcNueve" class="textNavIzq" style="padding-top: 5px;">Referencias</div>
                </div>
            </div>
            <div class="col-1"></div>
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
                    <!--//funcion nosotros() Dispara el modal de nosotros-->
                    <p class="linkNavDerIna" onclick="nosotros(true)">Sobre nosotros</p>
                    <!--//funcion scrollMe() nos dirige a la sección 10, footer de la página-->
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
    <div class="container-fluid hero" id="tituloCero">
        <div class="imagenHero">
            <!--//funcion nosotros(true) dispara el swal sobre la información de HUBBUB-->
            <img class="logoHero" onclick="nosotros(true);" src="assets/gif/HUBBUBIcon.gif">
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
    <div class="container-fluid hero" id="tituloCeroCh">
        <div class="row">
            <div class="columna col-12">
                <center>
                    <!--//funcion nosotros(true) dispara el swal sobre la información de HUBBUB-->
                    <img class="logoHero" onclick="nosotros(true);" src="assets/gif/HUBBUBIcon.gif">
                </center>
            </div>
        </div>
        <div class="row container-fluid divHero paddingNormal">
            <div class="columna col-2"></div>
            <div class="columna col-8">
                <br />
                <hr />
                <h1 class="pageTitle">El ruido</h1>
                <br />
                <p class="textCorrido">Este es uno de los fenómenos más interesantes de la modernidad pues
                    es producto de la cultura, el crecimiento y la evolución del ser humano y lo que lo rodea.
                    Comprender como funciona, de qué manera se integra a nuestra vida, cuáles son sus
                    efectos y como hemos actuado ante el mismo nos puede ayudar a tener una visión más compleja
                    sobre este particular fenómeno invisible y perceptible.</p>
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

                <h2 class="linea" id="tituloUno">
                    <center>
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/elOido.svg"></span>
                            <span>El oído</span>
                        </titulo>
                    </center>
                </h2>

            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//*Texto de la sección-->
        <div class="row" style="padding-top: 5.3vw;">
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
    <div class="row container-fluid" style="padding-top: 5.3vw;">
        <center>
            <!--//*Canva del esquema del oído (P5esquemaOido.js)-->
            <div id="canvaOido"></div>
        </center>
    </div>
    <!--//* Sección texto para el esquema del oído-->
    <div class="row container-fluid divBody" style="padding-top: 5.3vw;">
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
            <p id="textOido" class="textCorrido" style="padding-top:2.1vw">Formado por el pabellón auditivo el cual, a manera de embudo, <b>permite
                    la recolección de las ondas sonoras del ambiente</b> para, finalmente, <b>dirigirlas al canal auditivo</b>. Este
                también <b>compensa la presión</b> existente entre el exterior y el interior del oído (la cual es mayor al ser aire
                comprimido) y termina en el tímpano.</p>
            <p class="link" style="text-align: right; padding-top: 2.1vw;">
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
    <div class="row container-fluid divBody" style="padding-top: 10.5vw;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <h2 class="linea" id="tituloDos">
                    <center>
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/clasRuido.svg"></span>
                            <span>Clasificación</span>
                        </titulo>
                    </center>
                </h2>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//*Texto de la sección-->
        <div class="row" style="padding-top: 5.3vw;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>La Organización Mundial de la Salud define al ruido como: cualquier tipo de onda acústica que se encuentre
                    en el ambiente y establece una clasificación de “Niveles de ruido” donde, a través de la medición con instrumentos
                    de las ondas acústicas, específicamente hablando de los decibeles (dB), se construyen 3 niveles:</p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//*Tabla de clasificación del ruido-->
        <div id="clasi" class="row" style="padding-top: 5.3vw;">
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
        <div id="clasiCh" class="row" style="padding-top: 5.3vw;">
            <div class="row">
                <div class="columna col-2"></div>
                <!--//*Columna de ruido muy bajo-->
                <div class="columna col-8 textCorrido">
                    <div style="text-align: left;">
                        <span class="textSubOido subOido" style="background-color: #fffa7c; border-color: #fffa7c ;">
                            Muy bajo
                        </span>
                    </div>
                    <p class="textClasf">Se hayan todos los ruidos que se midan entre los 10 a 30 dB.</p>
                </div>
                <div class="columna col-2"></div>
            </div>
            <div class="row">
                <div class="columna col-2"></div>
                <!--//*Columna de ruido bajo-->
                <div class="columna col-8 textCorrido">
                    <div style="text-align: left;">
                        <span class="textSubOido subOido" style="background-color: #ffc37c; border-color: #ffc37c ;">
                            Bajo
                        </span>
                    </div>
                    <p class="textClasf">Se encuentran sonidos de entre 30-55 dB, sin embargo, la OMS considera los 50 dB como el límite superior deseable.</p>
                </div>
                <div class="columna col-2"></div>
            </div>
            <div class="row">
                <div class="columna col-2"></div>
                <!--//*Columna de ruido ruidoso-->
                <div class="columna col-8 textCorrido" style="letter-spacing: -1">
                    <div style="text-align: left;">
                        <span class="textSubOido subOido" style="background-color: #ff7c7c; border-color: #ff7c7c ;">
                            Ruidoso
                        </span>
                    </div>
                    <p class="textClasf">Todo aquel sonido con mediciones superiores a los 65 dB.</p>
                </div>
                <div class="columna col-2"></div>
            </div>
        </div>
        <!--//*Grafica de clasificación de ruidos-->
        <div class="row" style="padding-top: 2.6vw;">
            <div class="columna col-2"></div>
            <!--//*Frame de la grafica, clasiRuido.php es la página que aloja la gráfica-->
            <div class="columna col">
                <iframe src="src/pages/frames/elRuido/clasiRuido.php" style="width: 100%; height: 550px;"></iframe>
            </div>
            <div class="columna col-2"></div>
        </div>
        <!--//*Texto final de la sección-->
        <div class="row" style="padding-top: 2.6vw;">
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
    <div class="row container-fluid divBody" style="padding-top: 10.5vw;">
        <!--//* Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <h2 class="linea" id="tituloTres">
                    <center>
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/legRuido.svg"></span>
                            <span>Legislación</span>
                        </titulo>
                    </center>
                </h2>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//* Texto de la sección-->
        <div class="row" style="padding-top: 5.3vw;">
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
    <div class="row container-fluid divBody" style="padding-top: 10.5vw;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <h2 class="linea" id="tituloCuatro">
                    <center>
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/compRuido.svg"></span>
                            <span>Componentes</span>
                        </titulo>
                    </center>
                </h2>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//*Texto de la sección-->
        <div class="row" style="padding-top: 5.3vw;">
            <div class="columna col-2"></div>
            <div class="columna col textCorrido">
                <p>
                    La exposición al ruido puede perjudicar parcial o totalmente el sentido del oído. Esta exposición está determinada por tres factores principales:
                </p>
            </div>
            <div class="columna col-2"></div>
        </div>
        <div id="compo" class="row" style="padding-top: 5.3vw;">
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
        <div id="compoCh" class="row" style="padding-top: 5.3vw;">
            <div class="row">
                <div class="columna col-2"></div>
                <!--//*Columna sobre la intensidad-->
                <div class="columna col-8 textCorrido">
                    <div style="text-align: left;">
                        <span class="subOido">
                            Intensidad
                        </span>
                    </div>
                    <p class="textClasf">
                        Determinada por el nivel de presión sonora y se mide en decibeles (dB). El decibelio puede medir otras magnitudes físicas,
                        pero coloquialmente se le dice así a una unidad más específica llamada decibelio del nivel de presión sonora (dB SPL).</p>
                </div>
                <div class="columna col-2"></div>
            </div>
            <div class="row">
                <div class="columna col-2"></div>
                <!--//*Columna sobre el tono-->
                <div class="columna col-8 textCorrido">
                    <div style="text-align: left;">
                        <span class="subOido">
                            Tono
                        </span>
                    </div>
                    <p class="textClasf">
                        Se mide a través de la frecuencia en hercios (Hz) determinando los <letter style="color: #fe7cff;">agudos</letter> arriba de
                        5kHz, <letter style="color: #7db7ff;">medios</letter> entre 250 Hz y 5kHz, y <letter style="color: #ff937d;">graves</letter>
                        debajo de 250 Hz. Sonidos entre 2-4kHz son más molestos debido al notorio cambio de nivel. La voz se encuentra en 250hz y 4kHz.</p>
                </div>
                <div class="columna col-2"></div>
            </div>
            <div class="row">
                <div class="columna col-2"></div>
                <!--//*Columna sobre el tiempo-->
                <div class="columna col-8 textCorrido" style="letter-spacing: -1">
                    <div style="text-align: left;">
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
        </div>
        <!--//*Gráfica de onda con sliders-->
        <div class="row" style="padding-top: 2.6vw;">
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
    <div class="row container-fluid divBody" style="padding-top: 10.5vw;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <h2 class="linea" id="tituloCinco">
                    <center>
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/efectSalud.svg"></span>
                            <span>Efectos</span>
                        </titulo>
                    </center>
                </h2>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//*Texto de la sección-->
        <div class="row" style="padding-top: 5.3vw;">
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
    <div class="row container-fluid divBody" style="padding-top: 5.3vw;">
        <div class="columna col-2"></div>
        <!--//*Botón de retrosceso en el carrusel-->
        <!--//funcion carruSalud() navega entre carrussel-->
        <!--//param 0 = retrocede-->
        <div class="columna col-1 flechaOido" onclick="carruSalud(0)">
            <center>
                <img src="assets/vector/flecha.svg" style="margin-top: 5.3vw">
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
                <img src="assets/vector/flecha.svg" style="transform: rotate(180deg); margin-top: 5.3vw;">
            </center>
        </div>
        <div class="columna col-2"></div>
    </div>
    <!--//* Texto del carrusel-->
    <div class="row container-fluid divBody" style="padding-top: 7.9vw;">
        <div class="columna col-2"></div>
        <!--//*Texto del carrusel-->
        <div class="columna col">
            <div id="subSalud" class="subOido">
                <center>
                    Discapacidad auditiva inducida por ruido
                </center>
            </div>
            <div id="textoCarruSalud" class="textCorrido" style="padding-top: 2.1vw;">
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
    <div class="row container-fluid divBody" style="padding-top: 10.6vw;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <h2 class="linea" id="tituloSeis">
                    <center>
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/comoMide.svg"></span>
                            <span>Medición</span>
                        </titulo>
                    </center>
                </h2>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//* Texto de la sección-->
        <div class="row" style="padding-top: 5.3vw;">
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
    <div class="row container-fluid divBody" style="padding-top: 5.3vw;">
        <div class="columna col-3"></div>
        <!--//* Botón de retrosceso en el carrusel-->
        <!--//funcion carruPasos(a,b) navega entre carrussel-->
        <!--//param a = 0 = retrocede-->
        <div class="columna col-1 flechaOido" onclick="carruPasos(0)" style="padding-top: 10.6vw;">
            <center>
                <img src="assets/vector/flecha.svg">
            </center>
        </div>
        <!--//* Texto del carrusel-->
        <div class="columna col">
            <center>
                <img id="gifPaso" class="gifPasos" src="assets/gif/pasos/Paso1.gif">
            </center>
        </div>
        <!--//* Botón de retrosceso en el carrusel-->
        <!--//funcion carruPasos navega entre carrussel-->
        <!--//param a = 1 = avanza-->
        <div class="columna col-1 flechaOido" onclick="carruPasos(1)" style="padding-top: 10.6vw;">
            <center>
                <img src="assets/vector/flecha.svg" style="transform: rotate(180deg);">
            </center>
        </div>
        <div class="columna col-3"></div>
    </div>
    <!--//* Posición del carrusel-->
    <div class="row container-fluid divBody" style="padding-top: 2.1vw;">
        <div class="columna col-4"></div>
        <!--//* Barra de posición-->
        <div class="columna col">
            <center>
                <div style="background-color: rgba(51,51,51,0.25); width: 28.2vw; height: 10px; border-radius: 5px; position: absolute; z-index: 1;"></div>
                <div id="barraCrece" class="barraCrece1" style="background-color: #FF7C7C; height: 10px; border-radius:5px; position: absolute; z-index: 2;"></div>
            </center>
            <!--//funcion carruPasos(a,b) pinta el avance entre los pasos de medición-->
            <!--//param a = 2 = indica el avance en la barra-->
            <!--//param b = pinta el avance en la barra-->
            <button onclick="carruPasos(2,1)" id="paso1" class="actButton" style="margin-left: -0.3vw;"></button>
            <button onclick="carruPasos(2,2)" id="paso2" class="inaButton" style="margin-left: 3.4vw;"></button>
            <button onclick="carruPasos(2,3)" id="paso3" class="inaButton" style="margin-left: 7.1vw;"></button>
            <button onclick="carruPasos(2,4)" id="paso4" class="inaButton" style="margin-left: 10.5vw;"></button>
            <button onclick="carruPasos(2,5)" id="paso5" class="inaButton" style="margin-left: 13.9vw;"></button>
            <button onclick="carruPasos(2,6)" id="paso6" class="inaButton" style="margin-left: 17.3vw;"></button>
            <button onclick="carruPasos(2,7)" id="paso7" class="inaButton" style="margin-left: 20.7vw;"></button>
            <button onclick="carruPasos(2,8)" id="paso8" class="inaButton" style="margin-left: 24.1vw;"></button>
            <button onclick="carruPasos(2,9)" id="paso9" class="inaButton" style="margin-left: 27.5vw;"></button>
        </div>
        <div class="columna col-4"></div>
    </div>
    <!--//* Texto del carrusel-->
    <div class="row container-fluid divBody" style="padding-top: 5.3vw;">
        <div class="columna col-3"></div>
        <!--//* Título del carrusel-->
        <div class="columna col">
            <div id="subMide" class="subOido">
                <center>
                    Paso 1: Croquis
                </center>
            </div>
            <div id="textoCarruMide" class="textCorrido" style="padding-top: 1.6vw; text-align: center;">
                Levantar un croquis de la zona de forma tal que se pueda conocer el terreno donde se realiza la medición,
                así como sus particularidades.
            </div>
        </div>
        <div class="columna col-3"></div>
    </div>
    <!--//* Texto final de la sección-->
    <div class="row container-fluid divBody" style="padding-top: 5.3vw;">
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
    <div class="row container-fluid divBody" style="padding-top: 10.6vw;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <h2 class="linea" id="tituloSiete">
                    <center>
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/areaEstudio.svg"></span>
                            <span>Estudio</span>
                        </titulo>
                    </center>
                </h2>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//* Texto de la sección-->
        <div class="row" style="padding-top: 5.3vw;">
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
        <div id="estudio" class="row" style="padding-top: 2.6vw;">
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
        <!--//* Línea de imagenes-->
        <div id="estudioCh">
            <div class="row" style="padding-top: 2.6vw;">
                <div class="columna col-2"></div>
                <!--//funcion areaEstudio(a) pinta la información del área-->
                <!--//param a indica que información pintar-->
                <div id="fArea1" class="columna col-2 imagenArea" onclick="areaEstudio(1)">
                    <center>
                        <div id="area1Ch" class="titleAreaAct"></div>
                    </center>
                </div>
                <di id="fArea2" class="columna col-2 imagenArea" onclick="areaEstudio(2)">
                    <center>
                        <div id="area2Ch" class="titleArea"></div>
                    </center>
                </di>
                <div id="fArea3" class="columna col-2 imagenArea" onclick="areaEstudio(3)">
                    <center>
                        <div id="area3Ch" class="titleArea"></div>
                    </center>
                </div>
                <div id="fArea4" class="columna col-2 imagenArea" onclick="areaEstudio(4)">
                    <center>
                        <div id="area4Ch" class="titleArea"></div>
                    </center>
                </div>
                <div class="columna col-2"></div>
            </div>
            <div class="row" style="padding-top: 2.6vw;">
                <div class="columna col-2"></div>
                <div id="fArea5" class="columna col-2 imagenArea" onclick="areaEstudio(5)">
                    <center>
                        <div id="area5Ch" class="titleArea"></div>
                    </center>
                </div>
                <div id="fArea6" class="columna col-2 imagenArea" onclick="areaEstudio(6)">
                    <center>
                        <div id="area6Ch" class="titleArea"></div>
                    </center>
                </div>
                <div id="fArea7" class="columna col-2 imagenArea" onclick="areaEstudio(7)">
                    <center>
                        <div id="area7Ch" class="titleArea"></div>
                    </center>
                </div>
                <div id="fArea8" class="columna col-2 imagenArea" onclick="areaEstudio(8)">
                    <center>
                        <div id="area8Ch" class="titleArea"></div>
                    </center>
                </div>
                <div class="columna col-2"></div>
            </div>
        </div>
        <!--//* Texto de la sección-->
        <div class="row" style="padding-top: 2.6vw;">
            <div class="columna col-2"></div>
            <div class="columna col">
                <div id="subArea" class="subOido">
                    Área de la salud
                </div>
                <div id="textoArea" class="textCorrido" style="padding-top: 1.6vw;">
                    Médicos, psiquiatras y psicólogos cuyas preocupaciones van más enfocadas al entendimiento de
                    las repercusiones que tiene el ruido en la salud fisiológica, psíquica y psiquiátrica del sujeto.
                    Los datos sobre ruido ayudan a estas disciplinas a identificar puntos de estrés para los órganos
                    y para la psique de las personas para, de esta forma, atenderlos de manera adecuada y en el mejor
                    de los casos, prevenir que los sujetos interaccionen con estos ruidos nocivos para la salud.
                </div>
            </div>
            <div class="columna col-2"></div>
        </div>
        <div class="row" style="padding-top: 5.3vw;">
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
        <div class="row" style="padding-top: 2.6vw;">
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
    <div class="row container-fluid divBody" style="padding-top: 10.6vw;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <h2 class="linea" id="tituloOcho">
                    <center>
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/artHubbub.svg"></span>
                            <span>Articulos</span>
                        </titulo>
                    </center>
                </h2>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//* Texto de la sección-->
        <div class="row" style="padding-top: 5.3vw;">
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
    <div class="row container-fluid divBody" style="padding-top: 10.6vw;">
        <!--//*Título de la sección-->
        <div class="row">
            <div class="columna col-1"></div>
            <div class="columna col subtitle">
                <h2 class="linea" id="tituloNueve">
                    <center>
                        <titulo>
                            <span><img class="imgSub" src="assets/vector/subtitles/artRef.svg"></span>
                            <span>Referencias</span>
                        </titulo>
                    </center>
                </h2>
            </div>
            <div class="columna col-1"></div>
        </div>
        <!--//* Texto de la sección-->
        <div class="row" style="padding-top: 5.3vw;">
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
                <div class="columna col"></div>
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
                    <!--//funcion nosotros(true) abre una ventana con la información de nosotros-->
                    <p class="linkFooter" onclick="nosotros(true);">Sobre nosotros</p>
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
    <template id="nosotrosSwalCh">
        <swal-html>
            <div class="row" style="width: 100%;">
                <!--//* Imagen y legales del Swal-->
                <div class="columna col-12">
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
            <div class="row" style="width: 100%;">
                <!--//* Texto del Swal-->
                <div class="columna col">
                    <div class="divDerNos" style="text-align: justify;">
                        <p class="subtitle" style="text-transform: none; text-align: center;">Sobre nosotros</p><br />
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