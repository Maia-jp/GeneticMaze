//genetic.js
//Takes care of all genetics: crossover and mutations
// import settings
var populationSize = configuration.populationSize;
var mutationRate = configuration.mutationRate;
var life = configuration.lifeSpan;


//crossover
function crossover(pop, generetion,bsSolution) {

    var newPopulation = [];

    //Normalize the distances/fitness and calculate the probability of each organism being chosen as a partner for the next generation
    var sum = 0;

    for (i = 0; i < pop.length; i++) {
        sum += pop[i].fitness;
    }

    for (i = 0; i < pop.length; i++) {
        pop[i].prob = (pop[i].fitness / sum); // probability of each organism being chosen, 0 to 1
    }


    // Crossover: gather half the genes of each organism chosen as a partner
    while (newPopulation.length <= populationSize) {
        var partnerA = findPartner(pop);
        var partnerB = findPartner(pop);


        var child = new Unit(0, 0);

        var cut = Math.floor(random(1, life));

        for (i = 0; i < cut; i++) {
            child.gen[i] = partnerA[i];
        }
        for (i = cut; i < life; i++) {
            child.gen[i] = partnerB[i];
        }

        child.generation = generetion + 1;


        //Calculates the probability of each child mutating, if it occurs, the entire gene is modified
        var r = Math.floor(p5.random(0, 101))
        if (r < mutationRate * 100) {
            child.gen = shuffleMutation(child.gen);    
            child.color = "purple";
        }


        newPopulation.push(child);

    }
    //Transfer the best solution to the population
    if (bsSolution.generation > 0) {
        var bestChild = new Unit(0, 0);
        bestChild.color = ' yellow';
        bestChild.gen = bsSolution.gen;
        bestChild.generation = bsSolution.generation
        newPopulation.push(bestChild);
    }

    return newPopulation;
}



//Function to choose the partner based on the probability assigned at the start of the crossover
function findPartner(list) {
    var index = 0;
    var r = Math.random();

    while (r > 0) {
        r = r - list[index].prob;
        index++;
    }
    index--;
    return list[index].gen;
}



//The taxicab metric is also known as Manhattan distance 
function manhattanDist(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}



//Some mutation types

//shuffleMutation
function shuffleMutation(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
//RandomMutation (not used)
function randomMutation(array){
    for (i = 0; i < array.length; i++) {
        array[i] = Math.floor(p5.random(0, 5));
    }
    return child
}

// bit flip mutation (not used)
function bitflipMutation(array){
    for(k=0;k<=configuration.mutationSize*100;k++){
        rdngen = Math.floor(Math.random(0,array.length))
        array[rdngen] = Math.floor(Math.random(0,5))
    }
    return array
}