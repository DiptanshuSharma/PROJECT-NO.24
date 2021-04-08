const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var box1;
var box2;
var box3;
var box4;
var box5;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(330,350,30);
    box1 = new Box(300,100,70,70);
    box2 = new Box(600,500,80,40);
    box3 = new Box(470,320,60,90);
    box4 = new Box(650,530,100,50);
    box5 = new Box(480,300,10,100);
    

   
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    



    plane.display();
    hammer.display();
    rubber.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
   
    
 
}