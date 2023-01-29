function preload() {
  
  soundFormats('mp3')
                  thistles=loadSound('whistle.mp3');

                  }





function setup() {
createCanvas(windowWidth, windowHeight)
    background(0);
  frameRate(6)
}
function draw() {
  fill(0,200,0)
  textSize(60)
  text('soundtest',100,100)
  fill(200,100,0)
  text('use keys "a" "s" "d"',100,200)
  

  if(keyIsDown(65)) {thistles.play()}
  
  if(keyIsDown(83)) {thistles.play(),thistles.rate(.3)} else{
    thistles.rate(.5)
  }
  if(keyIsDown(68)){thistles.rate(.2),thistles.play()}
 
}
