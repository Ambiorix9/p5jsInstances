let particles =[];

function setup() {
  createCanvas(400, 300);
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(200);
  particles.forEach(particle => {
    particle.update();
    particle.show();
  });
  
  line(frameCount, 0, frameCount, height);
}

