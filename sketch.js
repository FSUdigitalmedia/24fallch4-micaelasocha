let x1 = 100;     // x1 position of the ball
let y1 = 0;       // y1 position of the ball
let x1Speed = 3;  // speed in X1 direction
let y1Speed = 7; // speed in Y1 direction
let d1 = 20;      // diameter of the ball

let word = '🕺'

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

  if (x1 > width || x1 < 0) {
    x1Speed = x1Speed * -1;  
  }
  x1 = x1 + x1Speed; 
  
  if (y1 > width || y1 < 0) {
    y1Speed = y1Speed * -1;  
  }
  y1 = y1 + y1Speed;
  
  text(word, x1, y1, d1);

}

function mousePressed(){
  bgColor = color(random(255), random(255), random(255));
}
