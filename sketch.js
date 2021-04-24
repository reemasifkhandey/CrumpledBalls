
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,390,1200,20);
	ball=new Ball(40,300,15);
  box1=new Box(800,370,200,20);
  box2=new Box(700,330,20,100);
  box3=new Box(900,330,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:45, y:-40});
  }
}

