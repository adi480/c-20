var fixedRect,movingRect;
var fixedRect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(300, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
fixedRect1=createSprite(100,200,50,80);
fixedRect1.shapeColor="green";
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
console.log(movingRect.x)

//isTouching();
if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}else if (isTouching(movingRect,fixedRect1)){
  movingRect.shapeColor="blue";
  fixedRect1.shapeColor="blue";
}

else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";
fixedRect1.shapeColor="green";
}

  drawSprites();
}
