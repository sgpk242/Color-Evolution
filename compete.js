function compete() {
    generation += 1;
    // clear screen
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
