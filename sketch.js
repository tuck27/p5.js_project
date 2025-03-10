// variables for the position and color of the circle
let shapeX;
let shapeY;
let shapeColor;

function setup() {
  createCanvas(710, 400);

  // initial position and color of the circle
  setPositionAndColor();
}

function setPositionAndColor() {
  // sets position to a random value (within the canvas)
  shapeX = random(0, width);
  shapeY = random(0, height);

  // Set colors to random values in the range
  shapeColor = color(random(100, 256), random(100, 256), random(100, 256));
}

function draw() {
  background(10);

  // Draw a circle at (x,y) with color 
  fill(shapeColor);
  ellipse(shapeX, shapeY, 100);
}

function mousePressed() {
  // On mouse press (re)set the position and color
  setPositionAndColor();
}