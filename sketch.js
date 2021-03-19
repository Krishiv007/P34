const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,490,1000,20);

  hero = new Hero(200,250,50,50);

  fly = new Fly(hero.body,{x:200, y:50});
}

function draw() {
  background("blue");

  Engine.update(engine);
 
  ground.display();

  hero.display();
}

function mouseDragged(){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}