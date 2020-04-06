//graphic.js
//Responsible for plotting the data on the chart as well as exporting the data

var ctx = document.getElementById('myChart').getContext('2d');

//Create the chart
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        
        labels: [],
        datasets: [{
            label: 'Winners',
            borderColor:'#FFBE57',
            data: [],
            borderWidth: 2,
            fill: false
        },
        {
            label: 'Average fitness',
            borderColor:'#A53DFF',
            data: [],
            borderWidth: 2,
            fill: false
        },
        {
            label: 'Average number of steps',
            borderColor:'#22B357',
            data: [],
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Generations'
                }}],

            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//Add fitness average to the graph
function chartAddAverage(gen,num){
    myChart.data.labels.push(gen);
    myChart.data.datasets[1].data.push(num)
    myChart.update();
}
//Add winner average to the graph
function chartAddWinners(num){
    myChart.data.datasets[0].data.push(num)
    myChart.update();
}
//Add steps average to the graph (winners only)
function chartAddSteps(num){
    myChart.data.datasets[2].data.push(num)
    myChart.update();
}

//Exports all chart data in .csv format
function csvExport(generations){
     
    var csv = 'sep=,\nGeneration,Winners ,Average Fitness, Average Steps\n';
 
    for(k=0;k<generations-1;k++){
        csv = csv +  k + ","
        csv = csv +  myChart.data.datasets[0].data[k] + ","
        csv = csv +  myChart.data.datasets[1].data[k] + ","
        csv = csv +  myChart.data.datasets[2].data[k] + "\n"
    };
  
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'geneticMaze.csv';
    hiddenElement.click()};