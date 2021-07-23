
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
var sling1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	sling1= new SlingShot(paper1.body,{x:400,y:350});
	//Create a Ground
	
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});


	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
	paperObject.display();
	groundObject.display();
	dustbinObj.display();
	sling1.display();
   
 
}


function mouseDragged(){

	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
  }

function mouseReleased(){
  
	sling1.fly();
  }
  /*
  function keyPressed(){
   if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper1.body, paper1.body.position, {x:15, y:-15});
   }
  }*/





