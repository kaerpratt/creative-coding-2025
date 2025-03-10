class Books{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.width = 25;
        this.height = random(65,100);
        this.originalColor = color(random(75, 255));
        this.color = this.originalColor;
        this.startTime = millis();
    }

    draw(){
        fill(this.color);
        rect(this.x, this.y-this.height, this.width, this.height);

    }


    hoverCheck(){
        if (mouseX > this.x && mouseX < this.x + this.width && 
            mouseY < this.y && mouseY > this.y - this.height) {
            //console.log('Hover detected over book at', this.x, this.y);
            return true;
        }
        return false;
    
    }

}


class FunBooks{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.width = 25;
        this.height = 100;
        this.originalColor = color(0, 0, 0);
        this.color = this.originalColor;
        this.startTime = millis();
    }

    draw(){
        fill(this.color);
        rect(this.x, this.y-this.height, this.width, this.height);

    }


    clickCheck(){
        if (mouseX > this.x && mouseX < this.x + this.width && 
            mouseY < this.y && mouseY > this.y - this.height) {
            console.log('mouse detected at', this.x, this.y);
            return true;
        }
        return false;
    
    }

}

class Sparkle{
    constructor(startX, startY){
        this.x = startX ;
        this.y = startY;
        this.width = random(7,10);
        this.height = random(6,15);
        this.startTime = millis();
        this.isVisible = false;
        //this.angleMode(degrees);
        //this.rotationX = 45;
    }

    draw(){
        if (this.isVisible) {
            fill(252, 186, 3);
            rect(this.x+= random(-1,1), this.y+= random(-1,1), this.width, this.height);
        }
    }

    /* update(){
        this.x += random (-2, 2);
        this.y += random (-2, 2);
    } */
}

class Sparkle2{
    constructor(startX, startY){
        this.x = startX ;
        this.y = startY;
        this.width = random(7,10);
        this.height = random(6,15);
        this.startTime = millis();
        this.isVisible = false;
        //this.angleMode(degrees);
        //this.rotationX = 45;
    }

    draw(){
        if (this.isVisible) {
            fill(255, 214, 99);
            rect(this.x+= random(-1,1), this.y+= random(-1,1), this.width, this.height);
        }
    }

    /* update(){
        this.x += random (-2, 2);
        this.y += random (-2, 2);
    } */
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

class PortalTea{
    constructor(startX, startY){
        this.x = startX ;
        this.y = startY;
        this.size = random(60, 110);
        this.originalColor = color(0, random(100, 255), 0);
        this.originalColor2 = color(0, random(100, 255), 0);
        this.originalColor3 = color(0, random(100, 255), 0);
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


    portalCheckTea(){
       
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




let manybooks = []
let funbks = []
let sparkles = []
let sparkles2 = []
let portalslake = [];
let portalstea = [];


setup = function() {
    createCanvas(windowWidth,windowHeight);
    frameRate(10);


//Books
    for(let i = 0; i < windowWidth; i++){
        for (let j = 150; j < windowHeight; j+=175) {
            let x = i*25;
            let y = j;
            let book = new Books(x, y);
            manybooks.push(book);
        }
    }

//Fun Books
    for(let i = 0; i < 8; i++){
        for (let j = 150; j < windowHeight; j+=175) {
            let x = random(0, windowWidth);
            let y = j;
            let funbkgo = new FunBooks(x, y);
            funbks.push(funbkgo);
        }
    }

//Sparkles
    for(let i = 0; i < 250; i++){
            let x = random(0, windowWidth);
            let y = random(0, windowHeight);
            let sparklesgo = new Sparkle(x, y);
            sparkles.push(sparklesgo);
    }

//Sparkles2
    for(let i = 0; i < 250; i++){
        let x = random(0, windowWidth);
        let y = random(0, windowHeight);
        let sparklesgo2 = new Sparkle2(x, y);
        sparkles2.push(sparklesgo2);
    }


// Portal Lake
    for(let i = 0; i < 2; i++){
        let x = random(windowWidth-125, windowWidth-50);
        let y = random(50, windowHeight-50);

        let portalgolake = new PortalLake(x, y);
        portalslake.push(portalgolake);
    }

// Portal Tea
    for(let i = 0; i < 2; i++){
        let x = random(50, 125);
        let y = random(50, windowHeight-50);

        let portalgotea = new PortalTea(x, y);
        portalstea.push(portalgotea);
    }

}




 
draw = function() {
 
    background(79, 43, 1);

//Shelves
    for (let i = 150; i < 1000; i+=175) {
          fill(102, 59, 9);
          noStroke();
          rect(0, i, windowWidth, 25);

    }

//Books
    for(let i = 0; i < windowWidth; i++){
        let book = manybooks[i];

        if (book.hoverCheck()) { //if the hoverCheck = true for this book then...
            book.color = color(random(0, 255), random(0, 255), random(0, 255));
            book.startTime = millis(); //save time of hover
        }

        else if (millis() - book.startTime > 500){ // if the time since beginning - saved time is less than 500 millasec
            book.color = book.originalColor;
            
        }

        book.draw();

    }

//Fun Books
    for(let i = 0; i < 8; i++){
        let funbkgo = funbks[i];

        if (millis() - funbkgo.startTime > 500){ // if the time since beginning - saved time is less than 500 millasec
            funbkgo.color = funbkgo.originalColor;        
        }


        funbkgo.draw();


        for (let j = 0; j < 250; j++) {
            if (millis() - sparkles[j].startTime > 900) {
                sparkles[j].isVisible = false;
            }
        }

        for (let k = 0; k < 250; k++) {
            if (millis() - sparkles2[k].startTime > 900) {
                sparkles2[k].isVisible = false;
            }
        }

    }

//Sparlkes
    for(let i = 0; i < 250; i++){
        let sparklesgo = sparkles[i];


        sparklesgo.draw();

    }


//Sparlkes2
    for(let i = 0; i < 250; i++){
        let sparklesgo2 = sparkles2[i];


        sparklesgo2.draw();

    }


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


// Portal Tea
    for(let i = 0; i < 1; i++){
        let portalgotea = portalstea[i];

        if (millis() > 5000){ // if the time since beginning - saved time is less than 500 millasec
         //portalgo.color = portalgo.originalColor;  
            portalstea[i].isVisible = true;

        }

        portalgotea.portalCheckTea();
        portalgotea.draw();

    }

    
 } 



function mousePressed(){
    if (portalLakePage()) return; //return stops other lines from running, so if portalLakePage is true, it will not run the next line
    if (portalTeaPage()) return; // but if portalLakePage is false, this line is allowed to run

    sparkelsActivate();

}

function sparkelsActivate() {
    for(let i = 0; i < 8; i++){
        let funbkgo = funbks[i];

        console.log("Mouse was clicked!");

        if (funbkgo.clickCheck()) { //if the clickCheck = true for this book then...
            funbkgo.color = color(0, 0, 225);
            funbkgo.startTime = millis(); //save time of click

            for(let j=0; j<250; j++){
                sparkles[j].isVisible = true;
                sparkles[j].startTime = millis();
            }

            for(let k=0; k<250; k++){
                sparkles2[k].isVisible = true;
                sparkles2[k].startTime = millis();
            }

        }
    }
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


function portalTeaPage(){
    for(let i = 0; i < portalstea.length; i++){
        let portalgotea = portalstea[i];

        if (portalgotea.portalCheckTea()) { //if the clickCheck = true for this book then...
            //console.log("Mouse was clicked!");
            window.location.href = "narrative2.html";
            return true;
        }
        return false;

    }

}



 