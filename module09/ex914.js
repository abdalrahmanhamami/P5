let mycolor = 'white';
function setup() {
  createCanvas(800, 500);
  background('#D66761');
}
function draw() {
    noStroke();
  // this color will change every time the mouse clikcs the red or green ellipse
  fill(mycolor);
  // if the mouse is pressed
  if (mouseIsPressed){
    // an ellipse will be drawn in the position where the mouse is pointing
    ellipse(mouseX, mouseY, 20);
  }
  fill ('red');
  ellipse (600,250,50);
  fill('#66ff66');
  ellipse (600,350,50);
  fill('#66ffd9	');
  ellipse (600,450,50);
}
// everytime the mouse is clicked
function mouseClicked(){
  // if the mouse x and y position is inside the red ellipse
  if (mouseX >=550 && mouseX <=650 && mouseY >=200 && mouseY <=300){
    //change its color to red
    mycolor = 'red';
  }
  // if the mouse x and y position is inside the green ellipse
  if (mouseX >=550 && mouseX <=650 && mouseY >=300 && mouseY <=400){
    //change its color to green
    mycolor = '#66ff66';
  }else if(mouseX >=550 && mouseX <=650 && mouseY >=400 && mouseY <=500){
    mycolor = '#66ffd9	';
  }
}
