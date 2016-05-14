// Set up canvas
var canvas = document.getElementById("genetic");
var ctx = canvas.getContext("2d");

// Create target color (most fit)
tr = Math.floor(Math.random() * 256);
tg = Math.floor(Math.random() * 256);
tb = Math.floor(Math.random() * 256);
var target = new component(120, 120, tr, tg, tb, 440, 10, "20px Arial");
ctx.font = "18px Arial";
ctx.fillStyle = "black";
ctx.fillText("Target Color",450,150);

// Initialize population with 100 randomly colored boxes
var objArray = [];
var x = 10;
var y = 10;
for (var i = 1; i < 101; i++) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var obj = new component(30, 30, r, g, b, x, y, "9px Arial");
    objArray.push(obj);
    
    if (i % 10 == 0){ x = 10; y += 40; } else { x += 40; }
}

// Genetic algorithm
ctx.fillStyle = "black";
ctx.font = "18px Arial";
var generation = 1;
ctx.fillText("Generation " + generation, 450, 260);



function crossover(arr) {
    var replacements = new Array();
    
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            RGB = Math.floor(Math.random() * 5);
            if (RGB === 1) {
                replacements[i] = new component(30, 30, arr[i*2].r, arr[i*2+1].g, arr[i*2].b, 0, 0, "9px Arial");
            } else if (RGB === 2) {
                replacements[i] = new component(30, 30, arr[i*2+1].r, arr[i*2].g, arr[i*2+1].b, 0, 0, "9px Arial");
            } else if (RGB === 3) {
                replacements[i] = new component(30, 30, arr[i*2].r, arr[i*2].g, arr[i*2+1].b, 0, 0, "9px Arial");
            } else {
                replacements[i] = new component(30, 30, arr[i*2+1].r, arr[i*2+1].g, arr[i*2].b, 0, 0, "9px Arial");
            }
        }
    }
    
    return replacements;
}
 
function compare(a,b) {
  if (a.fitness > b.fitness)
    return -1;
  else if (a.fitness < b.fitness)
    return 1;
  else 
    return 0;
}

function start() {
    var interv = setInterval(function(){
                     compete();
                 }, 30);
}

document.getElementById('start').addEventListener('click', function () {
    start();
}, false);
