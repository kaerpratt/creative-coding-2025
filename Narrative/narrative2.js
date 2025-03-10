class Paper1{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.originalSize = 25;
        this.size = this.originalSize;
        this.originalColor = color(99, 132, 100);
        this.color = this.originalColor;
        this.startTime = millis();
    }

    draw(){
        fill(this.color);
        noStroke();
        circle(this.x, this.y, this.size);

    }

    paperCheckgreen(){
       
        if (mouseX > this.x - this.size / 2 && mouseX < this.x + this.size / 2 &&
          mouseY > this.y - this.size / 2 && mouseY < this.y + this.size / 2) {
            this.size += random(-10, 10);
            this.size = constrain(this.size, 15, 35);
            this.color = color(68, 97, 69);
        }

        else{
          this.size = this.originalSize;
          this.color = this.originalColor;
        }
    }

}


class Paper2{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.originalSize = 25;
        this.size = this.originalSize;
        this.originalColor = color(99, 122, 125);
        this.color = this.originalColor;
        this.startTime = millis();
    }

    draw(){
        fill(this.color);
        noStroke();
        circle(this.x, this.y, this.size);

    }

    paperCheckblue(){
       
        if (mouseX > this.x - this.size / 2 && mouseX < this.x + this.size / 2 &&
          mouseY > this.y - this.size / 2 && mouseY < this.y + this.size / 2) {
            this.size += random(-10, 10);
            this.size = constrain(this.size, 15, 35);
            this.color = color(70, 92, 94);
        }

        else{
            this.size = this.originalSize;
            this.color = this.originalColor;
        }
    }

}


class TableTexture{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.width = random (30, 70);
        this.height = random (10, 30);
        this.originalColor = color(random(90, 94), random(50, 55), random(15, 20), random(0, 255));
        this.color = this.originalColor;
        this.strokeWeight = random(0.5, 3);
        //this.startTime = millis();
    }



    draw(){
        strokeWeight(this.strokeWeight);
        stroke(this.color);
        noFill();
        ellipse(this.x, this.y, this.width, this.height);

    }

    update(){
        this.x += random (-1, 1);
        this.y += random (-1, 1);
        //this.setAlpha += random (-1, 1);
        this.strokeWeight += random (-0.5, 0.5);

        this.x = constrain(this.x, 0, windowWidth);
        this.y = constrain(this.y, windowHeight/4+windowHeight/3+20, windowHeight);
        this.strokeWeight = constrain(this.strokeWeight, 0.2, 3.5);

    }

}

class Mug{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.color = color(93, 120, 163);
        this.originalColor = color(128, 42, 5)
        this.teacolor = this.originalColor;
        this.strokeWeight = 0;
        this.ripplestrokeWeight = 0;
        //this.originalSize = 25;
        //this.size = this.originalSize;
        //this.originalColor = color(99, 122, 125);
        //this.color = this.originalColor;
        //this.startTime = millis();
    }

    draw(){ 
        //Mug
            strokeWeight(this.strokeWeight);
            fill(59, 38, 22);
            ellipse (this.x+150, this.y+275, 240, 110); //Shadow

            stroke(this.color);    
            strokeWeight(30);
            fill(0, 0);
            ellipse (this.x+200, this.y+150, 120, 160); // Mug Handle   
        
            fill(this.color);
            strokeWeight(this.strokeWeight);
            rect(this.x, this.y, 200, 250); // Mug Body
            ellipse (this.x+100, this.y+250, 200, 100); // Mug Bottom
            ellipse (this.x+100, this.y, 200, 75); // Mug Rim

            fill(255, 255, 255);
            ellipse (this.x+100, this.y+5, 190, 75); // Mug Top

            fill(this.teacolor);
            ellipse (this.x+100, this.y+15, 175, 60); // Tea


            fill(0, 0);
            stroke(181, 67, 18);
            strokeWeight(this.ripplestrokeWeight);
            ellipse (this.x + 100, this.y + 15, 150, 40); // Ripples
            ellipse (this.x + 100, this.y + 15, 125, 30);
            ellipse (this.x + 100, this.y + 15, 100, 20);
            ellipse (this.x + 100, this.y + 15, 75, 10);

    }

    update(){
        let teaX = this.x + 100;
        let teaY = this.y + 15;
        let teaWidth = 175;
        let teaHeight = 60;
        
        let distance = dist(mouseX, mouseY, teaX, teaY);

        if (distance < teaWidth / 2 && mouseY > teaY - teaHeight / 2 && mouseY < teaY + teaHeight / 2) {
            this.teacolor = color(161, 52, 5);
            this.ripplestrokeWeight = 2;
            console.log("Mouse is over the tea!");
          }
          else{
            this.teacolor = this.originalColor;
            this.ripplestrokeWeight = 0;
          }
    }

}

