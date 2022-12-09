let x, y, a, b;
let q,w,e,r,m,n

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 10;
  y = 10;
  a = 1;
  b = 1;
  background(0);
  fill(100,0,0)
}

function draw() {
  
  q = random(1,3)
  w = random(1,3)
  e = random(0,255)
  r = random(0,255)
  m = random(38,43)
  n = random(38,43)
          
  
  if(x>200 && x<250 && y<150 && y>100) {fill(111,e,0,e)}
  if(x>100 && x<150 && y<250 && y>200) {fill(0,0,r,r)}
  if(x>300 && x<350 && y<50 && y>10) {fill(e,0,111,e)}
  if(x>351 && x<400 && y<250 && y>110) {fill(30,210,e,r)}
  if(x>50 && x<100 && y<350 && y>300) {fill(0,e,111,e)}
  if (x > width) {
    a = -q; fill(200,e,1,e)
  }
  if (x < 0) {
    a = q; fill(0,r,100,r)
  }
  if (y > height) {
    b = -w; fill(0,200,r,e)
  }
  if (y < 0) {
    b = w; fill(e,0,0,r)
  }
  //rectMode(CENTER);
  
  rect(x, y,y,x, m, n); 
  
  
  
x = x + a;
  y = y + b;
}
