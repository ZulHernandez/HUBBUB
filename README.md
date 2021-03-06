# HUBBUB Alerta Ruido 馃憘

HUBBUB es un proyecto dedicado a la visualizaci贸n y promoci贸n sobre lo que el ruido es dentro de la Ciduad de M茅xico y su 谩rea metropolitana.
El objetivo es integrar dentro de un sitio web conceptos sobre que es el rido, c贸mo se mide, c贸mo se estudio y dem谩s cosas para que, finalmente, puedan llegar a la segunda p谩gina donde se ofrecen visualiadores de datos que permiten ver los datos capturados con la aplicaci贸n [HUBBUB App](https://play.google.com/store/apps/details?id=com.UAM.Noise&hl=es_MX).
Es una iniciativa de la Mtra. Ver贸nica Arroyo Pedroza de la Universidad Aut贸noma Metropolitana, CyAD Azcapotzalco, a partir del trabajo conjunto con el Laboratorio de An谩lisis y Dise帽o Ac煤stico (LADAc) de la misma Universidad. Dicho laboratorio desarrolla el primer mapa de ruido de la Ciudad de M茅xico por medio de equipamiento de medici贸n especializado, siendo su informaci贸n y uso para fines acad茅micos y de divulgaci贸n cient铆fica.
Siendo la ciudadan铆a la principal afectada por el tema se planea, dise帽a y desarrolla una aplicaci贸n m贸vil que promueve la participaci贸n ciudadana en el tema de la contaminaci贸n ambiental por ruido, con el fin de mapear las 谩reas con m谩s molestias y determinar las fuentes m谩s comunes que generan dicha molestia.
El objetivo de la aplicaci贸n HUBBUB庐 Alerta ruido, es concientizar y promover un medio ambiente m谩s respetuoso en zonas urbanas, monitoreando por medio de la colaboraci贸n ciudadana las zonas ca贸ticas contaminadas por ruido.
Se plantea el an谩lisis integral del ruido ambiental en la ciudad a partir de sistemas de colaboraci贸n abierta en las que el usuario comparta sus experiencia de molestia por ruido y consolide una base de datos.
Los datos recabados por este monitoreo se emplean para desarrollar mapas de las zonas de mayor impacto por ruido que se visualizan tanto en la aplicaci贸n como en una p谩gina web en desarrollo.
Lograr conciencia ciudadana sobre el tema del ruido y con ello impacto en las autoridades para generar legislaci贸n al respecto.
Entendemos que el problema de ruido no se detendr谩 por el uso de una aplicaci贸n, pero s铆 con los productos que esta genere. A trav茅s de Hubbub podemos intermediar a que la ciudadan铆a canalice sus alertas y logremos un mapeo ciudadano por molestia de ruido que ayude a promover, ante las autoridades competentes, medidas legislativas que promuevan la prevenci贸n de este contaminante que tanto afecta la salud.
En Latinoam茅rica M茅xico es uno de los pa铆ses que cuenta con los peores niveles de participaci贸n ciudadana, por lo mismo no cuenta con una base social organizada ni una conciencia social s贸lida, seg煤n comenta Mauricio Merino Huerta investigador del CIDE y participante de la organizaci贸n civil Nosotrxs, 鈥淟a conciencia significa estar advertidos del lugar en que vivimos鈥? cita.
Esta advertencia estimula al equipo HUBBUB para seguir promoviendo nuestra aplicaci贸n. A la fecha somos ya un gran equipo de especialistas en el tema del ruido, desarrolladores, programadores y dise帽adores que trabajamos en conjunto para actualizar constantemente nuestra aplicaci贸n y cada vez brindar m谩s elementos a la ciudadan铆a para entender el gran problema que el RUIDO significa.

## Construido con 馃洜锔?

Para el proyecto fueron utilizadas las siguientes tecnolog铆as:

- [馃崺 sweetAlert 2](https://sweetalert2.github.io/) - Libreria para alertas y swals de la p谩gina
- [馃帹 p5](https://p5js.org/es/) - Librer铆a para animaciones y algunos visualizadores
- [馃搳 charts](https://www.chartjs.org/docs/latest/) - Librer铆a para gr谩ficas
- [馃幉 sketchfab](https://sketchfab.com/developers) - API para visualizar modelos 3D
- [馃幍 tone](https://tonejs.github.io/) - Librer铆a para generar sonidos
- [馃枌 bootstrap](https://getbootstrap.com/) - Librer铆a para generar elementos de interfaz
- [馃柤 dom-to-image](https://www.npmjs.com/package/dom-to-image) - Librer铆a para generar imagenes de elementos DOM

### Para ver mejor la documentaci贸n

Se recomiendo descargar la extensi贸n Better Comentspara poder visualizar los comentarios en el c贸digo de mejor manera.
[better-comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
Y configurar el json de configuraci贸n de la siguiente manera:

```json
"workbench.iconTheme": "vscode-icons",
	"workbench.productIconTheme": "el-vsc-v1-icons",
	"better-comments.highlightPlainText": true,
	"better-comments.tags": [

		{
			"tag": "!",
			"color": "white",
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "#FF2D0040",
			"bold": false,
			"italic": false
		},
		{
			"tag": "?",
			"color": "white",
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "#3498DB40",
			"bold": false,
			"italic": false
		},
		{
			"tag": "//",
			"color": "white",
			"strikethrough": true,
			"underline": false,
			"backgroundColor": "#47474740",
			"bold": false,
			"italic": false
		},
		{
			"tag": "todo",
			"color": "white",
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "#FF8C0040",
			"bold": false,
			"italic": false
		},
		{
			"tag": "*",
			"color": "white",
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "#98C37940",
			"bold": false,
			"italic": false
		},
		{
			"tag": "param",
			"color": "white",
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "#0176ff40",
			"bold": false,
			"italic": false
		},
		{
			"tag": "main",
			"color": "white",
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "#EF5DA840",
			"bold": false,
			"italic": false
		},
		{
			"tag": "funcion",
			"color": "white",
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "#9f7dff40",
			"bold": false,
			"italic": false
		},
		{
			"tag": "import",
			"color": "white",
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "#f4767740",
			"bold": false,
			"italic": false
		}
	]
```

## Autores 鉁掞笍

Este proyecto fue desarrollador por:

- **Ver贸nica Arroyo Pedroza** - _Directora del proyecto_ - [LinkedIn](https://www.linkedin.com/in/ver%C3%B3nica-arroyo-b253bb21/?originalSubdomain=mx)
- **Dulce Rosario Ponce Patr贸n** - _Codirectora del proyecto_ - [LinkedIn](https://www.linkedin.com/in/dulce-ponce-patr%C3%B3n-10984685/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=mx)
- **Hector Reyes Aguilar** - _Back-End_
- **Sa煤l Ulises Hern谩ndez Cruz** - _Front-End_