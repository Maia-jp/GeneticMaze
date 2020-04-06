//grid.js
//Draw the grid and add colors
// import p5.js and configuration
var lineSize = configuration.lineSize;
var p5 = new p5();

//A cell, contains a location (x, y) and a color. The grid is composed of all of them
function Cell(c,r){
    this.x = c;
    this.y = r;
    this.color = 255,255,255
    this.wall = false;

//Display the grid based on height, width and number of columns / rows
this.display = function(w,h){
    if(this.wall){
        p5.fill("#1e272e");
    }else{
        p5.fill(this.color);
    }
    stroke("#2d3436");
    strokeWeight(lineSize);
    p5.rect(this.x*w, this.y*h,w-1,h-1);
    

}

}