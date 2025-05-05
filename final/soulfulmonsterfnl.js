// Variables
    let weightTable;
    let heightTable;
    let literacyTable;
    let literacyData = [];
    let countryData = []; 
    let treeDataList = [];
    let leaf0, leaf1, leaf2, leaf3, leaf4, flower1, flower2;
    let fallleaf1, fallleaf2, fallleaf3;
    let trees = [];
    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseMotionActive = false;
    let lastMouseMoveTime = 0;



// Classes
class DataBlurb{
    constructor(data,){
        this.data = data;
        this.startTime = millis();
        this.isVisible = false;
        this.originalColor = color(0, 0, 0, 0);
        this.color = this.originalColor;
        this.textcolor = color(255);
    }

    draw(){
        //rect (50, 50, 100, 100); //Test
  
        if (this.isVisible) {
            let d = this.data;
            let sexLabel = (d.sex === "1") ? "male" : "female";
                    rectMode(CORNER);
                    fill(100, 100, 100, 200);
                    stroke(255);
                    strokeWeight(0.5);
                    rect(d.x + 10, d.y - 50, 150, 125, 4);
        
                    noStroke();
                    fill(255);
                    textSize(12);
                    textAlign(LEFT, TOP);
                    text(`${d.country}
${sexLabel}
${d.age} months, 
${d.childHeight} cm, 
${d.weight} kg
${nf(d.literacy, 1, 1)} literacy rate
${nf (d.peace, 1, 2)} peace index`, 
                        d.x + 25, d.y - 40);
                
        }
    }


    hoverCheck(){

        let d = this.data;
    return dist(mouseX, mouseY, d.x, d.y) < 50;


       /*  if (dist(mouseX, mouseY, d.x, d.y) < 50) {
            console.log('Hover detected ', this.x, this.y);
            return true;
        }
        console.log('Hover not detected ', this.x, this.y);
        return false; */
    
    }
}

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

class Tree {
        constructor(x, y, age, weight, childHeight, sex, literacyRate, country, peaceIndex) {
            this.x = x;
            this.y = y;
            this.age = age;
            this.weight = weight;
            this.childHeight = childHeight;
            this.sex = sex;
            this.literacyRate = literacyRate;
            this.peaceIndex = peaceIndex;
            this.country = country;
            this.swayOffset = random(radians(-10), radians(10));
            this.height = this.getTotalLength();
            this.fallenLeaves = this.generateFallenLeaves(); // store fallen leaves
            

        // Map data values to tree properties
            this.depth = map(age, 0, 60, 1, 20);
            this.totalLength = map(childHeight, 45, 100, 5, 90);
            this.branchThickness = map(weight, 2, 15, 1, 8);
            this.col = (sex === "1") ? color(80, 50, 20) : color(120, 80, 60);

            this.branchData = []; // store precomputed branch tree
            this.generateBranchStructure(this.totalLength, this.depth, this.branchThickness, this.branchData);
            
            

        //Tooltip
            this.tooltip = new DataBlurb({
                x: this.x,
                y: this.y - this.getTotalLength(),
                age: this.age,
                weight: this.weight,
                childHeight: this.childHeight,
                sex: this.sex,
                country: this.country,
                literacy: this.literacyRate,
                peace: this.peaceIndex
            });
        }
    
        // Height of the tree
        getTotalLength() {
                return map(this.childHeight, 45, 100, 5, 100);
         }

