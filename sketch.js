var fixedRect,movingRect;
var mario,trex,monkey,infinite
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
mario=createSprite(100,300,70,40);
trex=createSprite(300,400,60,50)
monkey=createSprite(500,370,30,40)
infinite=createSprite(600,290,49,50)
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(touching(monkey,movingRect)){
    monkey.shapeColor="blue"
    movingRect.shapeColor="blue"
  }
  else{
    monkey.shapeColor="green"
    movingRect.shapeColor="green"
  }
//touching(trex,movingRect)
  drawSprites();
}










