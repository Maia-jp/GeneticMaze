//unity.js
//Take care of each unit, this file is like the individual. Here it has all its "features", methods and functions
// import settings
var maxFit = configuration.maxFitnessDist; //the maximum fitness is calculated is the perfect distance between the beginning and the end
var maxstep = configuration.lifeSpan;
var radius = configuration.circleradius;//Unit radius

function Unit(x, y) {
    this.x = x;
    this.y = y;
    this.generation = 0;
    this.gen = [];
    this.fitness = 0;
    this.prob = 0 // probability of been chosen as a partener
    this.steps = 0;
    this.winner = false;
    this.check = false;
    this.color = "red";

    // create a new gene sequency
    this.newGene = function(size) {
        for (i = 0; i < size; i++) {
            var r = Math.floor(p5.random(0, 5));
            this.gen.push(r);
        }
    }

    this.show = function(w, h) {
        p5.fill(this.color);
        p5.circle(this.x * w + w / 2, this.y * h + h / 2, radius);
    }

    this.calculateFitness = function(xgoal, ygoal) {
        if (xgoal == this.x && ygoal == this.y) {
            fit = pow(maxFit, 2);
        } else {
            fit = pow(maxFit - manhattanDist(this.x, this.y, xgoal, ygoal), 2);
        }
        this.fitness = Math.floor(fit);
    }

    this.checkWin = function(xgoal, ygoal) {
        if (this.x == xgoal && this.y == ygoal) {
            this.winner = true;
            this.color = "green";
        }
    }

}

//The taxicab metric is also known as Manhattan distance 
function manhattanDist(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}