let x,y,spd,h,c,d,rOne,rTwo
function setup() {
  createCanvas(windowWidth, windowHeight);
  x=6
  y=8
  spd=7
  h=6.7
  frameRate(20)
  
  
  background(50,200,90);
  
}

function draw() {
  c=random(5,40)
  d=random(10,70)
  rOne=random(2,6)
  rTwo=random(1,9)
  fill(150,20,40,30)
  noStroke()
  ellipse(x,y,c,d)
  if (x<0){ spd =8.2/rOne}
  if(x>width){spd = -7.2/rTwo}
  if(y<0){h=9.7/rOne}
  if (y>height){h=-9.7/rTwo}
  x=x+spd
  y=y+h
}