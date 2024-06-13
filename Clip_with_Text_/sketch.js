let img;
let maskImg;
let myFont;

function preload() {
  // Load the main image
  img = loadImage('car.jpg'); // Make sure the path is correct
  // Load the font
  myFont = loadFont('fonts/Bevan.ttf'); // Make sure the path is correct
}

function setup() {
  createCanvas(500, 500); // Changed the canvas size

  maskImg = createGraphics(1200, 1200); // Changed the mask image size

  maskImg.textFont(myFont);
  maskImg.textSize(100); // Changed the text size
  maskImg.textAlign(CENTER, CENTER);
  maskImg.fill(0);

  // Draw the text in the mask image
  maskImg.text("BATHSPA", width / 1.5, height / 1); // Changed the text and position

  // Apply the mask to the main image
  img.mask(maskImg);
}

function draw() {
  background('white'); // Changed the background color

  // Display the masked image
  image(img, 50, 50); // Changed the position of the image
}
