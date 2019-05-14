let bg
let y = 0
let particles = []
let seconds
let elevatorUp, elevatorOpen, elevatorClose

function preload() {
  roboto = loadFont('assets/fonts/RobotoMono.ttf')

  soundFormats('mp3', 'ogg')
  elevatorUp = loadSound('assets/sounds/elevator-up.mp3')
  elevatorOpen = loadSound('assets/sounds/elevator-open.mp3')
  elevatorClose = loadSound('assets/sounds/elevator-close.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  textAlign(CENTER, CENTER)
  textFont(roboto)
  textSize(24)
  bg = loadImage('assets/images/moonwalk.jpg')

  colors = {
    primary: color('#C0FFEE'),
    secondary: color('#FFCCC0'),
    background: color('#16161D'),
  }

  previousSeconds = second()

  elevatorUp.setVolume(3)
  elevatorOpen.setVolume(3)
  elevatorClose.setVolume(3)
}

function draw() {
  background(bg);

  stroke(226, 204, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
    y = 0;
  }
}

function keyPressed() {
  console.log(key, "is pressed");
  console.log(keyCode, "is pressed");

  switch(key) {
    //== Scenes
    case '1':
      elevatorUp.play()
      break

    case '2':
      elevatorOpen.play()
      break

    case '3':
      elevatorClose.play()
      break

  }
}
