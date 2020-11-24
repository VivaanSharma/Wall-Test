var bullet;
var wall;
var weight, speed;
var thickness;


function setup() {
  createCanvas(1200, 300);

  
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30, 52);
  bullet = createSprite(70, 150, 50, 5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  wall = createSprite(1000, 150,thickness,200);
}

function draw() {
  background(0);  
  if(wall.x-bullet.x < (bullet.width + wall.width)/2){
bullet.velocityX = 0;
var Damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
if(Damage > 10){
  wall.shapeColor = "red";
}
else if(Damage < 10 ){
  wall.shapeColor = "green";
}



  }
  drawSprites();
}