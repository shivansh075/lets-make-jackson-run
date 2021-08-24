var path , pathing;
var runner , running;
var bomb , bombing;
var coin , coining;
var energy , energydrink;
var paddle1 , paddle2;

function preload(){
  //pre-load images
  pathing = loadImage("path.png");
  running = loadAnimation("Runner-1.png" , "Runner-2.png");
  bombing = loadImage("bomb.png");
  coining = loadImage("coin.png");
  energydrink = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200);
  path.addImage(pathing);
  path.scale=1.2;

  runner = createSprite(200,300);
  runner.addAnimation("ruining" , running);
  runner.scale=0.1;

  bomb = createSprite(200,100);
  bomb.addImage(bombing);
  bomb.scale=0.1;

  coin = createSprite(100,100);
  coin.addImage(coining);
  coin.scale=0.3;

  energy =  createSprite(300,100);
  energy.addImage(energydrink);
  energy.scale=0.1;
  
  paddle1 = createSprite(30,200,10,400);
  paddle2 = createSprite(380,200,10,400);
}

function draw() {
  background("black");

  path.velocityY=4;
  if(path.y > 400){
    path.y = height/2;
  }

  paddle1.visible=false;
  paddle2.visible=false;

  runner.x=mouseX;
  runner.collide(paddle1);
  runner.collide(paddle2);
 
  

drawSprites();
}
