
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;
paper1 = new paper(200,200,20);


	
	Engine.run(engine);
	


	
	ground = Bodies.rectangle(300, 650, width, 20 , {isStatic:true} );
	World.add(world, ground);
	
	
	pbox_side_1 = createSprite(551,600,20,100,{isStatic:true})
	pbox_side_2 = createSprite(782,600,20,100,{isStatic:true})
	
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
 
  paper1.display()
  rect(ground.position.x,ground.position.y,width,20)
  
 
 
    drawSprites();
}
function keyPressed(){

if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-15})

}
}

