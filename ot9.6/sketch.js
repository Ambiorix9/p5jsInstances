const vertices = [];

function setup() {
  createCanvas(640, 360);
}

function mousePressed() {
  let v = createVector(mouseX, mouseY);
  vertices.push(v);
}

function draw() {
  background(51);
  fill(255);
  stroke(255);
  
  let reached = [];
  let unreached = [];
  
  vertices.forEach(vertex => {
    unreached.push(vertex);
  });
  
  reached.push(unreached.shift());
  
  let rIndex, uIndex; //to store index of 2 closest vertices
  
  while(unreached.length > 0) {
    let record = Infinity;
    
    reached.forEach((rV, rI) => {
      
      unreached.forEach((uV, uI) => {
        let distance = dist(rV.x, rV.y, uV.x, uV.y);
        if(distance < record) {
          record = distance;
          rIndex = rI;
          uIndex = uI;
        }
      }); //inner loop over unreached vertices
    }); //outer loop over reached vertices
    line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y)
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex, 1);
  }
  
  vertices.forEach(vertex => {
    ellipse(vertex.x, vertex.y, 16, 16);
  })
}

