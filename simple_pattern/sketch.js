function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Ensures draw() is only run once
}

function draw() {
  background('lightyellow');
  drawPattern();
}

function drawPattern() {
  let spacing = 50;
  
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      // Draw circles
      fill(random(255),random(255),random(255,255));
      stroke(10);
      rect(x + spacing / 2, y + spacing / 2, spacing / 2, spacing / 2);
      ellipse(x + spacing / 3, y + spacing / 4, spacing / 2, spacing / 2);
      
      // Drawing lines
      stroke(2);
      line(x, y, x + spacing, y + spacing);
      line(x + spacing, y, x, y + spacing);
    }
  }
}
