
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var button1;
var angle = 60;
var ground,fan1;
var ball;




function setup() {
  createCanvas(600,600);

  button1 = createImg("up.png");
  button1.position(20,30);
  button1.size(50,50);
  button1.mouseClicked(vForce);


  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  fan1 = Bodies.rectangle(200,300,100,20,ground_options);
  World.add(world,fan1);

  //fan1 = new Fan(200,300,100,20,"green");
  //fan2 = new Fan(200,200,80,20,"purple");

  ball = Bodies.circle(50,10,20,ball_options);
  World.add(world,ball);
  
  ground = Bodies.rectangle(300,400,600,20,ground_options);
  World.add(world,ground); 
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(fan1,angle);
  push();
  translate(fan1.position.x,fan1.position.y);
  rotate(angle);
  fill("blue")
  rect(0,0,100,20);
  pop();

  angle +=0.1;  
  //fan1.display();
  //fan2.display();
 
  fill("orange");
  ellipse(ball.position.x,ball.position.y,20);

  

  fill("brown")
  rect(ground.position.x,ground.position.y,650,20);
 
console.log(ground.position.y);

  
  
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05});
}