function component(width, height, r, g, b, x, y, font) {
    this.fitness = Math.sqrt(Math.pow(r-tr,2) + Math.pow(g-tg,2) + Math.pow(b-tb,2));
    this.r = r;
    this.g = g;
    this.b = b;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    context = ctx;
    context.fillStyle = "rgb(" + r + "," + g + "," + b +")";
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = "black";
    context.font = font;
    var txt = this.fitness.toFixed(2);
    context.fillText(txt, this.x+this.width/2-context.measureText(txt).width/2, this.y+this.height/2); 
}
