const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , pig ,log ,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(950,350,70,70);
    box2 = new Box(710,350,70,70);
    box3 = new Box(950,260,70,70 );
    box4 = new Box(710 ,260,70,70);
    box5 = new Box(825 , 175 , 70,70);
    ground = new Ground(600,height,1200,20);
    pig = new Pig(825 , 350);
    pig2 = new Pig(825 , 260);
    log = new Log(830 , 300 , 300, PI/2 );
    log2 = new Log(830 , 210 , 300 , PI/2);
    log3 = new Log(770 , 175 , 150,PI/7);
    log4 = new Log(880, 175 , 150 , PI/-7);
    bird = new Bird(100,100 );
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    text(mouseX+","+mouseY,mouseX,mouseY);
}