const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box,ball1,ball2,ground1,fan1,rope1;
var btn1,btn2
var angle = 60;

function setup() {
    createCanvas(730,750);

    engine = Engine.create();
    world = engine.world

    /*btn1 = createImg('up.png');
    btn1.position(680,30);
    btn1.size(50,50);
    btn1.mouseClicked(vForceBo)

    btn2 = createImg('up.png');
    btn2.position(10,30);
    btn2.size(50,50);
    btn2.mouseClicked(vForceBa)*/

    var box_options = {
      isStatic: false,
      restitution: 0.5,
      frictionAir: 0.01,
      density: 1.0,
      friction: 0.3
    }

   
    
    

    

    /*box = Bodies.rectangle(300,100,100,100,box_options);
    World.add(world,box);*/

    
    
    ground1 = new Ground(365,749,730,5);
    ground2 = new Ground(365,1,730,5);
    ground3 = new Ground(1,375,5,750);
    ground4 = new Ground(729,375,5,750);

    ball1 = new Ball(365,10,10,'red')
    ball2 = new Ball(365,10,10,'green')
    ball3 = new Ball(365,10,20,'blue')
    ball4 = new Ball(365,10,20,'yellow')
    ball5 = new Ball(365,10,30,'purple')
    ball6 = new Ball(365,10,30,'brown')
    ball7 = new Ball(365,10,40,'white')
    ball8 = new Ball(365,10,10,'red')
    ball9 = new Ball(365,10,10,'green')
    ball10 = new Ball(365,10,20,'blue')
    ball11 = new Ball(365,10,20,'yellow')
    ball12 = new Ball(365,10,30,'purple')
    ball13 = new Ball(365,10,30,'brown')
    ball14 = new Ball(365,10,40,'white')

    fan1 = new Fan(365,375,300,20);
    fan2 = new Fan(165,600,100,20);
    fan3 = new Fan(565,600,100,20);
    fan4 = new Fan(165,150,100,20);
    fan5 = new Fan(565,150,100,20);

    rope1 = new Rope(ball1.body,ball2.body);
}

function draw(){
  background("black");

  Engine.update(engine);

  rectMode(CENTER);

  fan1.show();
  fan2.show(); 
  fan3.show(); 
  fan4.show(); 
  fan5.show(); 

  ground1.show();
  ground2.show();
  ground3.show();
  ground4.show();

  ball1.show();
  ball2.show();
  ball3.show();
  ball4.show();
  ball5.show();
  ball6.show();
  ball7.show();
  ball8.show();
  ball9.show();
  ball10.show();
  ball11.show();
  ball12.show();
  ball13.show();
  ball14.show();

  //rope1.show();

  //rect(box.position.x,box.position.y,100,100);

  
  
  



}

function vForceBa() {
  Matter.Body.applyForce(ball7,{x:0,y:0},{x:0,y:-0.05})
}

function vForceBo() {
  Matter.Body.applyForce(box,{x:0,y:0},{x:-60.0,y:-50.0})
}