const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1500,700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 
//close to hexagon stand blocks
block1= new Block(750,560,50,50);
block2= new Block(700,560,50,50);
block3= new Block(650,560,50,50);
block4= new Block(600,560,50,50);
block5= new Block(550,560,50,50);
block9= new Block(800,560,50,50);
block10= new Block(500,560,50,50);
block6= new Block(700,505,50,50);
block7= new Block(650,505,50,50);
block8= new Block(600,505,50,50);
block11= new Block(750,505,50,50);
block12= new Block(550,505,50,50);
block13= new Block(700,450,50,50);
block14= new Block(650,450,50,50);
block15= new Block(600,450,50,50);
block16= new Block(650,395,50,50);

//2nd stand blocks
block17= new Block(1200,560,50,50);
block18= new Block(1250,560,50,50);
block19= new Block(1300,560,50,50);
block20= new Block(1350,560,50,50);
block21= new Block(1150,560,50,50);
block22= new Block(1100,560,50,50);
block23= new Block(1050,560,50,50);
block24= new Block(1200,505,50,50);
block25= new Block(1250,505,50,50);
block26= new Block(1300,505,50,50);
block27= new Block(1150,505,50,50);
block28= new Block(1100,505,50,50);
block29= new Block(1200,450,50,50);
block30= new Block(1250,450,50,50);
block31= new Block(1150,450,50,50);
block32= new Block(1200,395,50,50);

//stands.
stand1 = new Stand(650,600,450,15);
stand2 = new Stand(1200,600,450,15);

polygon = new Polygon(200,550,50,50);

slingshot = new SlingShot(polygon.body,{x:200,y:300});
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  polygon.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block8.display();
  block7.display();
  block6.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();

  stand1.display();
  stand2.display();

  slingshot.display()
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}