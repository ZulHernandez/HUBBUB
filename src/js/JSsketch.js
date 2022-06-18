//main Variables
//*  Versión del visualizador
const version = "1.10.1";
//*  UID del modelo
const uid = "de7a7fbca06140319776930b19a0ddbf";
//*  Lugar dentro del HTML donde se va a insertar el sketchfab
const modelOver = document.getElementById("modelPark");
//* Seteamos el modelo
const client = new window.Sketchfab(version, modelOver);
//* Objeto de la clase Sketchfab
let api;

//* Función que se ejecuta cuando el modelo no se puede cargar
const error = (err) => console.error("Sketchfab API error:", err);

//* Variables para el audio 1
var audioSample1;
var audioPlaying1;

//funcion Reproduce o pausa el audio 1
//param doPause: boolean
//param doPlay: boolean
function toggleAudio1(doPause, doPlay) {
	if (!audioSample1) return;
	if (doPause) audioSample1.pause();
	else if (doPlay) audioSample1.play();
}

//* Variables para el audio 2
var audioSample2;
var audioPlaying2;

//funcion Reproduce o pausa el audio 2
//param doPause: boolean
//param doPlay: boolean
function toggleAudio2(doPause, doPlay) {
	if (!audioSample2) return;
	if (doPause) audioSample2.pause();
	else if (doPlay) audioSample2.play();
}

//funcion Inicia el modelo
function skfbStart() {
	//* Empezamos a cargar el modelo
	const success = (apiClient) => {
		api = apiClient;
		//* Reproducimos el modelo
		api.start();
		//* Escuchamos si el modelo esta listo
		api.addEventListener("viewerready", () => {
			window.console.log("viewer ready");
			//* Escuchamos si el se clicka dentro de las anotaciones del modelo
			api.addEventListener("annotationSelect", function (index) {
				window.console.log("Selected annotation", index);
				console.log("select " + index);
				//* Si se clicka afuera se pausan los audios
				if (index == -1) {
					toggleAudio1(true, false);
					toggleAudio2(true, false);
				//* Si se clicka en la anotacion 1 se reproduce el audio 1
				} else if (index == 1) {
					toggleAudio1(true, false);
					toggleAudio2(false, true);
				//* Si se clicka en la anotacion 2 se reproduce el audio 2
				} else {
					toggleAudio1(false, true);
					toggleAudio2(true, false);
				}
			});
		});
	};

	//* Seteamos opociones del modelo (obtenidos de la API)
	client.init(uid, {
		annotation: 0, // Usage: Setting to [1 – 100] will automatically load that annotation when the viewer starts.
		annotations_visible: 1, // Usage: Setting to 0 will hide annotations by default.
		autospin: 0, // Usage: Setting to any other number will cause the model to automatically spin around the z-axis after loading.
		autostart: 1, // Usage: Setting to 1 will make the model load immediately once the page is ready, rather than waiting for a user to click the Play button.
		cardboard: 0, // Usage: Start the viewer in stereoscopic VR Mode built for Google Cardboard and similar devices.
		camera: 0, // Usage: Setting to 0 will skip the initial animation that occurs when a model is loaded, and immediately show the model in its default position.
		preload: 1, // Usage: Setting to 1 will force all resources (textures) to download before the scene is displayed.
		ui_stop: 0, // Usage: Setting to 0 will hide the "Disable Viewer" button in the top right so that users cannot stop the 3D render once it is started.
		transparent: 1, // Usage: Setting to 1 will make the model's background transparent
		ui_animations: 0, // Usage: Setting to 0 will hide the animation menu and timeline.
		ui_annotations: 0, // Usage: Setting to 0 will hide the Annotation menu.
		ui_controls: 1, // Usage: Setting to 0 will hide all the viewer controls at the bottom of the viewer (Help, Settings, Inspector, VR, Fullscreen, Annotations, and Animations).
		ui_fullscreen: 0, // Usage: Setting to 0 will hide the Fullscreen button.
		ui_general_controls: 0, // Usage: Setting to 0 will hide main control buttons in the bottom right of the viewer (Help, Settings, Inspector, VR, Fullscreen).
		ui_help: 0, // Usage: Setting to 0 will hide the Help button.
		ui_hint: 1, // Usage: Setting to 0 will always hide the viewer hint animation ("click & hold to rotate"). Setting to 1 will show the hint the first time per browser session (using a cookie). Setting to 2 will always show the hint.
		ui_infos: 0, // Usage: Setting to 0 will hide the model info bar at the top of the viewer.
		ui_inspector: 0, // Usage: Setting to 0 will hide the inspector button.
		ui_settings: 0, // Usage: Setting to 0 will hide the Settings button.
		ui_vr: 0, // Usage: Setting to 0 will hide the View in VR button.
		ui_ar: 0, // Usage: Setting to 0 will hide the View in AR button.
		ui_watermark_link: 0, // Usage: Setting to 0 remove the link from the Sketchfab logo watermark.
		ui_color: "transparent", // Usage: Setting to a hexidecimal color code (without the #) or a HTML color name will change the color of the viewer loading bar.
		ui_watermark: 0, // Usage: Setting to 0 remove the Sketchfab logo watermark.

		success: success,
		error: error,
		version: version,
	});
}

//funcion Determian si el modelo esta siento hovereado por el mouse y determina la reproducción de cada audio
//param a = mouse over o mouse out
function playSound(a) {
	//* Recogemos los audios del HTML y controlamos su reproducción
	audioSample1 = document.getElementById("audio1");
	audioSample1.addEventListener("playing", function (event) {
		audioPlaying1 = true;
	});
	audioSample1.addEventListener("pause", function (event) {
		audioPlaying1 = false;
	});

	audioSample2 = document.getElementById("audio2");
	audioSample2.addEventListener("playing", function (event) {
		audioPlaying2 = true;
	});
	audioSample2.addEventListener("pause", function (event) {
		audioPlaying2 = false;
	});

	//* Evaluamos si el mouse esta sobre el modelo
	if (a == 1) {
		api.start();
	}

	//* Evaluamos si el mouse esta fuera del modelo
	if (a == 0) {
		toggleAudio1(true, false);
		toggleAudio2(true, false);
	}
}
