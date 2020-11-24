// alias for the original name - namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

// our engine and world
var engine, world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world // we create our world using property of engine world

  var ground_options = {
      isStatic: true
  }

  ground = Bodies.rectangle(200,390,200,20,ground_options); 
  World.add(world,ground);

  var ball_options = {
    restitution: 1.0
}

  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
  console.log(ground);
  console.log(ball);

  //console.log(object.type);
 //console.log(object.position.x);
  //console.log(object.position.y);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  //background(255,255,255);  
  background(125,255,215); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  //drawSprites();
}