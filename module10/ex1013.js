// create a variable for the image
let chocos;
// preload image
function preload() {
  chocos = loadImage("images/chocos.jpg");
}

function setup() {
  // create canvas the same size as the image
  createCanvas(800,562);
}

function draw() {
  // show the 'initial image
  chocos.loadPixels();
  // go through each row
  for (let y = 0; y < height; y++) {
    // and each column
    for(let x = 0; x < width; x++) {
      // go through all pixels of image, R, G, B, and A
      let index = (x + y * width) * 4;
      // play with rgb values
        chocos.pixels[index] = mouseY; // red
        chocos.pixels[index + 1] = random(0, 55); // blue
        chocos.pixels[index + 2] = random(55);
      }
    }
    chocos.updatePixels();
    // display manipulated image
  image(chocos, 0, 0);
}