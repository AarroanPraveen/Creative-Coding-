function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('lightyellow');
  drawAlien(width / 2, height / 2);
}

function drawAlien(x, y) {
  //  drawing Alien head
  fill('darkgreen');
  ellipse(x, y, 150, 200);
  
  // drawing Alien eyes
  fill(255);
  ellipse(x - 35, y - 50, 40, 60);
  ellipse(x + 35, y - 50, 40, 60);
  fill('orange');
  ellipse(x - 35, y - 50, 20, 30);
  ellipse(x + 35, y - 50, 20, 30);
  
  // drawing Alien mouth
  fill('pink');
  ellipse(x, y + 50, 60, 30);
  
  // drawing Alien antennae
  stroke(0);
  strokeWeight(4);
  line(x - 50, y - 100, x - 80, y - 150);
  line(x + 50, y - 100, x + 80, y - 150);
  fill(0, 255, 0);
  ellipse(x - 80, y - 150, 20, 20);
  ellipse(x + 80, y - 150, 20, 20);
}
