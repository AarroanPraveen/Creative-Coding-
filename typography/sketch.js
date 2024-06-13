let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(64);
  fill(0);
  
  // Create an array of bouncing balls
  for (let i = 0; i < 20; i++) {
    balls.push(new Ball(random(width), random(height), random(2, 10), random(2, 10), random(10, 20)));
  }
}

function draw() {
  background('lightyellow');

  // Update and display the balls
  for (let ball of balls) {
    ball.update();
    ball.display();
  }

  // Display the text
  fill('violet');
  text("Bath Spa University", width / 2, height / 2);
}

class Ball {
  constructor(x, y, xspeed, yspeed, radius) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.radius = radius;
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;

    // Bounce off edges
    if (this.x > width - this.radius || this.x < this.radius) {
      this.xspeed *= -1;
    }
    if (this.y > height - this.radius || this.y < this.radius) {
      this.yspeed *= -1;
    }
  }

  display() {
    fill(random(255),random(123),random(100,255,));
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
}
