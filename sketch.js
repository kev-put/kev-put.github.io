let randoOne
let randoTwo
let randoThree
let randoFour
let randoFive
let randoSix
let randoSeven
let randoEight
let randoNine
let randoTen
let x

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  
  
}

function draw() {
  
  

  randoOne = random(5,10)
  randoTwo = random(5,10)
randoThree = random (200)
  randoFour = random(80,200)
  randoFive = random(width)
  randoSix = random(height)
  randoSeven = random(20,60)
  randoEight = random(10,90)
  randoNine = random(10,30)
  x = random(5,10)
   fill(100,randoTwo,randoThree,randoFour)
  ellipse (randoFive,randoSix, randoOne,randoTwo)
  
  strokeWeight(randoNine)
  stroke(randoThree,randoFour,randoTwo,randoSeven)
  
  

  
}
