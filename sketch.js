const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var thunder1, thunder2, thunder3, thunder4;
var engine, world, ran;
var drop = [];
var maximumdrops = 100;
var thunderCreatedFame = 0;

function preload()
{
thunder1 = loadImage("thunderbolt/1.png");
thunder2 = loadImage("thunderbolt/2.png");
thunder3 = loadImage("thunderbolt/3.png");
thunder4 = loadImage("thunderbolt/4.png");
}

function setup() {
	createCanvas(400,700);
  engine = Engine.create();
  world = engine.world;

  umbrella = new Umbrella(200,500);
  if(frameCount%150===0){
  for(var i = 0; i<maximumdrops; i++){
    drop.push(new Drop(random(0,400)), random(0,400));
  }
  }

}

function draw() {
  Engine.update(engine);
  background(0);
  ran = Math.round(random(1,4));
  if(frameCount%80===0){
    thunderCreatedFame = frameCount;
    thunder = CreateSprite(random(10,370),random(10,30),10,10);
    switch(ran){
      case 1 : thunder.addImage(thunder1);
      break;
      case 2 : thunder.addImage(thunder2);
      break;
      case 3 : thunder.addImage(thunder3);
      break;
      case 4 : thunder.addImage(thunder4);
      break;
      default : break;
    }
    thunder.scale = random(0.3,0.6);
  }
  if(thunderCreatedFame+10===frameCount && thunder){
    thunder.destroy();
  }
  umbrella.display();
  for(var i = 0; i<maximumdrops; i++){
    drop[i].showDrop();
    drop[i].update();
  } 
  drawSprites();
 
}