    // Generate the branch structure recursively once per tree
        generateBranchStructure(len, depth, weight, container) {

            if (!container) {
                console.warn('generateBranchStructure called without a container!', this);
                return;
              }

            this.treeBaseX = this.x;  // tree's root x position
            this.treeBaseY = this.y + this.height;
           
            if (depth <= 0 || len <= 10) return;
    
            let angle = radians(random(10, 50));
            let lenMult = random(0.60, 0.75);
            let weightMult = random(0.6, 0.8);
            
            let branch = {
                len: len,
                weight: weight,
                angle: angle,
                lenMult: lenMult,
                weightMult: weightMult,
                children: [],
                
            };
    
            this.generateBranchStructure(len * lenMult, depth - 1, weight * weightMult, branch.children);
            this.generateBranchStructure(len * lenMult, depth - 1, weight * weightMult, branch.children);

            //Stores leaf angle data
            if (branch.children.length === 0) {
                branch.leaves = [];
            
                const leafCount1 = floor(random(2, 4));
                const leafCount2 = floor(random(3, 4));
                const leafCount3 = floor(random(3, 5));
            
                for (let i = 0; i < leafCount1; i++) {
                    branch.leaves.push({
                        type: 'leaf1',
                        angle: random(radians(-30), radians(20)),
                        offset: { x: random(-7, 7), y: random(-7, 7) },
                        swayAmount: random(-0.5, 0.5),
                        swaySpeed: random(300, 400)
                    });
                }
                for (let i = 0; i < leafCount2; i++) {
                    branch.leaves.push({
                        type: 'leaf2',
                        angle: random(radians(-30), radians(10)),
                        offset: { x: random(-10, 10), y: random(-10, 10) },
                        swayAmount: random(-1, 0.5),
                        swaySpeed: random(400, 500)
                    });
                }
                for (let i = 0; i < leafCount3; i++) {
                    branch.leaves.push({
                        type: 'leaf3',
                        angle: random(radians(-40), radians(0)),
                        offset: { x: 0, y: 0 },
                        swayAmount: random(-1, 1),
                        swaySpeed: random(500, 600)
                    });
                }
            }

            
            container.push(branch); // stores branch data to be used in drawBranches
        }


        drawBranches(branches) {
            for (let branch of branches) {
                push();
                strokeWeight(branch.weight);
                line(0, 0, 0, -branch.len);
                translate(0, -branch.len);
        
                const hasChildren = branch.children && branch.children.length > 0;
        
                if (!hasChildren) {
                    // Draws leaves or flowers based on literacy rate if at the end of the branch
                    let leafImg1, leafImg2, leafImg3;
                    let r = this.literacyRate;
        
                    if (r < 0.3) {
                        leafImg1 = leaf4;
                        leafImg2 = leaf4;
                        leafImg3 = leaf3;
                    } else if (r < 0.5) {
                        leafImg1 = leaf4;
                        leafImg2 = leaf3;
                        leafImg3 = leaf3;
                    } else if (r < 0.7) {
                        leafImg1 = leaf3;
                        leafImg2 = leaf2;
                        leafImg3 = leaf2;
                    } else if (r < 0.85) {
                        leafImg1 = leaf1;
                        leafImg2 = leaf0;
                        leafImg3 = leaf0;
                    } else if (r < 0.95) {
                        leafImg1 = leaf1;
                        leafImg2 = leaf1;
                        leafImg3 = flower1;
                    } else {
                        leafImg1 = flower1;
                        leafImg2 = flower1;
                        leafImg3 = flower1;
                    }

                // Swaying effect

                    for (let leaf of branch.leaves) {
                        let img;
                        if (leaf.type === 'leaf1') img = leafImg1;
                        else if (leaf.type === 'leaf2') img = leafImg2;
                        else if (leaf.type === 'leaf3') img = leafImg3;

                        let sway = 0;
                        if (mouseMotionActive) {
                            sway = sin(millis() / leaf.swaySpeed + this.swayOffset) * (leaf.swayAmount || 0.3);
                        }
                    
                        push();
                        translate(leaf.offset.x, leaf.offset.y); // position offset
                        rotate(leaf.angle + sway); // sway + base angle
                        image(img, 0, 0, 20, 20); // use consistent size
                        pop();
                    }
                    
                } else {
                    // Recursive Branches
                    push();
                    rotate(branch.angle);
                    this.drawBranches([branch.children[0]]);
                    pop();
        
                    push();
                    rotate(-branch.angle);
                    this.drawBranches([branch.children[1]]);
                    pop();
                }
        
                pop();
            }
        }

