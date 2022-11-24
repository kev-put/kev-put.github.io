let img
function preload() {img = loadImage('steve.jpg');}


function setup() {
  createCanvas(windowWidth,windowHeight );
  image (img,0,0)
  frameRate(90)
}

function draw() {
  
  ellipse(mouseX,mouseY,30,30)
  fill(30,80,10)
  noStroke();
  
}
