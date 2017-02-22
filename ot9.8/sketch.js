let sketch = function(p) {
  p.x = 100;
  p.y = 100;
  
  p.setup = function(){
    p.createCanvas(640, 360);
    p.background(51)
  }
  
  p.draw = function(){
    p.fill(255, 0, 200);
    p.noStroke();
    p.ellipse(p.x, p.y, 12, 12);
    p.x += p.random(-15, 15);
    p.y += p.random(-15, 15);
  }
}

const myp5a = new p5(sketch);
const myp5b = new p5(sketch);

setInterval(canvasReset, 4000);

function canvasReset() {
  myp5a.background(51);
  myp5a.x = myp5a.width/2;
  myp5a.y = myp5a.height/2;
  
  myp5b.background(0, 0, 200);
  myp5b.x = myp5b.width/2;
  myp5b.y = myp5b.height/2;
}


/*let x,y;

function setup() {
  createCanvas(640, 360);
  x = width/2;
  y = height/2;
  background(51)
}


function draw() {
  fill(255, 0, 200);
  noStroke();
  ellipse(x, y, 48, 48);
  x += random(-15, 15);
  y += random(-15, 15);
}*/
