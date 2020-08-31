var gameState = 0;
var playerCount;
var database;
var allPlayers;
var form,game,player;
var warrior,wizard;

function preload() {
  castle = loadImage("castle.jpeg");
  warriorimg = createImg("warrior.gif");
  wizardimg = createImg("Mage.gif");
  fireballimg = loadImage("fireball.jpeg");
  plasmaimg = loadImage("plasma.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
game= new Game();
game.getState();
game.start();
}

function draw() {
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    background(castle);
    game.play();
    warriorimg.position(displayWidth-300,displayHeight-360,25,25);
    wizardimg.position(displayWidth-1200,displayHeight-360,25,25);
    /*warrior.visible=true;
    wizard.visible=true;*/

    var rand = random(1,100)

    function keyPressed(){if (keyCode==UP_ARROW){
    var fireball=createSprite(displayWidth-1000,displayHeight-300,25,25);
    console.log("fgaksua")
    fireball.addImage(fireballimg);
    fireball.scale=0.25;
    fireball.velocityX=2;
    }
}
}

  drawSprites();
}