let mic, fft;

function setup() {
  createCanvas(800, 600);
  
  // Create an audio input and start it
  mic = new p5.AudioIn();
  mic.start();
  
  // Create an FFT object for frequency analysis
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(0);
  
  // Get the frequency spectrum
  let spectrum = fft.analyze();
  
  // Draw the frequency spectrum
  noStroke();
  fill(random(255),random(255),random(255,255),random(255)); // random colors for bars
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }
}
