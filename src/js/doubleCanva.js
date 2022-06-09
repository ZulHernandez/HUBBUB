let w = window.innerWidth;
let h = window.innerHeight;
let oido, cOE, cOM, cOI, colorMouse, MontserratM;
let yPos = 0;
let oidoE = "#7ce0ff";
let oidoM = "#92ff9b";
let oidoI = "#d0e546";
var posOido = 0;

const s = (p) => {
	var x = 100;
	var y = 100;
	p.setup = function () {
		p.createCanvas(400, 200);
	};

	p.draw = function () {
		//p.background(0);
		p.fill(255);
		p.rect(x, y, 50, 50);
	};
}; 
new p5(s, "canvaOido");

new p5();

function setup() {
    createCanvas(100, 100);
    parent("canvaOido");
}

function draw() {
    background(255, 0, 0);
}

new p5();

function setup() {
    createCanvas(100, 100);
}

function draw() {
    background(0, 255, 0);
}