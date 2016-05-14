function compete(arr) {
    generation += 1;
    // clear screen
    canvas.getContext("2d").clearRect(420, 230, 200, 40);
    // Selection
    var members = selection(arr);
    // Crossover
    replacements = crossover([arr[members[0]], arr[members[1]], arr[members[2]], arr[members[3]], arr[members[4]], arr[members[5]]]);

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
        replacements[z].x = arr[members[z+6]].x;
        replacements[z].y = arr[members[z+6]].y;
    }
    arr[members[6]] = replacements[0];
    arr[members[7]] = replacements[1];
    arr[members[8]] = replacements[2];
    
    // Redraw
    for (var z = 0; z < 3; z++) {
        canvas.getContext("2d").fillStyle = "rgb(" + arr[members[z+6]].r + "," + arr[members[z+6]].g + "," + arr[members[z+6]].b +")";
        canvas.getContext("2d").fillRect(arr[members[z+6]].x, arr[members[z+6]].y, 30, 30);
        var txt = arr[members[z+6]].fitness.toFixed(2);
        canvas.getContext("2d").fillStyle = "black";
        canvas.getContext("2d").font = "9px Arial";
        canvas.getContext("2d").fillText(txt, arr[members[z+6]].x+arr[members[z+6]].width/2-canvas.getContext("2d").measureText(txt).width/2, arr[members[z+6]].y+arr[members[z+6]].height/2); 
    }
    
    // Change generation title
    canvas.getContext("2d").fillStyle = "black";
    canvas.getContext("2d").font = "18px Arial";
    var txt = "Generation " + generation;
    canvas.getContext("2d").fillText(txt, 500-canvas.getContext("2d").measureText(txt).width/2, 260);
}
