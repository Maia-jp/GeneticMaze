//domManipulation.js
//This file manipulates the DOM, updates the winners, the best score, etc.

//Best solution found, when none is found the value of the generation is 'none'. The best solution is found by the smallest number of steps among the winners
var bSolution = { 'steps': configuration.lifeSpan, 'generation': 'none' }

//Displays population, gene and mutation information found in the config.js file
function updatePopulation(){
    document.getElementById("size").innerText = "Size: " + configuration.populationSize;
    document.getElementById("lifespan").innerText = "Lifespan: " + configuration.lifeSpan;
    document.getElementById("mutationRate").innerText = "Mutation Rate: " + configuration.mutationRate;
}

//Receive the generation and show it on the screen above the canvas
function updateGeneration(generation){
    document.getElementById("generation").innerText = "Generation: " + generation;
}
//Receive the best score and show in the side menu
function updateScore(population){
    bScore = bestScore(population)
    document.getElementById("bestScore").innerText = "Best Score: " + bScore;
}
//Receive the population find the winners and show in the side menu
function updateWinner(population,end,generation){
    var winners = 0
    for(k=0;k<population.length;k++){
        if(population[k].x == end.x && population[k].y == end.y){
            winners++
        }
    }
    document.getElementById("winners").innerText = "Last Generation winners: " + winners;
    chartAddWinners(winners)
}
//Receives the winners of the generation
function updateTotalWinners(totalWinners){
    document.getElementById("totalWinners").innerText = "Total Winners: " + totalWinners;
}

//Update the best solution
function updateBestSolution(population){
    bestSolution(population)
    document.getElementById("bestSolution").innerText = "Best solution found in: Generation " + bSolution.generation
}




//Calculates the best score
function bestScore(population){
    var best = 0;
    for(k=0;k<population.length;k++){
        if(population[k].fitness>best){
            best = population[k].fitness;
        }
    }
    return Math.sqrt(best);
}
// Calculates the Average Score
function averageScore(population){
    var scores = 0;
    for(k=0;k<population.length;k++){
        scores = scores + Math.sqrt(population[k].fitness)
    }
    return (scores/population.length).toFixed(2);
}
// Calculates the best Solution | Best solution is the cell that took the least amount of steps among the winners|Calculates the average of steps
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
    return bSolution
}
