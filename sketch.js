var gameState="start";
var Collide=1;
var bgState=0;
function preload() {
  arrrows=loadImage("Images/arrows.png");
  spacebar=loadImage("Images/space.png");
  onoff=loadImage("Images/off.png");
  ninja1=loadAnimation("Images/1.png","Images/2.png","Images/3.png","Images/4.png","Images/5.png","Images/6.png");
  ninja=loadAnimation("Images/stand.png");
  star=loadImage("Images/star.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   form();
   
  }

function draw() {
  if(bgState==0){
    background("white"); 
  }
else{
  background(30,30,30)
}  
  drawSprites();
  if(gameState==="play"){
    
    if(keyDown("right")){
      NinjaHattori.x=NinjaHattori.x+20;
      NinjaHattori.addAnimation("NinjaHattori",ninja1);
      NinjaHattori.changeAnimation("NinjaHattori",ninja1);
    }
    else{
      NinjaHattori.changeAnimation("Ninja",ninja);
    }
    if(keyDown("left")){
      NinjaHattori.x=NinjaHattori.x-20;
  
    }
    if(keyDown("up")&&NinjaHattori.y>212){
      NinjaHattori.velocityY=-15;
      
    } 
    if(keyDown("space")){
      background(30,30,30);
  
    } 
    NinjaHattori.velocityY=NinjaHattori.velocityY+1.5;
    NinjaHattori.collide(Block1.block);
    NinjaHattori.collide(Block2.block);
     if(NinjaHattori.isTouching(Star)){
       Block1.block.destroy();
       Block2.block.destroy();
       Bar1=createSprite(width/2,height/2-150,1000,15);
       Bar2=createSprite(width/2,height/2+50,1000,15);
       Bar3=createSprite(width/2,height/2+250,1000,15);
       Bar1.shapeColor=color(30,30,30);
       Bar2.shapeColor=color(225,225,225);
       Bar3.shapeColor=color(30,30,30);
       Collide=2;
      
       
     
      
      }
      if(Collide==2){
        NinjaHattori.collide(Bar1);
        NinjaHattori.collide(Bar2);
        NinjaHattori.collide(Bar3);
      }


  }
  



}