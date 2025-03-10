class Rocks{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.width = random(4, 17);
        this.height = random(3,12);
        this.color = color(random(0, 255));
        //this.startTime = millis();
    }

    draw(){
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.width, this.height);

    }

}

class Waves{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.width = random(25, 65);
        this.height = random(15, 50);
        this.originalColor = color(95, random(168, 178), random(158, 168));
        this.color = this.originalColor;
        //this.startTime = millis();
    }


    draw(){
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.width, this.height);

    }

    update(){
        this.y += random(-5, 5);
        this.x += random(-5, 5);
        this.y = constrain(this.y, windowHeight/2, windowHeight);
    }

    seaCheck(){
       
          if (mouseX > this.x - this.width / 2 && mouseX < this.x + this.width / 2 &&
            mouseY > this.y - this.height / 2 && mouseY < this.y + this.height / 2) {
            this.color = color(199, 255, 244);
          }

          else{
            this.color = this.originalColor;
          }
    }

}

class ShoreEdge{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.width = random(25, 65);
        this.height = random(15, 50);
        this.color = color(102, 98, 91);
        //this.startTime = millis();
    }


    draw(){
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.width, this.height);

    }

    
}


class Clouds{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.width = random(65, 150);
        this.height = random(65, 120);
        this.color = color(255, 255, 255);
        this.speed = random(1, 3);
        //this.startTime = millis();
    }


    draw(){
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.width, this.height);
        ellipse(this.x-15, this.y-25, this.width+20, this.height);
        ellipse(this.x+30, this.y-17, this.width+20, this.height+20);
    }

    update() {
        this.x += this.speed; // Move to the right

        // If the cloud moves off-screen to the right, reset it to the left
        if (this.x > windowWidth + this.width) {
            this.x = -this.width;
        }
    }


}


class StaticClouds{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.width = random(100, 200);
        this.height = random(90, 180);
        this.originalColor = color(230, 242, 241);
        this.color = this.originalColor;
        this.startTime = millis();
    }



    draw(){
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.width, this.height);
        //ellipse(this.x-15, this.y-25, this.width+20, this.height);
        //ellipse(this.x+30, this.y-17, this.width+20, this.height+20);
    }


    hoverCheck(){
       
        if (mouseX > this.x - this.width / 2 && mouseX < this.x + this.width / 2 &&
          mouseY > this.y - this.height / 2 && mouseY < this.y + this.height / 2) {
          this.color = color(126, 140, 139);
          return true;
        }
        return false;

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




let rocks = [];
let waves = [];
let shoreedge = [];
let clouds = [];
let staticclouds = [];
let portalsbooks = []; 
let portalstea = [];





setup = function() {
    createCanvas(windowWidth,windowHeight);
    frameRate(5);

    // Rocks
    for(let i = 0; i < windowWidth; i++){
            let x = random(0, windowWidth);
            let y = random(470, windowHeight);

            let stone = new Rocks(x, y);
            rocks.push(stone);
    }

    // Shore Edge
    for(let i = 0; i < windowWidth; i++){
        let x = random(0, windowWidth);
        let y = random(475, 490);

        let edge = new ShoreEdge(x, y);
        shoreedge.push(edge);
    }


    // Waves
    for(let i = 0; i < windowWidth; i++){
        let x = random(0, windowWidth);
        let y = random(windowHeight/2, windowHeight);

        let wave = new Waves(x, y);
        waves.push(wave);
    }

    // Clouds
    for(let i = 0; i < windowWidth; i++){
        let x = random(0, windowWidth);
        let y = random(0, windowHeight/2);

        let cloud = new Clouds(x, y);
        clouds.push(cloud);
    }


    // Static Clouds
    for(let i = 0; i < windowWidth; i++){
        let x = random(0, windowWidth);
        let y = random(0, windowHeight/2);

        let statcloud = new StaticClouds(x, y);
        staticclouds.push(statcloud);
    }


 // Portal Books
    for(let i = 0; i < 2; i++){
        let x = random(50, 125);
        let y = random(50, windowHeight-50);

        let portalgobooks = new PortalBooks(x, y);
        portalsbooks.push(portalgobooks);
    }

// Portal Tea
    for(let i = 0; i < 2; i++){
        let x = random(windowWidth-125, windowWidth-50);
        let y = random(50, windowHeight-50);

        let portalgotea = new PortalTea(x, y);
        portalstea.push(portalgotea);
    }


}





draw = function() {
    background(205, 222, 250);
    

    // Static Clouds
    for(let i = 0; i < 4; i++){
        let statcloud = staticclouds[i];

        if (millis() - statcloud.startTime > 500){ // if the time since beginning - saved time is less than 500 millasec
            statcloud.color = statcloud.originalColor;        
        }

        statcloud.hoverCheck();
        statcloud.draw();

    }


    // Clouds
    for(let i = 0; i < 6; i++){
        let cloud = clouds[i];
        //cloud.update();
        cloud.update();
        cloud.draw();
    }


    // Lake
    fill(95, 173, 163);
    strokeWeight(0);
    rect(0, windowHeight/2, windowWidth, windowHeight-windowHeight/2);



    // Waves
    for(let i = 0; i < windowWidth; i++){
        let wave = waves[i];
        wave.seaCheck();
        wave.update();
        wave.draw();


     }

    
     // Bird
     noFill();
     strokeWeight(3);
     stroke(0);
     curve(15, 135, 75, 75, 110, 90, 75, 125);
     curve(145, 145, 110, 90, 140, 75, 150, 130);
 
     curve(65, 185, 125, 125, 160, 140, 125, 175);
     curve(195, 195, 160, 140, 190, 125, 200, 180);
 
     curve(115, 135, 175, 75, 210, 90, 175, 125);
     curve(245, 145, 210, 90, 240, 75, 250, 140);


    // Shore
    fill(102, 98, 91);
    strokeWeight(0);
    rect(0, 490, windowWidth, windowHeight-windowHeight/2);

    // Shore Edge
    for(let i = 0; i < windowWidth; i+=5){
        let edge = shoreedge[i];
        edge.draw();


     }

    // Rocks
     for(let i = 0; i < windowWidth; i++){
        let stone = rocks[i];
        stone.draw();

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
    if (portalBooksPage()) return; //return stops other lines from running, so if portalLakePage is true, it will not run the next line
    if (portalTeaPage()) return; // but if portalLakePage is false, this line is allowed to run


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

