let colorlist = ["gold", "yellow", "turquoise", "red"];

function setup() {
    //this function runs once when the webpage is loaded
    //within this function, you can use p5
    createCanvas(640, 360);
    background(255);
}

function draw() {
    //this functions runs many times every second!
    //within this function, you can use p5 syntax
    rect(100, 200, 75, 150);
    bezier()
}



//outside of the setup and draw functions (which are automatically called) - the rest of your code here is plain old javascript