        generateFallenLeaves() {
            const fallen = [];
            const totalLeaves = floor(random(6, 20));  // total fallen leaves per tree
        
            for (let i = 0; i < totalLeaves; i++) {
                const leafangle = random(-PI/4, PI/4);
        
                const typeOptions = ['fallleaf1', 'fallleaf2', 'fallleaf3'];
                const type = random(typeOptions);

                const offsetX = random(-60, 60);
                const offsetY = random(-150, 0); // how far below the tree the leaves fall

                let rawX = this.x + offsetX;
                let rawY = this.y + (this.height*0.65) + offsetY;

                //let rawX = this.x + cos(leafangle) * radiusX;
                //let rawY = this.y + this.height + sin(leafangle) * radiusY;

                const constX = constrain(rawX, 0, windowWidth);
                const constY = constrain(rawY, windowHeight-95, windowHeight-5);

                console.log(`faall Leaf at x: ${rawX}, y: ${rawY}, offsetY: ${offsetY}, height: ${this.height}`);

        
                fallen.push({
                    type: type,
                    angle: leafangle,
                    x: constX,
                    y: constY
                });
            }
        
            return fallen;
        }
        

        drawPeaceLeaves() {
            
            let fallleafImg1, fallleafImg2, fallleafImg3;
            let p = this.peaceIndex;
            
                    if (p < 1) {
                        fallleafImg1 = fallleaf2;
                        fallleafImg2 = fallleaf2;
                        fallleafImg3 = fallleaf1;
                    } else if (p < 1.5) {
                        fallleafImg1 = fallleaf2;
                        fallleafImg2 = fallleaf1;
                        fallleafImg3 = fallleaf1;
                    }else if (p < 2) {
                        fallleafImg1 = fallleaf1;
                        fallleafImg2 = fallleaf1;
                        fallleafImg3 = fallleaf3;
                    }else if (p < 3) {
                        fallleafImg1 = fallleaf3;
                        fallleafImg2 = fallleaf3;
                        fallleafImg3 = fallleaf3;
                    }else {
                        fallleafImg1 = fallleaf1;
                        fallleafImg2 = fallleaf1;
                        fallleafImg3 = leaf1;
                    }

                    //console.log("fallenLeaves:", this.fallenLeaves);
            
            for (let leaf of this.fallenLeaves) {
                let img;
                if (leaf.type === 'fallleaf1') img = fallleafImg1;
                else if (leaf.type === 'fallleaf2') img = fallleafImg2;
                else if (leaf.type === 'fallleaf3') img = fallleafImg3;
                
                //console.log(`Drawing leaf at (${leaf.x}, ${leaf.y}) with type ${leaf.type}`);

                push();
                imageMode(CENTER);
                translate(leaf.x, leaf.y);
                rotate(leaf.angle);
                
                image(img, 0, 0, 20, 20); // use consistent size
                

                fill(255, 0, 0, 100);
                noStroke();
                //circle(leaf.x, leaf.y, 100);
                pop();
                }
            }
        
        


        draw() {
            this.drawPeaceLeaves();
            push();
            translate(this.x, this.y);
            stroke(this.sex === "1" ? color(80, 50, 20) : color(120, 80, 60));
            this.drawBranches(this.branchData);
            pop();
    
            this.tooltip.isVisible = this.tooltip.hoverCheck();
            this.tooltip.draw();
            
        }
}


























let button1;

// Functions

    function preload() {
        weightTable = loadTable("wtage.csv", "csv", "header");
        heightTable = loadTable("statage.csv", "csv", "header");
        literacyTable = loadTable("literacy2.csv", "csv", "header");
        peaceTable = loadTable("peace2.csv", "csv", "header");

        leaf0 = loadImage("leaf0.png");
        leaf1 = loadImage("leaf1.png");
        leaf2 = loadImage("leaf2.png");
        leaf3 = loadImage("leaf3.png");
        leaf4 = loadImage("leaf4.png");

        flower1 = loadImage("flower1.png");

        fallleaf1 = loadImage("fallenleaf1.png", () => {
            console.log("fallleaf1 loaded");
          }, () => {
            console.error("fallleaf1 failed to load");
          });

        fallleaf2 = loadImage("fallenleaf2.png");
        fallleaf3 = loadImage("fallenleaf3.png");
    }



    
function setup(){
        createCanvas(windowWidth, windowHeight);
        
        // Generate 1st trees
        generateTrees();
        //noLoop();

    }

    

    

