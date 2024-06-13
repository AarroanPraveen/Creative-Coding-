let trails = [];

function setup() {
  createCanvas(800, 600);
  noStroke();
}

function draw() {
  background(0);
  
  // First we have to update and the display the mouse trails 
  for (let i = trails.length - 1; i >= 0; i--) {
    trails[i].update();
    trails[i].display();
    if (trails[i].alpha <= 0) {
      trails.splice(i, 1); // change or remove the trail when its transparent fully. 
    }
  }
}

function mouseMoved() {
  trails.push(new Trail(mouseX, mouseY));
}

class Trail {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 255;
    this.radius = random(10, 20);
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
  }

  update() {
    this.alpha -= 5; // Fade out animation
  }

  display() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha);
    ellipse(this.x, this.y, this.radius * 2);
  }
}
