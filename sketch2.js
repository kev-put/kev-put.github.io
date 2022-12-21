let a,b,c,d,e,f,g,h;
let x,y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(.28)
}

function draw() {
  background(0);
  stroke(40)
  a= random(.8,.9)
  b=random(.1,.2)
  c=random(.4,.5)
  d=random(.2,.25)
  e=random(.3,.4)
  f=random(.45,.55)
  g=random(.6,.7)
  h=random(.7,.8)
  
  x=random(3,8)
  y=random(1,5)

  fill(50,240,240)
  beginShape()
  curveVertex(b*width,a*height)
   curveVertex(b*width,a*height)
  curveVertex(d*width,c*height)
  curveVertex(e*width,e*height)
  curveVertex(f*width,b*height)
  curveVertex(g*width,e*height)
  curveVertex(h*width,c*height)
  curveVertex(a*width,a*height)
  curveVertex(a*width,a*height)
  endShape()
    fill(80)
  ellipse(e*width+.1*width,d*height,x,y)
  ellipse(e*width+.13*width,d*height,x,y)
  
  
  
  
  
  
  
}

function mousePressed() {redraw()}
