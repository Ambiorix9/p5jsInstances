const circles = [];

function setup() {
  createCanvas(640, 360);
  
  background(200);
  while(circles.length < 50) {
    let protection = 0;
    
    let newCircle = {
      x: random(width),
      y: random(height),
      rad: random(5, 36)
    }
    
    let overlapping = false;
    circles.forEach(circle => {
      let d = dist(newCircle.x, newCircle.y, circle.x, circle.y);
      if(d < newCircle.rad + circle.rad) {
        overlapping = true;
      }
    });
    
    if(!overlapping) circles.push(newCircle);
    console.log(circles.length);
    protection++;
    if(protection > 10000) break;
  }
    
  fill(255, 0, 150, 100);
    
  circles.forEach(circle => {
    ellipse(circle.x, circle.y, circle.rad * 2, circle.rad * 2);
  });
}

function draw() {
 
}

