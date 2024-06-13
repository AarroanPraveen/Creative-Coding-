let img;

function preload() {
  img = loadImage("car.jpg");  
}

function setup() {
  createCanvas(800, 900);
  background(0);
  noStroke();
}

function draw() {
  background(0);

  // Draw the image
  image(img, 0, 0);

   
  let col = img.get(mouseX, mouseY);

   
  fill(col);
  ellipse(mouseX, mouseY, 50, 50);
}
