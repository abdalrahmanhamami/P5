// create variable to hold microphone inpute
let myMic;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // capture microphone sound
  myMic = new p5.AudioIn();
  // turn on microphone
  myMic.start();
}
function draw() {
  background(123,23,45);
  // get the audio level
  let myMicLevel = myMic.getLevel();
  // create a sketch which will be changing according to audio level
  // we multiply the level by 1000 since the values it returns are very small
  ellipse(width / 2, height / 2, myMicLevel * 1000, myMicLevel * 1000);
}