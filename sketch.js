
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,dustbin1,ground1,dustbin2,dustbin3;

	


function setup() {
	createCanvas(800,700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new paper(200,449,50,50);
ground1=new ground(0,700,1900,20);
dustbin1 = new dustbin(600,680,165,10);
dustbin2= new dustbin(520,620,10,130);
dustbin3=new dustbin(675,620,10,130);
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("pink");
  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 // drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){


    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:95,y:-95});


  }
}


