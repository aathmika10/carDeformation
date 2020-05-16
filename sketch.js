var car,wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,98);
  weight=random(400,1500);
car=createSprite(50,200,20,20);
car.velocityX=speed;
car.shapeColor="white";
wall=createSprite(1200,200,60,height/2);
wall.shapeColor="white";

}

function draw() {
  background(0); 
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColour="yellow";
    }
   if(deformation<180 && deformation>80){
     car.shapeColor="blue";
   }
   if(deformation<80){
     car.shapeColor="green";
   }
  }
  drawSprites();
}