// var blob

// var blobs = []
// var zoom = 1;

function setup() {
    createCanvas(600, 600);
    background(255)
    blob = new Blob(0, 0, 128);
  }

  function draw() {
    background(1);
    strokeWeight(2);

     this.constrain = function(){
       blob.pos.x = constrain(blob.pos.x, -width / 4, width/4);
       blob.pos.y = constrain(blob.pos.y, -heaight / 4, height/4);
  }

    this.show = function(){
      fill(255);
      ellipse(this.pos.x, this.pos.y, this.r * 2, this.r *2);
    }
    push();
    translate(this.pos.x, this.pos.y);
    beginShape();

    for (var a=0; a < TWO_PI; a+= +0.1){
      var x = this.r * cos(a);
      var y = this.r * sin(a);
      vertex(x,y);
    }
    endShape();
    pop();
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