//Config.js
//This file contains all program settings
//Please, for all percetages use values beetwen 0 and 1
var configuration = {
    'author' :'Joao P Maia',
    'version' :'v1,April 2020',
    //GRID
    'frameRate': 60,//How many frames per second will the simulation run | 0 to 60
    'rowsNumber': 40, // Define the number of columns and rows || Sefault: 40x40
    'colsNumber': 40,//Same as above
    'lineSize': 0.1, //Size of the line dividing the cells of the grid || Default is 0.3
    'randomWallRatio': 0.20, // When selected, the "random" button defines the percentage of cell that will be transformed into walls || Deafult: 0.20

    //POPULATION
    'circleradius': 10, //Unit size | default 10
    'populationSize': 90, //Population Size || Default: 90

    // GENETICS //
    'lifeSpan': 360, // Gene size, number of instructions that each Unity/Organism will perform || Default: 360 || To modify values, use the formula: (rows * cols) * 9/40 = lifespan
    'maxFitnessDist': manhattanDist(0, 0, 39, 39),//Definition for the Fitness function, look at the documentation
    'mutationRate': 0.1, //Mutation rate at each crossover || Default: 0.1

    //MUTATIONS
    'mutationType': 0, //Defines the type of mutation to be applied | default 0
    'mutationSize': 0.20 //Percentage of the gene that is mutated during the mutation || Default .20
}

//Calculates the distance
function manhattanDist(x1,y1,x2,y2){
    return Math.abs(x1-x2) + Math.abs(y1-y2);
}