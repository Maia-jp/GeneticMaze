// Author: Joao P Maia

//main.js
//Backbone of the entire program, takes care of drawings through p5.js, moves the population, takes care of the main functions
//Global Variables and import settings
var cols = configuration.colsNumber; // number of rows
var rows = configuration.rowsNumber; // number of cols
var end, start; // end and start points
var w, h; // width and height for each cell
var life = configuration.lifeSpan; // life is = to the size of the gene, each iteneration is 1 gene
var populationSize = configuration.populationSize; // size of the population
var currentGen = 0; // define de current gene of the entire population
var generation = 1; // current generation
var walls = 0; // number of walls
var bSolution = { 'steps': configuration.lifeSpan, 'generation': 'none' } //Starts an empty solution that in the future will be replaced by a real solution (the best solution)


//Lists
var grid = [];
var population = [];

//Game State
var start_game = false;


//
// Main Code
//


// P5 functions 
function setup() {
    var canvas = createCanvas(920, 920);
    canvas.parent("teste")

    //Height and width
    w = Math.floor(920 / cols);
    h = Math.floor(920 / rows);

    // Make a 2D array
    for (i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }

    //Make the cells of the grid
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j);
        }

    }

    // make population
    for (i = 0; i < populationSize; i++) {
        population.push(new Unit(0, 0))

    }

    // make the population genes
    for (k = 0; k < population.length; k++) {
        population[k].newGene(life);
        population[k].generation = generation;
    }

    //defines the beginning and end as the two ends of the grid and give then colors
    start = grid[0][0];
    grid[0][0].color = "#4f98ca"

    end = grid[cols - 1][rows - 1];
    grid[cols - 1][rows - 1].color = "#4f98ca"



    updatePopulation()// update DOM

}

function draw() {
    frameRate(configuration.frameRate);//How many frames per second will the simulation run | 0 to 60
    displayGrid(); // Draw the grid
    if (start_game) {

        //moves the entire population to the current gene
        if (currentGen <= life) {
            movePopulation(currentGen, population);
            currentGen++;
        } else {
            populationFitness(population); // calculate the fitness of each individual
            // update DOM
            updateScore(population) 
            updateWinner(population,end);
            updateBestSolution(population);
            // update the Chart
            chartAddAverage(generation, averageScore(population));

            population = crossover(population, generation, bSolution); // Crossover and start a new population - New generation is born
            generation++;
            updateGeneration(generation) // update DOM
            currentGen = 0;
        }
        //shows de population
        populationShow(w, h);

    }


}

//find the best solution based on number of steps
function bestSolution(population){
    var average = 0;
    var total = 0;
    for(k=0;k<population.length;k++){
        if(population[k].winner == true){
            if(population[k].steps<bSolution.steps){
                bSolution = population[k];
            }
            average += population[k].steps
            total++
        }
    }
    chartAddSteps((average/total).toFixed(2))
}
//
// End of the main
//


//
// Displays Functions
// 

// Display the grid
function displayGrid() {
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            grid[i][j].display(w, h, 255);
        }
    }
}

// Display each Unit
function populationShow() {
    for (i = 0; i < population.length; i++) {
        population[i].show(w, h);
    }
}

//
// Walls Functions
//

// Place the walls
function mouseClicked() {
    var a = Math.floor(mouseX / w);
    var b = Math.floor(mouseY / h);
    if (grid[a][b].wall == true) {
        grid[a][b].wall = false;
    } else {
        if (grid[a][b] != start && grid[a][b] != end) {
            grid[a][b].wall = true;

        }
    }
    return false;
}

// place walls
function mouseDragged() {
    a = Math.floor(mouseX / w);
    b = Math.floor(mouseY / h);
    if (grid[a][b] != start && grid[a][b] != end) {
        grid[a][b].wall = true;
    }
    return false;
}

//
//Butons Functions
//

function btnStart() {
    start_game = true;
    document.getElementById("btnStart").disabled = true;
    updateDom(0,0,0,0)
}

function btnRandom() {
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            r = Math.floor(random(0, 100));
            if (r <configuration.randomWallRatio*100) {
                grid[i][j].wall = true;
            }
        }
    }
    grid[start.x][start.y].wall = false;
    grid[end.x][end.y].wall = false;
}

function btnExport(){
    csvExport(generation);
}

function icnModal(){
    $('#modalInfo').modal('show');
}
