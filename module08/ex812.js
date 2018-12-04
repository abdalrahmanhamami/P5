function setup() {
  // create canvas
  createCanvas(800,500);
  // set background color
  
}
var y = height/2;
var x = width/2;
var right = 5;
function draw() {
  background('#31bc33');
  ellipse(x,y,60);


  if (x <= width - 30 && right > 0) {
    x = x + right;
    
  }
  else if (x >= width - 30) {
    right = -right;
    x = x + right;
  }
  else if (x <= width - 30 && right < 0) {
    x = x + right;
  }
  else if (x <= 30) {
    right = -right;
    x = x + right;
  }
  
}