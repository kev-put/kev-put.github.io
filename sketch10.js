let i


function preload() {
  
  soundFormats('mp3')
                  thistles=loadSound('whistle.mp3');
  thistle=loadSound('thistle.mp3');
  pistils=loadSound('pistils.mp3');
                  }





function setup() {
  let hog=createCanvas(400, 400)
    background(0);
  //whistle2=createAudio('whistle2.mp3')
  
//function hog() {ellipse (100,100,50,50)}
  //let ell=ellipse(100,100,50,50)
  // hog.mousePressed(playa)
   i=0
  // hog.mousePressed(playa2)
}
// function playa() {
//   whistle.play()
// }
// function playa2(){
//   whistle2.play()
// }

function draw() {
  i++
  if(i<100){thistles.play()}
  if(i> 250 && i < 350){pistils.play()}
   if(i>50 && i < 200){thistle.play()}
  if(i>400){i=0}
  
  
}