function Particle(x, y) {
  this.x = x;
  this.y = y;
  
  this.history = [];

  this.update = function() {
    this.x += random(-5,5);
    this.y += random(-5,5);
    
    this.history.forEach(point => {
      point.x += random(-10, 10);
      point.y += random(-10, 10);
    });
    
    /*if(this.x < 0) this.x += 10;
    if(this.y < 0) this.y += 10;
    
    if(this.x > width) this.x -= 10;
    if(this.y > height) this.y -= 10;*/

    if(this.y > height) {
      this.y = height;
      this.yspeed *= -0.9;
    }
    
    const v = createVector(this.x, this.y)
    this.history.push(v);
    
    if(this.history.length > 50) this.history.shift();
  }

  this.show = function() {
    stroke(0);
    fill(173, 94, 34, 150);
    ellipse(this.x, this.y, 20, 20);
    
    noFill();
    beginShape();
    
    this.history.forEach((pos, ind) => {
      vertex(pos.x, pos.y);
    })
    endShape();
  }

}