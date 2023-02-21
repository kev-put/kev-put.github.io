let r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,z,x
let x1,x2,x3,x4,x5,x6,x7,x8,x9,v,e1,e2
function setup() {
  createCanvas(windowWidth,windowHeight);
  r1=random(10)
    r2=random(10)
  r3=random(10)
  r4=random(10)
  r5=random(10)
  r6=random(10)
  r7=random(10)
  r8=random(10)
  r9=random(10)
  r10=random(10)
  r11=random(10)
  r12=random(10)
  r13=random(10)
  r14=random(10)
  r15=random(10)
  z=1
  v=5
  e1=random(width)
  e2=random(height)
  
  frameRate(14)

}

function draw() {
  x1=random(height*.1)
  x2=random(height*.1)
  x3=random(height*.1)
  x4=random(height*.1)
  x5=random(height*.1)
  x6=random(height*.1)
  x7=random(height*.1)
  x8=random(height*.1)
  x9=random(height*.1)
  noLoop()
  background(0,0,0);
  noFill()
  stroke(0,0,255)
  strokeWeight(1)
  
  
  
  for(z=-100;z<=width+100;z=z+4){
    let d= dist(e1,e2,z,e1)
    if (d<50) {z=z+10}
    //ellipseMode(CENTER)
   // ellipse(e1,e2,100,200)
  beginShape()
 curveVertex(z+r12+30+x1,-30)
 curveVertex(z+r12+30+x1,-30)
  curveVertex(z+r1+30+x2,height*.01+random(v))
  curveVertex(z+r4-20+x2,height*.2+random(v))
  curveVertex(z+r5-70,height*.3+random(v))
  curveVertex(z+r6,height*.4+random(v))
  curveVertex(z+r7+50,height*.5+random(v))
  curveVertex(z+r8+10,height*.6+random(v))
  curveVertex(z+r9,height*.7+random(v))
  curveVertex(z+r10-39,height*.8+random(v))
  curveVertex(z+r11,height*.9+random(v))
  
  curveVertex(z+r11-70,height+random(v))
   curveVertex(z+r11-70,height+random(v))
    
   
  
  endShape()
     
    
  
  }

  
}