function setup() {
  // create canvas
  createCanvas(800,500);
  // set background color
  
}

function draw() {
  background('#31bc33');

  line(200, 260, 200, 75);
  line(300, 260, 300, 75);
  
  
  for(i= 100;  i< 240; i = i + 20){
    line(200, i, 300, i);
  }
  
}