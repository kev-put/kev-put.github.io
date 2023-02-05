let x, y ,s,l,eye
function setup() {
  createCanvas(windowWidth, windowHeight);
  x=.5*width
  y=.5*height
  s=0
  eye=0
  l=0
  frameRate(6)
}

 function turtle(x,y,s) {
   
   //MUST DECLARE LOCATION(x,y) and SIZE(s)
   
  fill(50,255,50)
  beginShape()
 curveVertex(x-s,y)
  curveVertex(x-s,y)

  curveVertex(x-.6*s,y+.3*s)
  curveVertex(x-.2*s,y+.8*s)
  
  curveVertex(x+.2*s,y+.8*s)
  curveVertex(x+.6*s,y+.3*s)
  curveVertex(x+s,y)
  curveVertex(x+1.1*s,y-.1*s)
  curveVertex(x+s,y-.5*s)
  curveVertex(x+.5*s,y-.8*s)
  curveVertex(x,y-s)
  curveVertex(x-.5*s,y-.8*s)
  curveVertex(x-s,y-.5*s)
  curveVertex(x-1.1*s,y-.1*s)
  curveVertex(x-s,y)
  curveVertex(x-s,y)
  endShape()
  fill(200)
  noStroke()
  ellipse(x-.4*s,y-.3*s,v*3,v*2)
  ellipse(x+.4*s,y-.3*s,v*3,v*2)
  
  fill(0)
  ellipse(x-.4*s+eye,y-.3*s ,v,v)
  ellipse(x+.4*s+eye,y-.3*s ,v,v)
  
  }


function draw() {
  
  background(0);
  l++
  if (s<100) {v=0} else{v=10}
  if (l>30 && l<60) {s=s+6}
  if(s>width+260){s=0}
  //if (l>270 && l<=300) s=s-6
  //if (l<30){s=0}
  
  
  
  if (l>300) {l=0}
  if (l>=60 && l<=72){eye++}
  if(l>=130 && l<=154){eye--}
  if(l>= 200 && l<212) {eye++}
  
  for(i=0;i<=width+100;i=i+random(175,200)){ for(z=0;z<=height+100;z=z+random(175,200)){
  
  turtle(i,z,100)
  }
                           }
  
}
