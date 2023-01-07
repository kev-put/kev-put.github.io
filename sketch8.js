let slider
let r=0
let r2=0
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  slider =createSlider(-255,255,0)
  slider.position(10,height-50)
  slider.size(150)

}

function draw() {
  camera(0, 0, (height/2) / tan(PI/20), 0, 0, 0, 0, 1, 0)
  let val = slider.value()
  let m =map(val,-255,255,-.03,.03)
  
  
  if (keyIsDown(RIGHT_ARROW)){r=r+.03}
  if (keyIsDown(LEFT_ARROW)){r=r-.03}
  if (keyIsDown(UP_ARROW)){r2=r2-.03}
  if (keyIsDown(DOWN_ARROW)){r2=r2+.03}
  clear()
  rotateX(r2)
  rotateY(r)
  //noLoop()
  background(0);
  //translate(-width / 2, -height / 2, 0)
  //stroke(0,255,0)
  
  strokeWeight(.1)
  for(var x = 0;x<300;x=x+50) {
    for (var y = 0; y<1000;y=y+50)  {
      for(var z= 0;z>-600;z=z-50) {
         rotateY(m)
        rotateZ(m)
        rotateX(m)
        
                                   
        push()
        //fill(random(100,255),0,random(100,255))
        fill(0,255,255,)
      translate(x,y,z),
          torus(10, 4),
        
        
          pop()
      }
      }
      
    }
 
  
  }

