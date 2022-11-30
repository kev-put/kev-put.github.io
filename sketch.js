let x, y, a, b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 2;
  y = 2;
  a = 2;
  b = 2;
  background(0);
  fill(100,0,0)
}

function draw() {
  if(x>200 && x<250 && y<150 && y>100) {fill(111,50,0)}
  if(x>100 && x<150 && y<250 && y>200) {fill(0,0,255)}
  if(x>300 && x<350 && y<50 && y>10) {fill(111,0,111)}
  if(x>351 && x<400 && y<250 && y>110) {fill(30,210,111)}
  if(x>50 && x<100 && y<350 && y>300) {fill(0,110,111)}
  if (x > width) {
    a = -1.2; fill(200,200,1)
  }
  if (x < 0) {
    a = 1.7; fill(0,0,100)
  }
  if (y > height) {
    b = -1.4; fill(0,200,0)
  }
  if (y < 0) {
    b = 3.8; fill(100,0,0)
  }
  rectMode(CENTER);
  
  rect(x, y, 40, 40);
  x = x + a;
  y = y + b;
}
