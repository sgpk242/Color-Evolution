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
var generation = 1;

ctx.fillStyle = "black";
ctx.font = "18px Arial";
ctx.fillText("Generation " + generation, 450, 260);

function compete() {
    generation += 1;

    canvas.getContext("2d").clearRect(420, 230, 200, 40);

    // Selection
    var members = selection();
    
    // Crossover
    replacements = crossover([objArray[members[0]], objArray[members[1]], objArray[members[2]], objArray[members[3]], objArray[members[4]], objArray[members[5]]]);

    // Mutation
    for (var i = 0; i < 3; i++) {
        prob = Math.random();
        if (prob > 0.6 && replacements[i].r/prob-5 < 255 && replacements[i].b/prob-5 < 255 && replacements[i].g/prob-5 < 255) {
            replacements[i].r = Math.floor(replacements[i].r/prob) - (Math.floor(Math.random() * 5));
            replacements[i].g = Math.floor(replacements[i].g/prob) - (Math.floor(Math.random() * 5));
            replacements[i].b = Math.floor(replacements[i].b/prob) - (Math.floor(Math.random() * 5));
        } else if (prob > 0.6) {
            replacements[i].r = Math.floor(replacements[i].r*prob) + (Math.floor(Math.random() * 5));
            replacements[i].g = Math.floor(replacements[i].g*prob) + (Math.floor(Math.random() * 5));
            replacements[i].b = Math.floor(replacements[i].b*prob) + (Math.floor(Math.random() * 5));
        }
    }
    
    // Replacement
    for (var z = 0; z < 3; z++) {
        replacements[z].x = objArray[members[z+6]].x;
        replacements[z].y = objArray[members[z+6]].y;
    }
    objArray[members[6]] = replacements[0];
    objArray[members[7]] = replacements[1];
    objArray[members[8]] = replacements[2];
    
    // Redraw
    for (var z = 0; z < 3; z++) {
        canvas.getContext("2d").fillStyle = "rgb(" + objArray[members[z+6]].r + "," + objArray[members[z+6]].g + "," + objArray[members[z+6]].b +")";
        canvas.getContext("2d").fillRect(objArray[members[z+6]].x, objArray[members[z+6]].y, 30, 30);
        var txt = objArray[members[z+6]].fitness.toFixed(2);
        canvas.getContext("2d").fillStyle = "black";
        canvas.getContext("2d").font = "9px Arial";
        canvas.getContext("2d").fillText(txt, objArray[members[z+6]].x+objArray[members[z+6]].width/2-canvas.getContext("2d").measureText(txt).width/2, objArray[members[z+6]].y+objArray[members[z+6]].height/2); 
    }
    
    // Change generation title
    canvas.getContext("2d").fillStyle = "black";
    canvas.getContext("2d").font = "18px Arial";
    var txt = "Generation " + generation;
    canvas.getContext("2d").fillText(txt, 500-canvas.getContext("2d").measureText(txt).width/2, 260);
}

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
