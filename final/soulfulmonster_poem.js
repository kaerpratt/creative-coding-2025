
//Classes
class Button{
    constructor(x, y, w, h, label, onClickFunction) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.label = label;
        this.color = color(146, 191, 130);
        this.onClickFunction = onClickFunction;
    }

    draw() {
        fill(this.color);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h, 10);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(16);
        text(this.label, this.x, this.y);
    }

    clicked() {
        // check if mouse is over button
        if (mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 &&
            mouseY > this.y - this.h/2 && mouseY < this.y + this.h/2) {
          this.onClickFunction();
        }
    }
}

let button1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(141, 165, 199);
    textSize(32);


    button1 = new Button(windowWidth/2, windowHeight-100, 175, 40, "Enter Garden", enterGarden);
}

function draw (){
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(0);
    text("Growing in Seasons", windowWidth/2, 100);
    textSize(16);
    text("In gardens wide where data grows,", windowWidth/2, 150);
    text("Each tree a tale the fates have chose.", windowWidth/2, 170);

    text("With roots, branches, leaves in fact,", windowWidth/2, 200);
    text("Each shaped by data days have tracked,", windowWidth/2, 220);

    text("Flowers whisper in quiet tones,", windowWidth/2, 250);
    text("Of peace and growth in different zones.", windowWidth/2, 270);

    text("So wander through this grove of thought,", windowWidth/2, 300);
    text("Where saplings sprout where numbers ought", windowWidth/2, 320);

    text("A forest born of human dreams,", windowWidth/2, 350);
    text("Blending numbers, earth, and greens.", windowWidth/2, 370);

    text("Color = Sex | Height = Height | Weight = Thickness", windowWidth/2, 420);
    text("Leaves/Flowers = Literacy | Fallen Leaves = Peace Index", windowWidth/2, 440);



    button1.draw();
}

function mousePressed(){
    button1.clicked();
}

function enterGarden() {
    window.location.href = "soulfulmonsterfnl.html";
}
