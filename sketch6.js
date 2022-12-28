function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  background(0);}

function draw() {
 
  //i++
  rotateY(millis()/1000)
  rotateX(millis()/10000)
  fill(0,200,50,10)
  strokeWeight(25)
  stroke('rgba(185,117,52,0.01)')
   translate(-width / 2, -height / 2, 0)
  //push()
  
  triangle(random(.3,.31)*width,random(.3,.31)*height,random(.6,.62)*width,
           random(.3,.31)*height,random(.45,.47)*width,random(.6,.62)*height)
  //pop()
  
}