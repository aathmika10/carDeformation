var car,wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(40,75);
  weight=random(1200,3500);
car=createSprite(50,200,20,20);
car.velocityX=speed;
wall=createSprite(1500,200,60,height/2);
wall.shapeColor(80,80,80);

  
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deforamation=0.5*weight*speed*speed/22500
    if(deformation<180){
      car.shapeColour=(255,0,0);
    }
   if(deformation>180 && deformation<80){
     car.shapeColor=(230,230,0);
   }
   if(deformation<80){
     car.shapeColor=(0,255,0);
   }
  }
  drawSprites();
}