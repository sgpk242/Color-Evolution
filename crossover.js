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
