function setup() {
    createCanvas(720, 400);
    background(230);
    strokeWeight(2);
  }
  
  function draw() {
    if (mouseIsPressed) {
      stroke(255);
    } else {
      stroke(237, 34, 93);
    }
    line(mouseX - 66, mouseY, mouseX + 66, mouseY);
    line(mouseX, mouseY - 66, mouseX, mouseY + 66);
   
  }
// function setup(){
//     createCanvas(400,400);
//     background(240, 240, 240);
// }

// function draw (){
//     fill('blue');
//     circle(width/2, height*.2, 100);
//     fill('red');
//     circle(width/2, height*.1, 100);
//}

//newdiv = document.createElement('div');
//document.querySelector('body').appendChild(newdiv);
//console.log('HI IM WORKING');

//const obj = { name: 'omar' };