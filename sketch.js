// Variables for the position, color, and size of the circle
let shapeX;
let shapeY;
let shapeColor;
let shapeSize = 100;
let score = 0;


function setup() {
  createCanvas(710, 400);
  setPositionAndColor();
}

function setPositionAndColor() {
  // Sets position to a random value within the canvas
  shapeX = random(shapeSize / 2, width - shapeSize / 2);
  shapeY = random(shapeSize / 2, height - shapeSize / 2);

  // Set colors to random values in the range
  shapeColor = color(random(100, 256), random(100, 256), random(100, 256));
}

function draw() {
  background(10);

  // Draw the circle
  fill(shapeColor);
  ellipse(shapeX, shapeY, shapeSize);

  // Display the score
  fill(255);
  textSize(24);
  text(`Score: ${score}`, 20, 30);
}

function mousePressed() {
  // Check if the mouse click is inside the circle
  let d = dist(mouseX, mouseY, shapeX, shapeY);
  if (d < shapeSize / 2) {
    score++; // Increase the score
    setPositionAndColor(); // Change position and color
  } else {
    score--; //decrease the score 
  }
}
