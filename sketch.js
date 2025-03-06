let x = 25;

function setup() {
    createCanvas(720, 400);
    colorMode(HSB);
    textSize(20);
    noLoop();
}

function draw() {
    background(0);
    fill(x / 3, 90, 90);
    circle(x, height / 2, 50);
    x += 5;
    if(x > width + 25) {
        x = -25;
    }
}

function mousePressed() {
    if(isLooping()) {
        noLoop();
    } else {
        loop();
    }
}

function keyPressed() {
    redraw();
}