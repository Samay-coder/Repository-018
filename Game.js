class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
     /*warrior = createSprite(displayWidth-100,displayHeight-300,25,25);
      warrior.addImage(warriorimg)
      warrior.mirrorX(-1);
      warrior.visible=false;

      wizard = createSprite(displayWidth-1000,displayHeight-300,25,25);
      wizard.addImage(wizardimg);
      wizard.scale=2
      wizard.visible=false;*/
    }
  
    restart(){
      database.ref('/').update({
        playerCount:0,
        gameState:0,
        players:null
      })
    }
  
    play(){
      form.hide();
      Player.getPlayerInfo();

      drawSprites();
      }    
  }