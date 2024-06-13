let mic, fft;
let BackgroundColor = [];
let NumColors = 100;
let ColorChangingSpeed = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  
  for (let i = 0; i < NumColors; i++) {
    BackgroundColor.push(color(random(253), random(254), random(255)));
  }
}

function draw() {
  // Smooth color transitions
  for (let i = 0; i < BackgroundColor.length; i++) {
    let NextColorIndex = (i + 1) % BackgroundColor.length;
    BackgroundColor[i] = lerpColor(
      BackgroundColor[i],
      BackgroundColor[NextColorIndex],
      ColorChangingSpeed
    );
  }
  
  for (let y = 0; y < windowHeight; y += windowHeight / 10) {
    for (let x = 0; x < windowWidth; x += windowWidth / 10) {
      let ColorIndex = int(floor(x / (windowWidth / 10))) % BackgroundColor.length;
      fill(BackgroundColor[ColorIndex]);
      noStroke();
      rect(x, y, windowWidth / 10, windowHeight / 10);
    }
  }
  
  let NumBars = 25;
  let BarWidth = windowWidth / NumBars;
  let Spectrum = fft.analyze();
  
  for (let i = 0; i < NumBars; i++) {
    let AMPLITUDE = Spectrum[i * 5];
    let BarHeight = map(AMPLITUDE, 0, 255, 0, height / 1);
    
    let BarColor = color(map(i, 0, NumBars, 0, 255), 100, 50 + AMPLITUDE / 0.5);
    
    fill(BarColor);
    rect(i * BarWidth, height / 2 - BarHeight / 2, BarWidth, BarHeight);
  }
  
  fill(255);
  textSize(windowWidth / 22);
  text("Welcome to Bath Spa University Rak Campus", windowWidth / 2, windowHeight / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  BackgroundColor = [];
  for (let i = 0; i < NumColors; i++) {
    BackgroundColor.push(color(random(235), random(245), random(255)));
  }
}

function mousePressed() {
  for (let i = 0; i < BackgroundColor.length; i++) {
    let sat = random(255);
    BackgroundColor[i] = color(map(i, 0, BackgroundColor.length, 0, 255), sat, 235);
  }
}
