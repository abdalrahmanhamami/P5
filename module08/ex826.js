function setup() {
    // create canvas
    createCanvas(800,500);
    }
  function draw () {
    // set background color  
    background('orange');
     for (dim = 400; dim>10; dim = dim-10 ) {
      rectMode(CENTER);
      rect(width/2,height/2,dim,dim);
    }
    
  }