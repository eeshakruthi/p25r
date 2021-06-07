const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

paper = new Paper(200,450,70);
floor = new Ground(400,680,800,40);
leftBin=new Bin(550,620,20,100);
bottomBin=new Bin(610,660,100,20);
rightBin=new Bin(670,620,20,100);
    
	Engine.run(engine);
	
}


function draw() {
rectMode(CENTER);

background(225);

Engine.update(engine);

paper.display();
floor.display();

bottomBin.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:130,y:-145});	
	}
};