class PortalLake{
    constructor(startX, startY){
        this.x = startX ;
        this.y = startY;
        this.size = random(60, 110);
        this.originalColor = color(0, 0, random(100, 255));
        this.originalColor2 = color(0, 0, random(100, 255));
        this.originalColor3 = color(0, 0, random(100, 255));
        this.color = this.originalColor;
        this.color2 = this.originalColor2;
        this.color3 = this.originalColor3;
        this.startTime = millis();
        this.isVisible = false;
    }



    draw(){
        if (this.isVisible) {
        fill(this.color);
        circle(this.x, this.y, this.size);
        fill(this.color2);
        circle(this.x, this.y, this.size-this.size/4);
        fill(this.color3);
        circle(this.x, this.y, this.size-this.size/2);
        }

    }


    portalCheckLake(){
       
        if (mouseX > this.x - this.size / 2 && mouseX < this.x + this.size / 2 &&
          mouseY > this.y - this.size / 2 && mouseY < this.y + this.size / 2) {
          this.color = color(50);
          this.color2 = color(25);
          this.color3 = color(0);
          return true;
        }
        else{
            this.color = this.originalColor;
            this.color2 = this.originalColor2;
            this.color3 = this.originalColor3;
            return false;
        }
        

    }

}

class PortalBooks{
    constructor(startX, startY){
        this.x = startX ;
        this.y = startY;
        this.size = random(60, 110);
        this.originalColor = color(random(100, 255), 0, 0);
        this.originalColor2 = color(random(100, 255), 0, 0);
        this.originalColor3 = color(random(100, 255), 0, 0);
        this.color = this.originalColor;
        this.color2 = this.originalColor2;
        this.color3 = this.originalColor3;
        this.startTime = millis();
        this.isVisible = false;
    }



    draw(){
        if (this.isVisible) {
        fill(this.color);
        circle(this.x, this.y, this.size);
        fill(this.color2);
        circle(this.x, this.y, this.size-this.size/4);
        fill(this.color3);
        circle(this.x, this.y, this.size-this.size/2);
        }

    }


    portalCheckBooks(){
       
        if (mouseX > this.x - this.size / 2 && mouseX < this.x + this.size / 2 &&
          mouseY > this.y - this.size / 2 && mouseY < this.y + this.size / 2) {
          this.color = color(50);
          this.color2 = color(25);
          this.color3 = color(0);
          return true;
        }
        else{
            this.color = this.originalColor;
            this.color2 = this.originalColor2;
            this.color3 = this.originalColor3;
            return false;
        }
        

    }

}





let paper1 = [];
let paper2 = [];
let table = [];
let portalslake = [];
let portalsbooks = []; 
let Mug1;



