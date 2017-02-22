let x = 0;

function setup() {
  createCanvas(640, 360);
}


function draw() {
  background(0);
  ellipse(x, 120, 16, 16);
  x ++;
  if(x > width) x = 0;
}
