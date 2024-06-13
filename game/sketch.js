// Game states: title, playing, win, lose
let gameState = 'title';

// Player, fish, and dog objects
let player;
let fishes = [];
let dogs = [];

// Score and win condition
let score = 0;
let winScore = 10;

function setup() {
  // Create a canvas of 800x600 pixels
  createCanvas(800, 600);

  // Initialize the player
  player = new Player();

  // Create initial fishes and dogs
  for (let i = 0; i < 5; i++) {
    fishes.push(new Fish());
    dogs.push(new Dog());
  }
}

function draw() {
  // Clear the background with a light grey color
  background(220);

  // Display the appropriate screen based on the game state
  if (gameState === 'title') {
    showTitleScreen();
  } else if (gameState === 'playing') {
    playGame();
  } else if (gameState === 'win') {
    showWinScreen();
  } else if (gameState === 'lose') {
    showLoseScreen();
  }
}

// Display the title screen
function showTitleScreen() {
  textSize(48);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Cat and Fish Game', width / 2, height / 2 - 40);
  textSize(24);
  text('Press ENTER to Start', width / 2, height / 2 + 20);
}

// Main gameplay function
function playGame() {
  // Update and show the player
  player.update();
  player.show();

  // Update and show each fish
  for (let fish of fishes) {
    fish.show();
    // Check if the player collects a fish
    if (player.collect(fish)) {
      score++;
      fish.respawn();
      // Check if the player has collected enough fish to win
      if (score >= winScore) {
        gameState = 'win';
      }
    }
  }

  // Update and show each dog
  for (let dog of dogs) {
    dog.update();
    dog.show();
    // Check if the player collides with a dog
    if (player.collide(dog)) {
      gameState = 'lose';
    }
  }

  // Display the current score
  fill(0);
  textSize(24);
  text('Score: ' + score, 10, 25);
}

// Display the win screen
function showWinScreen() {
  textSize(48);
  textAlign(CENTER, CENTER);
  fill(0);
  text('You Win!', width / 2, height / 2 - 40);
  textSize(24);
  text('Press ENTER to Restart', width / 2, height / 2 + 20);
}

// Display the lose screen
function showLoseScreen() {
  textSize(48);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Game Over', width / 2, height / 2 - 40);
  textSize(24);
  text('Press ENTER to Restart', width / 2, height / 2 + 20);
}

// Handle key presses
function keyPressed() {
  // Start or restart the game when ENTER is pressed
  if (keyCode === ENTER) {
    if (gameState === 'title' || gameState === 'win' || gameState === 'lose') {
      gameState = 'playing';
      score = 0;
      player = new Player();
      fishes = [];
      dogs = [];
      // Create new fishes and dogs
      for (let i = 0; i < 5; i++) {
        fishes.push(new Fish());
        dogs.push(new Dog());
      }
    }
  }
}

// Player class
class Player {
  constructor() {
    this.size = 50;
    this.pos = createVector(width / 2, height / 2);
    this.speed = 5;
  }

  // Update player position based on arrow key inputs
  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.pos.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.pos.x += this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.pos.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.pos.y += this.speed;
    }

    // Constrain player position within the canvas
    this.pos.x = constrain(this.pos.x, 0, width - this.size);
    this.pos.y = constrain(this.pos.y, 0, height - this.size);
  }

  // Display the player as a blue circle
  show() {
    fill(0, 0, 255);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  // Check if the player collects a fish
  collect(fish) {
    let d = dist(this.pos.x, this.pos.y, fish.pos.x, fish.pos.y);
    return d < this.size / 2 + fish.size / 2;
  }

  // Check if the player collides with a dog
  collide(dog) {
    let d = dist(this.pos.x, this.pos.y, dog.pos.x, dog.pos.y);
    return d < this.size / 2 + dog.size / 2;
  }
}

// Fish class
class Fish {
  constructor() {
    this.size = 30;
    this.respawn();
  }

  // Respawn the fish at a random position
  respawn() {
    this.pos = createVector(random(width - this.size), random(height - this.size));
  }

  // Display the fish as a red square
  show() {
    fill(255, 0, 0);
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }
}

// Dog class
class Dog {
  constructor() {
    this.size = 40;
    this.pos = createVector(random(width - this.size), random(height - this.size));
    this.speed = 2;
  }

  // Update the dog position randomly
  update() {
    let direction = p5.Vector.random2D();
    this.pos.add(direction.mult(this.speed));

    // Constrain dog position within the canvas
    this.pos.x = constrain(this.pos.x, 0, width - this.size);
    this.pos.y = constrain(this.pos.y, 0, height - this.size);
  }

  // Display the dog as a brown square
  show() {
    fill(150, 75, 0);
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }
}
