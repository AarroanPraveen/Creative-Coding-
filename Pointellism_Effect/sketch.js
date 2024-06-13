let img;

function preload() {
  img = loadImage("car.jpg"); 
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  
  let x = random(width);
  let y = random(height);

  
  let c = img.get(x, y);

  
  fill(c[0], c[1], c[2], 50);
  rect(x, y, 30, 30);
}
