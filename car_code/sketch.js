// p5.js sketch
let car;

function setup() {
  createCanvas(windowWidth, windowHeight);
  car = new Car(width / 2, height / 2);
}

function draw() {
  background('black');
  car.display();
}

class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 50;
  }

  display() {
    // Drawing car body
    fill('yellow');
    rect(this.x, this.y, this.width, this.height);
    
    // Drawing car roof
    fill('green');
    rect(this.x + 20, this.y - 20, this.width - 40, this.height / 2);
    
    // Drawing car wheels
    fill('white');
    ellipse(this.x + 20, this.y + this.height, 20, 20);
    ellipse(this.x + this.width - 20, this.y + this.height, 20, 20);
  }

}