setup = function() {
    createCanvas(windowWidth,windowHeight);
    frameRate(60);


// Paper 1
    for (let i = -5; i < windowWidth; i+=45) {
        for (let j = -50; j < windowHeight; j+=45) {
            let x = i;
            let y = j;
            let paper1go = new Paper1(x, y);
            paper1.push(paper1go);
        }
    }

// Paper 2
    for (let i = -28; i < windowWidth; i+=45) {
        for (let j = -28; j < windowHeight; j+=45) {
            let x = i;
            let y = j;
            let paper2go = new Paper2(x, y);
            paper2.push(paper2go);
        }
    }


// Table Texture
for (let i=0; i < 800; i+=3) {
        let x = random (0, windowWidth);
        let y = random(windowHeight/4+windowHeight/3+20, windowHeight);
        let tablego = new TableTexture(x, y);
        table.push(tablego);
    
}

// Portal Lake
for(let i = 0; i < 2; i++){
    let x = random(50, 125);
    let y = random(50, windowHeight-50);

    let portalgolake = new PortalLake(x, y);
    portalslake.push(portalgolake);
}

// Portal Books
for(let i = 0; i < 2; i++){
    let x = random(windowWidth-125, windowWidth-50);
    let y = random(50, windowHeight-50);

    let portalgobooks = new PortalBooks(x, y);
    portalsbooks.push(portalgobooks);
}

Mug1 = new Mug(random (100, windowWidth-200), random (100, windowHeight/4+windowHeight/3+40));


}




draw = function() {
    background(99, 112, 94);

// Paper 1
    for(let i = 0; i < paper1.length; i++){
        let paper1go = paper1[i];

        paper1go.paperCheckgreen();
        paper1go.draw();

    }

// Paper 2
    for(let i = 0; i < paper2.length; i++){
        let paper2go = paper2[i];

        paper2go.paperCheckblue();
        paper2go.draw();

    }


// Table
    fill(77, 40, 10);
    strokeWeight(0);
    rect(0, windowHeight/4+windowHeight/3, windowWidth, windowHeight);


//Table Texture
for(let i = 0; i < table.length; i++){
    let tablego = table[i];

    tablego.update();
    tablego.draw();

}

// Mug
    Mug1.update();
    Mug1.draw();

// Bug
    fill(222, 218, 7);
    strokeWeight(0);
    ellipse(mouseX, mouseY, 25, 15);
    triangle(mouseX-10, mouseY-5, mouseX-10, mouseY+5, mouseX-20, mouseY);

    fill(61, 56, 48); //gray
    ellipse(mouseX+12, mouseY-5, 17, 12);
    triangle(mouseX+12, mouseY-5, mouseX+12, mouseY+7, mouseX-random(23, 27), mouseY-random(13, 17));
    triangle(mouseX+12, mouseY-5, mouseX+12, mouseY+7, mouseX-random(18, 22), mouseY-random(18, 22));


// Portal Lake
for(let i = 0; i < 1; i++){
    let portalgolake = portalslake[i];

    if (millis() > 5000){ // if the time since beginning - saved time is less than 500 millasec
        //portalgo.color = portalgo.originalColor;  
        portalslake[i].isVisible = true;

    }

    portalgolake.portalCheckLake();
    portalgolake.draw();

}

// Portal Books
for(let i = 0; i < 1; i++){
    let portalgobooks = portalsbooks[i];

    if (millis() > 5000){ // if the time since beginning - saved time is less than 500 millasec
        //portalgo.color = portalgo.originalColor;  
        portalsbooks[i].isVisible = true;

    }

    portalgobooks.portalCheckBooks();
    portalgobooks.draw();

}

}



function mousePressed(){
    if (portalLakePage()) return; //return stops other lines from running, so if portalLakePage is true, it will not run the next line
    if (portalBooksPage()) return; // but if portalLakePage is false, this line is allowed to run


}

function portalLakePage(){
    for(let i = 0; i < portalslake.length; i++){
        let portalgolake = portalslake[i];

        if (portalgolake.portalCheckLake()) { //if the clickCheck = true for this book then...
            //console.log("Mouse was clicked!");
            window.location.href = "narrative1.html";
            return true;
        }
        return false;
    }

}

function portalBooksPage(){
    for(let i = 0; i < portalsbooks.length; i++){
        let portalgobooks = portalsbooks[i];

        if (portalgobooks.portalCheckBooks()) { //if the clickCheck = true for this book then...
            console.log("Mouse was clicked!");
            window.location.href = "narrative3.html";


        }
    }

}