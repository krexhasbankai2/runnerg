
function preload(){
  //pre-load images
Runner=loadAnimation("Runner-1.png","Runner-2.png")
pathImg=loadImage("path.png")
}


function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200)
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;

runner=createSprite(200,350)
runner.addAnimation("Runner",Runner)
runner.scale=0.05

Invleft=createSprite(0,200,1,400)
InvRight=createSprite(400,200,1,400)


}


function draw() {
  background(0)
if(path.y>400){
  path.y=height/2;
}
runner.collide(Invleft)
runner.collide(InvRight)
runner.x=mouseX
drawSprites()

}