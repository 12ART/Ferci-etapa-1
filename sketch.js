

var bgStart, titleImg, startTitle;


function preload(){

  bgStart = loadImage("./assets/inicio.png");
  titleImg = loadImage("./assets/title.png")
  
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  startTitle = createSprite(width/2, 100, 200,30)
  startTitle.addImage(titleImg)

  button = createButton('COMENZAR');
  button.position(width/2, 500);
  //button.mousePressed(changeBG)
  
}

function draw() {
  
  background(bgStart);
  //mostrar la puntuación
 
  
  
  drawSprites();
}

