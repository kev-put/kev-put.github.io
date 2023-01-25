let slider;
let r = 0;
let r2 = 0;
let x1 = 0;

let y1 = 0;

let z1 = 0;
let font1
function preload(){
  font1=loadFont('RobotoSlab-VariableFont_wght.ttf')
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // slider =createSlider(-255,255,0)
  // slider.position(10,height-50)
  // slider.size(150)
  let i = 0
  textFont(font1)
  textSize(100)
  textAlign(CENTER)
}

function draw() {
  background(0)
  push()
  
  translate(-width,-height)
  if(frameCount<200){
    fill(255,0,100)
  text('click screen for key',30,-150)}
  if(mouseIsPressed){
    text('ARROW KEYS for position',30,0),
      text('Q and E for axis one',30,150);
  text('A and D for axis two',30,300);
  text('Z and C for axis three',30,450)
  }
  
  fill(255,0,0)
  pop()
  
  
  camera(0, 0, height / 2 / tan(PI / 20), 0, 0, 0, 0, 1, 0);
  
  // let val = slider.value()
  //  let m =map(val,-255,255,-.03,.03)
//  let i = 0
// i++
// if(i>255){i=0}
  if (keyIsDown(RIGHT_ARROW)) {
    r = r + 0.09;
  }
  if (keyIsDown(LEFT_ARROW)) {
    r = r - 0.09;
  }
  if (keyIsDown(UP_ARROW)) {
    r2 = r2 - 0.09;
  }
  if (keyIsDown(DOWN_ARROW)) {
    r2 = r2 + 0.09;
  }

  if (keyIsDown(65)) {
    x1=x1-.0002
  }
  if (keyIsDown(68)) {
    x1=x1+.0002
  }
  if (keyIsDown(81)) {
    y1=y1-.0002
  }
  if (keyIsDown(69)) {
    y1=y1+.0002
    
  }
  if (keyIsDown(90)) {
    z1=z1-.0002
  }
  if (keyIsDown(67)) {
    z1=z1+.0002
  }
  //clear();
  rotateX(r2);
  rotateY(r);
  //noLoop()
  ;
  //translate(-width / 2, -height / 2, 0)
  //stroke(0,255,0)
  

  strokeWeight(0.1);
  for (var x = 0; x < 300; x = x + 50) {
    for (var y = 0; y < 1000; y = y + 50) {
      
      for (var z = 0; z > -600; z = z - 50) {
        rotateY(y1)
        rotateX(x1)
        
        rotateZ(z1);

        push();
        fill(200,200,0)
        //fill(0, 255, 255);
        translate(x, y, z), torus(10, 4), pop();
        
  
  

  
      }
    }
  }
  
 
  
 
}
