var boy;
var girl;
var villain;
var king;
var queen;
var ground;
var gameState = 0;
var game,form;
var backGround;

function preload(){
    boyimage = loadImage("images/anime boy.png");
    girlimage = loadImage("images/anime girl.png");
    backGroundimage = loadImage("images/anime kingdom.jpg");

}
function setup(){
    createCanvas(windowWidth,windowHeight);
    game = new Game();
    game.start()
}

function draw(){
background(255);
if(gameState == 1){
    clear();
    game.play();
}
}


