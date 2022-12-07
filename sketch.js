let x,y,spd,z,r,c,a,s,d
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  x=10
  spd=5
  y=2.5
  z=2.3
 }

function draw() {frameRate(30);
                 r=random(4)
                if(r>0 && r<1) {a=random(200)} else if(r>1 && r<2) {a=100} 
                 else if (r>3 && r<4) {s=100} else if(r>4 && r<5) {s=200}
                 
                 
  
                 fill(a,s,0)
    ellipse(y,x,30,30)
                 
                fill(s,100,a)
                 ellipse(x,y,30,30)
    
                if(x>width || x<0) {spd=spd*-1}
                 if(y>height || y<0) {z=z*-1}
                 
                 x=x+spd
                 y=y+z
                 
}
