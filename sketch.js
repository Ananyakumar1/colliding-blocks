var fR, mR

function setup() {
  createCanvas(800,400);
  fR = createSprite(400, 200, 80, 50);
  fR.shapeColor= "green";
  mR = createSprite(200, 200, 50, 50);
  mR.shapeColor= "green";
  fR.velocityX = 0;
  fR.velocityY = -5;
  mR.velocityX = 0;
  mR.velocityY = 5;
}

function draw() {
  background(255,255,255);  
  mR.x = mouseX;
  mR.y = mouseY;
  console.log(mR.x-fR.x);
  if(mR.x-fR.x < mR.width/2+fR.width/2 && fR.x-mR.x < fR.width/2+mR.width/2){
     
     mR.velocityX = mR.velocityX*(-1);
     fR.velocityX = fR.velocityX*(-1);
     
  }
  
  if(mR.y-fR.y < mR.height/2+fR.height/2 && fR.y-mR.y < fR.height/2+mR.height/2 ){

     mR.velocityY  = mR.velocityY*(-1);
     fR.velocityY  = fR.velocityY*(-1);

  }
  
  
  drawSprites();
}