let colorlist = ["gold", "yellow", "turquoise", "red"];

function setup() {
    //this function runs once when the webpage is loaded
    //within this function, you can use p5
    createCanvas(640, 360);
}

function draw() {
    //this functions runs many times every second!
    //within this function, you can use p5 syntax
    background(255);
    ellipseMode(CENTER);
    rectMode(CENTER);

//Body
    rect(240,145,20,100);
//head
    ellipse(255,115,60,60)
//eyes
    ellipse(221,115,16,32);
    ellipse(259,115,16,32);
}







//outside of the setup and draw functions (which are automatically called) - the rest of your code here is plain old javascript