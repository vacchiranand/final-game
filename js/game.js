class Game{
constructor(){

}

start(){
        form = new Screen1();
        form.display();  
    backGround = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    boy = createSprite(130,200,20,20);
    girl = createSprite(230,330,20,20);
    villian = createSprite(350,100,20,20);
    king = createSprite(150,250,20,20);
    queen = createSprite(100,300,20,20);
    arrow = createSprite(230,330,20,20);
    ground = createSprite(windowWidth/2,windowHeight-50,windowWidth,100);
}
play(){
  
   if(gameState==1){
    form.hide();  
    arrow.visible = false;
    
    backGround.velocityX = -5;
    if(backGround.x < 0){
    backGround.x = backGround.width/2;
}

    boy.velocityX = 5;
    if(keyDown("space")){
        girl.x = girl.x + 10;
     } 
   if(keyDown("up")){
       arrow.visible = true;
       arrow.velocityX = 10;
   } 
    boy.collide(ground);
    girl.collide(ground);
   }
   drawSprites();


}
end(){
    console.log("gameend");
}






}
