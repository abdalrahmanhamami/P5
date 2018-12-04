function setup() {
  // create canvas
  createCanvas(800,500);
  // set background color
  
}

function draw() {
  background('#31bc33');
 
// for(x = 0; x < 800; x = x + 80){
//     for(y = 0; y < 300; y = y + 50){

//     }
// point(x,y);
// }  
for(x = 0; x < 800; x = x + 80){
   
    point(x,5/8*x);
}  
}
