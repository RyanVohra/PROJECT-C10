
var sea 
var ship_sailing
var sea_2
var ship

function preload(){

ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")


sea = loadImage("sea.png")


}

function setup(){
  createCanvas(400,400);
  sea_2 = createSprite(200,200)
  sea_2 . addImage(sea)
  
sea_2.scale = 0.2

ship = createSprite(150,200)
ship.addAnimation("ship1" , ship_sailing)
ship.scale = 0.2




}

function draw() {
  background(0);

  if(sea.x < 0){
    sea.x= sea.width/2;
   }
   sea_2.velocityX = -3



 drawSprites()


}