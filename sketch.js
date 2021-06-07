var fixedRect ,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(100, 200, 50, 50);
  movingRect.shapeColor = "red";

  obj1 = createSprite(100, 100, 50, 50);
   obj1.shapeColor = "yellow";
    obj2 = createSprite(180, 100, 50, 50);
  obj2.shapeColor = "yellow";
   obj3 = createSprite(260, 100, 50, 50);
   obj3.shapeColor = "yellow";
   obj4 = createSprite(360, 100, 50, 50);
   obj4.shapeColor = "yellow";
}

function draw() {
  background(255,255,255); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect , obj1)){
    movingRect.shapeColor = "green";
    obj1.shapeColor = "green";
  }
  else{
   movingRect.shapeColor = "red";
   obj1.shapeColor = "red";
  }
  bounceOFF(movingRect,fixedRect);
  
 
  drawSprites();
}
