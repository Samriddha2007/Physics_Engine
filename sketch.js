const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object,ground,ball;

function setup() 
{
  createCanvas(800,400);
  engine = Engine.create();
  world  = engine.world;
  object = Bodies.rectangle(200,200,50,50);
  World.add(world,object);
  console.log(object);
  var options = 
  {
    isStatic:true
  }
  ground = Bodies.rectangle(400,390,800,20,options);
  World.add(world,ground);
  var options = 
  {
     restitution:0.8
  }
  ball = Bodies.circle(600,300,30,options);
  World.add(world,ball);
}

function draw() 
{
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30,30);
}