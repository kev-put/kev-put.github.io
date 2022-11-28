let x,y,spd,h,c,d
function setup() {
  createCanvas(windowWidth, windowHeight);
  x=1
  y=1
  spd=1
  h=3.7
  
  
  background(50,200,90);
  
}

function draw() {
  c=random(50,40)
  d=random(10,70)
  fill(150,20,40,20)
  noStroke()
  ellipse(x,y,c,d)
  if (x<0){ spd =3.2}
  if(x>width){spd = -3.2}
  if(y<0){h=3.7}
  if (y>height){h=-3.7}
  x=x+spd
  y=y+h
}