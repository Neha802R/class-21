function isTouching(object1 , object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2){
  return true;

 } else {
 return false;
   
 }
}
function bounceOFF(object2 , object3){
  if (object2.x - object3.x < object3.width/2 + object2.width/2
    && object3.x - object2.x < object3.width/2 + object2.width/2) {
  object2.velocityX = object2.velocityX * (-1);
  object3.velocityX = object3.velocityX * (-1);
}
if (object2.y - object3.y < object3.height/2 + object2.height/2
  && object3.y - object2.y < object3.height/2 + object2.height/2){
  object2.velocityY = object2.velocityY * (-1);
  object3.velocityY = object3.velocityY * (-1);
}
}