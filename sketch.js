var bath1,bath2
var brush
var drink1,drink2
var eat1,eat2
var gym1,gym2,gym11,gym12
var iss
var move,move1
var sleep
var backgroundImg

function preload(){
  bath = loadAnimation("bath1.png","bath2.png")
  brush = loadImage("brush.png")
  drink = loadAnimation("drink1.png","drink2.png")
  eat = loadAnimation("eat1.png","eat2.png")
  gym = loadAnimation("gym1.png","gym2.png")
  backgroundImg = loadImage("iss.png")
  move = loadAnimation("move.png","move1.png")
  sleep = loadImage("sleep.png")
}

function setup() {
  createCanvas(800,400);
 
  
  createSprite(400, 200, 50, 50);
  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleep",sleep);
  astronaut.scale = 0.1

}




function draw() {
  
 

  background(backgroundImg);  
  
  drawSprites();
  textSize(15);
  fill(255,0,0)
  text("INSTRUCTION XDXDXDXDDX:",75,100)
  text("Up arrow = brushing",75,125)
  text("Down arrow = gymming",75,150)
  text("Left arrow = eating",75,175)
  text("Right arrow = bathing",75,200)
  text("MOVEMENTMENTMNXDXDXDXd",675,100)
  text("M = move to right",675,125)
  text("N = move  down",675,150)
  text("B = move to left",675,175)
  text("H = move up",675,200)
  text("Spacebar to stop",675,225)
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=300
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y=300
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Eating",eat)
    astronaut.changeAnimation("Eating")
    astronaut.y=300
    astronaut.velocityY=0
    astronaut.velocityX=0
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y=300
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("M")){
    astronaut.velocityX=5
    astronaut.velocityY=0
  }
  if(keyDown("N")){
    astronaut.velocityX=0
    astronaut.velocityY=5
  }
  if(keyDown("B")){
    astronaut.velocityX=-5
    astronaut.velocityY=0
  }
  if(keyDown("H")){
    astronaut.velocityX=0
    astronaut.velocityY=-5
  }
  if(keyDown("space")){
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
}
