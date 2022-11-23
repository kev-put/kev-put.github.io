function setup() {
  createCanvas(700, 700, WEBGL);
  background(200, 39, 99);
}

function draw() {
  rotateY(millis() / 50000);
  rotateX(millis() / 50000);

  fill(80, 60, 100, 4);
  stroke(200,30,80,230)
  strokeWeight(.1)
  torus(80, 900,4,16);
}
