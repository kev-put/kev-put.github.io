let randoOne
let randoTwo
let randoThree
let randoFour
let randoFive
let randoSix
let randoSeven
let randoEight
let randoNine

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  frameRate(5)
}

function draw() {
  

  randoOne = random(10,20)
  randoTwo = random(10,20)
randoThree = random (200)
  randoFour = random(80,200)
  randoFive = random(width)
  randoSix = random(height)
  randoSeven = random(20,80)
  randoEight = random(10,90)
  randoNine = random(10,30)
  ellipse (randoFive,randoSix, randoOne,randoTwo)
  fill(randoOne,randoTwo,randoThree,randoFour)
  strokeWeight(randoNine)
  stroke(randoThree,randoFour,randoTwo,randoSeven)
  
  

  
}