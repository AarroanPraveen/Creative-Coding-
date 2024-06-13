let img;

function preload() {
  img = loadImage("car.jpg");  
}

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  background(0);

   
  image(img, 0, 0);

   
  let thresholdValue = map(mouseX, 0, width, 0, 1);

  
  filter(POSTERIZE);
}
