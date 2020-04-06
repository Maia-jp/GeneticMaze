//movement.js
// Convert each item of the gene into motion, check the walls, the winners and calculate fitness

//Global varibles
var totalWinner = 0;//Number of generation winners


//Move the population || 1 rigth, 2 left, 3 botton, 4 down
function movePopulation(gen, population) {
    var k = gen;
    for (i = 0; i < population.length; i++) {

        move = population[i].gen[k]; // current step

        population[i].checkWin(end.x, end.y) // checks if the current cell/unit is at the end

        if (population[i].winner == true && population[i].check == false) {
            population[i].check = true;
            totalWinner++;
            updateTotalWinners(totalWinner)
        }

        if (checkMove(population[i], k) && population[i].winner == false) {
            if (move == 1 && population[i].x + 1 >= 0 && population[i].x + 1 <= cols) {
                population[i].x = population[i].x + 1;
                population[i].steps++
            }
            if (move == 2 && population[i].x - 1 >= 0 && population[i].x - 1 <= cols) {
                population[i].x = population[i].x - 1;
                population[i].steps++
            }
            if (move == 3 && population[i].y + 1 >= 0 && population[i].y + 1 <= rows) {
                population[i].y = population[i].y + 1;
                population[i].steps++
            }
            if (move == 4 && population[i].y - 1 >= 0 && population[i].y - 1 <= rows) {
                population[i].y = population[i].y - 1;
                population[i].steps++
            }

        }
    }
}

//Calculate the fitness for each individual
function populationFitness(population) {
    for (i = 0; i < population.length; i++) {
        population[i].calculateFitness(end.x, end.y);
    }
}

//Calculates if the next move is possible, that is, there are no walls and it is within the grid boundary
function checkMove(u, i) {
    var nextStep = u.gen[i];
    var uX = u.x;
    var uY = u.y;
    if (nextStep == 1 && uX + 1 < cols && uX + 1 >= 0) {
        if (grid[uX + 1][uY].wall) {
            return false;
        } else {
            return true;
        }
    }
    if (nextStep == 2 && uX + 1 < cols && uX - 1 >= 0) {
        if (grid[uX - 1][uY].wall) {
            return false;
        } else {
            return true;
        }
    }
    if (nextStep == 3 && uY + 1 < rows && uY + 1 >= 0) {
        if (grid[uX][uY + 1].wall) {
            return false;
        } else {
            return true;
        }
    }
    if (nextStep == 4 && uY - 1 < rows && uY - 1 >= 0) {
        if (grid[uX][uY - 1].wall) {
            return false;
        } else {
            return true;
        }
    }
}


//The taxicab metric is also known as Manhattan distance 
function manhattanDist(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}