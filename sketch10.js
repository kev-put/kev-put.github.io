
let button1,button2,button3
function preload() {
  
  soundFormats('mp3')
                  thistles=loadSound('whistle.mp3');

                  }





function setup() {
createCanvas(windowWidth, windowHeight)
    background(0);
  frameRate(6)
  button1=createButton('A')
  button1.position(100,300)
  button2=createButton('S')
  button2.position(200,300)
  button3 = createButton('D')
  button3.position(300,300)
   button1.mousePressed(play1)
  button2.mousePressed(play2)
  button3.mousePressed(play3)
  function play3(){thistles.rate(.2),thistles.play()}
  function play1(){thistles.rate(.5),thistles.play()}
function play2(){thistles.rate(.3),thistles.play()}
  button1.size(70,20)
  button2.size(70,20)
  button3.size(70,20)
 
}

function draw() {
  

  fill(0,200,0)
  textSize(60)
  text('soundtest',100,100)
  fill(200,100,0)
  text('use keys "a" "s" "d"',100,200)
  

  if(keyIsDown(65)) {thistles.rate(.5),thistles.play()}
  
  if(keyIsDown(83)) {thistles.rate(.3),thistles.play()} 
  if(keyIsDown(68)){thistles.rate(.2),thistles.play()}
 
}
