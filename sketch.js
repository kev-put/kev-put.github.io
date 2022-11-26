let randoOne
let randoTwo
let randoThree
let randoFour
let randoFive
let randoSix
let randoSeven
let randoEight
let = randoNine

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255)
}

function draw() {
  

  randoOne = random(0,40)
  randoTwo = random(0,40)
randoThree = random (200)
  randoFour = random(80,200)
  randoFive = random(width)
  randoSix = random(height)
  randoSeven = random(20,80)
  randoEight = random(10,90)
  randoNine = random(10,30)
  rect (randoFive,randoSix, randoSeven,randoEight)
  fill(randoOne,randoTwo,randoThree,randoFour)
  strokeWeight(randoNine)
  stroke(randoThree,randoOne,randoTwo,randoSeven)
  
  

  
}