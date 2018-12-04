function setup() {
  // create canvas
  createCanvas(800, 500);
  // set background color

}
function draw() {
  background('#31bc33');
  for (x = 20; x < 800 - 20; x = x + 40) {
    for (y = 20; y < 500 - 20; y = y + 100) {
      fill(x / 4, y / 2, 10);
      ellipse(x, y, 20);
      noStroke();
     
    }
  }
  for (x = 20; x < 800 - 20; x = x + 40){
    ellipse(x, 220, 10);
  }
}


 