function draw(){
    background(193, 242, 245);
    frameRate(10); 
    let timeSinceMove = millis() - lastMouseMoveTime;
        let motionAmount = map(constrain(timeSinceMove, 0, 3000), 0, 3000, 1, 0); // 1 → 0 over 3 seconds
        if (motionAmount <= 0.01) {
    mouseMotionActive = false;
        }

    
    //Grass
         rectMode(CORNER);
         fill(40, 128, 60);
         noStroke();
         rect(0, windowHeight-100, windowWidth, windowHeight);

         button1 = new Button(windowWidth/2, 90, 175, 40, "See New Trees", refreshPage);

         //image(fallleaf2, 0, 0, 50, 50);

    for (let tree of trees) {
            tree.draw();
            //tree.update();
        }

        for (let tree of trees) {
            tree.tooltip.draw();
        }
    

    
        button1.draw();




    //Title
        rectMode(CENTER);
        fill(141, 165, 199);
        rect(windowWidth/2, 40, 300, 50, 10);
        textSize(32);
        textAlign(CENTER, BOTTOM);
        fill(0);
        textSize(20);
        text("Hover Over Trees to See Data", windowWidth/2, 50);  

    }




// Tree
function generateTrees(){
    countryData = [];
    
    // Load literacy data
     for (let i = 0; i < literacyTable.getRowCount(); i++) {
        let literacyRow = literacyTable.getRow(i);
        let countryName = literacyRow.get("Country").trim();
        let literacyRate = parseFloat(literacyRow.get("Literacy Rate"));
    
        let peaceRow = peaceTable.findRow(countryName, "country_name");
            if (peaceRow) {
                let peaceIndex = parseFloat(peaceRow.get("2008"));
                if (!isNaN(literacyRate) && !isNaN(peaceIndex)) {
                    countryData.push({
                    country: countryName,
                    literacy: literacyRate,
                    peace: peaceIndex
                });
                //console.log(`Added to countryData: ${countryName}, Literacy: ${literacyRate}, Peace Index: ${peaceIndex}`);
            }else {
                //console.warn(`Peace data not found for: ${countryName}`);
            }
            
        }
    }

    

    // Filter male or female data so equal number of each
        let maleRows = weightTable.rows.filter(row => row.get("Sex").trim() === "1");
        let femaleRows = weightTable.rows.filter(row => row.get("Sex").trim() === "2");
        let sampleSize = 3;

        // Tree Placement
        for (let i = 0; i < sampleSize; i++) {
            let segmentWidth = windowWidth / sampleSize;
            let x = i * segmentWidth + random(segmentWidth * 0.1, segmentWidth * 0.8); // random within the segment

            let offsetFactor;
                if (random() < 0.5) {
                    offsetFactor = random(-0.8, -0.3);
                } else {
                    offsetFactor = random(0.3, 0.8);
                }
            
        //Picking a random number betweenn 0 and the array length on rows where sex = 2, and rounding it to an integer
            let maleRow = maleRows[floor(random(maleRows.length))];
            let femaleRow = femaleRows[floor(random(femaleRows.length))]; 
            

        // Call function to draw both
            handleTreeRow(maleRow, x);
            handleTreeRow(femaleRow, x + segmentWidth*offsetFactor);
        }

}    

function handleTreeRow(row, x) {
    let sex = row.get("Sex").trim();
    let age = parseFloat(row.get("Agemos"));
    let weight = parseFloat(row.get("P50"));
    let randomCountry = random(countryData);

    if (!countryData || countryData.length === 0) {
        console.error("countryData is empty or not loaded");
        return;
    }

   
    if (!randomCountry || randomCountry.literacy === undefined || randomCountry.peace === undefined) {
        console.warn("randomCountry is invalid:", randomCountry);
        return;
    }



    let literacyRate = randomCountry.literacy;
    let peaceIndex = randomCountry.peace;

    let matchingHeight = heightTable.findRow(row.get("Agemos"), "Agemos");
    if (!matchingHeight) return;

    let childHeight = parseFloat(matchingHeight.get("P50"));
    let y = random(windowHeight, windowHeight - 75); // Bottom

    if (!isNaN(age) && !isNaN(weight) && !isNaN(childHeight)) {
        trees.push(new Tree(x, y, age, weight, childHeight, sex, literacyRate, randomCountry.country, peaceIndex));
    }
}



//Other
function mouseMoved() {
    redraw();

    lastMouseMoveTime = millis();
    mouseMotionActive = true;
}

function mousePressed(){
    button1.clicked();
}

function refreshPage() {
    location.reload();
  }