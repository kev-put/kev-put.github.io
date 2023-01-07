let slider;
let r = 0;
let r2 = 0;
let x1 = 0;

let y1 = 0;

let z1 = 0;



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // slider =createSlider(-255,255,0)
  // slider.position(10,height-50)
  // slider.size(150)
}

function draw() {
  camera(0, 0, height / 2 / tan(PI / 20), 0, 0, 0, 0, 1, 0);
  // let val = slider.value()
  //  let m =map(val,-255,255,-.03,.03)
 

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
  clear();
  rotateX(r2);
  rotateY(r);
  //noLoop()
  background(0);
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
        //fill(random(100,255),0,random(100,255))
        fill(0, 255, 255);
        translate(x, y, z), torus(10, 4), pop();
      }
    }
  }
  console.log(r,r2,x1,y1,z1)
}
