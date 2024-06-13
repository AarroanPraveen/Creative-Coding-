let img;
let maskImg;

function preload() {
  // Load the main image
  img = loadImage('car.jpg'); // Changed the image file
}

function setup() {
  createCanvas(800, 800); // Changed canvas size

  // Create the mask image
  maskImg = createGraphics(1600, 1200); // Changed the mask image size

  // Draw shapes in the mask image (white areas will be visible, black areas will be transparent)
  maskImg.fill(255);
  maskImg.rect(width / 4, height / 4, 500, 400); // Changed position and size
  maskImg.ellipse(width / 3, height / 6, 300, 400); // Changed position and size
  maskImg.ellipse(width / 2, height / 1.5, 400, 700); // Changed position and size

  // Applies the mask to the main Picture
  img.mask(maskImg);
}

function draw() {
  background('rgb(255,255,255)'); // Changed background color

  // Display the masked Picture
  image(img, 200, 200); // Changed position of the image
}
