function setup() {
  createCanvas(400, 400);
  bgColor = color(random(255), random(255), random(255));
}

function draw() {
  
  background(bgColor); 
  noStroke();

  let randomColor = color(random(255), random(255), random(255));
 fill(randomColor);
  //circle(width/2, height/2, 40);

  text('DISCO!', 50, 230);
  textSize(30);
  textFont('Impact');

  
  text('✨', mouseX, mouseY);
  textSize(100);
  

}

function mousePressed(){
  bgColor = (random(255), random(255), random(255));
}
