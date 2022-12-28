let x,spd,y,spd2,r
function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0)
  x=.9
  spd=1.3
  y=.8
  spd2=1.3
  r=random(20,50)
}

function draw() {
;
  x=x+spd*random(5)
  y=y+spd2*random(5)
  if (x>width || x<0)  {
    spd=spd*-1
                       }
  if (y>height || y<0) {
    spd2=spd2*-1
  }
  //rectMode(CENTER)
  fill(random(100,200),random(100,200),0)
  triangle(x,y,x+random(30,40),y+random(30,40),x+random(70,95),y+random(70,95))
}
