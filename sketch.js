const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;


	ball1 = new Ball(520,300,20)
	ball2 = new Ball(560,300,20)
	ball3 = new Ball(600,300,20)
	ball4 = new Ball(640,300,20)
	ball5 = new Ball(680,300,20)

	constraint1 = new Sling(ball1.body,{x:520,y:100});
	constraint2 = new Sling(ball2.body,{x:560,y:100});
	constraint3 = new Sling(ball3.body,{x:600,y:100});
	constraint4 = new Sling(ball4.body,{x:640,y:100});
	constraint5 = new Sling(ball5.body,{x:680,y:100});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('black');


  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();

  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-85,y:-85});
	}
}




