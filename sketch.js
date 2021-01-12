const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var ball;
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  };

  ground = Bodies.rectangle(400, 380, 800, 20, options);
  World.add(world, ground);

  console.log(ground);
  console.log(ground.position);
  
  var ball_options={
    restitution:2
  }
  ball=Bodies.circle(400,200,20,ball_options)
  World.add(world,ball)


var ball_options_1={
  restitution:1
}
ball2=Bodies.circle(200,200,20,ball_options_1)
World.add(world,ball2)
}

function draw() {
  background('lightyellow');  
  Engine.update(engine);

  fill('brown');
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,20);

  fill('teal');
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y,40,40);
 
  fill('aqua');
   
  ellipse(ball2.position.x, ball2.position.y,40,40);

 
}