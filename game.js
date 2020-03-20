class Game
{
  constructor()
  {}
  getstate(){
      database.ref('gameState').on("value",function(data){
          gamestate=data.val()
      })
  }
  update(state){
      database.ref('/').update({
          gameState:state
      })
  }
    start(){
        if(gamestate===0)
        {
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()
        }
        c1= createSprite(100,200)
        c1.addImage("c11",c1img)
        c2= createSprite(300,200)
        c2.addImage("c22",c2img)
        c3= createSprite(500,200)
        c3.addImage("c33",c3img)
        c4= createSprite(700,200)
        c4.addImage("c44",c4img)
        cars=[c1,c2,c3,c4]
    }
    play()
    {
        form.hide()
        textSize(40)
        text("The Game Is On",displayWidth/2,100)
        Player.getplayerinfo()
        player.getcarsAtEnd();
        if(allplayer!== undefined)
        {
            background("#c68767")
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0,x=200,y;
            var Display_pos=130
            for(var plr in allplayer)
            {
              index= index+1;
              x=x+300;
              y=displayHeight-allplayer[plr].distance;
              cars[index-1].x=x;
              cars[index-1].y=y;
              if(plr==="player"+player.index)
                {
                    fill("red");
                    stroke(10);
                    ellipse(x,y,60,60);
                    //cars[index-1].shapeColor="red"
                    camera.position.y=cars[index-1].y

                }
              //fill("red")
              //else
              //fill("black")
              //Display_pos+=20
              //textSize(15)
              //text(allplayer[plr].name+":"+allplayer[plr].distance,120,Display_pos)

              }
        }
        if(player.distance>=5200)
        {
            gamestate=2
            player.rank+=1
            Player.updatecarsAtEnd(player.rank)
        }

        if(keyIsDown(UP_ARROW)&& player.index!== null)
        {
          player.distance +=50
          player.update()
        }

    }
    end()
    {
        console.log(player.rank)
    }
}