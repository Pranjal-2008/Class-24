const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300);
    box2 = new Box(240,100);
    ground = new Ground(600,height,1200,20);
    bird = new Bird (100,50);
    log1 = new Log (600,300,300,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX,mouseX + 30,mouseY -20);
    text(mouseY,mouseX + 30,mouseY );
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    log1.display();
}