var wall , thickness
var bullet, speed, weight

var damage  
bullet.velocityX = speed
function setup() {
  createCanvas(800,400);
  thickness = math.round(random(22,83))
  wall = createSprite(1200,200,thickness,height/2)
  
  speed = math.round(random(223,321))
  weight = math.round(random(30,52))

 damage = 0.5*weight*speed*speed/thickness*thickness*thickness
  bullet.collide(wall)
}

function draw() {
  background(255,255,255);  
  
  if (weight=32, speed = 223,  thickness=70,  damage=3.68)
  {
    wall.shapeColor 

  }
  if (weight = 32, speed = 223,thickness = 30, damage = 12.43)
  {
    wall.shapeColor 
  }

  drawSprites();
}