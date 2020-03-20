var ball;
var database,position;
var playerCount=0,player,gamestate=0,form,game,allplayer;
var c1,c2,c3,c4,cars,c1img,c2img,c3img,c4img,track;
function preload()
{
 c1img=loadImage("car1.png")
 c2img=loadImage("car2.png")
 c3img=loadImage("car3.png")
 c4img=loadImage("car4.png")
 track=loadImage("track.jpg")
}
function setup(){
    createCanvas(displayWidth-20, displayHeight-150);
    database=firebase.database();
game=new Game()
game.getstate()
game.start()
   // ball = createSprite(250,250,10,10);
   // ball.shapeColor = "red";
    //var locData= database.ref("ball/position");
    //locData.on("value",readData)
}
function draw(){
    background("white");
    if(playerCount===4)
    {
        game.update(1)
    }
    if(gamestate===1)
{
    clear()
    game.play()
}
if(gamestate===2)
{
    game.end()
}
    drawSprites();
}

