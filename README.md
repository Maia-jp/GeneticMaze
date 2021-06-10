# Genetic Maze

Can machines learn? if so, how much processing power is needed? Seeking to demonstrate the answers to these questions, I developed the Genetic Maze project. A program that uses the concept of *Genetic Algorithm* to make a machine learn to perform a specific task: *Transpose a maze*

## Getting Started

The instructions here will make the project run on your machine. For more code and development information check the documentation folders as well as the *\detailInfo.html* file

### Prerequisites

 - An average computer
 - A browser
  

### Web Implementation
You can find a online implementation [here]([http://www.grad.inf.puc-rio.br/~c1920354/GeneticMaze/main.html]) 

### Installing

The program was made entirely using pure javascript (including some graphic libraries listed below) so to run it just download the entire folder and open the file *'main.html'*
By default this file will open a page in your default browser, from there you can generate a maze (or create your own) for the cells to try to transpose.
I recommend using Google Chrome for the app.

### Changing some parameters
If you want to be able to change some features of the program, such as the cell learning rate, mutation ratio and a number of other things.
All settings are found in the *\ scripts \ config.js file*

This is an example of a parameter:

    'lineSize': 0.3,  //Size of the line dividing the cells of the grid || Default is 0.3
To change it, just change the value after the colon, in this case it would be 0.3
All parameters have their Default value and a description

### Contribuing

Contribuitons are very wellcome. I believe this project is a good opportunity to learn how genetic algorithms work. Modifying and adding new features is always a process of learning.
If you are interested in contributing please check open an Issue/PR


## Libraries used in this project

* [P5.js]([https://p5js.org/](https://p5js.org/)) - Used in the graphic part to draw various elements
* [Chart.js]([https://www.chartjs.org/](https://www.chartjs.org/)) - Using to render the charts

## Author

* **João P Maia** - *the complete program* 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
