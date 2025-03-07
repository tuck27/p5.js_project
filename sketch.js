let stars = [];
let score = 0;


function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 10; i++) {      //generate stars
        stars.push(newStar());
    }
}
function draw() {
    background(0);  //Black sky
    for (let star of stars) {        //Update and display stars
        star.update();
        star.show();
    }
    //Display score
    fill(255);
    textSize(24);
    text("Score:" + score, 10, 30);
}
//Star Class
class Star {
    constructor() {
        this.x = random(width);
        this.y = random(-200. - 20); //off-screen start
        this.size = random(10, 20);
        this.color = color(255, 255, 0); //yellow
        this.speed = random(2, 5);
        this.clicked = false; //track if star was clicked
    }
    update() {
        this.y += this.speed;
        //reset position when off-screen
        if (this.y > height) {
            this.y = random(-200, -20);
            this.x = random(10, 20);
            this.speed = random(2, 5);
            this.clicked = false; //track if star was clicked
        }
    }
    show() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
    checkClick(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.size / 2 && !this.click) {
            this.color = color(random(255), random(255), random(255)); //change to random color
            score += 10; //increase score
            this.clicked = true; //prevent more than one click on a star
        }
    }
}
//Change color and increase score when clicking a star
function mousePressed() {
    for (let star of stars) {
        star.checkClick(mouseX, mouseY);
    }
}